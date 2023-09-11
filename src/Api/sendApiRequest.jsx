import { API_HOST, CURRENT_USER_STORAGE } from "../../utils/constants";

export const METHOD = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE"
}

export async function sendApiRequest(method, endpoint, requestObject) {

const headers = {};

const body = requestObject ? JSON.stringify(requestObject) : undefined;
if(requestObject) {
    headers["Content-type"] = "application/json";
}

const token = localStorage.getItem(CURRENT_USER_STORAGE);
if(token) {
    headers["Authorization"] = token;
}


const response = await fetch(endpoint, {
    method,
    headers,
    body
})
return await response.json()
}