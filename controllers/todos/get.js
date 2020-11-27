import {FILE_PATH} from "../../config.js"

export default async ({response})=>{
    const decoder=new TextDecoder()
    try{
        const data= await Deno.readFile(FILE_PATH);
        const todosData=JSON.parse(decoder.decode(data))
        console.log(todosData)
        response.Status=200;
        response.body={Status:'success',todos:todosData}
    }
    catch(error){
        response.Status=500;
        response.body={Status:'Nosuccess',todos:[]}
    }
}