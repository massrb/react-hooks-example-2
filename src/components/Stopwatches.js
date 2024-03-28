import Stopwatch from './Stopwatch'

const Stopwatches = ({amount, cycle, watchData}) => {
  const watchList = watchData.map((attr, idx) => {
    let params = {...attr, ...{amount: amount, cycle: cycle}}
    return(
      <li key={attr.key}>
        <Stopwatch {...params} />
      </li>)
   });

  return(
   <>
     <ul className='watch-list'>{watchList}</ul>
   </>
  )

}

export default Stopwatches;