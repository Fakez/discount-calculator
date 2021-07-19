import { useState, useEffect } from 'react';
import VipsList from './VipsList'


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

export default VipSearch;