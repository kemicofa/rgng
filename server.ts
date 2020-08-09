import { serve } from "https://deno.land/std@0.64.0/http/server.ts";
import { routes } from "./router.ts";

const s = serve({ port: 1337 });
console.log("http://localhost:1337/");

for await (const req of s) {

    const {pathname, search} = new URL(`http://${req.headers.get('host')}${req.url}`);

    const found = routes.some(({name:url, controller:handler}) => {
        const r = new RegExp(`${url}`);
        if(r.test(pathname)){
            handler(req);
            return true;
        }
        return false;
    });

    if(!found){
        req.respond({ body: '404 route not found'});
    }
}