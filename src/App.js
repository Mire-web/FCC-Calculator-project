import {TbPercentage} from 'react-icons/tb'
import {BsDash, BsPlus} from 'react-icons/bs'
import {RiCloseFill} from 'react-icons/ri'
import {useState} from 'react'
import {evaluate} from 'mathjs'

function App() {
    const [input, setInput] = useState('0')
  const [output, setOutput] = useState('')
  function getInput(e){
    e.preventDefault();
    if(output === ''){
      if(input === '0'){
      setInput('') 
    setInput(e.target.innerText)
      }else{
    setInput(input+e.target.innerText)
  }
  }else{
    clear()
    setInput('')
    setInput(e.target.innerText)
  }
  }
  function makeOutput(e){
    e.preventDefault();
    let doubleOperator =/\s\./ig;
    let correction = /\./i;
    if(doubleOperator.test(input)){
    if(input.match(doubleOperator).length >= 2){
      let correctForm = input.split('')
      correctForm.splice(input.match(correction).index, input.match(doubleOperator).length - 1)
      setOutput(evaluate(correctForm.join('')))
    }else{
      setOutput(evaluate(input))
    }
  }else{
      setOutput(evaluate(input))
    }
  }
  function clear(){
    setInput('0')
    setOutput('')
  }
  function calculate(e){
    e.preventDefault();
    if(output === ''){
        if(e.target.getAttribute('id')==='divide'){setInput(input+' / ')}
        else if(e.target.getAttribute('id')==='multiply'){setInput(input+' * ')}
        else if(e.target.getAttribute('id')==='subtract'){setInput(input+' - ')}
        else if(e.target.getAttribute('id')==='add'){setInput(input+' + ')}
    }else{
        if(e.target.getAttribute('id')==='divide'){
          setInput(output+' / ')
          setOutput('')
        }
        else if(e.target.getAttribute('id')==='multiply'){
          setInput(output+' * ')
          setOutput('')
        }
        else if(e.target.getAttribute('id')==='subtract'){
          setInput(output+' - ')
          setOutput('')
        }
        else if(e.target.getAttribute('id')==='add'){
          setInput(output+' + ')
          setOutput('')
        }
    }
  }
  return (
    <div className="App">
    <div id="display">
    <div id="input">{input}</div>
    <div id="output">{output}</div>
    </div>
    <div id="controls">
    <div id="numbers">
    <div id="seven" className="box" onClick={getInput}>7</div>
    <div id="eight" className="box" onClick={getInput}>8</div>
    <div id="nine" className="box" onClick={getInput}>9</div>
    <div id="four" className="box" onClick={getInput}>4</div>
    <div id="five" className="box" onClick={getInput}>5</div>
    <div id="six" className="box" onClick={getInput}>6</div>
    <div id="one" className="box" onClick={getInput}>1</div>
    <div id="two" className="box" onClick={getInput}>2</div>
    <div id="three" className="box" onClick={getInput}>3</div>
    <div id="decimal" className="box" onClick={getInput}>.</div>
    <div id="zero" className="box" onClick={getInput}>0</div>
    <div id="equals" className="box" onClick={makeOutput}>=</div>
    </div>
    <div id="operations">
    <div id="clear" className="operand" onClick={clear}>DEL</div>
    <div id="divide" className="operand" onClick={calculate}><TbPercentage style={{transform: 'rotate(45deg)', pointerEvents:'none'}}/></div>
    <div id="multiply" className="operand" onClick={calculate}><RiCloseFill style={{pointerEvents:'none'}}/></div>
    <div id="subtract"  className="operand" onClick={calculate}><BsDash style={{pointerEvents:'none'}}/></div>
    <div id="add" className="operand" onClick={calculate}><BsPlus style={{pointerEvents:'none'}}/></div>
    </div>
    </div>
    </div>
  );
}

export default App;
