// Vamos até `src/services` e criaremos o arquivo `UserService.ts`:

import { Api } from "helpers/endpoints/Api";
import { endpoint } from "helpers/endpoints";
import { User, UserUpdate } from "types/api/user";

export const UserService = {
  getLista: () =>
    Api(endpoint.listUsers(), {
      method: "GET",
    }).then((response) => response.json()),
//fiz igual ao módulo 4 do react por isso esse está diferente, mas deu certo
  create: async (user: User) =>
    fetch("https://live-game-retro-production.up.railway.app" + `/user/createUser`, {
      method: "POST",
      body: JSON.stringify(user),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }
    ),

  getById: (id: string) =>
    Api(endpoint.userById(id), {
      method: "GET",
    }).then((response) => response.json()),

  updateById: ({ user, id }: UserUpdate) =>
    Api(endpoint.userById(id), {
      method: "PATCH",
      body: JSON.stringify(user),
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json()),

  deleteById: (id: string) =>
    Api(endpoint.userById(id), {
      method: "DELETE",
    }).then((response) => response.json()),
};  