import { useState, useEffect} from 'react';
import style from './input.module.css';

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
      <div className="container d-flex flex-column align-items-center text-center">
          <form onSubmit={handleForm} >
            <button className="btn btn-success m-3">Generate Password</button>
            <div className="d-flex flex-row input-group ms-2">
              <label className="input-group-text">Password Length</label>
              <input  className={style.numberInput}  type="number" min="6" max="50" value={len}
                        onChange={(e)=>{  setLen(e.target.value);  
                                          setSubmitDone(!submitDone)}} />
            </div>
            <div className="d-flex flex-row input-group m-2">
              <label  className="input-group-text">Difficulty</label>
              {/* <Select options={options} /> */}
              <select className="form-select text-right me-2" value={difficulty} defaultValue='medium' onChange={(e)=>{setDifficulty(e.target.value)}}>
                  <option value='simple'>Simple</option>
                  <option value='medium'>Medium</option>
                  <option value='hard'>Hard</option>
              </select>
            </div>

            {variables.map((v,i)=>{return(
            <div key={i} className="d-flex flex-row custom-control custom-checkbox m-2">
                {v!==true ? 
                <input className="custom-control-input me-2" type="checkbox" defaultChecked value={v} onChange={names[i][1]}/> :
                <input className="custom-control-input me-2" type="checkbox" value={v} onChange={names[i][1]}/>
            }
              <label className='custom-control-label'>{names[i][0]}</label>
            </div>
                  )
            })
            }

          </form>
          <button className="btn btn-danger m-3" onClick={()=>{
                                                  setLen(6);
                                                  setDifficulty('medium');
          }}>Reset to Default</button>
      </div>
  );
}


export default Input;