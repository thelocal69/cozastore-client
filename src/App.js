import './App.css';
import React from 'react';
import { dark, light } from "./shared/Theme";
import { GlobelStyle } from "./shared/Theme";
import { ThemeProvider } from 'styled-components';
import { useSelector } from "react-redux";
import NavBar from './components/nav-bar/NavBar';
import Footer from './components/footer/Footer';
import AppRoutes from './routes/AppRoutes';
import { getCategories } from "./redux/actions/Actions";
import { useDispatch } from "react-redux";
import { StyledEngineProvider } from '@mui/material/styles';



function App() {

  const themeToggle = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={!themeToggle ? light : dark}>
          <GlobelStyle />
          <div className="App">
            <NavBar />
            <AppRoutes />
            <Footer />
          </div>
      </ThemeProvider>
    </StyledEngineProvider>
    </>
  );
}

export default App;
