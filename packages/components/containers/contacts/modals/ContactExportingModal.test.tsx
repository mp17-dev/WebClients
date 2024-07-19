import { fireEvent } from '@testing-library/react';

import { getModelState } from '@proton/account/test';
import { CryptoProxy } from '@proton/crypto';
import downloadFile from '@proton/shared/lib/helpers/downloadFile';
import type { Contact } from '@proton/shared/lib/interfaces/contacts';
import { addApiMock } from '@proton/testing/lib/api';

import { clearAll, minimalCache, mockedCryptoApi, prepareContact, renderWithProviders } from '../tests/render';
import type { ContactExportingProps } from './ContactExportingModal';
import ContactExportingModal from './ContactExportingModal';

jest.mock('@proton/shared/lib/helpers/downloadFile', () => {
    return jest.fn();
});

describe('ContactExportingModal', () => {
    const props: ContactExportingProps = {
        contactGroupID: 'contactGroupID',
        onSave: jest.fn(),
    };

    const contact1 = {
        ID: 'ContactID1',
        LabelIDs: [props.contactGroupID],
    } as Contact;

    const vcard1 = `BEGIN:VCARD
VERSION:4.0
UID:urn:uuid:4fbe8971-0bc3-424c-9c26-36c3e1eff6b1
FN:J. Doe
EMAIL:jdoe@example.com
TEL:testtel
END:VCARD`;

    const contact2 = {
        ID: 'ContactID2',
        LabelIDs: [props.contactGroupID],
    } as Contact;

    const vcard2 = `BEGIN:VCARD
VERSION:4.0
UID:urn:uuid:4fbe8971-0bc3-424c-9c26-36c3e1eff6b2
FN:Jane Doe
EMAIL:janedoe@example.com
TEL:testteltt
END:VCARD`;

    beforeAll(() => {
        CryptoProxy.setEndpoint(mockedCryptoApi);
    });

    beforeEach(clearAll);

    afterAll(async () => {
        await CryptoProxy.releaseEndpoint();
    });

    it('should export two contacts', async () => {
        const { Cards: Cards1 } = await prepareContact(vcard1);
        const { Cards: Cards2 } = await prepareContact(vcard2);

        addApiMock('contacts/v4/contacts/export', () => {
            return {
                Contacts: [
                    { ID: contact1.ID, Cards: Cards1 },
                    { ID: contact2.ID, Cards: Cards2 },
                ],
            };
        });

        minimalCache();

        const { findByText, getByText } = renderWithProviders(<ContactExportingModal open={true} {...props} />, {
            preloadedState: {
                contacts: getModelState([contact1, contact2]),
            },
        });

        await findByText('2 out of 2', { exact: false });

        const saveButton = getByText('Save');
        fireEvent.click(saveButton);

        expect(downloadFile).toHaveBeenCalled();

        const args = (downloadFile as jest.Mock).mock.calls[0];
        const blob = args[0] as Blob;
        const content = await new Promise((resolve) => {
            var reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.readAsText(blob);
        });

        const expected = `BEGIN:VCARD\r\nVERSION:4.0\r\nFN;PREF=1:J. Doe\r\nTEL;PREF=1:testtel\r\nUID:urn:uuid:4fbe8971-0bc3-424c-9c26-36c3e1eff6b1\r\nITEM1.EMAIL;PREF=1:jdoe@example.com\r\nEND:VCARD\r\nBEGIN:VCARD\r\nVERSION:4.0\r\nFN;PREF=1:Jane Doe\r\nTEL;PREF=1:testteltt\r\nUID:urn:uuid:4fbe8971-0bc3-424c-9c26-36c3e1eff6b2\r\nITEM1.EMAIL;PREF=1:janedoe@example.com\r\nEND:VCARD`;

        expect(content).toBe(expected);
    });
});
