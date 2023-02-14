import React, { ReactNode } from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
    width : 100%;
    max-width : 1200px;
    margin : 0 auto;
    height : 100vh;
    padding : 0 12px;
    display :flex;
    flex-direction :column;
`;

interface Props {
    children?: ReactNode
}

function Container({ children }: Props) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
}

export default Container