

import * as S from "./style";
import { UserResponse } from "types/api/user";
import { ProfileResponse } from "types/api/profile";

type ProductItemProps = {
    userData: ProfileResponse
    // quando o usuário selecionar um produto ele será add no carrinho
    onSelect: (data: ProfileResponse) => void
}
const UserList = ({userData, onSelect}: ProductItemProps) => {
    
    return (

        <S.ProductItem role='listitem' onClick={()=> onSelect(userData)}>
            <S.ProductItemImage src={userData.imageURL} alt="Imagem de usuário"/>
            <div>
                <S.ProductItemName>{userData.title}</S.ProductItemName>
                            </div>
        </S.ProductItem>
    );
}

export default UserList;

// propriedade ROLE="listitem" é intepretado como lista de item 
//onSelect(product) o product é a pizza selecionada