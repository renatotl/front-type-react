import Menu from "components/Menu/Menu";
import { navigationItems } from "data/navigation";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as S from "./style";

import { GameLis } from "../../mocks/gameList";
import GameList from "components/GameList/GameList";
import { ProductResponse } from "types/Product";
import { GameResponse } from "types/game";
import { Auth } from "helpers/Auth";
import { useState } from "react";

const HomePage = () => {
  // ela recebe uma rota e nos direcionara para essa rota
  const handleNavigation = (path: RoutePath) => navigate(path);

  //Vamos implementar a função handleSelection para que quando o usuário clique em uma pizza, ela seja adicionada automaticamente na lista do pedido.
  const handleSelection = (product: GameResponse) => {};

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
      {Boolean(GameLis.length) &&
        GameLis.map((product, index) => (
          <GameList product={product} key={index} onSelect={handleSelection} />
        ))}
        </div>
    </S.body>
  );
};

export default HomePage;
