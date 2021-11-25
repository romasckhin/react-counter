import React, {useState} from 'react';

const Total = ({list}) => {

    const [ total , setTotal ] = useState(list.length)

    if ( list.length < total ) {
        setTotal(total - 1)
    }
    if ( list.length > total ) {
        setTotal(total + 1)
    }

    return (

        <div>

            total : {total}

        </div>

    );
};

export default Total;