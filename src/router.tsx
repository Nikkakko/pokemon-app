import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import { Route } from 'react-router';

// You can do this:
export const router = createBrowserRouter(
  createRoutesFromElements(<Route path='/' element={<RootLayout />}></Route>)
);
