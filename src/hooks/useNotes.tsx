import { useQuery, useMutation, useQueryClient } from "react-query";
import { getNotes, createNote, updateNote, deleteNote } from "../services/api";

export const useNotes = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery("notes", getNotes);

  const create = useMutation(createNote, {
    onSuccess: () => queryClient.invalidateQueries("notes")
  });

  const update = useMutation(updateNote, {
    onSuccess: () => queryClient.invalidateQueries("notes")
  });

  const remove = useMutation(deleteNote, {
    onSuccess: () => queryClient.invalidateQueries("notes")
  });

  return { notes: data, isLoading, create, update, remove };
};
