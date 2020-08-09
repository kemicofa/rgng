import { ServerRequest } from "https://deno.land/std@0.64.0/http/server.ts";

export type Middleware = (req: ServerRequest) => void;