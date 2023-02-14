import React from 'react'
import { IPhone } from 'interfaces/types';
import Button from 'components/ui/Button';
import { PhoneWrapper, PhoneImg, PhoneTitle, PhoneBottom } from 'styles/PhoneStyles';
import { ItemCost } from "styles/CommonStyles"
import { useNavigate } from 'react-router';
import { useCart } from 'context/CartContext';



const PhoneItem: React.FC<IPhone> = ({ name, cost, url, good_id }) => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    return (
        <PhoneWrapper >
            <PhoneImg onClick={() => navigate(`/phone/${good_id}`)}>
                <img src={url} alt={name} />
            </PhoneImg>

            <PhoneBottom>
                <PhoneTitle>{name}</PhoneTitle>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                    <ItemCost>{cost} ₸</ItemCost>
                    <Button byuItem={() => addToCart(good_id)}/>
                </div>
            </PhoneBottom>
        </PhoneWrapper>
    )
}

export default PhoneItem