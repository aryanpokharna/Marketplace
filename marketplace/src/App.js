import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import { useState, useEffect } from "react";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  /* API Request - Pulling data 
    useState => Store Data
    useEffect => API Request
    npm install axios
   */

  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0xf44adEB006d4048A6456F0166B59CdFAB0DbE7Ff&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main 
            punkListData={punkListData}
            selectedPunk={selectedPunk} 
          />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
