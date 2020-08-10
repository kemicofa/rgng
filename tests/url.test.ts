import {
    assertEquals,
  } from "https://deno.land/std/testing/asserts.ts";
import {buildQueryParams, urlParser} from "../utils/url.ts";


Deno.test('Url Utils: buildQueryParams', () => {
    assertEquals(buildQueryParams("?hello=world&key=value"), {hello:"world", key:"value",});
    assertEquals(buildQueryParams(""), {});
});

Deno.test('Url Utils: urlParser', () => {
    assertEquals(urlParser('/hello/world'), {pathname: '/hello/world', query: {}});
});