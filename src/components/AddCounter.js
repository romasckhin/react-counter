import React from 'react';

const AddCounter = ({list,setList}) => {

    const addNewCounter = () => {
        const addendum = [...list,{
            id:Math.random(),
            value: 40
        }]
        setList(addendum)
    }

    return (

        <div>

            <button onClick={addNewCounter} >Add new counter</button>

        </div>
    );
};

export default AddCounter;