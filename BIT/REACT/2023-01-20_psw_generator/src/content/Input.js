import { useState, useEffect} from 'react';

const Input = ({setData}) => {

const [len, setLen]=useState(6);
const [difficulty, setDifficulty]=useState();
const [cap, setCap]=useState(false);
const [low, setLow]=useState(false);
const [number, setNumber]=useState(false);
const [symbol, setSymbol]=useState(false);
const [submitDone, setSubmitDone]=useState(true);
const variables=[cap, low, number, symbol];
const names=[     ['Include Capital letters', ()=>setCap(!cap)],
                  ['Include Lower case letters', ()=>setLow(!low)],
                  ['Include Numbers', ()=>setNumber(!number)],
                  ['Include special Symbols', ()=>setSymbol(!symbol)]
            ]

useEffect (()=>{
      if (len > 50) setLen(50);
      // eslint-disable-next-line react-hooks/exhaustive-deps
},[submitDone])

const handleForm = (e) =>{
      e.preventDefault();
      setData({len:len, difficulty:difficulty, cap:cap, low:low, number:number, sym:symbol});

}
      
return (
      <div>
          <form onSubmit={handleForm}>
            <button>Generate Password</button>
            <div>
              <label>Password Length</label>
              <input    type="number" min="6" max="50" value={len}
                        onChange={(e)=>{  setLen(e.target.value);  
                                          setSubmitDone(!submitDone)}} />
            </div>
            <div>
              <label>Difficulty</label>
              {/* <Select options={options} /> */}
              <select value={difficulty} defaultValue='medium' onChange={(e)=>{setDifficulty(e.target.value)}}>
                  <option value='simple'>Simple</option>
                  <option value='medium'>Medium</option>
                  <option value='hard'>Hard</option>
              </select>
            </div>

            {variables.map((v,i)=>{return(
            <div key={i}>
                <label>{names[i][0]}</label>
                {v!==true ? 
                <input type="checkbox" name="capitalLetters" defaultChecked value={v} onChange={names[i][1]}/> :
                <input type="checkbox" name="capitalLetters" value={v} onChange={names[i][1]}/>
            }
            </div>
                  )
            })
            }

          </form>
          <button>Reset to Default</button>
      </div>
  );
}


export default Input;