export function getFirst<T>(arr: T[]): T {
    return arr[0];
}


export function comb<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
}

export function map<T, U>(arr: T[], f: (arg: T) => U): U[] {
    return arr.map(f);
}