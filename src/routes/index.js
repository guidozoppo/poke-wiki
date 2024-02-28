import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import FourOFour from "../views/404";
import PokeDetail from "../views/PokeDetail";
import ScrollToTop from "../components/ScrollToTop";

export default function Rout() {
    return (
        <BrowserRouter>
        <ScrollToTop/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/pokemon/:id" element={<PokeDetail/>}/>
                <Route path="*" element={<FourOFour/>}/>
            </Routes>
        </BrowserRouter>
    );
}