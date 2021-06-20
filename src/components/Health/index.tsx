import React from 'react';
import { useSelector } from 'react-redux';
import { Progress, Text } from '@chakra-ui/react';

import selector from './selector';
import { healthColor, healthPercentage} from '../../helpers/game';
import './index.css';

const Health: React.FC = () => {
    const { currentHealth, maxHealth} = useSelector(selector);

    const hp = healthPercentage(currentHealth, maxHealth, 2);
    const theme = healthColor(hp);

    return (
        <div className="progressWrapper">
            <Text className="healthLabel">Health: {hp}%</Text>
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
}

export default Health;
