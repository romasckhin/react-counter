import {useState} from "react";
import Counter from "./components/Counter";
import AddCounter from "./components/AddCounter";
import Total from "./components/Total";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

    const [ list , setList ] = useState([
        { id:1, value: 10 },
        { id:2, value: 20 },
        { id:3, value: 30 },
    ])

  return (

      <div className='container text-center'>

          <AddCounter
              list={list}
              setList={setList}
          />

          {list.map((el,index) =>
              <Counter
                  index={index}
                  key={el.id}
                  list={list}
                  el={el}
                  setList={setList}
              />)}
          <hr/>
          <Total
              list={list}
          />

      </div>
  );
}

export default App;
