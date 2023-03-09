
import { useMutation, useQuery } from "@tanstack/react-query";
import CheckoutSection from "components/CheckoutSection";
import Menu from "components/Menu/Menu";
import Overlay from "components/Overlay";

import UserList from "components/UserList/UserList";
import { navigationItems2 } from "data/navigation";
import { Auth } from "helpers/Auth";
import { user } from "helpers/endpoints/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileService } from "services/ProfiletService";
import { UserService } from "services/UserService";
import { ErrorResponse } from "types/api/error";
import { ProfileResponse } from "types/api/profile";
import { UserResponse } from "types/api/user";
import { QueryKey } from "types/QueryKey";
import { RoutePath } from "types/routes";
import * as S from "./style";




const Profile = () => {

    // resposta que vem da api
    const [user, setUser] = useState<ProfileResponse[]>([]);
    
      //Vamos implementar a função handleSelection para que quando o usuário clique em uma pizza, ela seja adicionada automaticamente na lista do pedido.
  const handleSelection = (data: ProfileResponse) => {};


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
     

{proceedToOverlay && (
          <Overlay>
            <CheckoutSection
              
               onCloseSection={() => setProceedToOverlay(false)}
            />
          </Overlay>
        )}

                <div> 
      {Boolean(user.length) &&
        user.map((user, index) => (
          <UserList user={user} key={index} onSelect={handleSelection} />
        ))}
        </div>
        </S.body>
        </>
    )

    
}

export default Profile;

