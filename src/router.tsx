import {
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import { Route } from 'react-router';
import { About, Compare, MyList, Pokemon, Search } from './pages';

// You can do this:
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Search />} />
      <Route path='/compare' element={<Compare />} />
      <Route path='/pokemon' element={<Pokemon />} />
      <Route path='/mylist' element={<MyList />} />
      <Route path='/about' element={<About />} />
    </Route>
  )
);
