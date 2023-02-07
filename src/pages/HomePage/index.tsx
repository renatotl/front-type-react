
import Menu from "components/Menu/Menu";
import { navigationItems } from "data/navigation";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as S from "./style";

import {GameLis} from "../../mocks/gameList"
import GameList from "components/GameList/GameList";
import { ProductResponse } from "types/Product";





const HomePage = () => {

    // ela recebe uma rota e nos direcionara para essa rota 
    const handleNavigation = (path: RoutePath) => navigate(path);


    //Vamos implementar a função handleSelection para que quando o usuário clique em uma pizza, ela seja adicionada automaticamente na lista do pedido.
const handleSelection = (product: ProductResponse) => {}


const navigate = useNavigate();



    return (
          <S.body>
              <Menu 
    active={RoutePath.HOMEPAGE} 
    navItems={navigationItems} 
    onNavigate={handleNavigation}
    onLogout={() => navigate(RoutePath.LOGIN)}
    />

{Boolean(GameLis.length) &&
 GameLis.map((product, index) => (
    <GameList
      product={product}
      key={index}
      onSelect={handleSelection}


    />
    ))}
          </S.body>
    )
};

export default HomePage;