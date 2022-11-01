import { ReactNode } from "react";

interface SectionProps {
    name: string,
    children: ReactNode
}
function Section(props: SectionProps) {
    const { name, children } = props;

    return (
        <>
            <div className='section'>
                <div className='name'>{name}</div>
                <div className='content'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Section;