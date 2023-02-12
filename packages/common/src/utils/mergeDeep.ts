import { isKeyValueObject } from './typeCheck';

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const mergeDeep = <T>(target: any, ...sources: any): T => {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isKeyValueObject(target) && isKeyValueObject(source)) {
        for (const key in source) {
            if (isKeyValueObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key], source[key]);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return mergeDeep(target, ...sources);
};
