import { MovieData } from "../../../shared/types";
import { datetimeFormatter } from "../../../utils/datetimeFormatter";
import { Tr, Td } from "@chakra-ui/table";
import useGlobalStore from "../../../store/global";

interface Props {
    movieId: string,
    movieData: MovieData;
}

const TableRow = (props: Props) => {
    const setSelectedMovie = useGlobalStore(state => state.setSelectedMovie);

    return (
        <Tr _hover={{ backgroundColor: "#f2f3f4", cursor: "pointer" }} onClick={() => setSelectedMovie(Number(props.movieId))}>
            <Td textAlign="center">{props.movieId}</Td>
            <Td>{props.movieData.description}</Td>
            <Td textAlign="center">{props.movieData.totalVotes}</Td>
            <Td>{datetimeFormatter.format(props.movieData.lastUpdate)}</Td>
        </Tr>
    );
};

export default TableRow;