import { useMutation } from "@tanstack/react-query"
import ButtonLarge from "components/ButtonLarge/ButtonLarge";
import CadastroGame from "components/CadastroGame/CadastroProfile";
import CadastroProfile from "components/CadastroProfile/CadastroProfile";
import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { HTMLAttributes, useState } from "react";
import { GameService } from "services/GameService";
import { ProfileService } from "services/ProfiletService";
import { Game, Game as GameData, GameResponse } from "types/api/game"// esse cara é a tipagem da api
import { ProfileResponse, ProfileUpdate } from "types/api/profile";
import { LocalStorageKeys } from "types/LocalStorageKeys";





import * as S from "./style";



type CheckoutSectionType = HTMLAttributes<HTMLDivElement>;

type CheckoutSectionProps = {
  enviando: ProfileResponse | undefined
  onCloseSection: () => void; // o componente será fechado
} & CheckoutSectionType;

//Este componente será responsável por coordenar a confirmação de pagamento e fechamento de pedidos

const CheckoutSectionProfilePath = ({enviando,
  
 
  onCloseSection,
}: CheckoutSectionProps) => {
  const [closing, setClosing] = useState<boolean>(false);


  let localStorageId = LocalStorageHelper.get<ProfileResponse>(LocalStorageKeys.PROFILE);
  console.log(localStorageId);
     // console.log(LocalStorageKeys.ID, data.user.id)
     
  console.log(localStorageId);
  
 
  const [imageURL, setImage] = useState('');

  const [title, setName] = useState('');

const [userId, setUserId] = useState(localStorageId?.userId)

const [id, setProfileId] = useState(localStorageId?.id)


  const handleCloseSection = () => {
    setClosing(true);// Após 800 milisegundos envia essa informação para o componente HOME o valor TRUE
    setTimeout(onCloseSection, 800);
  };
  

  console.log(enviando?.id)

  let valorDoId = enviando?.id;
  valorDoId?.toString()


  const mutation = useMutation(ProfileService.updateById);
  
  const [errorMessage, setErrorMessage] = useState('');


  


  const handleSubmit = (): void => {
    const data = {title, imageURL, userId, id};
    data.toString()
    console.log("ola")
    console.log(data)
   


    mutation.mutate(data);
    setErrorMessage(""); 
    console.log(enviando)
   
  
  }

  
    


  return (
    <S.CheckoutSection closing={closing}>
    <S.BackIcon onClick={handleCloseSection} />
     
          
          
                
               
<S.BoxLogin>
        <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
                    <span>Update Perfil</span>
          </S.BoxLoginLogoText>
        </S.BoxLoginLogo>

        <S.BoxLoginForm>
        <S.ProductItemName></S.ProductItemName>
        <S.ProductItemName></S.ProductItemName>
        <S.ProductItemName></S.ProductItemName>

        <S.ProductItem role='listitem' >
            <S.ProductItemImage src={enviando?.imageURL} alt="Imagem de usuário"/>
            <div>
                <S.ProductItemName>{enviando?.title}</S.ProductItemName>

                            </div>
      
        </S.ProductItem>
        <input
                    type="text"
                    placeholder="Nome"
                    value={title}
                    onChange={({target}) => setName(target.value)}
                />
                   <input
                    type="text"
                    placeholder="imagem"
                    value={imageURL}
                    onChange={({target}) => setImage(target.value)}
                />
              
           
                <ButtonLarge
                    value="Atualizar"
                    type="button"
                    onClick={handleSubmit}/>
            </S.BoxLoginForm>
          
      </S.BoxLogin>
          
        
        
             
       
    </S.CheckoutSection>
  );
};


export default CheckoutSectionProfilePath;


// o metodo filter cria um novo array 
