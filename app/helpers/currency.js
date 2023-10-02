import Helper from '@ember/component/helper';

export default class Currency extends Helper {
    compute(positional, hash = {}) {
        const value = [positional];
        const { sign = '$' } = hash;
        const wholePart = Math.floor(value);
        let fractionalPart = Math.floor((value * 100) % 100);

        if (fractionalPart.toString().length === 1) {
            fractionalPart = '0' + fractionalPart;
        }
        return `${sign}${wholePart}.${fractionalPart}`;
    }
}
