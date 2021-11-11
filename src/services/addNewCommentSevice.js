import http from "./httpService";

export function addNewComments(data) {
    return http.post("/comments", data);
}
