import { Route, Routes } from "react-router-dom";
import CardContainer from "./Components/CardContainer/CardContainer";
import CardContainerV2 from "./Components/CardContainer/CardContainerV2";
import Details from "./Components/Details";
import Layout from "./Layout";

const NetflixRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<CardContainer />} />
        <Route path="/v2" element={<CardContainerV2 />} />
        <Route path="/:title" element={<Details />} />
      </Route>
    </Routes>
  );
};

export default NetflixRoutes;
