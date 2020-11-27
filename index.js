import { Application } from "https://deno.land/x/oak@v6.3.2/mod.ts";
import {PORT} from "./config.js"
import router from "./router.js"

const app=new Application();

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`server is running on port ${PORT}`)

await app.listen({port:PORT})