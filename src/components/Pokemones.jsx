import '../components/styles/Pokemones.css';
import usePokemones from './hooks/usePokemones';

function Pokemon({id, nombre, imagen}){
    return(
      <div className='pokemon_card'>
        <img src={imagen} alt={nombre}  className='pokemon_img'/>
        <p className='pokemon_nameId'> 
          <span>#{id}</span>
          <span>{nombre}</span>
        </p>
      </div>
    )
}

function Pokemones(){

		const {pokemones, masPokemones} = usePokemones()

    return (
        <section className='pokemon_container'>
            {pokemones.map(pokemon => <Pokemon {... pokemon} key={pokemon.id}/>)}    
            <button onClick={masPokemones} className='btn_buscar'>Mostrar más</button>
        </section>
    )
}

export default Pokemones;