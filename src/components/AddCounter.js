import React, {useState} from 'react';

const AddCounter = ({list, setList}) => {

    const [newValue, setNewValue] = useState();

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

        <div className='d-flex mb-3 mt-3'>

            <button type="button" className="btn btn-primary btn-sm me-3" onClick={addNewCounter}>Add new counter</button>
            {' '}
            <div className="input-group">
                <input type="number" className="form-control" placeholder='value:' value={newValue}
                       onChange={addNewValue}/>
            </div>


        </div>
    );
};

export default AddCounter;