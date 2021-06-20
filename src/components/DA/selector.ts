import { createSelector } from 'reselect';

import { selectGameData } from '../../store/selectors/game';

const selector = createSelector([selectGameData], game => ({
    rank: game.rank || 0,
    rankScore: game.rankScore || 0
}));

export default selector;