
import { useMutation } from '@tanstack/react-query';
import { LocalStorageHelper } from 'helpers/LocalStorageHelper';
import { HTMLAttributes, useEffect, useState } from 'react';
import { UserService } from 'services/UserService';
import { ErrorResponse } from 'types/api/error';
import { Login, LoginResponse } from 'types/api/login';
import { User } from 'types/api/user';
import { LocalStorageKeys } from 'types/LocalStorageKeys';
import { RoutePath } from 'types/routes';
import ButtonLarge from '../ButtonLarge/ButtonLarge';
import ButtonLogin from '../ButtonLogin/ButtonLogin';
import * as S from "./style";

type BoxLoginType =  HTMLAttributes<HTMLDivElement>



export type BoxCadastroProps = {
    // essa propriedade só é assionada quando tiver informação 
    onSubmitData: (data: {title: string, imageURL: string, userId: string}) => void
    errorMessage: string
  } & BoxLoginType;



const CadastroProfile = ({onSubmitData, errorMessage}: BoxCadastroProps ) => {
  
    const [title, setTitle] = useState('');
    const [imageURL, setImagemURL] = useState('');
    const [userId, setUserId] = useState('');

    

    
   
  

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
                    onChange={({target}) => setUserId(target.value)}
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