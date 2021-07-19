import NumberFormat from 'react-number-format';

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
          <NumberFormat value={2456981} className="foo" displayType={'text'} thousandSeparator={true} prefix={'$'} renderText={(value, props) => <div {...props}>{value}</div>} />

          {/* <button type="submit">Calular</button> */}
        </form>
      </div>
    )
}

export default ValueInput;