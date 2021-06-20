export function safelyTransform<TOut>(res: unknown, transform: Function): TOut | null {
    try {
        return transform(res);
    } catch (error) {
        console.error(error);

        return null;
    }
}