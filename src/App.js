
import './App.css';
import Content from './Components/Content/Content';
import LeftNav from './Components/Header/LeftNav';
import RightNav from './Components/Header/RightNav';

function App() {
  return (
    <>
    <div className='topographyBg flex flex-row justify-between items-center h-screen w-screen'>
    {/* <h1 className=' container text-[var(--font-color)] text-center text-5xl font-bold'>
      hello world!
    </h1> */}
    <LeftNav />
    <Content/>
    <RightNav />
    </div>
    </>
  );
}

export default App;
