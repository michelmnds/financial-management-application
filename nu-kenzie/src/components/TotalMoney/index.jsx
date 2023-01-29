import './style.css'

export function TotalMoney({children}){
    return(
        <section className='totalContainer'>
            <div className='totalAmount'>
                <span className='amountTxt'>Valor total:</span>

                <span className='amountValue'>R${children}</span>
            </div>

            <span className='bottomTotalTxt'>O valor se refere ao saldo</span>
        </section>
    )
}