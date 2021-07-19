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

export default ValueInput;