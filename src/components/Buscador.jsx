import '../components/styles/Buscador.css';

function Buscador(){
    return (
        <>
          <h3 className='titulo'>App Pokemon API</h3>
          <section className='container_buscar'>
            <input type="text" placeholder='Nombre del pokemon' className='input_buscar'/>
            <button className='btn_buscar'>
                Buscar
            </button>
          </section>
          
        </>
    )
}

export default Buscador;