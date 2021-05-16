import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Aside } from './components/Aside/Aside';
import "./App.scss";

const App = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div>
      <BrowserRouter>
        <Aside></Aside>
      </BrowserRouter>
    </div>
  )
}

export default App;