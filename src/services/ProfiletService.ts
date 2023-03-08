// Vamos até `src/services` e criaremos o arquivo `ProductService.ts`:

import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { Profile, ProfileResponse, ProfileUpdate } from "types/api/profile";// importanto as interfaces


export const ProfileService = {
    // ontem a lista de produtos/ ela é do tipo <ProductResponse[] que vem da api
  getLista: async (): Promise<ProfileResponse[]> => { 
    // executando
    const resposnse =  await fetch("https://live-game-retro-production.up.railway.app" + "/profile/getAllProfile", {
        // metodod get
      method: "GET",
      headers: {
                 "Content-Type": "application/json",
               },
      // tratar a res e convertemos em json
    }); const data = resposnse.json();
    console.log(` PRESTA ATENCAO${data}`)
    return await data; },

    // cafdastrar produtos
  create: (product: string) =>
  // passando metodo para ser executado
    Api(endpoint.createProfile(), {
        // segundo parametro 
      method: "POST",
      // converter o produto em json para ser enviado para aapi
      body: JSON.stringify(product),
      // não bloquear
      mode: "cors",
      // informando ue o conteudo é do tipo json
      headers: {
        "Content-Type": "application/json",
      },
      // tratar para json
    }).then((response) => response.json()),

    // busca de um produtor
  getById: (id: string) =>
  // metodo a ser executado
    Api(endpoint.profileById(id), {
        // metodo get
      method: "GET",
      // convertendo em json
    }).then((response) => response.json()),

    // enviando na req o produto e o id
  updateById: ({ product, id }: ProfileUpdate) =>
  // executar o metedo 
    Api(endpoint.profileById(id), {
      
      method: "PATCH",
      // converter o body em json
      body: JSON.stringify(product),
      mode: "cors",
      // informando que e json
      headers: {
        "Content-Type": "application/json",
      },
      // tratar a res
    }).then((response) => response.json()),


    // muito parecido com get id
  deleteById: (id: string) =>
    Api(endpoint.profileById(id), {
      method: "DELETE",
    }).then((response) => response.json()),
};


//  export const ProfileService = {
//    // ontem a lista de produtos/ ela é do tipo <ProductResponse[] que vem da api
//  getLista: async (): Promise<ProfileResponse[]> =>  { 
//    // executando
//  const resposnse =  await fetch("https://live-game-retro-production.up.railway.app" + "/profile/getAllProfile", {
//        // metodod get
//      method: "GET",
//        // informando ue o conteudo é do tipo json
//        headers: {
//          "Content-Type": "application/json",
//        },
//      // tratar a res e convertemos em json
//   } )
//   const data = resposnse.json();
//   return await data;
//  }
//   ,