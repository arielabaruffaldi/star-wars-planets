import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Aside } from './components/Aside/Aside';
import "./App.scss";
import NavMobile from "./components/NavMobile/NavMobile";
import Main from "./components/Main/Main";

const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div>
      <BrowserRouter>
        {!isMobile ? <Aside /> : <NavMobile></NavMobile>}
        <Main>
          
        </Main>
      </BrowserRouter>
    </div>
  )
}

export default App;