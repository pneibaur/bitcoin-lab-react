import React from "react";
import {Link} from "react-router-dom"

const Currencies = (props) => {
    const currencies = [
        { name: "Bitcoin", symbol: "BTC" },
        { name: "Litecoin", symbol: "LTC" },
        { name: "Ethereum", symbol: "ETH" },
        { name: "Ethereum Classic", symbol: "ETC" },
        { name: "Stellar Lumens", symbol: "XLM" },
        { name: "Dash", symbol: "DASH" },
        { name: "Ripple", symbol: "XRP" },
        { name: "Zcash", symbol: "ZEC" },
        { name: "DogeCoin", symbol: "DOGE" },
      ];
    return (
        <div className="currencies">
            {currencies.map((coin, index) => {
                const { name, symbol } = coin;
                return (
                    <Link key={index} to={`/price/${symbol}`}>
                        <h2>{name}</h2>
                    </Link>
                );
            })}
        </div>
    );
};
// another way to write the above return statement would be to move the .map function above the
// parent return statement. see below for an example: 
// 
// const coinArr = currencies.map((coin) => {
//     const {name, symbol} = coin;
//     return (
//         <Link to={`/price/${symbol}`}>
//             <h2>{name}</h2>
//         </Link>
//     )
// })
// return (
//     <div className="currencies">
//         {coinArr}
//     </div>
// )
// 

export default Currencies;