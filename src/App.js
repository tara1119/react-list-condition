import React, {useState} from 'react';
import './App.css';

import LengthValidation from './LengthValidation/LengthValidation';
import CharList from './CharList/CharList'

function App() {

  const [randtext, randTextState] = useState("this is me");

  const changeTextState = (event) => {
    randTextState(event.target.value);
  }

  const deleteTextState = (index) => {
    const text = randtext.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    randTextState(updatedText);
  }

  const charList = randtext.split('').map((ch, index) => {
    return <CharList character={ch} key={index} delete={() => deleteTextState(index)} />
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
