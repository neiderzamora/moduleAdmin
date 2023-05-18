import axios from "axios";

const moduleAdminApi = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

export const getUsers = () => moduleAdminApi.get("/users/");
export const getUser = (id) => moduleAdminApi.get(`/users/${id}/`);
export const createUser = (user) =>
  moduleAdminApi.post("/register_user/", user);
export const deleteUser = (id) => moduleAdminApi.delete(`/users/${id}/`);
export const updateUser = (id, user) =>
  moduleAdminApi.put(`/users/${id}/`, user);