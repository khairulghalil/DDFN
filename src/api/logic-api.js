import axios from 'axios'

export async function postLogin() {
    let url = 'https://jsonplaceholder.typicode.com/todos/1'
    const response = await axios.get(url)
    
    return response.data
}