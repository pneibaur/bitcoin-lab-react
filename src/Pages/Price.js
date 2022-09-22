import React from "react";

const Price = (props) => {
    const apiKey = "74D6408A-6977-412F-B6B0-D40F47943A7D";
    // grabs the currency symbol from the URL param.
    const symbol = props.match.params.symbol;
    const URL = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`;

    // state to hold the coin data. 
    const [coin, setCoin] = React.useState(null);

    // fn to fetch coin data. uses async/await to make it happen. 
    const getCoin = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCoin(data);
    };

    // useEffect to run getCoin when component mounts. 
    React.useEffect(() => {
        getCoin();
    }, []);

    // loaded fn for when data is fetched. 
    const loaded = () => {
        return (
            <div>
                <h1>
                    {coin.asset_id_base}/{coin.asset_id_quote}
                </h1>
                <h2>{coin.rate}</h2>
            </div>
        );
    };
    // fn for when data doesn't exist. 
    const loading = () => {
        return <h1>Loading...</h1>
    };

    // if coin has data, run the loaded() fn. otherwise run loading() fn.
    return coin ? loaded() : loading();
};

export default Price;