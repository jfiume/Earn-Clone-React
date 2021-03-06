import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import HeaderBar from './components/header_bar';
import Profile from './components/profile';
import AboutYou from './components/about_you';
import PublicProfile from './components/public_profile';
import YourPrices from './components/your_prices';
import MenuBox from './components/menu_box';

const NavBar = styled.nav`
  position: fixed;
  z-index: 2;
  background-color: white;
  opacity: 1;
`;

const LinksBox = styled.div`
  position: fixed;
  z-index: 2;
  background-color: white;
  opacity: 1;
  float: left;
  top: 120px;
  left: 200px;
  background-color: #FAFAFA;
`;

const Sections = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(255,255,255,0);
  font-family: 'Titillium Web','Helvetica Neue',Helvetica,Arial,sans-serif;
  font-size: 16px;
  position: relative;
  top: 100px;
  left: 430px;
  margin: 0;
  color: #404040;
  line-height: 1.42857143;
  letter-spacing: 1px;
  padding-top: 1px;
  margin-top: -1px;
`

class App extends Component {
  render() {
    return (
      <div>
        <NavBar>
          <HeaderBar />
        </NavBar>
        <LinksBox>
          <MenuBox />
        </LinksBox>
        <Sections>
          <Profile />
        </Sections>
        <Sections>
          <AboutYou />
        </Sections>
        <Sections>
          <PublicProfile />
        </Sections>
        <Sections>
          <YourPrices />
        </Sections>
      </div>
    );
  }
}

export default App;




/* <div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p>
</div> */
