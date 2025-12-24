import axios from "axios";
import type { Note } from "../types/note";

const noteApi = axios.create({
  baseURL: "https://notehub-public.goit.study/api",
});

noteApi.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_NOTEHUB_TOKEN;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface FetchNotesResponse {
  notes: Note[];
  totalNotes: number;
  totalPages: number;
  currentPage: number;
}

export const fetchNotes = async (
  search: string = "",
  page: number = 1
): Promise<FetchNotesResponse> => {
  const params = {
    search,
    page,
    perPage: 12,
  };
  const { data } = await noteApi.get<FetchNotesResponse>("/notes", { params });
  return data;
};

export const createNote = async (
  noteContent: Omit<Note, "id">
): Promise<Note> => {
  const { data } = await noteApi.post<Note>("/notes", noteContent);
  return data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await noteApi.delete<Note>(`/notes/${id}`);
  return data;
};
