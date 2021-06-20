import React from 'react';
import { useSelector } from 'react-redux';
import { Text, Flex, Spacer } from '@chakra-ui/react';

import selector from './selector';
import './index.css';

const DA: React.FC = () => {
    const { rank, rankScore} = useSelector(selector);

    return (
        <Flex className="daWrapper">
            <Text className="daLabel"><b>DA Score:</b> {rankScore}</Text>
            <Spacer />
            <Text className="daLabel"><b>DA Rank:</b> {rank}</Text>
        </Flex>
    );
}

export default DA;
