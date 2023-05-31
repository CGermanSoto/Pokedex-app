import NavBar from './components/NavBar'
import Buscador from './components/Buscador';
import Pokemones from './components/Pokemones';

function App() {
  return (
    <>
      <NavBar />
      <div className="App">

        <Buscador />
        <Pokemones/>
      </div>
      
    </>
    
  )
}

export default App
