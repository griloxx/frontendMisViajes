import jwt_decode from "jwt-decode";

export function getToken() {
    
    const token = localStorage.getItem("userToken");
    if(token) {
        const user = jwt_decode(token);
        return user;
    }
    return null
}