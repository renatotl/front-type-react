

import * as S from "./style";
import { ProductResponse } from "types/Product";

type ProductItemProps = {
    product: ProductResponse
    // quando o usuário selecionar um produto ele será add no carrinho
    onSelect: (data: ProductResponse) => void
}
const GameList = ({product, onSelect}: ProductItemProps) => {
    return (

        <S.ProductItem role='listitem' onClick={()=> onSelect(product)}>
            <S.ProductItemImage src={product.image} alt={product.name}/>
            <div>
                <S.ProductItemName>{product.name}</S.ProductItemName>
                <S.ProductItemPrice>{product.price}</S.ProductItemPrice>
                <S.ProductItemDescription>{product.description}</S.ProductItemDescription>
            </div>
        </S.ProductItem>
    );
}

export default GameList;

// propriedade ROLE="listitem" é intepretado como lista de item 
//onSelect(product) o product é a pizza selecionada