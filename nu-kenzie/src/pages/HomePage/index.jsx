import './style.css'
import { Form } from '../../components/Form'
import { List } from '../../components/List'
import { TotalMoney } from '../../components/TotalMoney'
import { Card } from '../../components/Card'

import { useState } from 'react'

import '../../styles/globalStyle.css'

import logo from '../../img/logoDark.png'

export function HomePage({children}){
    const [listTransactions, setListTransactions] = useState([
        { description: "Salário recebido", type: "Entrada", value: 2500 },
        { description: "Conta de luz", type: "Saída", value: -150 },
    ])

    return(
        <>
        <header className='headerContainerHome'>
            <img className='logoHome' src={logo} alt="logo dark" />
            {children}
        </header>

        <Form></Form>
        </>
    )
}