import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './Component/AvailablePlayers'
import Navbar from './Component/Navbar.Jsx'
import SelectedPlayers from './Component/SelectedPlayers'
import Loader from './Component/Loader'
import Player from './Component/Player'
import { ToastContainer } from 'react-toastify';
import Banner from './Component/Banner'
import Footer from './Component/Footer'



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

  const handleDelete = (p) => {
    const newSelectedPlayer = selectedPlayers.filter((player) => player.id !== p.id)
    setSelectedPlayers(newSelectedPlayer)
    const newBalance = availableBalance + p.price;
    setAvailableBalance(newBalance)
  }

  return (
    <>
      {/* navbar components  */}
      <Navbar availableBalance={availableBalance}></Navbar>
      {/* Banner Component  */}
      <Banner></Banner>
      <div className=' max-w-[1240px] mx-auto my-[50px] mt-[100px]  flex flex-col gap-2 md:flex-row justify-between items-center'>
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
          handleDelete={handleDelete}
          setToogle={setToogle}
          toogle={toogle}></SelectedPlayers>
      }
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
