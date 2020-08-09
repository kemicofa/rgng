import { Type } from "../enums/type.ts";
import {readJson} from "https://deno.land/std@0.64.0/fs/read_json.ts";
import {generateRandom} from "../utils/math.ts";

function getNames(type: Type): Promise<string[]> {
    const path = `${Deno.cwd()}/resources/${type}_names.json`;

    try {
        return readJson(path) as Promise<string[]>;
    } catch(err){
        console.warn(err);
        return Promise.resolve([]);
    }
}

export async function generateFullName(type: Type): Promise<string> {
    const firstnames = await getNames(type);
    const lastnames = await getNames(Type.LAST);

    const firstIndex = generateRandom(firstnames.length);
    const lastIndex =  generateRandom(lastnames.length);

    return `${firstnames[firstIndex]} ${lastnames[lastIndex]}`;

}