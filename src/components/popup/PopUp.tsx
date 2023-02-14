import { useMutation } from '@tanstack/react-query'
import { setOrder } from 'api/phoneApi'
import React, { useState } from 'react'
import styled from 'styled-components'



const PopUpWrapper = styled.div`
    flex-basis:auto;
    background-color : #fff;
    max-height : 220px;
    height : 100%;
    padding : 25px;
    border-radius : 12px;
    form{
        display : flex;
        flex-direction:column;
        padding : 12px;
        label{
            position  : relative;
            display : flex;
            justify-content:space-between;
            align-items:center;
            gap : 35px;
            flex-basis : 100%;
            span{
                font-size : 18px;
                font-weight:500;
            }
        }
        input{
            padding : 8px 10px;
            margin-bottom : 15px;
            margin-top : 16px;
            font-size : 18px;
            &::placeholder{
                
            }
        }

        input[type=submit]  {
            flex-basis:30px;
            width : 50%;
            margin : 12px auto;
            border-radius : 12px;
            background-color : transparent;
            cursor : pointer;
            &:hover{
                background-color : rgba(63, 195, 128, 0.5);    
            }
        }
    }
`


const PopUpContainer = styled.div<{ show: boolean }>`
    position: fixed;
    top: 0;
    left : 0;
    height : 100vh;
    width : 100vw;
    // display : flex;
    display : ${props => props.show ? "flex" : "none"};
    background-color : rgba(0,0,0,0.5);
    align-items:center;
    justify-content:center;
`

interface Props {
    openForm: boolean
    closeForm: () => void
}

interface Order {
    id: number,
    quantity: number,
    orders: string
}

// onst Sidebar: React.FC<SidebarProps> = ({ closeBar, show })
const PopUp: React.FC<Props> = ({ openForm, closeForm }) => {
    const [name, setName] = useState<string>("")
    const [phone, setPhone] = useState<string>("")

    const mutation = useMutation({
        mutationFn: setOrder
    })
    
    function sendOrder(e: any){
        e.preventDefault();
        let data = {
            name,
            phone_number : phone,
            orders : "test"
        }
        mutation.mutate(data)
    }

    return (
        <PopUpContainer show={openForm}>
            <PopUpWrapper >
                <button  onClick={closeForm}>close</button>
                <form onSubmit={sendOrder}>
                    <label htmlFor="">
                        <span>Имя</span>
                        <input type="text" name='name' placeholder='Ваше имя' required onChange={(e) => setName(e.target.value)} />
                    </label>
                    <label htmlFor="">
                        <span>Номер телефона</span>
                        <input type="text" name='phone_number' placeholder='Вашь номер телефона' required onChange={(e) => setPhone(e.target.value)} />
                    </label>
                    <input type="submit" value="Отправить" />
                </form>
            </PopUpWrapper>
        </PopUpContainer>
    )
}

export default PopUp