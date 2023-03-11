
import { HTMLAttributes, useState } from 'react';
import ButtonLarge from '../ButtonLarge/ButtonLarge';
import ButtonLogin from '../ButtonLogin/ButtonLogin';
import * as S from "./style";

type BoxLoginType =  HTMLAttributes<HTMLDivElement>



export type BoxLoginProps = {
    // essa propriedade só é assionada quando tiver informação 
    onSubmitData: (data: {name: string,email: string, password: string, cpf: string, role: boolean, id: string}) => void
    errorMessage: string
  } & BoxLoginType;



const BoxCadastro = ({onSubmitData, errorMessage}: BoxLoginProps) => {


    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [role, setRole] = useState(true);
    const [id, setId] = useState('');


  // função que envia as informações digitadas/ ela é do tipo void porque não precisa retornar nada ela só vai enviar informaçao
  const handleSubmit = (): void => {
    // o data está recebendo de forma desconstruída {name, password}
      const data = {name, email, password, cpf, role, id};
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
                    type="text"
                    placeholder="e-mail"
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                />
                   <input
                    type="text"
                    placeholder="cpf"
                    value={cpf}
                    onChange={({target}) => setCpf(target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={({target}) => setPassword(target.value)}
                />
                <ButtonLarge
                    value="cadastar"
                    type="button"
                    onClick={handleSubmit}/>
                   <ButtonLogin 
            
                  />
                       
                    
            </S.BoxLoginForm>
          
      </S.BoxLogin>
        
    )
};

export default BoxCadastro;