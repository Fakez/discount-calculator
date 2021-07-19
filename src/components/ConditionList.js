import Condition from './Condition'


const ConditionList = ({tableType, priceTables, orderValue}) => {

    const conditions = priceTables.find(t => t.tableName === tableType).conditions
    return (
      <div >
        {conditions.map(condition => (
          <Condition key={condition.title} condition={condition} orderValue={orderValue} />
        ))}
      </div>
    );
}

export default ConditionList;