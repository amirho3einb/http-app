import http from "./httpService";

export function getALLComments() {
    return http.get("/comments");
}
