import React from 'react'
import styled from 'styled-components'

export const BuyBtn = styled.button`
    width : 130px;
    height : 40px;
    font-weight : bold;
    padding : 2px 12px;
    text-align:center;
    outline : none;
    border : 2px solid #fcba03;
    border-radius : 12px;
    background-color : transparent;
    transition: background  0.5s;
    cursor : pointer;
    &:hover{
        background-color : #fcba03;
    }
`

interface BtnProps {
    byuItem : () => void
}

const Button : React.FC<BtnProps>  = ({byuItem}) => {
    return (
        <BuyBtn onClick={() => byuItem()}>Купить</BuyBtn>
    )
}

export default Button