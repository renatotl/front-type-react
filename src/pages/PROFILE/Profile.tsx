
import { useMutation, useQuery } from "@tanstack/react-query";
import CheckoutSection from "components/CheckoutSection/index";
import CheckoutSectionProfileDelete from "components/CheckoutSectionProfileDelete";
import Menu from "components/Menu/Menu";
import Overlay from "components/Overlay";

import UserList from "components/UserList/UserList";
import { navigationItems2 } from "data/navigation";
import { Auth } from "helpers/Auth";
import { user } from "helpers/endpoints/user";
import { LocalStorageHelper } from "helpers/LocalStorageHelper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileService } from "services/ProfiletService";
import { UserService } from "services/UserService";
import { ErrorResponse } from "types/api/error";
import { Profile, ProfileResponse } from "types/api/profile";
import { UserResponse } from "types/api/user";
import { LocalStorageKeys } from "types/LocalStorageKeys";
import { QueryKey } from "types/QueryKey";
import { RoutePath } from "types/routes";
import * as S from "./style";




const PROFILE = ( ) => {

    // resposta que vem da api
    const [user, setUser] = useState<ProfileResponse[]>([]);

    const [perfil, setPerfil] = useState<ProfileResponse>();

    
      //Vamos implementar a função handleSelection para que quando o usuário clique em uma pizza, ela seja adicionada automaticamente na lista do pedido.
  const handleSelection = (data: ProfileResponse) => {

    setPerfil(data)
    console.log(data) 

    {data && setProceedToOverlayProfile(true)}
    LocalStorageHelper.set<ProfileResponse>(LocalStorageKeys.PROFILE, data);
    console.log(LocalStorageKeys.PROFILE, data)

    let valorDoIdUser = (LocalStorageKeys.PROFILE, data)

    return data
  };

console.log(perfil)

   // Após a atualização da biblioteca react query (sendo utilizada como @tanstack/react-query), o método useQuery agora só aceita array como primeiro parâmetro ao invés de string como mostrado no vídeo
   const { data: profileData } = useQuery(
    // pegando a lista
    [QueryKey.PROFILES],
    ProfileService.getLista
  );


  useEffect(() => {
    // ou ostra a lista de produtos do bacjend ou a lista vazia 
    setUser(profileData || []);
   

  }, [profileData]);



  const [errorMessage, setErrorMessage] = useState('');

 

  const handleNavigation = (path: RoutePath) => navigate(path);

  const navigate = useNavigate();

  const [proceedToOverlay, setProceedToOverlay] = useState<boolean>(false);
  const [proceedToOverlayProfile, setProceedToOverlayProfile] = useState<boolean>(false);



    return (
      <> 
      

        <S.body>
        

          
           <Menu
        active={RoutePath.HOMEPAGE}
        navItems={navigationItems2}
        onNavigate={handleNavigation}
        onLogout={Auth.logout}
        onClick2={() => setProceedToOverlay(true)}
      />
     
     {proceedToOverlayProfile && (
          <Overlay>
          <CheckoutSectionProfileDelete
             enviando={perfil}
             onCloseSection={() => setProceedToOverlayProfile(false)}
          />
          </Overlay>
        )}

{proceedToOverlay && (
          <Overlay>
            <CheckoutSection
             
               onCloseSection={() => setProceedToOverlay(false)}
            />
          </Overlay>
        )}

                <div> 
      {Boolean(user.length) &&
        user.map((userData, index) => (
          <UserList userData={userData} key={index} onSelect={handleSelection} />
        ))}
        </div>
        </S.body>
        </>
    )

    
}

export default PROFILE;

