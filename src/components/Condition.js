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
        <table>
          <tbody>
          <tr>
            <td>Desconto</td>
            <td>{discount.toFixed(2)}%</td>
          </tr>
          <tr>
            <td>Preço</td>
            <td>{formatter.format(price)}</td>
          </tr>
          <tr>
            <td>Preço arredondado</td>
            <td>{formatter.format(roundedPrice)}</td>
          </tr>
          {roundedDiscount ?
            <>
            <tr>
              <td>Desconto arredondado</td>
              <td>{roundedDiscount.toFixed(2)}%</td>
            </tr>
              <tr><td>Desconto arrendondado</td>
              <td>{formatter.format(roundedDiscountValue)}</td>
            </tr></> : null }
          {reserveDiscount ?
            <>
            <tr>
              <td>Desconto reserva</td>
              <td>{reserveDiscount.toFixed(2)}%
              </td>
            </tr>
            <tr>
              <td>Preço reserva</td>
              <td>{formatter.format(roundedReservePrice)}</td>
            </tr>
            </> : null }
          </tbody>
        </table>
        <p>Observações</p>

        <div>
          {/* {condition.observations.map(observation => <li key={observation}>- {observation}</li>)} */}
          {condition.observations.split('\n').map((line,idx) => <p key={`${idx}-${line}`} >- {line}</p>)}
        </div>
      </div>
    );
}

export default Condition;