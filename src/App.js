
   
    
    
  





import React, { useState } from 'react';
import './style.css';
import Navbar from './Components/Navbar/Navbar';
import Names from './Components/Names/Names';
import ColorSlider from './Components/ColorList/Slider/ColorSlider';
import ColorBox from './Components/ColorBox/ColorBox';
import TicTacToe from './Components/TicTacToe/TicTacToe';
import MovieForm from './Components/LukasPage/movieForm';
import CircleClicker from './Components/CircleClicker/CircleClicker.jsx';
import NameForm from './Components/NameForm/Form'
import App21 from "./Components/App21/App21";
import AlexList from './Components/AlexList/AlexList';
import ColorClick from './Components/ColorClick/ColorClick';
import DakotaPage from './Components/DakotaPage/DakotaPage';
import Minesweeper from './Components/Minesweeper/Minesweeper';
//DCM(1a) -+ import {ColorList, ColorBox} from './Components/ComponentImportList';
//DCM(1b) -- The Code in comment 1a is an alternative way of importing all component pieces in fewer lines of code using the file ComponentImportList.js.

const routes = {
        Jili:  <Names />,
        Christopher: <ColorSlider />,
        Aaron: <TicTacToe />,
        Damien: <ColorBox />,
        Dakota: <DakotaPage />,
        Lukas: <MovieForm />,
        Jacob: <App21 />,
        Dan: <CircleClicker/>,
        Anthony: <NameForm title='Yay React!' />,
        Alex:  <AlexList />,
        Frank: <ColorClick />,
        Emuhit: <Minesweeper/>
     };

export default function App() {
  const [route, setRoute] = useState(null);

  const Router = function (routesObj, updateRoute) {
    this.routes = Object.keys(routesObj);
    this.navigate = (key)=>updateRoute(routesObj[key]);
  };
  
  const router = new Router(routes, setRoute);

  return (
    <div>
      <Navbar router={router} />
      {route}
    </div>
  );
}


