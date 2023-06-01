import {
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import { Route } from 'react-router';
import { About, Compare, MyList, Pokemon, Search } from './pages';
import { Catching, Description, Evolution, Moves } from './pages/PokemonPage';

// You can do this:
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Search />} />
      <Route path='/compare' element={<Compare />} />
      <Route path='/pokemon/:id' element={<Pokemon />} />
      <Route path='/mylist' element={<MyList />} />
      <Route path='/about' element={<About />} />
      <Route path='/pokemon/:id/description' element={<Description />} />
      <Route path='/pokemon/:id/evolution' element={<Evolution />} />
      <Route path='/pokemon/:id/catching' element={<Catching />} />
      <Route path='/pokemon/:id/capable-moves' element={<Moves />} />
      <Route path='*' element={<h1>404</h1>} />
    </Route>
  )
);
