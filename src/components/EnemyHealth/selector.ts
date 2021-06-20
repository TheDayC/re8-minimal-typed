import { createSelector } from 'reselect';

import { selectGameData } from '../../store/selectors/game';

const selector = createSelector([selectGameData], game => ({
    enemyHealth: game.enemyHealth ? game.enemyHealth.filter(e => e.IsAlive) : null
}));

export default selector;