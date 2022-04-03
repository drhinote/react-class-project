import React, { useState } from 'react';
import './style.css';
import Names from './Components/Names/Names';
import ColorSlider from './Components/ColorList/Slider/ColorSlider';
import ColorBox from './Components/ColorBox/ColorBox';
import TicTacToe from './Components/TicTacToe/TicTacToe';
import MovieForm from './Components/LukasPage/movieForm';
import CircleClicker from './Components/CircleClicker/CircleClicker.jsx';
import NameForm from './Components/NameForm/Form';
import App21 from './Components/App21/App21';
import AlexList from './Components/AlexList/AlexList';
import ColorClick from './Components/ColorClick/ColorClick';
import DakotaPage from './Components/DakotaPage/DakotaPage';
import { ColorList, ColorBox, Navbar } from './Components/ComponentImportList';
//DCM(1b) -- The Code in comment 1a is an alternative way of importing all component pieces in fewer lines of code using the file ComponentImportList.js.

export default function App() {
  const [route, setRoute] = useState(null);

  const routes = {
    Jili: <Names />,
    Christopher: <ColorSlider />,
    Aaron: <TicTacToe />,
    Damien: <ColorBox />,
    Dakota: <DakotaPage />,
    Lukas: <MovieForm />,
    Jacob: <App21 />,
    Dan: <CircleClicker />,
    Anthony: <NameForm title="Yay React!" />,
    Alex: <AlexList />,
    Frank: <ColorClick />,
  };

  return (
    <div>
      <Navbar setSelected={setRoute} routes={routes} />
      {route}
    </div>
  );
}
