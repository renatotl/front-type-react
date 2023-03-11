

import { LocalStorageHelper } from 'helpers/LocalStorageHelper';
import { HTMLAttributes,  useState } from 'react';
import { LoginResponse } from 'types/api/login';
import { User, UserResponse } from 'types/api/user';
import { LocalStorageKeys } from 'types/LocalStorageKeys';


import ButtonLarge from '../ButtonLarge/ButtonLarge';
import * as S from "./style";

type BoxLoginType =  HTMLAttributes<HTMLDivElement>



export type BoxCadastroProps = {
    // essa propriedade só é assionada quando tiver informação 
    onSubmitData: (data: {title: string, imageURL: string, userId: string | undefined}) => void
    errorMessage: string
   
    
  } & BoxLoginType;



const CadastroProfile = ({onSubmitData, errorMessage }: BoxCadastroProps ) => {
  
    const [title, setTitle] = useState('');
    const [imageURL, setImagemURL] = useState('');


    // trazen do as informações salva no LocalStorage quando fo=eito o login
    LocalStorageHelper.get(LocalStorageKeys.ID);
    

    // dessa forma que consegui pegar o falor unico no localStorage
 let localStorageId = LocalStorageHelper.get<LoginResponse>(LocalStorageKeys.ID)?.id.toString();
 console.log(localStorageId);
    // console.log(LocalStorageKeys.ID, data.user.id)
    
 console.log(localStorageId);
   

 const [userId, setUserId] = useState(localStorageId);


  // função que envia as informações digitadas/ ela é do tipo void porque não precisa retornar nada ela só vai enviar informaçao
  const handleSubmit = (): void => {
    // o data está recebendo de forma desconstruída {name, password}
      const data = {title, imageURL, userId};
      
      // mandando essas informações passando como propriedade
      onSubmitData(data);// já passando-á para nosso backend
  }

 

    return(
      <S.BoxLogin>
        <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
                    <span>Cadastro de Perfil</span>
          </S.BoxLoginLogoText>
        </S.BoxLoginLogo>
        <S.BoxLoginForm>
                <input
                    type="text"
                    placeholder="Nome do avatar"
                    value={title}
                    onChange={({target}) => setTitle(target.value)}
                />
                   <input
                    type="text"
                    placeholder="URL da imagem"
                    value={imageURL}
                    onChange={({target}) => setImagemURL(target.value)}
                />
                      <input
                    type="text"
                    placeholder="Id de usuário"
                    value={userId}
                    onChange={({target}) => setUserId(userId)}
                />
               
              
                <ButtonLarge
                    value="cadastar"
                    type="button"
                    onClick={handleSubmit}/>
                 
                       
                    
            </S.BoxLoginForm>
          
      </S.BoxLogin>
        
    )
};

export default CadastroProfile;