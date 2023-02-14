import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query';
import { getCartPhones } from 'api/phoneApi';
import { IPhone } from 'interfaces/types';
import styled from 'styled-components'

import CartItem from './components/CartItem';
import { useCart } from 'context/CartContext';
import { useNavigate } from 'react-router';
import PopUp from 'components/popup/PopUp';
import { BuyBtn } from 'components/ui/Button';

const CartWrapper = styled.div`
    display : flex;
    justify-content : space-between;
    position : relative;
    .cart__items{
        display : flex;
        flex-direction : column;
        flex : 0 1 65%;
    }
    .cart__item{
        display : flex;
        align-items : center;
        justify-content : space-between;
        &-img{
            height : 250px;
            width: 30%;
            img{
                max-height: 100%;
                max-width: 100%;
                height: 250px;
                width : 250px;
                object-fit: contain;
            }
            
        }
        &-info{
            display : flex;
            align-items : center;
            width : 70%;
            justify-content:space-evenly;
        }

        &-desc{
            flex-grow : 1;
        }
        &-btns{
            display : flex;
            align-items:center;
            justify-content:space-between;
            flex-grow : 1;
            img{
                &:hover{
                    cursor:pointer;
                }
            }
            .quantity{
                font-size : 21px; 
                font-weight : 500;
            }
        }
    }
    .purchase{
        text-align:center;
    }
`

const PurchaseBtn = styled(BuyBtn)`
    background-color :  transparent;
    border-color  :green;
    margin-top : 30px;
    width : 100%;
    &:hover{
        background-color : rgba(63, 195, 128, 0.5);    
    }
`

function CartPage() {
    const [cost, setCost] = useState<number>(0);
    const [openModal, setOpenModal] = useState<boolean>(false)
    const { deleteItem } = useCart();
    const navigate = useNavigate()
    const { data: phones, isLoading, refetch } = useQuery({
        queryKey: ["getCartItems"],
        queryFn: () => getCartPhones<IPhone[]>(JSON.parse(localStorage.getItem("cart") || "{}").join())
    })

    useEffect(() => {
        if (phones) {
            let totalCost = phones?.reduce((accumulator, item) => {
                return accumulator += item.cost
            }, 0)
            setCost(totalCost)
        }
    }, [phones])



    function increaseCost(data: number) {
        setCost(prev => prev + data)
    }

    function decreaseCost(data: number) {
        setCost(prev => prev - data)
    }

    if (isLoading) <div>Loading Data</div>

    return (
        <section style={{ position: "relative" }}>
            <CartWrapper>
                <div className='cart__items'>
                    {phones?.map((item) => {
                        return (
                            <CartItem
                                deleteItem={() => {
                                    if (JSON.parse(localStorage.getItem("cart") || "{}").length == 1) {
                                        deleteItem(item.good_id)
                                        navigate(0)
                                    }
                                    else {
                                        deleteItem(item.good_id)
                                        refetch()
                                    }
                                }}
                                removeCost={() => decreaseCost(item.cost)}
                                setCost={() => increaseCost(item.cost)}
                                good_id={item.good_id} url={item.url} name={item.name} cost={item.cost} />
                        )
                    })}
                </div>

                <div className='purchase'>
                    <h2>Сумма к оплате: {cost} ₸</h2>
                    <PurchaseBtn onClick={() => setOpenModal(true)}>Купить</PurchaseBtn>
                </div>
            </CartWrapper>
            <PopUp openForm = {openModal} closeForm = {() => setOpenModal(!openModal)}/>
        </section>
    )
}

export default CartPage