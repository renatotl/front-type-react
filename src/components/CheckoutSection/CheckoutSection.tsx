import { useMutation } from "@tanstack/react-query"
import CadastroProfile from "components/CadastroProfile/CadastroProfile";
import { HTMLAttributes, useState } from "react";
import { ProfileService } from "services/ProfiletService";
import { LoginResponse } from "types/api/login";
import { Profile, Profile as ProfileData, ProfileResponse } from "types/api/profile"// esse cara é a tipagem da api




import * as S from "./style";



type CheckoutSectionType = HTMLAttributes<HTMLDivElement>;

type CheckoutSectionProps = {
  
  onCloseSection: () => void; // o componente será fechado
} & CheckoutSectionType;

//Este componente será responsável por coordenar a confirmação de pagamento e fechamento de pedidos

const CheckoutSection = ({ 
  
 
  onCloseSection,
}: CheckoutSectionProps) => {
  const [closing, setClosing] = useState<boolean>(false);



  const handleCloseSection = () => {
    setClosing(true);// Após 800 milisegundos envia essa informação para o componente HOME o valor TRUE
    setTimeout(onCloseSection, 800);
  };
  
  const mutation = useMutation(ProfileService.create);
  
  const [errorMessage, setErrorMessage] = useState('');

  const handleCadastroSubmit = (data: ProfileData) => {
    console.log(data)
    mutation.mutate(data);
    setErrorMessage("");
    console.log(data)
    
  
  }

  return (
    <S.CheckoutSection closing={closing}>
    <S.BackIcon onClick={handleCloseSection} />
     
          
          
   <CadastroProfile
   onSubmitData={handleCadastroSubmit}
   errorMessage={errorMessage}
   
   />
                
               

          
        
        
             
       
    </S.CheckoutSection>
  );
};


export default CheckoutSection;


// o metodo filter cria um novo array 
