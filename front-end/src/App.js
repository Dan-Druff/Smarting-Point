import Web3 from 'web3';
import './App.css';
import { useEffect } from 'react';
import Danft from './contracts/Danft.json';
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545')); 

const contractAddress = '0x69356a8060603C9b91988A9624E1f06E8F6D33E9';
const c = new web3.eth.Contract(Danft.abi, contractAddress);
function App() {
  useEffect(() => {
    const init = async() => {
      const totSup = await c.methods.totalSupply().call();
      console.log("Tot supp: ", totSup);

    }
    init();
  }, []);
  return (
    <div className="App">
      <h1>REACT APP</h1>
    </div>
  );
}

export default App;
