import { useState, useEffect, useRef } from 'react';
import { c } from 'ttag';
import randomIntFromInterval from '@proton/utils/randomIntFromInterval';
import {
    addVCardProperty,
    getSortedProperties,
    getVCardProperties,
    removeVCardProperty,
    updateVCardContact,
} from '@proton/shared/lib/contacts/properties';
import { getOtherInformationFields } from '@proton/shared/lib/helpers/contacts';
import { ContactEmail, ContactEmailModel } from '@proton/shared/lib/interfaces/contacts/Contact';
import { SimpleMap } from '@proton/shared/lib/interfaces/utils';
import { canonizeEmail } from '@proton/shared/lib/helpers/email';
import { VCardContact, VCardProperty } from '@proton/shared/lib/interfaces/contacts/VCard';
import { prepareForEdition } from '@proton/shared/lib/contacts/surgery';
import { isMultiValue } from '@proton/shared/lib/contacts/vcard';
import ContactEditProperties from './ContactEditProperties';
import { useNotifications, useLoading, useEventManager, useContactEmails, useHandler } from '../../../hooks';
import { Button, ModalProps, ModalTwo, ModalTwoContent, ModalTwoFooter, ModalTwoHeader } from '../../../components';
import ContactEditProperty from './ContactEditProperty';
import useApplyGroups from '../hooks/useApplyGroups';
import { useSaveVCardContact } from '../hooks/useSaveVCardContact';

const otherInformationFields = getOtherInformationFields().map(({ value }) => value);

export interface ContactEditProps {
    contactID?: string;
    vCardContact?: VCardContact;
    newField?: string;
}

export interface ContactEditModalProps {
    onUpgrade: () => void;
}

type Props = ContactEditProps & ContactEditModalProps & ModalProps;

const ContactEditModal = ({
    contactID,
    vCardContact: inputVCardContact = { fn: [] },
    newField,
    onUpgrade,
    ...rest
}: Props) => {
    const { createNotification } = useNotifications();
    const [loading, withLoading] = useLoading();
    const { call } = useEventManager();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [vCardContact, setVCardContact] = useState<VCardContact>(prepareForEdition(inputVCardContact));

    const nameFieldRef = useRef<HTMLInputElement>(null);
    const [contactEmails, loadingContactEmails] = useContactEmails() as [ContactEmail[], boolean, any];
    const [modelContactEmails, setModelContactEmails] = useState<SimpleMap<ContactEmailModel>>({});

    const saveVCardContact = useSaveVCardContact();
    const applyGroups = useApplyGroups();

    const title = contactID ? c('Title').t`Edit contact` : c('Title').t`Create contact`;

    const nameProperty = getSortedProperties(vCardContact, 'fn')[0] as VCardProperty<string>;
    const photoProperty = getSortedProperties(vCardContact, 'photo')[0] as VCardProperty<string>;

    const getContactEmail = (email: string) =>
        contactEmails.find(
            (contactEmail) =>
                contactEmail.ContactID === contactID && canonizeEmail(contactEmail.Email) === canonizeEmail(email)
        );

    useEffect(() => {
        if (loadingContactEmails) {
            return;
        }

        const newModelContactEmails = { ...modelContactEmails };

        const emails = vCardContact.email || [];

        emails.forEach((emailProperty) => {
            const uid = emailProperty.uid;
            const email = emailProperty.value || '';

            const existingModel = Object.values(newModelContactEmails).find(
                (contactEmail) => contactEmail?.uid === uid
            );

            if (existingModel) {
                if (existingModel.Email !== email) {
                    const oldEmail = existingModel.Email;
                    newModelContactEmails[email] = {
                        ...existingModel,
                        Email: email,
                        Name: nameProperty.value as string,
                    };
                    delete newModelContactEmails[oldEmail];
                }
                return;
            }

            const existingContactEmail = getContactEmail(email);

            if (existingContactEmail) {
                newModelContactEmails[email] = {
                    ...existingContactEmail,
                    uid,
                    changes: {},
                    Name: nameProperty.value as string,
                };
                return;
            }

            newModelContactEmails[email] = {
                uid,
                changes: {},
                Email: email,
                ContactID: contactID || '',
                LabelIDs: [],
                Name: nameProperty.value as string,
            };
        });

        setModelContactEmails(newModelContactEmails);
    }, [loadingContactEmails, vCardContact.email]);

    const isFormValid = () => {
        const nameFilled = !!nameProperty?.value;
        return nameFilled;
    };

    const handleRemove = (propertyUID: string) => {
        setVCardContact((vCardContact) => {
            return removeVCardProperty(vCardContact, propertyUID);
        });
    };

    const focusOnField = (uid: string) => {
        const elm = document.querySelector(`[data-contact-property-id="${uid}"]`) as HTMLElement;

        elm?.querySelector('input')?.focus();
    };

    const handleAdd = (inputField?: string) => () => {
        let field = inputField;

        if (!field) {
            // Get random field from other info, but not a limited one
            const properties = getVCardProperties(vCardContact);
            const filteredOtherInformationFields = otherInformationFields.filter(
                (field) => isMultiValue(field) || !properties.find((property) => property.field === field)
            );

            const index = randomIntFromInterval(0, filteredOtherInformationFields.length - 1);

            field = filteredOtherInformationFields[index];
        }

        setVCardContact((vCardContact) => {
            const { newVCardContact, newVCardProperty } = addVCardProperty(vCardContact, { field } as VCardProperty);
            setTimeout(() => focusOnField(newVCardProperty.uid));
            return newVCardContact;
        });
    };

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const saveContactGroups = useHandler(async () => {
        await Promise.all(
            Object.values(modelContactEmails).map(async (modelContactEmail) => {
                if (modelContactEmail) {
                    const contactEmail = getContactEmail(modelContactEmail.Email);
                    if (contactEmail) {
                        await applyGroups([contactEmail], modelContactEmail.changes, true);
                    }
                }
            })
        );
    });

    const handleSubmit = async () => {
        setIsSubmitted(true);

        if (!isFormValid()) {
            nameFieldRef.current?.focus();
            return;
        }

        try {
            await saveVCardContact(contactID, vCardContact);
            await call();
            await saveContactGroups();
            createNotification({ text: c('Success').t`Contact saved` });
        } finally {
            rest.onClose?.();
        }
    };

    const handleChangeVCard = (property: VCardProperty) => {
        setVCardContact((vCardContact) => {
            return updateVCardContact(vCardContact, property);
        });
    };

    const handleContactEmailChange = (contactEmail: ContactEmailModel) =>
        setModelContactEmails((modelContactEmails) => ({ ...modelContactEmails, [contactEmail.Email]: contactEmail }));

    useEffect(() => {
        if (newField) {
            handleAdd(newField)();
        }
    }, [newField]);

    // Default focus on name field
    useEffect(() => {
        nameFieldRef.current?.focus();
    }, []);

    return (
        <ModalTwo size="large" {...rest}>
            <ModalTwoHeader title={title} />
            <ModalTwoContent>
                <div className="mb1">
                    <ContactEditProperty
                        ref={nameFieldRef}
                        isSubmitted={isSubmitted}
                        onRemove={handleRemove}
                        actionRow={false}
                        mainItem
                        vCardProperty={nameProperty}
                        onChangeVCard={handleChangeVCard}
                        onUpgrade={onUpgrade}
                    />

                    <ContactEditProperty
                        isSubmitted={isSubmitted}
                        onRemove={handleRemove}
                        actionRow
                        fixedType
                        mainItem
                        vCardProperty={photoProperty}
                        onChangeVCard={handleChangeVCard}
                        onUpgrade={onUpgrade}
                    />
                </div>
                <ContactEditProperties
                    field="fn"
                    isSignatureVerified
                    isSubmitted={isSubmitted}
                    onRemove={handleRemove}
                    vCardContact={vCardContact}
                    onChangeVCard={handleChangeVCard}
                    onUpgrade={onUpgrade}
                />
                <ContactEditProperties
                    field="email"
                    isSignatureVerified
                    isSubmitted={isSubmitted}
                    onRemove={handleRemove}
                    sortable
                    onAdd={handleAdd('email')}
                    contactEmails={modelContactEmails}
                    onContactEmailChange={handleContactEmailChange}
                    vCardContact={vCardContact}
                    onChangeVCard={handleChangeVCard}
                    onUpgrade={onUpgrade}
                />
                <ContactEditProperties
                    field="tel"
                    isSignatureVerified
                    isSubmitted={isSubmitted}
                    onRemove={handleRemove}
                    sortable
                    onAdd={handleAdd('tel')}
                    vCardContact={vCardContact}
                    onChangeVCard={handleChangeVCard}
                    onUpgrade={onUpgrade}
                />
                <ContactEditProperties
                    field="adr"
                    isSignatureVerified
                    isSubmitted={isSubmitted}
                    onRemove={handleRemove}
                    sortable
                    onAdd={handleAdd('adr')}
                    vCardContact={vCardContact}
                    onChangeVCard={handleChangeVCard}
                    onUpgrade={onUpgrade}
                />
                <ContactEditProperties
                    isSubmitted={isSubmitted}
                    isSignatureVerified
                    onRemove={handleRemove}
                    onAdd={handleAdd()}
                    vCardContact={vCardContact}
                    onChangeVCard={handleChangeVCard}
                    onUpgrade={onUpgrade}
                />
            </ModalTwoContent>
            <ModalTwoFooter>
                <Button onClick={rest.onClose}>{c('Action').t`Cancel`}</Button>
                <Button color="norm" loading={loading} onClick={() => withLoading(handleSubmit())}>
                    {c('Action').t`Save`}
                </Button>
            </ModalTwoFooter>
        </ModalTwo>
    );
};

export default ContactEditModal;
