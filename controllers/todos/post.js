import {FILE_PATH} from "../../config.js"

export default async ({request,response})=>{
    const decoder=new TextDecoder()
    const encoder=new TextEncoder()

    try{
        const {value: {title} }=await request.body()
        const data= await Deno.readFile(FILE_PATH);
        const todosData=JSON.parse(decoder.decode(data))
        const newData={id:todosData.length+1,title:title,completed:false}
        todosData.push(newData)
        console.log(newData)
        await Deno.writeFile(FILE_PATH,encoder.encode(JSON.stringify(todosData)))
        response.Status=201;
        response.body={Status:'created'}
    }
    catch(error){
        response.Status=501;
        response.body={Status:'cant create'}
    }
}
// addQuote: async ({ request, response }: { request: any; response: any }) => {
//     const body = await request.body(); //Returns { type: "json", value: Promise { <pending> } }
//     if (!request.hasBody) {
//       response.status = 400;
//       response.body = { message: "No data provided" };
//       return;
//     }
//     const values = await body.value;
//     let newQuote: Quote = {
//       id: v4.generate(),
//       philosophy: values.philosophy,
//       author: values.author,
//       quote: values.quote,
//     };

//     quotes.push(newQuote);
//     response.body = newQuote;
//   }