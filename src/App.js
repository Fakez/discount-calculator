import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header'
import ValueInput from './components/ValueInput'
import ConditionList from './components/ConditionList'

import PriceTableService from './services/priceTableService';
import VipClientService from './services/vipClientService';


const VipsList = ({vipName, vipClients, setVipName, setTableType}) => {
  // if (vipName.length < 2) return null
  if (!vipName) return null

  const handleVipClick = (client) => {
    setTableType(client.type);
    setVipName(client.name);
  }

  const clientsFiltered = vipClients.filter(c => c.name.toLowerCase().includes(vipName.toLowerCase()))
  .sort((a,b) => a.name<b.name ? -1 : 1)
  return (
    clientsFiltered.length ?
    <div className='vips'>
      <p>Clientes Vip:</p>
      <ul>
        {clientsFiltered.map(c => (
          <li key={c.name} onClick={() => handleVipClick(c)}>{c.name} - <span className='table-name'>{c.type}</span></li>)
        )}
      </ul>
    </div>
    : <span>No client found.</span>
  
  )
}

const VipSearch = ({vipClients, setTableType, userType}) => {

  const [vipEnabled, setVipEnabled] = useState(false)
  const [vipName, setVipName] = useState('');


  useEffect(() => {
    if (!vipEnabled) {
      setTableType(userType)
      setVipName('')
    }
  }, [vipEnabled])

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  const handleFormChange = (e) => {
    //setVipName(e.target.value);
  }

  const handleInputChange = (e) => {
    setVipName(e.target.value);
  }

  const handleCheckboxChange = (e) => {
    setVipEnabled(vipEnabled => !vipEnabled);
  }

  return (
    <div>
      VIP? <input onChange={handleCheckboxChange} type="checkbox" name="vehicle1" value="VIP" />
      {vipEnabled ?
      <>
      <form onSubmit={handleFormSubmit} onChange={handleFormChange}>
        Client name <input onChange={handleInputChange} name="vipName" type="text" value={vipName}></input>
        {/* <button type="submit">Search</button> */}
      </form> 
      <VipsList vipName={vipName} vipClients={vipClients} setVipName={setVipName} setTableType={setTableType}/>
      </>
      : null}
    </div>
  )
}

function App() {

  const [orderValue, setOrderValue] = useState();
  const [userType, setUserType] = useState('consultor');
  const [tableType, setTableType] = useState('consultor');
  const [priceTables, setPriceTables] = useState([]);
  const [vipClients, setVipClients] = useState([]);



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

      {orderValue ? 
      <ConditionList tableType={tableType} priceTables={priceTables} orderValue={orderValue} /> :
      null}
    </div>
  );
}

export default App;
