import axios, { AxiosInstance } from 'axios';
import { PixabeySearchParameters } from './abstracts/PixabeySearchParameters';
import { PixabeySearchResponse } from './abstracts/PixabeySearchResponse';

export class PixabeyAPI {
    constructor(private httpClient: AxiosInstance) {}

    async findImages(searchParameters: PixabeySearchParameters): Promise<PixabeySearchResponse> {
        const searchParams = new URLSearchParams();

        Object.entries({ key: `${process.env.REACT_APP_PIXABEY_API_KEY}`, ...searchParameters }).forEach(
            ([key, value]) => {
                searchParams.append(key, String(value));
            },
        );

        const { data } = await this.httpClient.get<PixabeySearchResponse>(
            `${process.env.REACT_APP_PIXABEY_API_URL}/?${searchParams.toString()}`,
        );

        return data;
    }
}

const axiosInstance = axios.create();

export const pixabeyAPI = new PixabeyAPI(axiosInstance);
