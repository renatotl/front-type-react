import { RoutePath } from "../../types/routes";
import * as S from "./style";
import { useNavigate } from "react-router-dom";



const ButtonLogin = () => {

        // necessário usar este cara para navegar para home
        const navigate = useNavigate();
    const handleLoginSubmit = () => {
        //acionando navigante direcionando para home
        navigate(RoutePath.LOGIN);
      }

      
    return (
    
    <S.ButtonLogin   onClick={handleLoginSubmit}/>
    
    )
}

export default ButtonLogin;

/*
Por enquanto o nosso código está dando erro, então vamos definir as propriedades de ButtonLarge voltando no index.tsx, importando o React e o ButtonHTMLAttributes de forma desestruturada:
*/