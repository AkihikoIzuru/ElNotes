import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000" // URL API Elysia
});

export const getNotes = async () => {
  const response = await api.get("/notes");
  return response.data;
};

export const createNote = async (note: { title: string; content: string }) => {
  const response = await api.post("/notes", note);
  return response.data;
};

export const updateNote = async (id: string, note: { title: string; content: string }) => {
  const response = await api.put(`/notes/${id}`, note);
  return response.data;
};

export const deleteNote = async (id: string) => {
  const response = await api.delete(`/notes/${id}`);
  return response.data;
};
