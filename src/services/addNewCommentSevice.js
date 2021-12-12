import http from "./httpService";

export function addNewComments(data) {
    const token = 'SECURE TOKEN !';
    const header = {
        headers: {
            Authorization: `Bearer`,
        },
    };
    return http.post("/comments", data, header);
}
