import { IPhone } from 'interfaces/types'
import React, { useState } from 'react'
import { PhoneTitle } from 'styles/PhoneStyles'
import PlusIcon from 'images/plus.svg'
import MinusIcon from 'images/minus.svg'
import { ItemCost } from 'styles/CommonStyles'
import styled from 'styled-components'
import { BuyBtn } from 'components/ui/Button'

interface CartItemProps {
    good_id: number,
    url?: string,
    name: string,
    cost: number,
    setCost: () => void,
    removeCost: () => void
    deleteItem: () => void
}
const CartTitle = styled(PhoneTitle)`
    font-size : 20px;
`

const DeleteBtn = styled(BuyBtn)`
    background-color :  transparent;
    border-color  :red;
    margin-top : 30px;
    &:hover{
        background-color : red;
    }
`

type OrderType = {
    id: number,
    quantity: number
}
function CartItem({ good_id, url, name, cost, setCost, removeCost, deleteItem }: CartItemProps) {
    const [quantity, setQuantity] = useState<number>(1);

    function increase() {
        setQuantity(prev => prev + 1)

        if (localStorage.getItem("order")) {
            let prevArr = JSON.parse(localStorage.getItem("order") || "{}");
            let findItem = prevArr.find((item: any) => item.id === good_id ? true : false)
            if (findItem) {
                let newArr = prevArr.map((order: OrderType) => {
                    if (order.id === good_id) {
                        return {
                            ...order,
                            quantity: quantity + 1
                        }

                    }else{
                        return order
                    }
                })
                localStorage.setItem("order", JSON.stringify(newArr))
            } else {
                prevArr.push({
                    id: good_id,
                    quantity: quantity
                })
                localStorage.setItem("order", JSON.stringify(prevArr))
            }



            // localStorage.setItem("order", JSON.stringify([{
            //     id: good_id,
            //     quantity: quantity
            // }]))
        } else {
            localStorage.setItem("order", JSON.stringify([{
                id: good_id,
                quantity: quantity
            }]));
        }



        setCost()
    }

    function decrease() {
        if (quantity === 1) {
            return
        } else {
            setQuantity(prev => prev - 1)
            removeCost();
        }
    }

    return (
        <div className='cart__item' key={good_id}>
            <div className='cart__item-img'>
                <img src={url} alt="" />
            </div>
            <div className='cart__item-info'>
                <div className='cart__item-desc'>
                    <CartTitle>{name}</CartTitle>
                    <ItemCost>{cost} ₸</ItemCost>
                    <DeleteBtn onClick={deleteItem}>Удалить товар</DeleteBtn>
                </div>

                <div className='cart__item-btns'>

                    <img onClick={decrease} src={MinusIcon} width={24} height={24} alt="" />

                    <span className='quantity'>{quantity}</span>

                    <img onClick={increase} src={PlusIcon} width={24} height={24} alt="" />

                </div>
            </div>
        </div>
    )
}

export default CartItem