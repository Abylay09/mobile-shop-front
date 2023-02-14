import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import PhoneItem from 'components/phone-item/PhoneItem';
import './App.css';

import { getAllPhones, SearchPhones } from 'api/phoneApi';
import { IPhone } from 'interfaces/types';
import SearchInput from 'components/ui/SearchInput';


export const PhoneItems = styled.div`
  display : flex;
  justify-content:space-between;
  flex-wrap : wrap;
  margin-top : 50px;
`
export const Item = styled.div`
   flex: 0 1 30%;
`

const SecondHeader = styled.div`
  text-align : right;
  margin-top : 25px;
`

function App() {
  const [item, setItem] = useState<string>("");
  
  useEffect(() => {
    if (item.length == 0) {
      refetchPhones();
      remove()
    }
  }, [item])


  const { data: phones, isLoading, refetch: refetchPhones } = useQuery({
    queryKey: ["getPhones"],
    queryFn: getAllPhones<IPhone[]>
  })

  const { data: SearchedData, refetch : SearchItem, remove } = useQuery({
    queryKey: ["SearchPhones"],
    queryFn: () => SearchPhones<IPhone[]>(item),
    enabled: false
  })


  if (isLoading) {
    <div>loading</div>
  }


  return (
    <div>
      <SecondHeader >
        <SearchInput refetchItems={() => {
          SearchItem()
        }} setItemName={setItem} />
      </SecondHeader>

      <PhoneItems>
        {
          SearchedData
            ? SearchedData?.map((item: IPhone) =>
              <Item>
                <PhoneItem url={item.url} good_id={item.good_id} name={item.name} cost={item.cost} />
              </Item>)
            : phones?.map((item: IPhone) =>
              <Item>
                <PhoneItem url={item.url} good_id={item.good_id} name={item.name} cost={item.cost} />
              </Item>)
        }
      </PhoneItems>
      
    </div>

  )

}

export default App;
