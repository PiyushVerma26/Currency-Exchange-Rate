import React, { useCallback, useState } from 'react';
import Box from './components/Box';
import censusImage from '../img/census.avif';
import { useCurrency } from './hooks/Custom';

function App() {
   const backgroundStyle = {
    minHeight: '100vh',
    minWidth: '100vw',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    backgroundImage: `url(${censusImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const [from, setFrom] = useState(' ');
  const [To, setTo] = useState(' ');
  const [fromChange, setfromChange] = useState('inr');
  const [ToChange, setToChange] = useState('usd');

  const fromData = useCurrency(fromChange);

  const options = Object.keys(fromData);
function swapValue() {
  setfromChange((prevFromChange) => ToChange);
  setToChange((prevToChange) => fromChange);
}

 const handleCalculate = useCallback(() => {
  console.log(fromChange + ' ' + ToChange + ' ' + fromData[ToChange] +from);
  setTo(from*fromData[ToChange])
}, [fromChange, ToChange, fromData,from]);

  return (
    <div className="p-2 relative" style={backgroundStyle}>
   
      <button className='absolute md:top-[45%] top-[44%] backdrop-blur-3xl bg-blue-700 p-2 px-3 rounded-2xl z-10 font-bold text-white' onClick={swapValue}>
  SWAP
</button>


      <Box getting={setFrom} Change={setfromChange} data={options} changeVal={fromChange} isDis={false} values={from} />
      <Box getting={setTo} Change={setToChange} data={options} changeVal={ToChange} isDis={true} values={To}/>
      <button className='bg-black p-2 rounded-xl text-white px-3 font-bold tracking-widest' onClick={handleCalculate}>Calculate</button>

    </div>
  );
}
export default App;
