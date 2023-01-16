import { Route, Routes } from "react-router-dom";
import Cadastar from "./pages/Cadastro/Cadastro";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/Login";
import { RoutePath } from "./types/routes";

const Router = () => {

    return (
        <Routes>
          <Route path={RoutePath.LOGIN} element={<Login />} />
          <Route path={RoutePath.CADASTRO} element={<Cadastar/>} />
          <Route path={RoutePath.HOMEPAGE} element={<HomePage/>} />


        </Routes>
      );
};

export default Router;

/*
Ele será responsável por renderizar as rotas da nossa aplicação, 
de acordo com os alias que configuramos em RoutePATH:
*/