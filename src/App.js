import { useState } from 'react';
import './App.css';

const ValueInput = ({setOrderValue}) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.orderValue.value);
    setOrderValue(e.target.orderValue.value);
  }

  const handleChange = (e) => {
    setOrderValue(e.target.value);

  }

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        Value <input name="orderValue" type="number"></input>
        <button type="submit">Calulate</button>
      </form>
    </div>
  )
}

const ConditionList = ({userType, priceTables, orderValue}) => {

  const conditions = priceTables.find(t => t.tableName === userType).conditions

  return (
    <div >
      <p>User type: {userType}</p>
      <p>Order value: {orderValue}</p>
      {conditions.map(condition => (
        <Condition key={condition.title} condition={condition} orderValue={orderValue} />
      ))}
    </div>
  );
}

const Condition = ({condition, orderValue}) => {
  const discount = condition.discount;
  const price = orderValue * (1 - discount/100);
  const roundedPrice = 0;
  const roundedDiscount = 0;
  const roundedDiscountValue = 0;

  const reserveDiscount = condition.reserveDiscount;
  const reservePrice = orderValue * (1 - reserveDiscount/100);
  return (
    <div className='condition'>
    <p>{condition.title}</p>
    <p>Discount {discount}%</p>
    <p>Price {price}</p>
    <p>Rounded price {roundedPrice}</p>
    <p>Rounded discount {roundedDiscount}</p>
    <p>Rounded discount value {roundedDiscountValue}</p>
    <br />
    <p>Reserve discount {reserveDiscount}</p>
    <p>Reserve price {reservePrice}</p>

    <p>Observations</p>
    <ul>
      {condition.observations.map(observation => <li key={observation}>{observation}</li>)}
    </ul>
    </div>
  );
}

function App({priceTables}) {

  const [orderValue, setOrderValue] = useState();
  const [userType, setUserType] = useState('gerente');

  return (
    <div className="App">
      <h1>Discount Calculator</h1>
      <ValueInput setOrderValue={setOrderValue}/>
      <ConditionList userType={userType} priceTables={priceTables} orderValue={orderValue} />
    </div>
  );
}

export default App;
