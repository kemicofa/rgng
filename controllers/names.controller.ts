import { ServerRequest } from "https://deno.land/std@0.64.0/http/server.ts";
import { Type } from "../enums/type.ts";
import { generateFullName } from "../services/names.ts";

export async function maleNameController(req: ServerRequest): Promise<boolean> {
    req.respond({ body:await generateFullName(Type.MALE) });
    return true;
}

export async function femaleNameController(req: ServerRequest): Promise<boolean> {
    req.respond({ body: await generateFullName(Type.FEMALE) });
    return true;
}