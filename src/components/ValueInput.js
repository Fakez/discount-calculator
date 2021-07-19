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
      <div className='container'>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          Valor do pedido <input name="orderValue" type="number"></input>
          <button type="submit">Calular</button>
        </form>
      </div>
    )
}

export default ValueInput;