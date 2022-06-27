import './App.css';
import logo from './img/logo.png';
import Button from './components/button.jsx'
import Screen from './components/screen';
import ButtonClear from './components/button-clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const addInput = value =>{
    setInput(input + value);
  };

  const calcResult = () =>{

    if(input){
    setInput(evaluate(input));
    }
    else{
        alert('Please enter some value');
    }
  };

  return (
    <div className='App'>
        <div className='logo-container'>
            <img className='logo' src={logo} alt='logo' />
        </div>
        
        <div className='calc-container'>
            <Screen input={input}/>
            <div className='fila'>
                <Button clic={addInput}>7</Button>
                <Button clic={addInput}>8</Button>
                <Button clic={addInput}>9</Button>
                <Button clic={addInput}>+</Button>
            </div>  
            <div className='fila'>
                <Button clic={addInput}>4</Button>
                <Button clic={addInput}>5</Button>
                <Button clic={addInput}>6</Button>
                <Button clic={addInput}>-</Button>
            </div>
            <div className='fila'>
                <Button clic={addInput}>1</Button>
                <Button clic={addInput}>2</Button>
                <Button clic={addInput}>3</Button>
                <Button clic={addInput}>*</Button>
            </div>
            <div className='fila'>
                <Button clic={addInput}>.</Button>
                <Button clic={addInput}>0</Button>
                <Button clic={calcResult}>=</Button>
                <Button clic={addInput}>/</Button>
            </div>
            <div className='fila'>
                <ButtonClear clear={() => setInput('')}>Clear</ButtonClear>
            </div>
        </div>
    </div>
  );
}

export default App;
