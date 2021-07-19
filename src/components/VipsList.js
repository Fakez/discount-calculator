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

export default VipsList;