import React, { useEffect, useState } from 'react'
import { ICamera, ICommon_params, IConnection, IPhoneItem, ISystem } from 'interfaces/types'
import styled from 'styled-components'

const AccordionWrapper = styled.div`
    margin-top : 25px;
`
const AccordionItem = styled.div`

`
const AccordionTitle = styled.div`
    display : flex;
    justify-content:space-between;
    padding : 10px 0;
    background : red;
    cursor:pointer;
`

const AccordionContent = styled.div<{ show: boolean }>`
    padding : 20px 0;
    background : blue;
    display:  ${props => props.show ? "block" : "none"};

`
interface AccordionProps {
    data: {
        system: ISystem,
        camera: ICamera,
        connection: IConnection,
        common_params: ICommon_params
    }

}

interface Props<T> {
    data: T
}
// const  Accordion : React.FC<IPhoneItem> = ({system, common_params, connection, camera, }) => {
// const  Accordion : React.FC<AccordionProps> = ({system}) => {
const Accordion: React.FC = () => {
    const [active, setActive] = useState<boolean>(false)
    console.log("rendered");

    return (
        <>
            <AccordionWrapper>
                <AccordionItem>
                    <AccordionTitle onClick={() => setActive(!active)}>
                        <span>Title</span>
                        <span>стрелка</span>
                    </AccordionTitle>
                    <AccordionContent show={active}>
                        1
                    </AccordionContent>
                </AccordionItem>
            </AccordionWrapper>
        </>
    )
}

export default Accordion