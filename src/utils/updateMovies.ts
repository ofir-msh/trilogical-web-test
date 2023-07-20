import { Movies, UpdateVote } from "../shared/types";

export const updateMovies = (updateVotes: UpdateVote[], movies: Movies) => {
    updateVotes.forEach(vote => { // Iterate over the votes and add them to the corresponding MovieData
        movies[vote.itemId].totalVotes += vote.itemCount;
        const parsedTime = new Date(vote.generatedTime);
        movies[vote.itemId].voteHistory.push({ count: vote.itemCount, time: parsedTime });
        movies[vote.itemId].lastUpdate = parsedTime;
    });
    return { ...movies };
};