import { RoutePath } from "../../types/routes";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BoxCadastro from "../../components/BoxCadastro/BoxCadastro";


const Cadastar = () => {
   
   const [errorMessage, setErrorMessage] = useState('');
     
    // necessário usar este cara para navegar para home
    const navigate = useNavigate();
   
    const handleLoginSubmit = () => {
        //acionando navigante direcionando para home
        navigate(RoutePath.HOMEPAGE);
      }
    return (

        <S.Login2>
        <S.LoginContent>
           <BoxCadastro
             onSubmitData={handleLoginSubmit}
             errorMessage={errorMessage}

            />
        </S.LoginContent>
     </S.Login2>
    )
}

export default Cadastar;