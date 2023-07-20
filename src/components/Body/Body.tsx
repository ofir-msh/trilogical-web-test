import { useState, useEffect } from "react";
import { HStack } from '@chakra-ui/layout';
import MoviesTable from "./MoviesTable/MoviesTable";
import MovieGraph from "./MovieGraph";
import { Movies, UpdateVote } from "../../shared/types";
import { HubConnectionBuilder, HubConnection } from "@microsoft/signalr";
import useGlobalStore from "../../store/global";
import { fetchMovies, initializeMovies, updateMovies } from "../../utils";

const Body = () => {
    const [movies, setMovies] = useState<Movies>({});
    const [connection, setConnection] = useState<HubConnection | null>(null);
    const setConnected = useGlobalStore(state => state.setConnected);
    const setLastReceived = useGlobalStore(state => state.setLastReceived);
    const selectedMovie = useGlobalStore(state => state.selectedMovie);

    useEffect(() => {
        fetchMovies() // Fetch movies
            .then(({ token, data }) => { // Initialize movies object with the received data
                const initializedMovies = initializeMovies(data);
                setMovies(initializedMovies);
                const connect = new HubConnectionBuilder()
                    .withUrl(`${import.meta.env.VITE_BASE_SERVER_URL}/ClientHub`, { withCredentials: false, accessTokenFactory: () => token })
                    .withAutomaticReconnect().configureLogging("None").build(); // Prepare server connection
                setConnection(connect);
            });
    }, []);

    useEffect(() => {
        if (!connection) return;
        connection.start().then(() => setConnected(true)); // Start the connection
        connection.on("DataReceived", (dataRecv: UpdateVote[]) => { // Bind handler to data receive
            setLastReceived(new Date()); // Update last received
            const updatedMovies = updateMovies(dataRecv, movies);
            setMovies(updatedMovies);
        });
        connection.onclose(() => setConnected(false)); // Update connection status on disconnect
        connection.onreconnected(() => setConnected(true)); // Update connection status on reconnection
        return () => { // Cleanup on component dismount
            setConnected(false); // Update connection status
            connection.off("DataReceived"); // Remove handler
            connection.stop(); // Terminate the connection
        };
    }, [connection]);

    return (
        <HStack justify="space-around">
            <MoviesTable movies={movies} />
            <MovieGraph movie={movies[selectedMovie]} />
        </HStack>
    );
};

export default Body;