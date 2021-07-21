import Condition from './Condition'


const ConditionList = ({tableType, priceTables, orderValue}) => {

    if (!orderValue) { return null }
    if (!priceTables.length) {return <div>Ocorreu um erro, por favor recarregue a página.</div>}

    const conditions = priceTables.find(t => t.tableName === tableType).conditions
    return (
      <div className='container'>
        {conditions.map(condition => (
          <Condition key={condition.title} condition={condition} orderValue={orderValue} />
        ))}
      </div>
    );
}

export default ConditionList;