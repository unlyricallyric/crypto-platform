import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "9c798a43cbmsh370af88385b9732p1791f4jsnbe8f7e361a6e",
};

//const baseUrl = "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/";
const baseUrl = "https://coinranking1.p.rapidapi.com";

const createRequest = (url, params) => ({
  url,
  headers: cryptoApiHeaders,
  params,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => {
        return createRequest("/coins", `limit=${count}`);
      },
    }),
  }),
});

export const { useGetCryptosQuery } = cryptoApi;
