import { RoutePath } from "../../types/routes";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BoxCadastro from "../../components/BoxCadastro/BoxCadastro";
import { User, User as UserData, UserResponse } from "types/api/user"// esse cara é a tipagem da api
import { useMutation } from "@tanstack/react-query"

import { UserService } from "services/UserService";


const Cadastar = () => {
   
   const [errorMessage, setErrorMessage] = useState('');
     
    // necessário usar este cara para navegar para home
    const navigate = useNavigate();
   
    // const handleCadastroSubmit = () => {
    //     //acionando navigante direcionando para home
    //     navigate(RoutePath.LOGIN);
    //   }

    //useMutatio serve quando vamos fazer alguma alteração no backend como cadastro, deletar etcetra
    //useQyery é pra culsulta
      const mutation = useMutation(UserService.create);

// faz a navegação para tela home
// o Data em baixo é nosso inout com os valores cadastrados 
const handleCadastroSubmit = (data: UserData) => {
  mutation.mutate(data);
  setErrorMessage("");
  console.log(data)
  navigate(RoutePath.LOGIN);

}

    return (

        <S.Login2>
        <S.LoginContent>
           <BoxCadastro
             onSubmitData={handleCadastroSubmit}
             errorMessage={errorMessage}

            />
        </S.LoginContent>
     </S.Login2>
    )
}

export default Cadastar;