import React, { useState } from "react";
import Select from 'react-select'
import Buttons from './Buttons'
import Stopwatch from './Stopwatch'
import Stopwatches from './Stopwatches'

const select_options = [
  { value: 2, label: 'two' },
  { value: 3, label: 'three' },
  { value: 4, label: 'four' }
]

const Driver = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1)
  const [cycle, setCycle] = useState(0)
  const [watchData, setWatchData] = useState([])

  const UpdateCount = (upd_by) => {
    let prev = count
    let newCount = count + upd_by 
    setCount(newCount)
    console.log('prev', prev)
    console.log('count', newCount)
    console.log('cycle', cycle)
    if (((prev > 0) && (newCount < 0)) ||
       ((prev < 0) && (newCount > 0)) || 
       (newCount === 0)) {
         setCycle(cycle + 1)
       }
  }

  const addWatch = () => {
    let key = watchData.length + 1
    let element =  {key: key, running:true, showButtons: true }
    setWatchData([...watchData, ...[element]])
  }
  
  const removeWatch = () => {
    setWatchData(watchData.slice(0,-1))
  }

  const IncNum = () => {
    UpdateCount(amount)
  };

  const DecNum = () => {
    UpdateCount(-Math.abs(amount))
  };

  const setSelectVal = (evt) => {
    setAmount(evt.value)
  }

  const ButtonProps = {decrement: DecNum, increment: IncNum, 
                       addWatch: addWatch, removeWatch: removeWatch}

  return (
    <div id="app-main">
      <div className="text-center mt-5">
        <h1 style={{display: "inline"}}>React Hooks</h1>
        <Stopwatch running={true} />
      </div>
      <div className="text-center" style={{ marginTop: "30vh" }}>
        <h1>{count}</h1>
        <br/>
        <Stopwatches amount={amount} cycle={cycle} watchData={watchData}/>
        <br/>
        <Buttons {...ButtonProps}/>
      </div>
      <div className="select-container">
        <Select options={select_options} onChange={setSelectVal} /> 
      </div>
    </div>
  );
};

export default Driver;
