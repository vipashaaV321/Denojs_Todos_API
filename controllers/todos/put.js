import {FILE_PATH} from "../../config.js"

export default async ({request,response,params})=>{
    const decoder=new TextDecoder()
    const encoder=new TextEncoder()

    try{
        const {value: {title,completed} }=await request.body()
        const data= await Deno.readFile(FILE_PATH);
        const todosData=JSON.parse(decoder.decode(data))
    
        const updatedTodos=todosData.map((todo)=>{
            if(todo.id===Number(params.id)){
                return {...todo,title:title,completed:completed}
            }
            return todo
        })
        await Deno.writeFile(FILE_PATH,encoder.encode(JSON.stringify(updatedTodos)))
        response.Status=201;
        response.body={Status:'updated'}
    }
    catch(error){
        response.Status=501;
        response.body={Status:'cant create'}
    }
}