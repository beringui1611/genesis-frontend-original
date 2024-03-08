import api from "./api";

export async function getData(){
    const {data}: any = await api.get("/")
    return data
    
}
