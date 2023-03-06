

import * as S from "./style";
import { UserResponse } from "types/api/user";

type ProductItemProps = {
    user: UserResponse
    // quando o usuário selecionar um produto ele será add no carrinho
    onSelect: (data: UserResponse) => void
}
const UserList = ({user, onSelect}: ProductItemProps) => {
    return (

        <S.ProductItem role='listitem' onClick={()=> onSelect(user)}>
            <S.ProductItemImage src={user.image} alt="Imagem de usuário"/>
            <div>
                <S.ProductItemName>{user.name}</S.ProductItemName>
                            </div>
        </S.ProductItem>
    );
}

export default UserList;

// propriedade ROLE="listitem" é intepretado como lista de item 
//onSelect(product) o product é a pizza selecionada