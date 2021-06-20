import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Progress, Text } from '@chakra-ui/react';

import selector from './selector';
import './index.css';
import { IEnemyHealth } from '../../types/game';
import { healthPercentage } from '../../helpers/game';

const EnemyHealth: React.FC = () => {
    const {enemyHealth} = useSelector(selector);

    if (enemyHealth) {
        return (
            <Flex>
                {enemyHealth.map((eh: IEnemyHealth, i: number) => {
                    const hp = healthPercentage(eh.CurrentHP, eh.MaximumHP, 2);
                
                    return (
                        <div className="ehWrapper" key={`enemy-health-${i}`}>
                            <Text className="ehLabel">Enemy: {hp}%</Text>
                            <Progress
                                value={eh.CurrentHP || 0}
                                colorScheme="red"
                                height="24px"
                                isAnimated={true}
                                min={0}
                                max={eh.MaximumHP || 1000}
                                className="enemyHealthBar"
                                marginBottom="10px"
                                flexDirection="column"
                            />
                        </div>
                    )
                })}
            </Flex>
        );
    } else {
        return null;
    }
}

export default EnemyHealth;
