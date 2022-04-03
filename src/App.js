import React, { useState } from 'react';
import './style.css';
import all from './Components/ComponentImportList';

const routes = {
        Jili:  <all.Names />,
        Christopher: <all.ColorSlider />,
        Aaron: <all.TicTacToe />,
        Damien: <all.ColorBox />,
        Dakota: <all.DakotaPageD />,
        Lukas: <all.MovieForm />,
        Jacob: <all.App21 />,
        Dan: <all.CircleClicker/>,
        Anthony: <all.NameForm title='Yay React!' />,
        Alex:  <all.AlexList />,
        Frank: <all.ColorClick />,
        Emuhit: <all.Minesweeper/>
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
      <all.Navbar router={router} />
      {route}
    </div>
  );
}


