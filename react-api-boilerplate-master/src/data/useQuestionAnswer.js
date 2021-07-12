import useSWR from 'swr';
import API from './index';

export const useQuestionAnswer = ( id ) => {
    const { data, error, mutate } = useSWR( () => `/products/${ id }/questions`, API.fetcher );
    return {
        answers: data && data.data,
        isLoading: !error && !data,
        isError: error,
        mutate
    };
};