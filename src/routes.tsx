import { Routes, Route } from "react-router-dom";

import Admin from "./pages/Admin";
import Agendamentos from "./pages/Agendamentos";
import Dashboard from "./pages/Dashboard";
import Produtos from "./pages/Produtos";


export const Navigation = () => {
    return(
        <Routes>
           
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/administradores" element={<Admin/>}/>
                <Route path="/banners" element/>
                <Route path="/agendamentos" element={<Agendamentos/>}/>
                <Route path="/correio-eletronico" element/>
                <Route path="/noticias" element/>
                <Route path="/paginas" element/>
                <Route path="/produtos" element={<Produtos/>}/>
                <Route path="/representantes" element/>
           
        </Routes>
    );

}