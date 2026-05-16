import axios, { type AxiosPromise } from 'axios';
import { API_URL } from '../variables/apiUrl';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const deleteData = async (id: string): AxiosPromise<CharacterData> => {
  const response = axios.delete(`${API_URL}/character/${id}`);
  return response;
};

export function useDeleteCharacter() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: deleteData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['character-data'] });
    },
  });

  return mutate;
}
