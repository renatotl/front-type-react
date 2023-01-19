import { Profile } from "./profile";

export type Game = {
  id: string;
  title: string;
  coverImageUrl: string;
  description: string;
  year: string;
  imdbScore: number;
  trailerYouTubeUrl: string;
  gameplayYouTubeUrl: string;
  profiles: Profile[];
};