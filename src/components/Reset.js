import React from 'react';

const Reset = ({el,list, setList}) => {

    const resetList = (id) => {
        const reset = list.map(el => el.id === id? {...el, value:0}: el )
        setList(reset)
    }

    return (
        <>

            {' '}<button onClick={() => resetList(el.id)}>reset</button>

        </>
    );
};

export default Reset;