// import React, { useState } from 'react';


// function Calculator() {
    
//    const [num0,setNum0]=useState('');
//    const handleAdd0=()=>{
//     setNum0(0);
//    }
//    const [num1,setNum1]=useState('');

//    const handleAdd1=()=>{
//     setNum0(1);
//    }
//    const [num2,setNum2]=useState('');

//    const handleAdd2=()=>{
//     setNum0(2);
//    }
//    const [num3,setNum3]=useState('');

//    const handleAdd3=()=>{
//     setNum0(3);
//    }
//    const [num4,setNum4]=useState('');

//    const handleAdd4=()=>{
//     setNum0(4);
//    }
//    const [num5,setNum5]=useState('');


//    const handleAdd5=()=>{
//     setNum0(5);
//    }
//    const [num6,setNum6]=useState('');

//    const handleAdd6=()=>{
//     setNum0(6);
//    }
//    const [num7,setNum7]=useState('');

//    const handleAdd7=()=>{
//     setNum0(7);
//    }
//    const [num8,setNum8]=useState('');


//    const handleAdd8=()=>{
//     setNum0(8);
//    }
//    const [num9,setNum9]=useState('');


//    const handleAdd9=()=>{
//     setNum0(9);
//    }
//    const [numpl,setNumpl]=useState('');


//    const handleAddpl=()=>{
//     setNum0(0);
//    }
//    const [nummi,setNummi]=useState('');

//    const handleAddmi=()=>{
//     setNum0(0);
//    }
//    const [numml,setNumml]=useState('');

//    const handleAddml=()=>{
//     setNum0(0);
//    }
//    const [numsub,setNumsub]=useState('');

//    const handleAddsub=()=>{
//     setNum0(0);
//    }
//    const [nume,setNume]=useState('');

//    const handleAdde=()=>{
//     setNum0(0);
//    }

//    const [result,Result]=useState('');
//    const handleAddr=()=>{
//     setNum0(num1+num2);
//    }
   

//     return (
//         <>
//             <h1>Calculator</h1>
//             <div style={{display:'flex'}}>
//             <h1 onClick={handleAdd0}>0</h1>
//             <h1 onClick={handleAdd1}>1</h1>
//             <h1 onClick={handleAdd2}>2</h1>
//             <h1 onClick={handleAdd3}>3</h1>
//             <h1 onClick={handleAdd4}>4</h1>
//             <h1 onClick={handleAdd5}>5</h1>
//             <h1 onClick={handleAdd6}>6</h1>
//             <h1 onClick={handleAdd7}>7</h1>
//             <h1 onClick={handleAdd8}>8</h1>
//             <h1 onClick={handleAdd9}>9</h1>

//             <h1>result={handleAddr}</h1>
//             {/* <h1 onClick={}>+</h1>
//             <h1 onClick={}>-</h1>
//             <h1 onClick={}>*</h1>
//             <h1 onClick={}>/</h1>
//             <h1 onClick={}>=</h1> */}

//             </div>

//             <h1>result</h1>
            
            
//         </>
//     );
// }

// export default Calculator;




import React, { useState } from 'react';

function Calculator() {
    const [input, setInput] = useState('');
    const [operator, setOperator] = useState('');
    const [firstNum, setFirstNum] = useState('');
    const [result, setResult] = useState('');

    // Handle digit clicks
    const handleDigitClick = (digit) => {
        setInput(input + digit);
    };

    // Handle operator clicks
    const handleOperatorClick = (op) => {
        if (firstNum === '') {
            setFirstNum(input);
            setInput('');
        }
        setOperator(op);
    };

    // Handle result calculation
    const handleEqualsClick = () => {
        let calculation;
        const num1 = parseFloat(firstNum);
        const num2 = parseFloat(input);
        
        switch (operator) {
            case '+':
                calculation = num1 + num2;
                break;
            case '-':
                calculation = num1 - num2;
                break;
            case '*':
                calculation = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    calculation = num1 / num2;
                } else {
                    calculation = 'Error';
                }
                break;
            default:
                calculation = input; // If no operator, just show the current input
        }
        
        setResult(calculation);
        setFirstNum('');
        setInput('');
        setOperator('');
    };

    // Handle clearing the input
    const handleClearClick = () => {
        setInput('');
        setFirstNum('');
        setOperator('');
        setResult('');
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Calculator</h1>
            <div style={{ marginBottom: '10px' }}>
                <h2>{input || result || '0'}</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 60px)', gap: '10px' }}>
                <button onClick={() => handleDigitClick('1')}>1</button>
                <button onClick={() => handleDigitClick('2')}>2</button>
                <button onClick={() => handleDigitClick('3')}>3</button>
                <button onClick={() => handleOperatorClick('+')}>+</button>
                
                <button onClick={() => handleDigitClick('4')}>4</button>
                <button onClick={() => handleDigitClick('5')}>5</button>
                <button onClick={() => handleDigitClick('6')}>6</button>
                <button onClick={() => handleOperatorClick('-')}>-</button>
                
                <button onClick={() => handleDigitClick('7')}>7</button>
                <button onClick={() => handleDigitClick('8')}>8</button>
                <button onClick={() => handleDigitClick('9')}>9</button>
                <button onClick={() => handleOperatorClick('*')}>*</button>
                
                <button onClick={() => handleDigitClick('0')}>0</button>
                <button onClick={handleClearClick}>C</button>
                <button onClick={handleEqualsClick}>=</button>
                <button onClick={() => handleOperatorClick('/')}>/</button>
            </div>
        </div>
    );
}

export default Calculator;
