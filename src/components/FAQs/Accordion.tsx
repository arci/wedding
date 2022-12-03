import './FAQs.css';

import { Accordion as MaterialUIAccordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionProps {
    id: string;
    title: string;
    content: JSX.Element,
    expanded: string | false;
    onChange: (panelId: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void
}

function Accordion(props: AccordionProps) {
    const { id: key, title, content: children, expanded, onChange } = props;

    return (
        <MaterialUIAccordion elevation={0} expanded={expanded === key} onChange={onChange(key)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={key + "content"}
                id={key}
            >
                {title}
            </AccordionSummary>
            <AccordionDetails>
                {children}
            </AccordionDetails>
        </MaterialUIAccordion>
    )
}

export default Accordion;