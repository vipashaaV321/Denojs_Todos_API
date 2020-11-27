import { FILE_PATH } from "../../config.js"

export default async ({ response, params }) => {
    const decoder = new TextDecoder()
    const encoder = new TextEncoder()
    try {
        const data = await Deno.readFile(FILE_PATH);
        const todosData = JSON.parse(decoder.decode(data))
        console.log(todosData)
        const updatedTodos = todosData.filter((todo) => todo.id !== Number(params.id))
        await Deno.writeFile(FILE_PATH, encoder.encode(JSON.stringify(updatedTodos)))

        response.Status = 200;
        response.body = { Status: 'deleted', todos: updatedTodos }
    }
    catch (error) {
        response.Status = 500;
        response.body = { Status: 'Nosuccess', todos: [] }
    }
}