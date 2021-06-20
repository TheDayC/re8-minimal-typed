import { createSelector } from 'reselect';

import { selectGameData } from '../../store/selectors/game';

const selector = createSelector([selectGameData], game => ({
    currentHealth: game.currentHealth,
    maxHealth: game.maxHealth
}));

export default selector;