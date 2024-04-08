import React, { useState } from 'react'
import './style.css'


function Calc() {

const [display,setDisplay]=useState('')
const [number,setNumber]=useState('')
const [operator,setOperator]=useState('') 
const [input, setInput] = useState('');
  const [result, setResult] = useState('');
// const [prevInputValue, setPrevInputValue] = useState('');
 console.log('number is',number);
 console.log('operator is',operator);
 console.log('display is',display);



const handleNumberClick=(num,event)=>{
  event.preventDefault()
    setNumber((prevNum)=>prevNum + num)
    setDisplay(display + num)
}



const handleOperatorClick=(op,event)=>{
event.preventDefault();

if(op ==='\u221A'){
// setOperator('√')
setOperator((number)=>number + op)

setDisplay(display + op)
}
 else if(number!=='' && op!=='\u221A'){
        setOperator((number)=>number + op)
        setDisplay(display + op)
    }
    else{
        setDisplay('')
    }
}


// function  sqrtRoot(number){Math.sqrt(number)}

const calculateResult=()=>{

    // try {
    //     const sanitizedInput = input.replace(/[^-()\d/*+.]/g, '');
    //     console.log('sanitizedInput is',sanitizedInput); // Sanitize input
    //     setDisplay(eval(sanitizedInput).toString());
    //     // if(display.includes('\u221A' || '√')){
           
    //     //     console.log('math sqrt is ',Math.sqrt(number));


    //     // }
    //   } catch (error) {
    //     setDisplay('Error');
    //   }


 let result
 switch (operator) {
    case '+':
        result=eval(display)
    //    result= eval(parseFloat(display).toString())
       var decimalValue= eval(parseFloat(display).toString()).toFixed(4)
        console.log(decimalValue);
        var decimal=result%1!==0?decimalValue.toString():result
        setDisplay(result)
        console.log('result',result);
        
        break;
        case '-':
        result=eval(display)
        var decimal=result%1!==0?decimalValue:result
        setDisplay(decimal)
        

        console.log('result',result);
        
        break;
        case '*':
        result=eval(display)
        var decimal=result%1!==0?decimalValue:result
        setDisplay(decimal)
        

        console.log('result',result);
        
        break;
        case '/':
        result=eval(display)
        var decimal=result%1!==0?decimalValue:result
        setDisplay(decimal)
        

        console.log('result',result);
        
        break;
        case '√':
            result = Math.sqrt(number)
            // The % operator returns the remainder of dividing 
            var decimalValue=result.toFixed(4)
        //   const decimal= result%1 !== 0?Math.sqrt(number).toFixed(4):Math.sqrt(number)
    var decimal=result%1!==0?decimalValue:result
            console.log('decimalvalue',decimal);
        setDisplay(decimal)
        break;
        case '%':
                result = (parseFloat(number) / 100) ;
                console.log(result);
                setDisplay(result)
                console.log(result);

                break;
    default: 
    result=eval(display) ;
    setDisplay(result);
        break;
 }

}



const clearScreen=(event)=>{
   event.preventDefault()
    setDisplay('')
    setNumber('')
    setOperator('')

}
const handleDelete=(event)=>{
    event.preventDefault()
    setDisplay(display.slice(0,display.length-1))
}



  return (
    <>
    <div className="container">
        {/* <form action=""> */}
            <input type="text" id='inputData' value={display} onChange={(e) => setDisplay(e.target.value)} readOnly/>
            <div className="keypad">
            <button name='backspace' className='operator' onClick={clearScreen} id='Backspace'>C</button>
            <button name='+' className='operator' onClick={(e)=>handleOperatorClick('+',e)}>+</button>
            <button name='/' className='operator' onClick={(e)=>handleOperatorClick('/',e)}>&divide;</button>
            <button name='-' className='operator' onClick={(e)=>handleOperatorClick('-',e)}>&ndash;</button>
            <button name='9' className='operator' onClick={(e)=>handleNumberClick('9',e)}>9</button>
            <button name='8' className='operator' onClick={(e)=>handleNumberClick('8',e)}>8</button>
            <button name='7' className='operator' onClick={(e)=>handleNumberClick('7',e)}>7</button>
            <button name='*' className='operator' onClick={(e)=>handleOperatorClick('*',e)}>&times;</button>
            <button name='6' className='operator' onClick={(e)=>handleNumberClick('6',e)}>6</button>
            <button name='5' className='operator' onClick={(e)=>handleNumberClick('5',e)}>5</button>
            <button name='4' className='operator' onClick={(e)=>handleNumberClick('4',e)}>4</button>
            <button name='√' value={'√'} className='operator' onClick={(e)=>handleOperatorClick('\u221A',e)}>&radic;</button>
            <button name='3' className='operator' onClick={(e)=>handleNumberClick('3',e)}>3</button>
            <button name='2' className='operator' onClick={(e)=>handleNumberClick('2',e)}>2</button>
            <button name='1' className='operator' onClick={(e)=>handleNumberClick('1',e)}>1</button>
            <button name='%' className='operator' onClick={(e)=>handleOperatorClick('%',e)}>%</button>
            <button name='0' className='operator' onClick={(e)=>handleNumberClick('0',e)} id='zeroth'>0</button>
            <button name='.' className='operator' onClick={(e)=>handleNumberClick('.',e)}>.</button>
            <button name='equalto' className='operator' onClick={calculateResult}>=</button>
            <button name='equalto' className='operator' onClick={handleDelete} >DEL</button>
        </div>
        {/* </form> */}
    </div>
    
    </>
  )
}

export default Calc