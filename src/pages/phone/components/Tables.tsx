import { IPhoneItem } from 'interfaces/types'
import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
    margin : 35px 0;
    th,td {
        border: 1px solid #f2f2f2;
        padding : 5px 0
    }
    th{
        text-align:left;
        font-weight:500;
    }
    td{
        text-align:center;
    }
    .table_title{
        font-size : 28px;
        font-weight:bold;
    }
    .table_body{
        margin : 15px;
    }
`

interface TablesProps {
    phone: IPhoneItem
}

function Tables({ phone }: TablesProps) {
    return (
        <div>
            <Table>
                <thead>
                    <tr className='table_title'>
                        Система
                    </tr>
                </thead>
                <tbody className='table_body'>
                    <tr>
                        <th>Операционная система</th>
                        <td>{phone.system.mobile_system}</td>
                    </tr>
                    <tr>
                        <th>Процессор</th>
                        <td>{phone.system.processor}</td>
                    </tr>
                    <tr>
                        <th>Модель процессора</th>
                        <td>{phone.system.processor_model}</td>
                    </tr>
                    <tr>
                        <th>Количество ядер</th>
                        <td>{phone.system.kernels}</td>
                    </tr>
                    <tr>
                        <th>Объем оперативной памяти</th>
                        <td>{phone.system.ram} Гб</td>
                    </tr>
                    <tr>
                        <th>Объем встроенной памяти</th>
                        <td>{phone.system.rom} Гб</td>
                    </tr>
                </tbody>
            </Table>

            <Table>
                <thead>
                    <tr className='table_title'>
                        Коммуникации
                    </tr>
                </thead>
                <tbody className='table_body'>

                    <tr>
                        <th>4G</th>
                        <td>{phone.connection.lte ? "Да" : "нет"} </td>
                    </tr>
                    <tr>
                        <th>Количество слотов СИМ-карт</th>
                        <td>{phone.connection.sim}</td>
                    </tr>
                    <tr>
                        <th>Формат СИМ</th>
                        <td>{phone.connection.sim_format}</td>
                    </tr>
                    <tr>
                        <th>Поодержка 3G</th>
                        <td>{phone.connection.three_g ? "Да" : "нет"}</td>
                    </tr>
                </tbody>
            </Table>

            <Table>
                <thead>
                    <tr className='table_title'>
                        Камера
                    </tr>
                </thead>
                <tbody className='table_body'>

                    <tr>
                        <th>Автофокус</th>
                        <td>{phone.camera.autofocus ? "есть" : "нет"} </td>
                    </tr>
                    <tr>
                        <th>Встроенная вспышка</th>
                        <td>{phone.camera.flash ? "есть" : "нет"}</td>
                    </tr>
                    <tr>
                        <th>Количество мегапикселей основной камеры (Мп)</th>
                        <td>{phone.camera.mpx_core}</td>
                    </tr>
                    <tr>
                        <th>Количество мегапикселей фронтальной камеры (Мп)</th>
                        <td>{phone.camera.mpx_second}</td>
                    </tr>
                </tbody>
            </Table>

            <Table>
                <thead>
                    <tr className='table_title' >
                        Прочее
                    </tr>
                </thead>
                <tbody className='table_body'>

                    <tr>
                        <th>Производитель</th>
                        <td>{phone.common_params.producer}</td>
                    </tr>
                    <tr>
                        <th>Модель</th>
                        <td>{phone.common_params.model} </td>
                    </tr>
                    <tr>
                        <th>Серия</th>
                        <td>{phone.common_params.smartphone_series}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Tables