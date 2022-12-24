import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./layouts/MainLayout";
import AddWork from "./page/AddWork/AddWork";
import Home from "./page/Home/Home";
import ProductAdd from "./page/ProductAdd/ProductAdd";
import Production from "./page/Production/Production";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/nomenclatures" element={<Production />} />
        <Route path="/fullwork/:id" element={<AddWork />} />
        <Route path="/addwork" element={<AddWork />} />
        <Route path="/product/:id" element={<ProductAdd />} />
      </Route>
    </Routes>
  );
}

export default App;
