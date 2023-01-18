import { Game } from "./game";

export type Profile = {
  id: string;
  title: string;
  imageUrl: string;
  userId: string;
  favoriteGames: string[];
  Game: Game[];
};