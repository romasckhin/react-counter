import React from 'react';
import Reset from "./Reset";
import Delete from "./Delete";

const Counter = ({el,list, setList}) => {

    const counterPlus = (id) => {
        const plus = list.map(el => el.id === id? {...el, value: el.value + 1 }: el)
        setList(plus)
    }

    const counterMinus = (id) => {
        const minus = list.map(el => el.id === id? {...el, value: el.value + 1 }: el)
        setList(minus)
    }

    return (

        <div>

            <button onClick={() => counterPlus(el.id)} >+</button>
            {' '}
            {el.value}{' '}
            <button onClick={() => counterMinus(el.id)} >-</button>
            <Reset
                el={el}
                list={list}
                setList={setList}
            />{' '}
            <Delete
                el={el}
                list={list}
                setList={setList}
            />


        </div>
    );
};

export default Counter;