import { serve } from "https://deno.land/std@0.64.0/http/server.ts";
import { routes } from "./router.ts";
import * as router from "./services/router.service.ts";
import { matchRoute } from "./services/router.service.ts";

const s = serve({ port: 1337 });
console.log("http://localhost:1337/");

// register routes
routes.forEach(({name,controller}) => router.get(name, controller));

for await (const req of s) {
    const res = await matchRoute(req);

    if(!res){
        req.respond({ body: '404 route not found'});
    }
}