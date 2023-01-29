import './style.css'

export function Card({description, value, type, children}){    
    if (type === 'entrada'){
        return(
            <>
                <div className='cardContainer'>
                    <section className='cardEnt'>
                        <div className='side'></div>
    
                        <div className='cardInformation'>
                            <span className='cardTitle'>{description}</span>
    
                            <span className='cardType'>{type}</span>
    
                            <span className='cardValue'>R${value}</span>
                            
                            {children}
                        </div> 
                    </section>
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className='cardContainer'>
                    <section className='cardSai'>
                        <div className='sideSai'></div>
    
                        <div className='cardInformation'>
                            <span className='cardTitle'>{description}</span>
    
                            <span className='cardType'>{type}</span>
    
                            <span className='cardValue'>R${value}</span>
    
                            {children}
                        </div> 
                    </section>
                </div>
            </>
        )
    }
}