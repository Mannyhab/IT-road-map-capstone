import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import SoftwareDevelopmentPage from "./pages/SoftwareDevelopmentPage/SoftwareDevelopmentPage";
import NetworkingPage from './pages/NetworkingPage/NetworkingPage';
import DataSciencePage from './pages/DataSciencePage/DataSciencePage';
import CyberSecurityPage from './pages/DataSciencePage/DataSciencePage';
import CloudComputingPage from './pages/CloudComputingPage/CloudComputingPage';
import AIandRoboticsPage from './pages/AIandRoboticsPage/AIandRoboticsPage';
import WebDevelopmentPage from "./pages/SoftwareDevelopmentPage/WebDevelopmentPage/WebDevelopmentPage";
import FrontendStacksPage from "./pages/SoftwareDevelopmentPage/WebDevelopmentPage/FrontendStacksPage/FrontendStacksPage";
import BackendStacksPage from "./pages/SoftwareDevelopmentPage/WebDevelopmentPage/BackendStacksPage/BackendStacksPage";
import FullstackStacksPage from "./pages/SoftwareDevelopmentPage/WebDevelopmentPage/FullstackStackspage/FullstacksStacksPage";
import GameDevelopmentPage from "./pages/SoftwareDevelopmentPage/GameDevelopmentPage/GameDevelopmentPage";
import MobileDevelopmentPage from "./pages/SoftwareDevelopmentPage/MobileDevelopmentPage/MobileDevelopmentPage";
import DesktopDevelopmentPage from "./pages/SoftwareDevelopmentPage/DesktopDevelopmentPage/DesktopDevelopmentPage";
import EmbeddedSystemsPage from "./pages/SoftwareDevelopmentPage/EmbeddedSystemsPage/EmbeddedSystemsPage";
import AndroidPage from "./pages/SoftwareDevelopmentPage/MobileDevelopmentPage/AndroidPage";
import iOSPage from "./pages/SoftwareDevelopmentPage/MobileDevelopmentPage/iOSPage";
import WindowsPage from "./pages/SoftwareDevelopmentPage/DesktopDevelopmentPage/WindowsPage";
import MacPage from "./pages/SoftwareDevelopmentPage/DesktopDevelopmentPage/MacPage";
import TwoDGamesPage from "./pages/SoftwareDevelopmentPage/GameDevelopmentPage/TwoDGamesPage";
import ThreeDGamesPage from "./pages/SoftwareDevelopmentPage/GameDevelopmentPage/ThreeDGamesPage";

import VrArGamesPage from "./pages/SoftwareDevelopmentPage/GameDevelopmentPage/VrArGamesPage";
import MobileGamesPage from "./pages/SoftwareDevelopmentPage/GameDevelopmentPage/MobileGamesPage";
import MicrocontrollersPage from "./pages/SoftwareDevelopmentPage/EmbeddedSystemsPage/MicrocontrollersPage";
import RTOSPage from "./pages/SoftwareDevelopmentPage/EmbeddedSystemsPage/RTOSPage";
import Header from "./components/Header/Header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="software-development"
          element={<SoftwareDevelopmentPage />}
        >
          <Route path="web-development" element={<WebDevelopmentPage />}>
            <Route path="frontend" element={<FrontendStacksPage />} />
            <Route path="backend" element={<BackendStacksPage />} />
            <Route path="fullstack" element={<FullstackStacksPage />} />
          </Route>

          <Route path="game-development" element={<GameDevelopmentPage />}>
            <Route path="2D-games" element={<TwoDGamesPage />} />
            <Route path="3D-games" element={<ThreeDGamesPage />} />
            <Route path="mobile-games" element={<MobileGamesPage />} />
            <Route path="vr-ar-games" element={<VrArGamesPage />} />
            {/* ... other game development routes */}
          </Route>

          <Route path="mobile-development" element={<MobileDevelopmentPage />}>
            <Route path="iOS" element={<iOSPage />} />
            <Route path="android" element={<AndroidPage />} />
            {/* ... other mobile development routes */}
          </Route>

          <Route
            path="desktop-development"
            element={<DesktopDevelopmentPage />}
          >
            <Route path="windows" element={<WindowsPage />} />
            <Route path="mac" element={<MacPage />} />
            {/* ... other desktop development routes */}
          </Route>

          <Route path="embedded-systems" element={<EmbeddedSystemsPage />}>
            <Route path="microcontrollers" element={<MicrocontrollersPage />} />
            <Route path="RTOS" element={<RTOSPage />} />
            {/* ... other embedded systems routes */}
          </Route>
        </Route>
        <Route path="/networking" element={<NetworkingPage />} />
        <Route path="/data-science" element={<DataSciencePage />} />
        <Route path="/cybersecurity" element={<CyberSecurityPage />} />
        <Route path="/cloud" element={<CloudComputingPage />} />
        <Route path="/ai-and-robotics" element={<AIandRoboticsPage />} />
      </Routes>
    </>
  );
}

export default App;
