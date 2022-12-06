import { ReactNode } from "react";

interface SectionProps {
    name: string,
    title: string,
    children: ReactNode
}
function Section(props: SectionProps) {
    const { name, title, children } = props;

    return (
        <>
            <div className='section'>
                <div className='image'><img src={require("./" + name + ".png")} alt={name} /></div>
                <div className='content'>
                    <p className='title'>{title}</p>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Section;