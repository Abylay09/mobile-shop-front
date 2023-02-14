import styled from "styled-components";

export const PhoneWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    flex-grow:0;
    flex-shrink:1;
    cursor: pointer;
    padding 12px 6px;
    transition : box-shadow 0.5s;
    &:hover{
        border : 2px solid #f5f5f5;
        box-shadow : 0 0 15px 2px  rgba(0, 0, 0, 0.2);
    }
`;
export const PhoneImg = styled.div`
    flex-shrink : 1;
    img{
        height:250px;
        width:100%;
        max-width:100%;
        object-fit: contain;
}
`
export const PhoneTitle = styled.p`
    font-weight: bold;
}
`

export const PhoneBottom = styled.div`
    width :100%;
}
`
export { }