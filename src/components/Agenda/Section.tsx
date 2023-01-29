import { ReactNode } from "react";

interface SectionProps {
    name: string,
    title: string,
    children: ReactNode
}

const IMAGE_FOLDER = "./images/"

function Section(props: SectionProps) {
    const { name, title, children } = props;

    return (
        <>
            <div className='section'>
                <div className='image'><img src={require(IMAGE_FOLDER + name + ".png")} alt={name} /></div>
                <div className='content'>
                    <p className='title'>{title}</p>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Section;