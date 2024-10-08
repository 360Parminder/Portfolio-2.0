
import './App.css';
import Content from './Components/Content/Content';
import LeftNav from './Components/Header/LeftNav';
import RightNav from './Components/Header/RightNav';

function App() {
  return (

    <div className='topographyBg flex flex-col items-center '>
    <LeftNav />
    <RightNav />
    <Content/>
    </div>
  )
}

export default App;
