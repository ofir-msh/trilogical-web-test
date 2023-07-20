import { Flex } from '@chakra-ui/layout';
import ConnectionStatus from './ConnectionStatus';
import LastReceived from './LastReceived';

const Header = () => {
    return (
        <Flex minW="100%" bg="#282828" h="70px" direction="row" align="center" justify="flex-start" p={4} gap={8} mb={8}>
            <ConnectionStatus />
            <LastReceived />
        </Flex>
    );
};

export default Header;