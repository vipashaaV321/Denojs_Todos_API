import { Router } from "https://deno.land/x/oak@v6.3.2/mod.ts";
import getTodos from "./controllers/todos/get.js"
import postTodos from "./controllers/todos/post.js"
import deleteTodos from "./controllers/todos/delete.js"
import putTodos from "./controllers/todos/put.js"

const router=new Router();
router.get('/',({response})=>{
    response.body="Deno runtime example"
});
router.get('/getTodos',getTodos);
router.post('/postTodos',postTodos)
router.delete('/deleteTodos/:id',deleteTodos)
router.put('/updateTodos/:id',putTodos)


export default router;