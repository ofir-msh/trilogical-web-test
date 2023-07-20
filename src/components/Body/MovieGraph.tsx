import { MovieData } from "../../shared/types";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Heading, VStack, Container } from "@chakra-ui/layout";
import { datetimeFormatter } from "../../utils";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const MovieGraph = ({ movie }: { movie: MovieData; }) => {

    const data = {
        labels: movie?.voteHistory.slice(-20).map(vote => datetimeFormatter.format(vote.time)),
        datasets: [
            {
                label: "Votes",
                data: movie?.voteHistory.slice(-20).map(vote => vote.count),
                backgroundColor: "#8884d8"
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        layout: { padding: 20 },
        scales: {
            y: { beginAtZero: true },
            x: { ticks: { maxTicksLimit: 20 } }
        },
        plugins: { legend: { display: false } }
    };

    return (
        <VStack justify="flex-start" bg="white" w="50%" h="lg">
            <Heading mt={5}>{movie?.description ?? "No movie selected"}</Heading>
            <Container maxW="98%" maxH="md" flexGrow={1}>
                <Bar data={data} options={options} />
            </Container>
        </VStack>
    );
};

export default MovieGraph;