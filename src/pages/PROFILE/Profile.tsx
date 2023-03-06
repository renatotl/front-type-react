
import { useQuery } from "@tanstack/react-query";
import UserList from "components/UserList/UserList";
import { user } from "helpers/endpoints/user";
import { useEffect, useState } from "react";
import { UserService } from "services/UserService";
import { UserResponse } from "types/api/user";
import { QueryKey } from "types/QueryKey";
import * as S from "./style";




const Profile = () => {

    // resposta que vem da api
    const [user, setUser] = useState<UserResponse[]>([]);
    
      //Vamos implementar a função handleSelection para que quando o usuário clique em uma pizza, ela seja adicionada automaticamente na lista do pedido.
  const handleSelection = (user: UserResponse) => {};


   // Após a atualização da biblioteca react query (sendo utilizada como @tanstack/react-query), o método useQuery agora só aceita array como primeiro parâmetro ao invés de string como mostrado no vídeo
   const { data: usersData } = useQuery(
    // pegando a lista
    [QueryKey.PRODUCTS],
    UserService.getLista
  );


  useEffect(() => {
    // ou ostra a lista de produtos do bacjend ou a lista vazia 
    setUser(usersData || []);
   

  }, [usersData]);


    return (
        <S.body>
                <div> 
      {Boolean(user.length) &&
        user.map((user, index) => (
          <UserList user={user} key={index} onSelect={handleSelection} />
        ))}
        </div>
        </S.body>
    )

    
}

export default Profile;

