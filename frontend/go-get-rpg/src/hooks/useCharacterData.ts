import axios, { type AxiosPromise } from 'axios';
import { API_URL } from '../variables/apiUrl';
import { useQuery } from '@tanstack/react-query';
import { type CharacterData } from '../components/interface/characterData';

const fetchData = async (): AxiosPromise<CharacterData[]> => {
  const response = await axios.get(`${API_URL}/character`);
  return response;
};

export function useCharacterData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['character-data'],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
