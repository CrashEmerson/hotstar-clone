import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { SelectedMovie } from "./screens/SelectedMovie";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<SelectedMovie />} />
      </Routes>

    </div>
  );
}

export default App;