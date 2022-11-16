// STYLING
import "./App.scss";
// COMPONENTS
import Game from "./Components/Game";
import MainMenu from "./Components/MainMenu";
import OptionsMenu from "./Components/OptionsMenu";
import ErrorPage from "./Components/ErrorPage";
// PACKAGES
import { Route, Routes} from "react-router-dom"

function App() {

  return (
      <Routes>
        <Route path="/tic_tac_toe" element={<Game/>}/>
        <Route path="/tic_tac_toe/menu" element={<MainMenu/>}/>
        <Route path="/tic_tac_toe/options" element={<OptionsMenu/>}/>
        <Route path="*" element={<ErrorPage/>}/>

      </Routes>
  );
}

export default App;
