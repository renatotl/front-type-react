import * as S from "./style";





const GameList = () => {



  return (
    <section>
      <S.GameList>
        <S.ProductItemListHeaderTitle>
          Games
        </S.ProductItemListHeaderTitle>
      
      </S.GameList>
    
    </section>
  ); 
};

export default GameList;



/* 
corrigindo o err do comopete home index.tsx
No arquivo index.tsx do componente ProductItemList, vamos inserir a interface com o seguinte código após os imports:
interface ProductItemListProps {
  children: React.ReactNode;
}
E vamos passar { children } como parâmetro do componente e também inserir dentro da tag ProductItemList
*/