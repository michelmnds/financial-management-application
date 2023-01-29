import './style.css'
import '../../styles/globalStyle.css'
import lixo from '../../img/trash.png'

import { useState } from 'react'
import { List } from '../List'
import { Card } from '../Card'
import { TotalMoney } from '../TotalMoney'

export function Form(){
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const [type, setType] = useState('')
    
    const [listTransactions, setListTransactions] = useState([
        { description: "Salário recebido", type: "entrada", value: 2500 },
        { description: "Conta de luz", type: "saída", value: -150 },
    ])

    function handleTransaction(event){
        event.preventDefault() 

        const transactionData = {
            description, 
            value,
            type,
        }

        if (description !== ''  && value !== null && type !== 'null'){
            setListTransactions((listTransactions) => [...listTransactions, transactionData])
        }
    }

    function removeTransaction(item){
        const newList = listTransactions.filter((transaction) => transaction.description !== item.target.id)
       
        setListTransactions(newList)
    }
    
    return(
        <div className='globalContainer'>   
            <section className='left'> 
            <main className='containerMainForm'>
                <p className='mainTxt'>Descrição</p>

                <section className='descriptionContainer'>
                    <input placeholder='Digite aqui sua descrição' className='inputDescription' type="text" name="description" id="description" onChange={(event) => setDescription(event.target.value)}/>
                    <p className='descriptionExample'>Ex: Compra de Roupas</p>
                </section> 

                <section className='bottomContainerForm'> 
                    <div className='valueContainer'>
                        <p className='valueTxt'>Valor</p>
                        
                        <section className='valueInput'>
                            <input placeholder='1' className='numberInput' type="number" name="value" id="value" onChange={(event) => setValue(parseInt(event.target.value))}/>

                            <p className='RS'>R$</p>
                        </section>
                    </div>

                    <div className='typeContainer'>
                        <p className='typeTxt'>Tipo de valor</p>

                        <select className='typeSelect' name="type" id="type" onChange={(event) => setType(event.target.value)}>
                            <option value="null">Escolha o tipo</option>
                            <option value="entrada">Entrada</option>
                            <option value="saida">Saida</option>
                        </select>
                    </div>
                </section>

                <button onClick={handleTransaction} type='submit' className='formButton'>Inserir valor</button>
            </main>

            <TotalMoney>{listTransactions.reduce((acc, cur) => {return acc + cur.value}, 0)}</TotalMoney>
            
            </section>
        
            <section className='right'>
             <List>{listTransactions.map((transaction, index) => 
                <Card description={transaction.description} type={transaction.type} value={transaction.value} transaction={transaction} key={index}> 
                    <img 
                    onClick={removeTransaction}
                    id={transaction.description} 
                    className='lixo' 
                    src={lixo} 
                    alt="lixo" />
                </Card>)}
             </List>
            </section>
        </div>
    )
}