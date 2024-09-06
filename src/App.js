
import './App.css';
import LeftNav from './Components/Header/LeftNav';
import RightNav from './Components/Header/RightNav';

function App() {
  return (
    <>
    <div className='topographyBg flex flex-row justify-between h-screen w-screen'>
    {/* <h1 className=' container text-[var(--font-color)] text-center text-5xl font-bold'>
      hello world!
    </h1> */}
    <LeftNav />
    <RightNav />
    </div>
    </>
  );
}

export default App;
