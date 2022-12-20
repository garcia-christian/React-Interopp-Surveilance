

import React, { Fragment, useEffect, useState, useContext, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./Components/Dashboard";
import ChartMain from "./Components/ChartMain";
import HeatMap from "./Components/HeatMap";
import Agdao from "./Components/Districts/Agdao";
import Baguio from "./Components/Districts/Baguio";
import Buhangin from "./Components/Districts/Buhangin";
import Bunawan from './Components/Districts/Bunawan';
import Calinan from './Components/Districts/Calinan';
import Marilog from './Components/Districts/Marilog';
import Paquibato from './Components/Districts/Paquibato';
import Poblacion from './Components/Districts/Poblacion';
import Talomo from './Components/Districts/Talomo';
import Toril from './Components/Districts/Toril';
import Tugbok from './Components/Districts/Tugbok';
function App() {



  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path={"/main/*"} element={<Dashboard />}>
            <Route path='home' element={<HeatMap />} />
            <Route path='chartmain' element={<ChartMain />} />
            <Route path='agdao' element={<Agdao />} />
            <Route path='baguio' element={<Baguio />} />
            <Route path='buhangin' element={<Buhangin />} />
            <Route path='bunawan' element={<Bunawan />} />
            <Route path='calinan' element={<Calinan />} />
            <Route path='marilog' element={<Marilog />} />
            <Route path='paquibato' element={<Paquibato />} />
            <Route path='poblacion' element={<Poblacion />} />
            <Route path='talomo' element={<Talomo />} />
            <Route path='toril' element={<Toril />} />
            <Route path='tugbok' element={<Tugbok />} />

          </Route>

          <Route path="/" element={<Navigate replace to="/main/home" />} />

        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
