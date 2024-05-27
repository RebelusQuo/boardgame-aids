import reduce from 'lodash/reduce';
import lowerBound from 'lodash/sortedIndexBy';

export function distribution(events) {
    const [sum, samples] = reduce(events,
        ([sum, acc], [weight, event]) => [sum+weight, [...acc, [sum+weight, event]]],
        [0, []]
    );
    return [sum, sum === 0 ? () => null : r => {
        // Add 1 to skip zero weight samples in the head of the array.
        const w = r + 1;
        const i = lowerBound(samples, [w], ([k]) => k);
        const [, event] = samples[i];
        return event;
    }];
}
