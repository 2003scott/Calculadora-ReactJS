// import logo from './logo.svg';
import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';
// import logo from './images/logo.png'
import {useState} from 'react'
import {evaluate} from 'mathjs'

function App() {

  const [input,setInput] = useState('')

  const agregarInput = val => {
      setInput(input + val)
  };

  const calcularResultado = () =>{
    try{
      if (input) {
        setInput(evaluate(input)) 
      }else{
        alert("Ingresa valores :D")
      }
    }catch(error){
      alert("Ups !Algo salio ")
      console.log(error + "Error de sintaxis bro")
    }
  };

  return (
    <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          {/* <img src={logo} alt='Logo de FreeCodeCamp' className='freecodecamp-logo'/> */}
          <h1 className='calculadora'>Calculadora</h1>
          <br/>
          <strong className='name'> - ReactJS</strong>
        </div>
        <div className='contenedor-calculadora'>
          <Pantalla input={input}></Pantalla>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
          </div>
        </div>
    </div>
  );
}

export default App;
