import { Table, Thead, Tbody, Tr, Th } from '@chakra-ui/table';
import { Box } from '@chakra-ui/layout';
import { Skeleton } from '@chakra-ui/skeleton';
import TableRow from './TableRow';
import { Movies } from '../../../shared/types';

const MoviesTable = ({ movies }: { movies: Movies; }) => {
    return (
        <Skeleton isLoaded={!!Object.keys(movies).length}>
            <Box overflowY="auto" h="80vh" w="xl" mt={5}>
                <Table bg="white" size="sm">
                    <Thead position="sticky" top={0} bg="silver">
                        <Tr>
                            <Th textAlign="center">Movie ID</Th>
                            <Th textAlign="center">Movie Title</Th>
                            <Th textAlign="center">Total Votes</Th>
                            <Th textAlign="center">Last Updated</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Object.keys(movies).map(movieId =>
                            <TableRow key={movieId} movieId={movieId} movieData={movies[movieId]} />)}
                    </Tbody>
                </Table>
            </Box>
        </Skeleton>
    );
};

export default MoviesTable;