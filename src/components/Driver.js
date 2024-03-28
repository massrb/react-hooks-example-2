import React, { useState, useEffect } from "react";
import Select from 'react-select'
import Buttons from './Buttons'
import Stopwatch from './Stopwatch'
import Stopwatches from './Stopwatches'

export const DriverContext = React.createContext(null);

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
  const [modalData, setModalData] = useState({});

  // increment count by a specific amount
  const UpdateCount = (upd_by) => {
    let prev = count
    let newCount = count + upd_by 
    setCount(newCount)
    // depending on new count value, 
    // some stopwatches may be reset
    if (((prev > 0) && (newCount < 0)) ||
       ((prev < 0) && (newCount > 0)) || 
       (newCount === 0)) {
         setCycle(cycle + 1)
       }
  }

  // Add one watch when the driver loads
  useEffect(() => {
    addWatch()
    // eslint-disable-next-line
  }, []);

  const addWatch = (modal=false) => {
    let key = watchData.length + 1
    // default settings for quick add of stopwatch
    let element =  {key: key, running:true, show_buttons: true, reset_on_cycle: true, reset_on_amount: true }
    if (modal) {
      // modal may have set specific stopwatch configuration
      element = {...element, ...modalData}
    }
    setWatchData([...watchData, ...[element]])
  }
  
  const removeWatch = () => {
    setWatchData(watchData.slice(0,-1))
  }

  const increment = () => {
    UpdateCount(amount)
  };

  const decrement = () => {
    UpdateCount(-Math.abs(amount))
  };

  const setSelectVal = (evt) => {
    setAmount(evt.value)
  }

  const ButtonProps = {decrement, increment,
                       addWatch, removeWatch}

  return (
    <div id="app-main">
      <div className="text-center mt-5">
        <h1 style={{display: "inline"}}>React Hooks</h1>
        <Stopwatch running={true} />
      </div>
      <div className="text-center" style={{ marginTop: "30vh" }}>
        <h1>{count}</h1>
        <DriverContext.Provider value={{watch: [watchData, setWatchData], modal: [modalData, setModalData]}}>
          <br/>
          <Stopwatches amount={amount} cycle={cycle} watchData={watchData}/>
          <br/>
          <Buttons {...ButtonProps}/>
        </DriverContext.Provider>  
      </div>
      <div className="select-container">
        <Select options={select_options} onChange={setSelectVal} /> 
      </div>
    </div>
  );
};

export default Driver;
