import { RoutePath } from "../../types/routes";
import * as S from "./style";
import { useNavigate } from "react-router-dom";



const ButtonLargeCadastro = () => {

        // necessário usar este cara para navegar para home
        const navigate = useNavigate();
    const handleCadastroSubmit = () => {
        //acionando navigante direcionando para home
        navigate(RoutePath.CADASTRO);
      }

    return (
      
    <S.ButtonLargeCadastro  
    onClick={handleCadastroSubmit}
    
    > cadastrar </S.ButtonLargeCadastro>
   
    )
}

export default ButtonLargeCadastro;

/*
Por enquanto o nosso código está dando erro, então vamos definir as propriedades de ButtonLarge voltando no index.tsx, importando o React e o ButtonHTMLAttributes de forma desestruturada:
*/