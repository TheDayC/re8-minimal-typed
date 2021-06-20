import { createSelector } from 'reselect';

import { selectGameData } from '../../store/selectors/game';

const selector = createSelector([selectGameData], game => ({
    currentHealth: game.currentHealth || 7000,
    maxHealth: game.maxHealth || 7000
}));

export default selector;