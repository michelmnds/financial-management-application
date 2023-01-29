import './style.css'


export function List({children}, listTransactions){

    if (listTransactions.lenght === 0){
        return (
            <div className='listContainer'>
                <span className='listTxt'>Resumo financeiro</span>
                    
                <p className='listSecondaryTxt'>Você ainda não possui nenhum lançamento</p>
            </div>
        )
    } else {
        return (
            <div className='listContainer'>
                <span className='listTxt'>Resumo financeiro</span>
                    
                {children}
            </div>
        )
    }  
} 