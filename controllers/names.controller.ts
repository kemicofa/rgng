import { ServerRequest } from "https://deno.land/std@0.64.0/http/server.ts";
import { Type } from "../enums/type.ts";
import { generateFullName } from "../services/names.ts";

export async function maleNameController(req: ServerRequest){
    req.respond({ body:await generateFullName(Type.MALE) });
}

export async function femaleNameController(req: ServerRequest){
    req.respond({ body: await generateFullName(Type.FEMALE) });
}