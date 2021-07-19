import { useEffect } from "react";

const Condition = ({condition, orderValue}) => {

    const roundDown =  (num, precision) => {
      //10 for 1 place, 100 for 2 places, 1000 for 3...
      num = parseFloat(num);
      if (!precision) return num
      return (Math.floor(num / precision) * precision)
    }
  
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

    let precision;
    useEffect(() => {
      if (orderValue < 5000) { precision = 10 }
      else if (orderValue < 10000) { precision = 50 }
      else { precision = 100 }
    }, [])
    
  
    const discount = condition.discount;
    const price = orderValue * (1 - discount/100);
    const roundedPrice = roundDown(price, precision);
    const roundedDiscount = ((1-(roundedPrice / orderValue)) * 100);
    const roundedDiscountValue = orderValue - roundedPrice;
  
    const reserveDiscount = condition.reserveDiscount;
    const reservePrice = orderValue * (1 - reserveDiscount/100);
    const roundedReservePrice = roundDown(reservePrice, precision);
  
  
  
    return (
      <div className='condition'>
      <p>{condition.title}</p>
      <p>Desconto {discount.toFixed(2)}%</p>
      <p>Preço {formatter.format(price)}</p>
      <p>Preço arredondado {formatter.format(roundedPrice)}</p>
      {roundedDiscount ?
      <div>
        <p>Desconto arredondado {roundedDiscount.toFixed(2)}%</p>
        <p>Desconto arrendondado {formatter.format(roundedDiscountValue)}</p>
      </div> : null }
      <br />
      {reserveDiscount ?
      <div>
        <p>Desconto reserva {reserveDiscount.toFixed(2)}%</p>
        <p>Preço reserva {formatter.format(roundedReservePrice)}</p>
      </div> : <div>No reserve discount</div> }
  
      <p>Observações</p>

      <ul>
        {condition.observations.map(observation => <li key={observation}>- {observation}</li>)}
      </ul>
      </div>
    );
}

export default Condition;