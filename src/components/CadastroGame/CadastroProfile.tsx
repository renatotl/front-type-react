

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
    onSubmitData: (data: {title: string, coverImageUrl: string, description: string 
      ,year: string, imdbScore: string, trailerYouTubeUrl: string, gameplayYouTubeUrl: string}) => void
    errorMessage: string
   
    
  } & BoxLoginType;



const CadastroGame = ({onSubmitData, errorMessage }: BoxCadastroProps ) => {
  
    const [title, setTitle] = useState('');
    const [coverImageUrl, setCoverImagemUrl] = useState('');
    const [description, setDescription] = useState('');
    const [year, setYear] = useState('');
    const [imdbScore, setImdbScore] = useState('');
    const [trailerYouTubeUrl, setTrailerYouTubeUrl] = useState('');
    const [gameplayYouTubeUrl, setGameplayYouTubeUrl] = useState('');
   



    // trazen do as informações salva no LocalStorage quando fo=eito o login
    // LocalStorageHelper.get(LocalStorageKeys.ID);
    

    // dessa forma que consegui pegar o falor unico no localStorage
//  let localStorageId = LocalStorageHelper.get<LoginResponse>(LocalStorageKeys.ID)?.id.toString();
//  console.log(localStorageId);
    // console.log(LocalStorageKeys.ID, data.user.id)
    
//  console.log(localStorageId);
   

//  const [userId, setUserId] = useState(localStorageId);


  // função que envia as informações digitadas/ ela é do tipo void porque não precisa retornar nada ela só vai enviar informaçao
  const handleSubmit = (): void => {
    // o data está recebendo de forma desconstruída {name, password}
      const data = {title, coverImageUrl, description,year,imdbScore,trailerYouTubeUrl,gameplayYouTubeUrl};
      
      // mandando essas informações passando como propriedade
      onSubmitData(data);// já passando-á para nosso backend
  }

 

    return(
      <S.BoxLogin>
        <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
                    <span>Game cadastro</span>
          </S.BoxLoginLogoText>
        </S.BoxLoginLogo>
        <S.BoxLoginForm>
                <input
                    type="text"
                    placeholder="Nome do jogo"
                    value={title}
                    onChange={({target}) => setTitle(target.value)}
                />
                   <input
                    type="text"
                    placeholder="URL da imagem"
                    value={coverImageUrl}
                    onChange={({target}) => setCoverImagemUrl(target.value)}
                />
                      <input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={({target}) => setDescription(target.value)}
                />
                          <input
                    type="text"
                    placeholder="Ano de lançamento"
                    value={year}
                    onChange={({target}) => setYear(target.value)}
                />
                          <input
                    type="text"
                    placeholder="Pontuação"
                    value={imdbScore}
                    onChange={({target}) => setImdbScore(target.value)}
                />
                          <input
                    type="text"
                    placeholder="Trailer do jogo"
                    value={trailerYouTubeUrl}
                    onChange={({target}) => setTrailerYouTubeUrl(target.value)}
                />
                          <input
                    type="text"
                    placeholder="Gameplay do jogo"
                    value={gameplayYouTubeUrl}
                    onChange={({target}) => setGameplayYouTubeUrl(target.value)}
                />
               
              
                <ButtonLarge
                    value="cadastar"
                    type="button"
                    onClick={handleSubmit}/>
                 
                       
                    
            </S.BoxLoginForm>
          
      </S.BoxLogin>
        
    )
};

export default CadastroGame;