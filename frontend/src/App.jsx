import { Routes, Route } from "react-router-dom";
import Home2 from "@pages/Home2";
// import Game from "@pages/Game";
// import Result from "@pages/Result";
import Header from "@components/Header";
import Styled from "./AppStyle";

function App() {
  return (
    <div className="App">
      <Styled>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home2 />} />;
          </Routes>
        </main>
      </Styled>
    </div>
  );
}
export default App;
