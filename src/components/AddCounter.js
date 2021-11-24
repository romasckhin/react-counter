import React, {useState} from 'react';

const AddCounter = ({list, setList}) => {

    const [ newValue , setNewValue ] = useState();

    const addNewCounter = () => {
        const addendum = [...list, {
            id: Math.random(),
            value: newValue
        }]
        setList(addendum)
        setNewValue('')
    }

    const addNewValue = (event) => {
        setNewValue(event.target.value)
    }

    return (

        <div>

            <button onClick={addNewCounter}>Add new counter</button>
            {' '}
            <input type="number" placeholder='value:' value={newValue} onChange={addNewValue}/>

        </div>
    );
};

export default AddCounter;