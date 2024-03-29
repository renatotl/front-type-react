
import { ReactComponent as Logout } from "assets/icons/logout.svg"; //Importando ReactComponent COMO Logout. Trazendo uma imagem como sendo um component react
//  * = all
import * as S from "./style";

import { RoutePath } from "types/routes";
import { NavItem } from "./types";

// essa interface define as propriedades que nosso menu deve ter.

interface MenuProps {
    active: RoutePath; //define qual é a rota ativa no momento
    navItems: NavItem[];
    onNavigate: (data: RoutePath) => void;// recebe um rota como params e nos manta para algum lugar. Exemplo: se eu clicar em setting me manda para setting
    onLogout: () => void;
    onClick2: () => void;
    onClick3: () => void;


  }

const Menu = ({active, navItems, onNavigate, onLogout, onClick2, onClick3}:MenuProps) =>{

    return ( 
    <S.Menu>
    <nav>
      <S.MenuLogo>
        <img   alt="Logo" />
      </S.MenuLogo>

      {navItems.map((item, index) => (
        <S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>
          <S.MenuItemButton 
          active={item.path === active}
          onClick={() => onNavigate(item.path)}
          >
            {item.icon}
          </S.MenuItemButton>
        </S.MenuItem>
      ))}
    </nav>
    
    <S.MenuItemLogout onClick={onClick2}>
    Cadastrar
    </S.MenuItemLogout>
    
    <S.MenuItemLogout onClick={onClick3}>
    Atualizar:
    selecione o card antes
    </S.MenuItemLogout>

    <S.MenuItemLogout onClick={onLogout}>
      <Logout />
    </S.MenuItemLogout>
  </S.Menu>
);
};


export default Menu;