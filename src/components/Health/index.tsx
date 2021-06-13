import React from 'react';
import { Progress } from '@chakra-ui/react';

const Health: React.FC = () => {
    return (
        <Progress
            value={100}
            colorScheme="green"
            height="32px"
        />
    );
}

export default Health;
