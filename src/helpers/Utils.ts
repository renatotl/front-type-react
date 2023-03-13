const NormalizeUtils = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export const matchByText = (
  searchedText: any,
  title: any 
) => NormalizeUtils(searchedText).includes(NormalizeUtils(title));


//Vamos criar funções que validem o texto digitado na barra de pesquisa. Em `src/helpers`, criaremos um arquivo chamado `Utils.ts`: