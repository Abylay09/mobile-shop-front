import { IPhone } from "interfaces/types";


export async function getAllPhones<T>(): Promise<T> {
    let data = await fetch("http://localhost:3001/allPhones");
    let result = await data.json();
    return result.data
}

export async function SearchPhones<T>(name: string | undefined): Promise<T> {
    let data = await fetch(`http://localhost:3001/GetPhones/${name}`);
    let result = await data.json();
    return result.data
}

export async function getPhone<T>(id: any): Promise<T> {
    let data = await fetch(`http://localhost:3001/phone/${id}`);
    let result = await data.json();
    return result.data
}

export async function getCartPhones<T>(params: any): Promise<T> {
    let data = await fetch(`http://localhost:3001/CartPhones/${params}`);
    let result = await data.json();
    return result.data
}

export async function setOrder(order: any) : Promise<any>  {
    let response = await fetch(`http://localhost:3001/setOrder`, {
        method: "Post",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(order)
    });
    let result = await response.json();
    return result.data
}

// export async function setOrder<T>(order: T): Promise<T> {
//     let response = await fetch(`http://localhost:3001/setOrder`, {
//         method: "Post",
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify(order)
//     });
//     let result = await response.json();
//     return result.data
// }
