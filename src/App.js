import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header'
import ValueInput from './components/ValueInput'
import ConditionList from './components/ConditionList'
import VipSearch from './components/VipSearch'

import PriceTableService from './services/priceTableService';
import VipClientService from './services/vipClientService';


function App() {

  const [orderValue, setOrderValue] = useState();
  const [userType, setUserType] = useState('consultor');
  const [tableType, setTableType] = useState();
  const [priceTables, setPriceTables] = useState([]);
  const [vipClients, setVipClients] = useState([]);

  useEffect(() => {
    setTableType(userType)
  }, [userType])

  useEffect(() => {
    const setTables = async () => {
      const res = await PriceTableService.getAll()
      setPriceTables(res)
    }
    const setClients = async () => {
      const res = await VipClientService.getAll()
      setVipClients(res)
    }
    setTables();
    setClients();
  }, [])

  return (
    <div className="App">
      <Header />
      <ValueInput setOrderValue={setOrderValue}/>
      <VipSearch vipClients={vipClients} setTableType={setTableType} userType={userType} />
      {/* debug */}
      <p>Table: <span className='table-name'>{tableType}</span></p>
        {/* <button onClick={() => setTableType('consultor')}>consultor</button>
        <button onClick={() => setTableType('gerente')}>gerente</button>
        <button onClick={() => setTableType('vip1')}>vip1</button>
        <button onClick={() => setTableType('vip2')}>vip2</button>
      </p>
      <p>Order value: {orderValue}</p> */}
      {/* debug */}

      <ConditionList tableType={tableType} priceTables={priceTables} orderValue={orderValue} />
    </div>
  );
}

export default App;
