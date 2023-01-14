
import { useNavigate } from "react-router-dom";
import BoxLogin from "../../components/BoxLogin/BoxLogin";
import * as S from "./style";
import { useState } from "react";
import { RoutePath } from "../../types/routes";

const Login = () => {
      
   const [errorMessage, setErrorMessage] = useState('');

       // necessário usar este cara para navegar para home
       const navigate = useNavigate();
     
         // faz a navegação para tela home
    const handleSubmit = () => {
      //acionando navigante direcionando para home
      navigate(RoutePath.HOMEPAGE);
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