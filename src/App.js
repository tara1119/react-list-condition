import React, {useState} from 'react';
import './App.css';

import LengthValidation from './LengthValidation/LengthValidation';
import CharList from './CharList/CharList'

function App() {

  const [randtext, randTextState] = useState("this is me");

  const changeTextState = (event) => {
    randTextState(event.target.value);
  }

  const charList = randtext.split('').map((ch, index) => {
    return <CharList character={ch} key={index} />
  })
  return (

    <div className="App">
      <input type="text" onChange={changeTextState} value={randtext} />
      <p>{randtext}</p>
      <LengthValidation length={randtext.length} />
      {charList}
    </div>
  );
}

export default App;
