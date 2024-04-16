import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const Rewarder = createContext();

export const AppWrapper = ({ children }) => {

    const [bnbPrice, setBNBPrice] = useState(0);
    const [currentPrice, setCurrentPrice] = useState(0);
    const [decimal, setDecimal] = useState(2);

    const context = {
        bnbPrice, 
        currentPrice,
        decimal
    };

    useEffect(() => {
        axios.get("https://public-api.dextools.io/trial/v2/pool/bsc/0x3d0A82cfE8a9fF878Acb442C7a80C0D3F5DD215E/price", {
            headers: {
              "accept":"application/json",
              "X-API-Key":"ZSyISpovfy3hbpEXGe73BoNO0QNHfoB8BAYw907i"
            }
          }).then(async(res) => {
            const { price } = res.data.data;
            setCurrentPrice(price);
            let splited = (price.toString()).split("-");
            if (splited[1]) setDecimal(+splited[1] + 2);

            await axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BNB&tsyms=USD").then((res_bnb) => {
                const bnb_price = res_bnb.data.RAW.BNB.USD.PRICE;
                setBNBPrice(bnb_price);
            }).catch(err => {
      
            })
          }).catch(err => {

          });
    }, [])

    return (
        <Rewarder.Provider value={context}>
            {children}
        </Rewarder.Provider>
    )

}

export const useAppContext = () => {
    return useContext(Rewarder);
}