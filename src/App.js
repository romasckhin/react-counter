import {useState} from "react";
import Counter from "./components/Counter";
import AddCounter from "./components/AddCounter";
import './App.css'

function App() {

    const [ list , setList ] = useState([
        { id:1, value: 10 },
        { id:2, value: 20 },
        { id:3, value: 30 },
    ])

  return (

      <div>

          <AddCounter
              list={list}
              setList={setList}
          />

          {list.map(el =>
              <Counter
                  key={el.id}
                  list={list}
                  el={el}
                  setList={setList}
              />)}

      </div>
  );
}

export default App;
