import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { errorToast } from "../../utils/helper/error";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BASE_URL,
  prepareHeaders: (headers) => {
    return headers;
  },
});

const baseQueryWithReAuth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.data?.message) {
    errorToast(result.error.data.message);
  } else if (result?.error) {
    errorToast("Something went wrong!, please try again");
  }

  return result;
};

const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  tagTypes: [],
  endpoints: () => ({}),
});

export default apiSlice;
