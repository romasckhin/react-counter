import React from 'react';

const Delete = ({el,list,setList}) => {

    const deleteCounter = (id) => {
        const del = list.filter(el => el.id !== id)
        setList(del)
    }

    return (
        <>
            <button onClick={() => deleteCounter(el.id)} >delete</button>
        </>
    );
};

export default Delete;