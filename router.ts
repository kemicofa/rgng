import { maleNameController, femaleNameController } from "./controllers/names.controller.ts";
import { Middleware } from "./@types/controller.ts";

export const routes: {controller: Middleware, name: string}[] = [
    {name: "/names/male", controller: maleNameController},
    {name: "/names/female", controller: femaleNameController}
]