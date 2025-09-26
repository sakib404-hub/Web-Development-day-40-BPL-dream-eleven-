import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './Component/AvailablePlayers'
import Navbar from './Component/Navbar.Jsx'
import SelectedPlayers from './Component/SelectedPlayers'
import Loader from './Component/Loader'


const fetchPlayers = async () => {
  const url = '/players.json'
  const res = await fetch(url);
  return res.json();
}
const fetchPlayersPromise = fetchPlayers();

function App() {

  //State
  const [toogle, setToogle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(60000000)
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  console.log();


  const handleToogle = () => {
    const flag = toogle ? false : true;
    setToogle(flag);
  }

  const handleDelete = (id) => {
    const newSelectedPlayer = selectedPlayers.filter((player) => player.id !== id)
    setSelectedPlayers(newSelectedPlayer)
  }

  return (
    <>
      {/* navbar components  */}
      <Navbar availableBalance={availableBalance}></Navbar>

      <div className=' max-w-[1240px] mx-auto my-[50px] mt-[100px] flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>{toogle ? "Available Players" : `Selected Players (${selectedPlayers.length}/6)`}</h1>
        <div className=''>
          {/* conditionally applying the background color  */}
          <button className={`p-2 border-2 border-gray-400 rounded-l-2xl px-5 border-r-0  font-bold cursor-pointer ${toogle === true ? " bg-[#e7fe29]" : ''}`} onClick={() => handleToogle()}>Available</button>
          <button className={`p-2 border-2 border-gray-400 rounded-r-2xl px-5 border-l-0 font-bold cursor-pointer ${toogle === false ? "bg-[#e7fe29]" : ""}`} onClick={() => handleToogle()}>Selected<span>({selectedPlayers.length})</span></button>
        </div>
      </div>

      {
        (toogle === true) ? <Suspense fallback={<Loader></Loader>}>
          <AvailablePlayers
            setAvailableBalance={setAvailableBalance}
            fetchPlayersPromise={fetchPlayersPromise}
            availableBalance={availableBalance}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}></AvailablePlayers>
        </Suspense> : <SelectedPlayers
          selectedPlayers={selectedPlayers}
          handleDelete={handleDelete}></SelectedPlayers>
      }
    </>
  )
}

export default App
