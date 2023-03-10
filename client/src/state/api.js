import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL}),
    reducerPath: "adminApi",
    tagTypes:[
        "Geography"
    ],
    endpoints: (build) => ({
        getLanguage: build.query({
            query: () => `personal/languages`,
            providesTags: ["Geography"],
        })
    })
})

export const {
    useGetLanguageQuery,
} = api