import { useMutation } from "@tanstack/react-query"
import ButtonLarge from "components/ButtonLarge/ButtonLarge";
import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { HTMLAttributes, useState } from "react";
import { ProfileService } from "services/ProfiletService";
import { LoginResponse } from "types/api/login";
import { ProfileResponse } from "types/api/profile";
import { LocalStorageKeys } from "types/LocalStorageKeys";




import * as S from "./style";




type CheckoutSectionType = HTMLAttributes<HTMLDivElement>;

type CheckoutSectionProps = {
  enviando: ProfileResponse | undefined
  onCloseSection: () => void; // o componente será fechado
  
} & CheckoutSectionType;

//Este componente será responsável por coordenar a confirmação de pagamento e fechamento de pedidos

const CheckoutSectionProfileDelete = ({ enviando,
  
 
  onCloseSection,
}: CheckoutSectionProps) => {
  const [closing, setClosing] = useState<boolean>(false);



  const handleCloseSection = () => {
    setClosing(true);// Após 800 milisegundos envia essa informação para o componente HOME o valor TRUE
    setTimeout(onCloseSection, 800);
  };


  console.log(enviando?.id)

  let valorDoId = enviando?.id;
  valorDoId?.toString()
  
  const [errorMessage, setErrorMessage] = useState('');

  // const handleCadastroSubmit = () => {

  //   let localStorageId = LocalStorageHelper.get<LoginResponse>(LocalStorageKeys.PROFILE)?.id.toString();
  // console.log(localStorageId)
  
  // }

  const mutation = useMutation(ProfileService.deleteById)

  const handleSubmit = () => {
    mutation.mutate(valorDoId);
   
  }



  
  return (
    <S.CheckoutSection closing={closing}>
    <S.BackIcon onClick={handleCloseSection} />
     
          
 
    
    <S.BoxLogin>
        <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
                    <span>Deletar Perfil</span>
          </S.BoxLoginLogoText>
        </S.BoxLoginLogo>

        <S.BoxLoginForm>

        <S.ProductItem role='listitem' >
            <S.ProductItemImage src={enviando?.imageURL} alt="Imagem de usuário"/>
            <div>
                <S.ProductItemName>{enviando?.title}</S.ProductItemName>
                            </div>
        </S.ProductItem>

                <ButtonLarge
                    value="Deletar"
                    type="button"
                    onClick={handleSubmit}/>
            </S.BoxLoginForm>
          
      </S.BoxLogin>
        
             
       
    </S.CheckoutSection>
  );
};


export default CheckoutSectionProfileDelete;


// o metodo filter cria um novo array 
