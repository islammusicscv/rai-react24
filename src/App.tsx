import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Search from "./pages/Search.tsx";
function App() {

  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<Home />} />
                  <Route path={'/search'} element={<Search />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}
export default App
