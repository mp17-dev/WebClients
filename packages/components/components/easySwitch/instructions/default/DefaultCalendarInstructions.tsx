import { c } from 'ttag';

import { getKnowledgeBaseUrl } from '@proton/shared/lib/helpers/url';
import { Href } from '../../../link';

const DefaultCalendarInstructions = () => {
    // translator: full sentence: "To import a calendar to Proton, you need the ICS file. Download this before you start the import process."
    const knowledgeBaseLink = (
        <Href url={getKnowledgeBaseUrl('/how-to-import-calendar-to-proton-calendar')} key="knowledgeBaseLink">
            {c('Import instructions link').t`ICS file`}
        </Href>
    );
    // translator: full sentence: "To import a calendar to Proton, you need the ICS file. Download this before you start the import process."
    const defaultCalendarMessage = c('Import instructions')
        .jt`To import a calendar to Proton, you need the ${knowledgeBaseLink}. Download this before you start the import process.`;

    return <div className="mb1">{defaultCalendarMessage}</div>;
};

export default DefaultCalendarInstructions;
