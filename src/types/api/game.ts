

export interface GameResponse {


    title: string,
    coverImageUrl: string,
    description: string,
    year: string,
    imdbScore: string,
    trailerYouTubeUrl: string,
    gameplayYouTubeUrl: string,

}

export interface Game {
    title: string;
    imageURL: string;
    userId?: string;
    
  }
  
  export interface GameUpdate {
    game: string;
    id: string;
  }