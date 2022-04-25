import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SalePage from "./pages/salepage/SalePage";
import MainPage from "./pages/mainpage/MainPage";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

const Container = styled.div`
  display: flex;
  height: calc(100vh - 240px);
  margin-right: 300px;
  margin-top: 100px;
`;

const Others = styled.div`
  flex: 3;
  // background-color: wheat;
`;

const SideBarFlex = styled.div`
  flex: 1;
`;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Container>
          <SideBarFlex>
            <Sidebar />
          </SideBarFlex>
          <Others>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/sales/*" element={<SalePage />} />
              {/* <Route path="/reservation" element={<TestPage />} />
              <Route path="/review" element={<TestPage />} /> */}
            </Routes>
          </Others>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
