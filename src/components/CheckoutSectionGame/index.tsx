import { useMutation } from "@tanstack/react-query"
import CadastroGame from "components/CadastroGame/CadastroProfile";
import CadastroProfile from "components/CadastroProfile/CadastroProfile";
import { HTMLAttributes, useState } from "react";
import { GameService } from "services/GameService";
import { Game, Game as GameData, GameResponse } from "types/api/game"// esse cara é a tipagem da api





import * as S from "./style";



type CheckoutSectionType = HTMLAttributes<HTMLDivElement>;

type CheckoutSectionProps = {
  
  onCloseSection: () => void; // o componente será fechado
} & CheckoutSectionType;

//Este componente será responsável por coordenar a confirmação de pagamento e fechamento de pedidos

const CheckoutSectionGame = ({ 
  
 
  onCloseSection,
}: CheckoutSectionProps) => {
  const [closing, setClosing] = useState<boolean>(false);



  const handleCloseSection = () => {
    setClosing(true);// Após 800 milisegundos envia essa informação para o componente HOME o valor TRUE
    setTimeout(onCloseSection, 800);
  };
  
  const mutation = useMutation(GameService.create);
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleCadastroSubmit = (data: GameData) => {
    console.log(data)
    mutation.mutate(data);
    setErrorMessage("");
    console.log(data)
   
  
  }

  return (
    <S.CheckoutSection closing={closing}>
    <S.BackIcon onClick={handleCloseSection} />
     
          
          
   <CadastroGame
   onSubmitData={handleCadastroSubmit}
   errorMessage={errorMessage}
   
   />
                
               

          
        
        
             
       
    </S.CheckoutSection>
  );
};


export default CheckoutSectionGame;


// o metodo filter cria um novo array 
