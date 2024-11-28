import apiSlice from "../../state/api/api-slice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userDetails) => ({
        url: "/user/login",
        method: "POST",
        body: userDetails,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;
