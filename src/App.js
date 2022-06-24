import { Route, Routes } from "react-router-dom";
import Comments from "./components/Comments";
import PomoItem from "./components/PomoItem";

function App() {
  return (
    <Routes>
      <Route path="/comments" element={<Comments />} />
      <Route path="/" element={<PomoItem />} />
    </Routes>
  );
}

export default App;
