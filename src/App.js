import './App.css';
import { dark, light } from "./shared/Theme";
import { GlobelStyle } from "./shared/Theme";
import { ThemeProvider } from 'styled-components';
import { useSelector } from "react-redux";
import NavBar from './components/nav-bar/NavBar';
import Footer from './components/footer/Footer';
import AppRoutes from './routes/AppRoutes';


function App() {

  const themeToggle = useSelector((state) => state.theme);

  return (
    <>
      <ThemeProvider theme={!themeToggle ? light : dark}>
        <GlobelStyle />
        <div className="App">
          <NavBar />
          <AppRoutes />
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
