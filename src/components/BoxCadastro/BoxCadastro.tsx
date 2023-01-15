
import { HTMLAttributes, useState } from 'react';
import ButtonLarge from '../ButtonLarge/ButtonLarge';
import ButtonLargeCadastro from '../ButtonLargeCadastro/ButtonLargeCadastro';
import * as S from "./style";

type BoxLoginType =  HTMLAttributes<HTMLDivElement>


export type BoxLoginProps = {
    // essa propriedade só é assionada quando tiver informação 
    onSubmitData: (data: {name: string, password: string}) => void
    errorMessage: string
  } & BoxLoginType;

const BoxCadastro = ({onSubmitData, errorMessage}: BoxLoginProps) => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

  // função que envia as informações digitadas/ ela é do tipo void porque não precisa retornar nada ela só vai enviar informaçao
  const handleSubmit = (): void => {
    // o data está recebendo de forma desconstruída {name, password}
      const data = {name, password};
      // mandando essas informações passando como propriedade
      onSubmitData(data);// já passando-á para nosso backend
  }

 

    return(
      <S.BoxLogin>
        <S.BoxLoginLogo>
        <S.BoxLoginLogoText>
                    <span>Cadastro</span>
          </S.BoxLoginLogoText>
        </S.BoxLoginLogo>
        <S.BoxLoginForm>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={({target}) => setName(target.value)}
                />

                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={({target}) => setPassword(target.value)}
                />
                <ButtonLarge
                    value="Entrar"
                    type="button"
                    onClick={handleSubmit}/>

                   
                       
                    
            </S.BoxLoginForm>
          
      </S.BoxLogin>
        
    )
};

export default BoxCadastro;