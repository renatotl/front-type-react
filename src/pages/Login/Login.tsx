
import { useNavigate } from "react-router-dom";
import BoxLogin from "../../components/BoxLogin/BoxLogin";
import * as S from "./style";
import { useState } from "react";
import { RoutePath } from "../../types/routes";
import { useMutation } from "@tanstack/react-query"
import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { AuthService } from "services/AuthService";
import { ErrorResponse } from "types/api/error";
import { Login as LoginData, LoginResponse } from "types/api/login"// esse cara é a tipagem da api
import { User } from "types/api/user";
import { LocalStorageKeys } from "types/LocalStorageKeys";

const Login = () => {
      
   const [errorMessage, setErrorMessage] = useState('');

       // necessário usar este cara para navegar para home
       const navigate = useNavigate();
     

       const mutation = useMutation(AuthService.login, {

        // poder ser um dos dois
        //onSucces é se caso der certo ele pode trazer uma resposta de login mesmo ou erro
        onSuccess: (data: LoginResponse & ErrorResponse) => {
            // o statusCode vem da req
          if (data.statusCode) {
            setErrorMessage(data.message);
            return;
          }
          if (data.token && data.user) {
            // gravando o token e o user no localStorage
            LocalStorageHelper.set<string>(LocalStorageKeys.TOKEN, data.token);
             LocalStorageHelper.set<User>(LocalStorageKeys.USER, data.user);
             LocalStorageHelper.set<User>(LocalStorageKeys.ID, data.user);
console.log(data.user)
            // uma vez autentificado redirecionamos para a rota home
            navigate(RoutePath.PROFILE);
          }
          setErrorMessage("Tente novamente!");
        },
        onError: () => {
            setErrorMessage("Ocorreu um erro durante a requisição");
          },
        });


// faz a navegação para tela home
const handleSubmit = (data: LoginData) => {
  mutation.mutate(data);
  setErrorMessage("");
}



    return (
        
            <S.Login>
               <S.LoginContent>
                  <BoxLogin
                    onSubmitData={handleSubmit}
                    errorMessage={errorMessage}
                   />
               </S.LoginContent>
            </S.Login>

           );
}

export default Login;