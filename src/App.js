import { useState } from 'react';
import './App.css';

import Header from './components/Header'
import ValueInput from './components/ValueInput'
import ConditionList from './components/ConditionList'

const VipsList = ({vipName}) => {
  return (
    <p>{vipName}</p>
  )
}

const VipSearch = ({vipClients, setTableType}) => {

  const [vipEnabled, setVipEnabled] = useState(false)
  const [vipName, setVipName] = useState(null)


  const handleFormSubmit = (e) => {
    e.preventDefault();
 
  }

  const handleFormChange = (e) => {
    setVipName(e.target.value);
  }

  const handleCheckboxChange = (e) => {
    setVipEnabled(!vipEnabled);
  }

  return (
    <div>
      VIP? <input onChange={handleCheckboxChange} type="checkbox" name="vehicle1" value="VIP" />
      {vipEnabled ?
      <>
      <form onSubmit={handleFormSubmit} onChange={handleFormChange}>
        Client name or code <input name="vipName" type="text"></input>
        <button type="submit">Search</button>
      </form> 
      <VipsList vipName={vipName} />
      </>
      : null}
    </div>
  )
}

function App({priceTables, vipClients}) {

  const [orderValue, setOrderValue] = useState();
  const [tableType, setTableType] = useState('gerente');

  return (
    <div className="App">
      <Header />
      <ValueInput setOrderValue={setOrderValue}/>
      <VipSearch vipClients={vipClients} setTableType={setTableType} />
      {/* debug */}
      <p>User type: {tableType} 
        <button onClick={() => setTableType('consultor')}>consultor</button>
        <button onClick={() => setTableType('gerente')}>gerente</button>
        <button onClick={() => setTableType('vip1')}>vip1</button>
        <button onClick={() => setTableType('vip2')}>vip2</button>

      </p>
      <p>Order value: {orderValue}</p>
      {/* debug */}

      {orderValue ? 
      <ConditionList tableType={tableType} priceTables={priceTables} orderValue={orderValue} /> :
      null}
    </div>
  );
}

export default App;
