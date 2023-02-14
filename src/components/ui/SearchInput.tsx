import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as SearchIcon } from "images/search.svg"

const SearchWrapper = styled.div`
    display : inline-block;
    position : relative;
    .search-icon{
        position : absolute;
        top : 50%;
        transform : translateY(-50%);
        right : 5px;
        cursor : pointer;
    }
`

const Search = styled.input`
    padding : 7px 5px;
    outline : none;
    border : 2px solid black;
    border-radius: 12px;
    width : 200px;
    font-size : 16px;
    transition : width .5s;
    &:focus{
        width : 250px;
    }
`

interface SearchInputProps {
    refetchItems : () => void
    setItemName : (value : string) => void
}
function SearchInput({refetchItems, setItemName} : SearchInputProps) {
    const [show, setShow] = useState<boolean>(false)
    return (
        <SearchWrapper onFocus={() => console.log(show)}>
            <Search onChange={(e) => setItemName(e.target.value)} type="text" placeholder='Название товара' onFocus={() => setShow(true)} onBlur={() => setShow(false)} />
            <SearchIcon onClick={refetchItems} className='search-icon' width={28} height={28} fill={show ? "#fcba03" : ""} />
        </SearchWrapper>
    )
}

export default SearchInput