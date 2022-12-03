import './FAQs.css';

import { useTranslation } from 'react-i18next';
import { Accordion as MaterialUIAccordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


interface AccordionProps {
    title: string;
    content: string;
    expanded: boolean;
    onChange: (event: React.SyntheticEvent, expanded: boolean) => void;

}

function Accordion(props: AccordionProps) {
    const { title, content, expanded, onChange } = props;

    const { t } = useTranslation()

    return (
        <MaterialUIAccordion elevation={0} expanded={expanded} onChange={onChange}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={title + "content"}
                id={title}
            >
                {t(title)}
            </AccordionSummary>
            <AccordionDetails>
                {t(content)}
            </AccordionDetails>
        </MaterialUIAccordion>
    )
}

export default Accordion;