import { Badge } from '@chakra-ui/layout';
import useGlobalStore from '../../store/global';

const ConnectionStatus = () => {
    const connected = useGlobalStore(state => state.connected);
    return (
        <Badge fontSize="lg" colorScheme={connected ? "green" : "red"}>{connected ? "CONNECTED" : "DISCONNECTED"}</Badge>
    );
};

export default ConnectionStatus;