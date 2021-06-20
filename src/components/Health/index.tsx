import React from 'react';
import { useSelector } from 'react-redux';
import { Progress, Text } from '@chakra-ui/react';

import selector from './selector';
import {healthColor} from '../../helpers/game';
import './index.css';

const Health: React.FC = () => {
    const { currentHealth, maxHealth} = useSelector(selector);

    if (currentHealth && maxHealth) {
        const healthPercentage = (100 * currentHealth) / maxHealth;
        const theme = healthColor(healthPercentage);

        return (
            <div className="progressWrapper">
                <Text className="healthLabel">Health: {healthPercentage}%</Text>
                <Progress
                    value={currentHealth || 0}
                    colorScheme={theme}
                    height="32px"
                    isAnimated={true}
                    min={0}
                    max={maxHealth || 1000}
                    className="progressBar"
                />
            </div>
        );
    } else {
        return null;
    }
}

export default Health;
