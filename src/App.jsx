import { useState, useEffect } from 'react'
import './App.css'
import usePokemonData from './usePokemonData';

function App() {
  const [test, setTest] = useState("5");
  
  //is〇〇がおすすめ
  const [display, setDisplay] = useState(false);
  
 

//  eはevent イベントの処理のお部屋に入ってくる
  const handleChange = (e) => {
    setTest(e.target.value);
  };

  const displayChange = (e) => {
    setDisplay(!display);
  }

  const handleSubmit = (e) => {
    //これがないとページがリロードされてしまう、form処理には必須！！！
    e.preventDefault();
    // debugger;
  };

 const { pokemon } = usePokemonData(test);


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {/* イベント */}
          <input type="number"  onChange={handleChange} />
        </div>
        <button onClick={displayChange}>送信</button>
      </form>
      <hr />
      {/* useStateの中身を表示 */}
      {/* <h1>{test}</h1> */}

    {/* データを表示する */}
    {/* 資料のオレンジの線のところが重要 */}

    {display && pokemon.map((item, index) => (
        // keyを忘れがち！
      <div key={index}>{item.name}</div>
      ))}
     
    </>
  )


}

export default App
