import React, {useState} from 'react';
import Reset from "./Reset";
import Delete from "./Delete";
import Offset from "./Offset";

const Counter = ({el, list, setList,index}) => {

    const [color, setColor] = useState('#63b294')

    const counterPlus = (id) => {
        const plus = list.map(el => el.id === id ? {...el, value: el.value + 1} : el)
        setList(plus)
        const random = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(random)
    }

    const counterMinus = (id) => {
        const minus = list.map(el => el.id === id ? {...el, value: el.value - 1} : el)
        setList(minus)
        const random = '#' + Math.floor(Math.random() * 16777215).toString(16);
        setColor(random)
    }

    return (

        <div>

            <Offset
                index={index}
                el={el}
                list={list}
                setList={setList}
            />

            <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => counterPlus(el.id)}>+</button>
            {' '}
            <strong style={{color: `${color}`}}>
                    {el.value}
                </strong>
            {' '}
            <button type="button" className="btn btn-outline-primary btn-sm" onClick={() => counterMinus(el.id)}>-</button>
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