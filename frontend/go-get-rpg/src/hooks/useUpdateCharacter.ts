import axios, { type AxiosPromise } from 'axios';
import { API_URL } from '../variables/apiUrl';
import { useMutation, useQueryClient } from '@tanstack/react-query';

interface UpdateCharacter {
  id: string;
  data: CharacterData;
}

const putData = ({
  id,
  data,
}: UpdateCharacter): AxiosPromise<CharacterData> => {
  const response = axios.put(`${API_URL}/character/${id}`, data);
  return response;
};

export function useUpdateCharacter() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: putData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['character-data'] });
    },
  });

  return mutate;
}
