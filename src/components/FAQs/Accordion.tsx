import './FAQs.css';

import { useTranslation } from 'react-i18next';
import { Accordion as MaterialUIAccordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionProps {
    faqKey: string;
    expanded: string | false;
    onChange: (panelId: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void
}

function Accordion(props: AccordionProps) {
    const { faqKey, expanded, onChange } = props;

    const { t } = useTranslation()

    return (
        <MaterialUIAccordion elevation={0} expanded={expanded === faqKey} onChange={onChange(faqKey)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={faqKey + "content"}
                id={faqKey}
            >
                {t(faqKey)}
            </AccordionSummary>
            <AccordionDetails>
                {t(faqKey + "-answer")}
            </AccordionDetails>
        </MaterialUIAccordion>
    )
}

export default Accordion;