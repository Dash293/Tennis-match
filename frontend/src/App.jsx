import { Routes, Route } from "react-router-dom";
import Home from "@pages/Home";
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
            <Route path="*" element={<Home />} />;
            <Route path="/" element={<Home />} />;
            {/* <Route path="/game" element={<Game />} />;
            <Route path="/result" element={<Result />} />; */}
          </Routes>
        </main>
      </Styled>
    </div>
  );
}
export default App;
