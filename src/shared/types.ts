export interface MovieDescription {
    id: number,
    description: string;
}

export interface VoteData {
    count: number,
    time: Date;
}

export interface MovieData {
    description: string,
    voteHistory: VoteData[],
    lastUpdate: Date,
    totalVotes: number;
}

export type Movies = Record<string, MovieData>;

export interface UpdateVote {
    generatedTime: string,
    itemId: number,
    itemCount: number;
}