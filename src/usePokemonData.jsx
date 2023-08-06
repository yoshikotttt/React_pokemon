import { useEffect, useState} from "react";

const usePokemonData = (test)=> {

    const [pokemon, setPokemon] = useState([]);

     //データAPIに通信してデータの塊を持ってきてる
useEffect(() =>{
    const fetchData = async() => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${test}`
      );
    
      const data = await response.json();
        console.log(data,"中身");
        //dataの中のresultsに欲しいデータが入っている
      setPokemon(data.results);
    };
    
    fetchData();
    // ここでどこを監視してるか伝えておく、連携！！
    // 変わった変更をキャッチする「変わったら取りに行くぜ！」
    },[test]);

    return {
        pokemon,
    };

};

export default usePokemonData;

