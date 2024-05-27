export function random(min, max) {
    if (max == null)
        [min, max] = [0, min];
    return min + nextInterval(max - min);
}

// "Fast Random Integer Generation in an Interval". See https://arxiv.org/abs/1805.10941 .
function nextInterval(s) {
    let [m, l] = mul32(next32(), s);
    if (l < s) {
        const t = (0xFFFF_FFFF - s + 1) % s; // -s % s
        while (l < t) {
            [m, l] = mul32(next32(), s);
        }
    }
    return m;
}

const values = new Uint32Array(1);

function next32() {
    return crypto.getRandomValues(values)[0];
}

function mul32(x, y) {
    const x0 = x & 0xFFFF;
    const x1 = x >>> 16;

    const y0 = y & 0xFFFF;
    const y1 = y >>> 16;

    const p00 = (x0 * y0) >>> 0;
    const p01 = (x0 * y1) >>> 0;
    const p10 = (x1 * y0) >>> 0;
    const p11 = (x1 * y1) >>> 0;

    const lo = Math.imul(x, y) >>> 0;

    const c = ((p00 >>> 16) + (p01 & 0xFFFF) + (p10 & 0xFFFF)) >>> 16;
    const hi = (p11 + (p01 >>> 16) + (p10 >>> 16) + c) >>> 0;

    return [hi, lo];
}
