import Profile from "./pages/PROFILE/Profile";
import { Auth } from "helpers/Auth";
import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Cadastar from "./pages/Cadastro/Cadastro";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login/Login";
import { RoutePath } from "./types/routes";


// trava de segurança que so deixa acessar uma rota se ele estive eutenticado
const AuthenticatedRoutes = () => {
  // O metodo isAuth que vai verificar se ta autenticado
  const isAuthenticated = Auth.isAuth();
  // se tiver autenticado vai para as rotas que permite a autenticação se não ele vai para login

  // if ternário / o Outlet é substituido por umas das rotas que estou tentando acessar e redireciona para login
  return isAuthenticated ? <Outlet /> : <Navigate to={RoutePath.LOGIN} />;
};

//Ele será responsável por renderizar as rotas da nossa aplicação, de acordo com os alias que configuramos em RoutePATH:
const Router = () => {

    return (
        <Routes>
 
          <Route path={RoutePath.CADASTRO} element={<Cadastar/>} />
          
          <Route path={RoutePath.LOGIN} element={<Login/>} />

        <Route path="/" element={<AuthenticatedRoutes/>} >
          
          
        <Route path={RoutePath.PROFILE} element={<Profile/>} />
          <Route path={RoutePath.HOMEPAGE} element={<HomePage/>} />

          </Route>

        </Routes>
      );
};

export default Router;

/*
Ele será responsável por renderizar as rotas da nossa aplicação, 
de acordo com os alias que configuramos em RoutePATH:
*/