import React from 'react'

import { useQuery } from '@tanstack/react-query'
import { SearchPhones } from 'api/phoneApi'
import PhoneItem from 'components/phone-item/PhoneItem'
import { IPhone } from 'interfaces/types'
import { useParams } from 'react-router'
import { Item } from 'App'
import { PhoneItems } from 'App'

function FindPhonePage() {
    const params = useParams<string>()
    const { data: SearchedData, isLoading, isError } = useQuery({
        queryKey: ["SearchPhones"],
        queryFn: () => SearchPhones<IPhone[]>(params.name),
    })

    if (isLoading) {
        return <div>Loading</div>
    }

    if (isError) {
        return <div>Error</div>
    }

    return (
        <div>
            <PhoneItems>
                {SearchedData?.map((item: IPhone) =>
                    <Item>
                        <PhoneItem url={item.url} good_id={item.good_id} name={item.name} cost={item.cost} />
                    </Item>)}
            </PhoneItems>
        </div>

    )

}

export default FindPhonePage