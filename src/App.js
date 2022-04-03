import React, { useState } from 'react';
import './style.css';
import { Navbar, Names, ColorSlider, ColorBox, TicTacToe, MovieForm, CircleClicker, NameForm, App21, AlexList, ColorClick, DakotaPage, Minesweeper } from './Components/Common';

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


