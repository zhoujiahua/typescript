export function printId(id: number | string) {
    if (typeof id === 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

export function getPort(scheme: 'http' | 'https') {
    switch (scheme) {
        case 'http':
            return 80;
        case 'https':
            return 443;
    }
}

export function fail():Error {
    return new Error("Something failed");
}