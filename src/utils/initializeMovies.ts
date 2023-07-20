import { MovieDescription, Movies, MovieData } from "../shared/types";

export const initializeMovies = (MoviesDescriptions: MovieDescription[]): Movies => {
    const initializedMovies: Movies = {};
    MoviesDescriptions.forEach(movieDescription => {
        initializedMovies[movieDescription.id] = {
            description: movieDescription.description,
            totalVotes: 0,
            lastUpdate: new Date(),
            voteHistory: []
        } as MovieData;
    });
    return initializedMovies;
};