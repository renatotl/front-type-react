

export interface GameResponse {

    id?: string;
    title: string,
    coverImageUrl: string,
    description: string,
    year: string,
    imdbScore: string,
    trailerYouTubeUrl: string,
    gameplayYouTubeUrl: string,
    createdAt?: string;
    updatedAt?: string;
}

export interface Game {
  title: string,
  coverImageUrl: string,
  description: string,
  year: string,
  imdbScore: string,
  trailerYouTubeUrl: string,
  gameplayYouTubeUrl: string,
    
  }
  
  export interface GameUpdate {
    game: string;
    id: string;
  }