

import * as S from "./style";
import { ProductResponse } from "types/Product";
import { GameResponse } from "types/api/game";

type ProductItemProps = {
    gameData: GameResponse
    // quando o usuário selecionar um produto ele será add no carrinho
    onSelect: (data: GameResponse) => void
}
const GameList = ({gameData, onSelect}: ProductItemProps) => {
    return (

        <S.ProductItem role='listitem' onClick={()=> onSelect(gameData)}>
            <S.ProductItemImage src={gameData.coverImageUrl} alt={gameData.title}/>
            <div>
                <S.ProductItemName>{gameData.title}</S.ProductItemName>
                <S.ProductItemPrice>{gameData.year}</S.ProductItemPrice>
                <S.ProductItemDescription>{gameData.description}</S.ProductItemDescription>
                <S.ProductItemDescription>{gameData.trailerYouTubeUrl}</S.ProductItemDescription>
                <S.ProductItemDescription>{gameData.gameplayYouTubeUrl}</S.ProductItemDescription>
                
            </div>
        </S.ProductItem>
    );
}

export default GameList;

// propriedade ROLE="listitem" é intepretado como lista de item 
//onSelect(product) o product é a pizza selecionada