

import * as S from "./style";
import { UserResponse } from "types/api/user";
import { ProfileResponse } from "types/api/profile";

type ProductItemProps = {
    user: ProfileResponse
    // quando o usuário selecionar um produto ele será add no carrinho
    onSelect: (data: ProfileResponse) => void
}
const UserList = ({user, onSelect}: ProductItemProps) => {
    console.log(user)
    return (

        <S.ProductItem role='listitem' onClick={()=> onSelect(user)}>
            <S.ProductItemImage src={user.imageURL} alt="Imagem de usuário"/>
            <div>
                <S.ProductItemName>{user.title}</S.ProductItemName>
                            </div>
        </S.ProductItem>
    );
}

export default UserList;

// propriedade ROLE="listitem" é intepretado como lista de item 
//onSelect(product) o product é a pizza selecionada