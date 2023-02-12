/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const isKeyValueObject = (item: any) => item && typeof item === 'object' && !Array.isArray(item);

/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const nullish = (...value: any): boolean => value.some((v: any) => v === null || v === undefined);
