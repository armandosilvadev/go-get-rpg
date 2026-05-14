import type { AxiosPromise } from 'axios';
import type { CharacterData } from '../components/interface/characterData';
import axios from 'axios';
import { API_URL } from '../variables/apiUrl';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const postData = async (data: CharacterData): AxiosPromise<CharacterData> => {
  const response = await axios.post(`${API_URL}/character`, data);
  return response;
};

export function useCharacterDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['character-data'] });
    },
  });

  return mutate;
}
