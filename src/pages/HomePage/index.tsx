
import Menu from "components/Menu/Menu";
import { navigationItems } from "data/navigation";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "types/routes";
import * as S from "./style";







const HomePage = () => {

    // ela recebe uma rota e nos direcionara para essa rota 
    const handleNavigation = (path: RoutePath) => navigate(path);

const navigate = useNavigate();



    return (
          <S.body>
              <Menu 
    active={RoutePath.HOMEPAGE} 
    navItems={navigationItems} 
    onNavigate={handleNavigation}
    onLogout={() => navigate(RoutePath.LOGIN)}
    />
          </S.body>
    )
};

export default HomePage;