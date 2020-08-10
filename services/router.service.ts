import { Middleware } from "../@types/controller.ts";
import { ServerRequest } from "https://deno.land/std@0.64.0/http/server.ts";


type Router = Map<string, Middleware[]>;

const router: {get: Router, [key:string]: Router} = {
    get: new Map()
};

export function get(uri: string, ...handlers: Middleware[]){
    router.get.set(uri, handlers);
}

export async function matchRoute(req: ServerRequest): Promise<boolean> {
    try {
        const mapRouter = router[req.method.toLowerCase()];

        if(!mapRouter || !mapRouter.has(req.url)){
            return false;
        }

        const handlers = mapRouter.get(req.url);

        // @ts-ignore
        for(const handler of handlers){
            let p = handler(req);
            if(p instanceof Promise){
                p = await p;
            }

            if(!p){
                break;
            }
        }
    } catch(err){
        return false;
    }
    return true;
}