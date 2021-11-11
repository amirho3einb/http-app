import instance from "../axiosInstance";
//import http from "./httpService";

export function deleteComment(commentId) {
    return instance.delete(`/comments/${commentId}`);
}