import {IEnemyHealth, IGame} from '../types/game';

export function isString(candidate: unknown): candidate is string {
    return typeof candidate === 'string';
}

export function isNumber(candidate: unknown): candidate is number {
    return typeof candidate === 'number';
}

export function isBoolean(candidate: unknown): candidate is boolean {
    return typeof candidate === 'boolean';
}

export function isArray(candidate: unknown): candidate is unknown[] {
    return Array.isArray(candidate);
}

export function isNotNullOrUndefined<T>(candidate: unknown): candidate is T {
    return candidate !== undefined && candidate !== null;
}

export function isGameData(candidate: unknown): candidate is IGame {
    // eslint-disable-next-line @typescript-eslint/ban-types
    if (isNotNullOrUndefined<object>(candidate) && typeof candidate === 'object') {
        return 'PlayerMaxHealth' in candidate;
    } else {
        return false;
    }
}

export function isEnemyHealth(candidate: unknown): candidate is IEnemyHealth[] {
    return Array.isArray(candidate) && typeof candidate[0] === 'object' && 'CurrentHP' in candidate[0];
}