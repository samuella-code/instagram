import logo from './logo.svg';
import './App.css';
import MiddleSide from './Component/middleSide';
import LeftSide from './Component/leftSide';
import RightSide from './Component/rightSide';

function App() {
  return (
    <div className="App">
   <div className="leftSideHome">
    <LeftSide />
   </div>
   <div className="middleSide">
    Middle Side
  <MiddleSide/>
   </div>
   <div className="rightSide">
   <RightSide/>
   </div>
    </div>
  );
}

export default App;
