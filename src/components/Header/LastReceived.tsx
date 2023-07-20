import { Stat, StatLabel, StatNumber } from "@chakra-ui/stat";
import { datetimeFormatter } from "../../utils/datetimeFormatter";
import useGlobalStore from '../../store/global';

const LastReceived = () => {
    const lastReceived = useGlobalStore(state => state.lastReceived);
    return (
        <Stat color="white">
            <StatLabel fontSize="sm">Last Received</StatLabel>
            <StatNumber fontSize="md">{lastReceived ? datetimeFormatter.format(lastReceived) : '-'}</StatNumber>
        </Stat>
    );
};

export default LastReceived;