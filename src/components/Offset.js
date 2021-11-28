import React from 'react';

const Offset = ({el, list, setList, index}) => {

    const offsetValueUp = (id) => {

        const index = list.findIndex(el => el.id === id)

        const res = [ ...list.slice(0,index - 1), list[index], list[index - 1], ...list.slice(index + 1) ]
        setList(res)
    }

    const offsetValueDown = (id) => {
        const index = list.findIndex(el => el.id === id)

        const res = [ ...list.slice(0, index), list[index + 1], list[index], ...list.slice(index + 2) ]
        setList(res)
    }

    return (

        <>

            {index !== 0 ? <button onClick={() => offsetValueUp(el.id)} type="button"
                                   className="text-black btn btn-link btn-sm">↑</button>
                : <button onClick={() => offsetValueUp(el.id)} type="button"
                          className=" btn btn-link btn-sm" disabled>↑</button>
            }{' '}
            {index !== list.length - 1 ? <button onClick={() => offsetValueDown(el.id)} type="button"
                                                 className="text-black btn btn-link btn-sm">↓</button>
                :
                <button onClick={() => offsetValueDown(el.id)} type="button" className="btn btn-link btn-sm"
                        disabled>↓</button>} {' '}

        </>
    );
};

export default Offset;