import { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header'
import ValueInput from './components/ValueInput'
import ConditionList from './components/ConditionList'
import VipSearch from './components/VipSearch'

import PriceTableService from './services/priceTableService';
import VipClientService from './services/vipClientService';
import UserService from './services/userService';


function App() {

  const [orderValue, setOrderValue] = useState();
  const [userType, setUserType] = useState();
  const [isAdmin, setIsAdmin] = useState(false);
  const [tableType, setTableType] = useState();
  const [priceTables, setPriceTables] = useState([]);
  const [vipClients, setVipClients] = useState([]);

  useEffect(() => {
    setTableType(userType)
  }, [userType])

  useEffect(() => {
    const setCurrentUser = async () => {
      const res = await UserService.getCurrentUser()

      const groups = res.groups;
      if (groups.includes('Admin')) {setIsAdmin(true); setUserType('gerente')};
      if (groups.includes('Gerente')) {setUserType('gerente')};
      if (groups.includes('Consultor')) {setUserType('consultor')};

    }

    const setTables = async () => {
      const res = await PriceTableService.getAll()
      setPriceTables(res)
    }

    const setClients = async () => {
      const res = await VipClientService.getAll()
      setVipClients(res)
    }

    setCurrentUser();
    setTables();
    setClients();
  }, [])

  return (
    <div className="App">
      <Header />
      {isAdmin ? 
      <>
       <p>Usuário é admin</p>
       <span>Para testes: </span>
       <button onClick={() => setTableType('consultor')}>consultor</button>
       <button onClick={() => setTableType('gerente')}>gerente</button>
       <button onClick={() => setTableType('vip1')}>vip1</button>
       <button onClick={() => setTableType('vip2')}>vip2</button>
      </>: null}
      <p>Tabela: <span className='table-name'>{tableType}</span></p>
      <VipSearch vipClients={vipClients} setTableType={setTableType} userType={userType} />
      <ValueInput setOrderValue={setOrderValue}/>
      <ConditionList tableType={tableType} priceTables={priceTables} orderValue={orderValue} />
    </div>
  );
}

export default App;
