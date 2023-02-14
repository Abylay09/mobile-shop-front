import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Smartphone from "images/smartphone.svg"
import Cart from "images/cart.svg"
import { useNavigate } from 'react-router';


const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color : #f5f5f5;
    align-items : center;
    padding : 12px;
    overflow:hidden;
    margin-bottom : 50px;
    .shopping-cart:hover{
        transform : scale(1.1);
        cursor : pointer;
    }

    .header__content{
        display: flex;
        align-items : center;
        gap:75px;
        position : relative;
        cursor : pointer;
        .items-number{
            position : absolute;
            bottom:-10%;
            right:-10%;
            height : 20px;
            width : 20px;
            line-height : 20px;
            padding : 3px;
            font-size : 18px;
            font-weight : medium;
            color : #fff;
            text-align:center;
            border-radius : 20px;
            background-color : red;
        }
    }
`;



function Header() {
    const [itemsLength, setTtemsLength] = useState<number>()
    const navigate = useNavigate();

    useEffect(() => {
        setTtemsLength(JSON.parse(localStorage.getItem("cart") || '{}').length)

        window.addEventListener("storage", () => {
            setTtemsLength(JSON.parse(localStorage.getItem("cart") || '{}').length)
        })

        return () => {
            window.removeEventListener("storage", () => {
                setTtemsLength(JSON.parse(localStorage.getItem("cart") || '{}').length)
            })
        }
    }, [])

    return (
        <>
            <header>
                <HeaderWrapper>
                    <img onClick={() => navigate("/")} width={48} height={48} src={Smartphone} alt="" />

                    <div className='header__content'>
                        <img className='shopping-cart' onClick={() => navigate("/cartPage")} width={48} height={48} src={Cart} alt="shopping-cart" />
                        <span className='items-number'>{itemsLength}</span>
                    </div>
                </HeaderWrapper>
            </header>
        </>

    )
}

export default Header