import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getPhone } from 'api/phoneApi'
import Button from 'components/ui/Button'
import Slider from 'components/ui/Slider'
import { IPhoneItem } from 'interfaces/types'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { ItemCost } from 'styles/CommonStyles'
import Tables from './components/Tables'
import { useCart } from 'context/CartContext'

const PhonePageWrapper = styled.section`
    display : flex;
    align-items: flex-start;
    justify-content:space-between;
`
const MainContent = styled.div`
    flex-basis : 60%;
    flex-grow: 0;
    min-width:0;
`

const PhoneInfo = styled.div`
    flex-basis : 30%;
    position : sticky;
    right : 0;
    top : 0;
    h1{
        font-size : 24px;
    }
    .phone-info__common{
        text-align:center;
        display : flex;
        align-items:center;
        justify-content:space-between;
    }

   
`



function PhonePage() {
    const params = useParams<any>();
    const {addToCart} = useCart()
    const { data: phone, isLoading, isError } = useQuery({
        queryKey: ["getPhone"],
        queryFn: () => getPhone<IPhoneItem>(params.id)
    })

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error</span>
    }
    

    return (
        <PhonePageWrapper>
            <MainContent>
                <Slider images={phone.images} />

                <Tables phone={phone}/>
            </MainContent>

            <PhoneInfo>
                <div className='phone-info__content'>
                    <h1>{phone.info.name}</h1>
                    <div className='phone-info__common'>
                        <ItemCost>{phone.info.cost} ₸</ItemCost>
                        <Button byuItem={() => addToCart(params.id)}/>
                    </div>
                </div>
            </PhoneInfo>

        </PhonePageWrapper>
    )
}

export default PhonePage