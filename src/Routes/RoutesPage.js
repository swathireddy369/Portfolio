import { Route, Routes } from "react-router-dom";
import Layout from "../Components/homepage/Layout";
import HeroPage from "../Components/homepage/HeroPage";

const RoutesPage=()=>{
return(
    <Routes>
        <Route path="/" element={<Layout/>}></Route>
    </Routes>
)
}
export default RoutesPage;