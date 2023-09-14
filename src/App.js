
import logo from './logo.svg';
import './App.css';
import  mano_piedra from './assets/imagenes/mano_piedra.PNG';
import  mano_papel from './assets/imagenes/mano_papel.PNG';
import  mano_tijera from './assets/imagenes/mano_tijera.PNG';

function botones({opcionelegida}){
  const btn={
   piedra: {mano_piedra}, papel: {mano_papel}, tijera: {mano_tijera}
  }
  const botones=btn[opcionelegida]
  return(
<botones/>
  )
}


function marcador({nombre="jugador",marcador=0, opcionelegida="piedra"}){
  return(        
  <div className="jugadores">
  <div className="marcador">
    ("${nombre}: ${marcador}")
  </div>
  <div className="opcion">
     <img src="opcion" alt="tijera"></img>
  </div>
</div>
)
}


function App() {
  return (
    <div className="centrado">
         <h1>piedra papel tijera</h1>
         <jugador className="jugador" puntos={0}></jugador>
         <jugador className="pc" puntos={1}></jugador>
        <div className="contenedor">
          <div className="jugadores">
            <div className="marcador">
                JUGADOR: 0
            </div>
            <div className="opcion">
              <img src={mano_tijera} alt="tijera"></img>
            </div>
          </div>
        </div>
     
        <div className="jugadores">
          <div className="marcador">
              PC: 0
          </div>
          <div className="opcion">
             <img src={mano_tijera}></img>
          </div>
        </div>
       

      <div>
       <button className="boton"><img src={mano_piedra} alt="Piedra"></img></button>
       <button className="boton"><img src={mano_papel} alt="papel"></img></button>
       <button className="boton"><img src={mano_tijera} alt="tijera"></img></button>
        <div>
         <h2>jugador 1 gana</h2>
        </div>
      </div>
    
      
    </div>
  );
}

export default App;
