export function buildQueryParams(search: string): {[key:string]: string} {
    if(!Boolean(search)) return {};

    // slice off the first (?) value
    return search.slice(1).split('&').map(entry => entry.split('=')).reduce((acc, [key, value]) => ({...acc, [key]: value}), {});
}

export function urlParser(url: string): {} {
    const {pathname, search} = new URL(`http://127.0.0.1:1337${url}`);
    return {
        pathname,
        query: buildQueryParams(search)
    }
}
