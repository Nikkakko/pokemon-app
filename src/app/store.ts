import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '../features/pokemonSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
// ...

//add middleware

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
