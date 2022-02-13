import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';
function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  useEffect(() => {
    const getMyNFTs = async () => {
       const openSeaData = await axios.get("https://testnets-api.opensea.io/assets?asset_contract_address=0xEB436f68EC57b5C9Eb0bDA4e525dbadE921329d6&order_direction=asc");
       console.log(openSeaData.data.assets);
       setPunkListData(openSeaData.data.assets);
    }
    return getMyNFTs();
  }, []);
  return (
    <div className="app">
      <Header/>
      {
        punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
        )
      }
    </div>
  );
}

export default App;
