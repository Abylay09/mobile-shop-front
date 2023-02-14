import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import closeIcon from "images/close.svg"
import { IPhone } from 'interfaces/types';
import { getAllPhones, getPhone } from 'api/phoneApi';
import { useQueries, useQuery } from '@tanstack/react-query';
import PhoneItem from 'components/phone-item/PhoneItem';


interface SidebarProps {
    closeBar: () => void;
    show: boolean
}



const SideWrapper = styled.aside<{ show: boolean }>`
    height : 100vh;
    width : ${props => props.show ? "30vw" : "0"};
    position : absolute;
    right : 0;
    top : 0;
    background :  #fff;
    z-index : 10;
    box-shadow : 0 0 80px 10px rgba(0,0,0,0.5);
    transition : width 0.4s linear;
`


const Sidebar: React.FC<SidebarProps> = ({ closeBar, show }) => {

    const { data: phones, isLoading, remove } = useQuery({
        queryKey: ["getCartItems"],
        queryFn: getAllPhones<IPhone[]>
    })


    // let localStorageData = JSON.parse(localStorage.getItem("cart") || '{}')

    // const data = useQueries(
    //     localStorageData.map((id: number) => ({
    //         queryKey: ["getCartItem", id],
    //         queryFn: () => getPhone<IPhone>(id)
    //     }))
    // )

    // const isLoading = data.some(({ isLoading }) => isLoading);
    // const isError = data.some(({ isError }) => isError);
    //     console.log(data);

    if (isLoading) {
        <div>loading</div>
    }



    return (
        <SideWrapper show={show}>
            <img onClick={() => {
                closeBar()
                remove()
            }
            } src={closeIcon} alt="" width={36} height={36} />

            {phones?.map((item: IPhone) =>
                <div>
                    <div>{item.name}</div>
                </div>)}

            {/* {phones?.map((item: IPhone) =>
                <div>
                    <PhoneItem url={item.url} good_id={item.good_id} name={item.name} cost={item.cost} />
                </div>)} */}
        </SideWrapper>
    )
}

export default Sidebar