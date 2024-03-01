/* boilerplate file but double check import paths
 *url routes to be checked for unique api endpoints
 *transform response will be unique to nested object elements
 *body must be unique to documentation on the api
 */
import { createSlice } from "@reduxjs/toolkit";
import api from "../../store/api";

/** Authentication endpoints */
const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (credentials) => ({
        url: "/users/register",
        method: "POST",
        body: credentials,
      }),
      transformErrorResponse: (response) => response.data.error?.message,
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/users/login",
        method: "POST",
        body: credentials,
      }),
      transformErrorResponse: (response) => response.data.error?.message,
    }),
    getUser: builder.query({
      query: () => "/users/me",
      transformResponse: (response) => response,
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useGetUserQuery } =
  authApi;

/** Session storage key for auth token */
const TOKEN_KEY = "token";

/** Reducer that stores payload's token in state and session storage */
const storeToken = (state, { payload }) => {
  state.token = payload.token;
  sessionStorage.setItem(TOKEN_KEY, payload.token);
};

/** Keeps track of JWT sent from API */
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: sessionStorage.getItem(TOKEN_KEY),
  },
  reducers: {
    /** Logging out means wiping the stored token */
    logout: (state) => {
      state.token = null;
      sessionStorage.removeItem(TOKEN_KEY);
    },
  },
  extraReducers: (builder) => {
    // Store token when register or login succeeds
    builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
    builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
  },
});

export const { logout } = authSlice.actions;

export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
