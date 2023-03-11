import Menu from "components/Menu/Menu";
import { navigationItems } from "data/navigation";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as S from "./style";

import { GameLis } from "../../mocks/gameList";
import GameList from "components/GameList/GameList";
import { ProductResponse } from "types/Product";
import { GameResponse } from "types/api/game";
import { Auth } from "helpers/Auth";
import { useState , useEffect} from "react";
import { QueryKey } from "types/QueryKey";
import { useQuery } from "@tanstack/react-query";
import { GameService } from "services/GameService";

const HomePage = () => {



      // resposta que vem da api
      const [game, setGame] = useState<GameResponse[]>([]);

      // Após a atualização da biblioteca react query (sendo utilizada como @tanstack/react-query), o método useQuery agora só aceita array como primeiro parâmetro ao invés de string como mostrado no vídeo
   const { data: gameData } = useQuery(
    // pegando a lista
    [QueryKey.GAMES],
    GameService.getLista
  );

  useEffect(() => {
    // ou ostra a lista de produtos do bacjend ou a lista vazia 
    setGame(gameData || []);
   

  }, [gameData]);

  // ela recebe uma rota e nos direcionara para essa rota
  const handleNavigation = (path: RoutePath) => navigate(path);

  //Vamos implementar a função handleSelection para que quando o usuário clique em uma pizza, ela seja adicionada automaticamente na lista do pedido.
  const handleSelection = (data: GameResponse) => {};

  const navigate = useNavigate();

  const [proceedToOverlay, setProceedToOverlay] = useState<boolean>(false);

  // onLogout={() => navigate(RoutePath.LOGIN)} // apenas muda a rota
  // realmente desloga: onLogout={Auth.logout}// dessa forma realmente damos o logout
  return (
    <S.body>
       <Menu
        active={RoutePath.HOMEPAGE}
        navItems={navigationItems}
        onNavigate={handleNavigation}
        onLogout={Auth.logout}
        onClick2={() => setProceedToOverlay(true)}
      />
        <div> 
      {Boolean(game.length) &&
      game.map((gameData, index) => (
          <GameList gameData={gameData} key={index} onSelect={handleSelection} />
        ))}
        </div>
    </S.body>
  );
};

export default HomePage;
