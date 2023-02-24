

import * as S from "./style";
import { ProductResponse } from "types/Product";
import { GameResponse } from "types/game";

type ProductItemProps = {
    product: GameResponse
    // quando o usuário selecionar um produto ele será add no carrinho
    onSelect: (data: GameResponse) => void
}
const GameList = ({product, onSelect}: ProductItemProps) => {
    return (

        <S.ProductItem role='listitem' onClick={()=> onSelect(product)}>
            <S.ProductItemImage src={product.coverImageUrl} alt={product.title}/>
            <div>
                <S.ProductItemName>{product.title}</S.ProductItemName>
                <S.ProductItemPrice>{product.year}</S.ProductItemPrice>
                <S.ProductItemDescription>{product.description}</S.ProductItemDescription>
            </div>
        </S.ProductItem>
    );
}

export default GameList;

// propriedade ROLE="listitem" é intepretado como lista de item 
//onSelect(product) o product é a pizza selecionada