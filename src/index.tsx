import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About/About';
import Movies from './pages/Movies/Movies';
const mov = [{
  "adult": false,
  "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
  "genre_ids": [
    18,
    80
  ],
  "id": 238,
  "original_language": "en",
  "original_title": "The Godfather",
  "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
  "popularity": 100.932,
  "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  "release_date": "1972-03-14",
  "title": "The Godfather",
  "video": false,
  "vote_average": 8.7,
  "vote_count": 17806
},
{
  "adult": false,
  "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
  "genre_ids": [
    18,
    80
  ],
  "id": 278,
  "original_language": "en",
  "original_title": "The Shawshank Redemption",
  "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
  "popularity": 98.25,
  "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  "release_date": "1994-09-23",
  "title": "The Shawshank Redemption",
  "video": false,
  "vote_average": 8.7,
  "vote_count": 23656
},
{
  "adult": false,
  "backdrop_path": "/ejnlCzBd5pOGAYCpxC93NXSrdrz.jpg",
  "genre_ids": [
    35,
    14
  ],
  "id": 772071,
  "original_language": "es",
  "original_title": "Cuando Sea Joven",
  "overview": "70-year-old Malena gets a second chance at life when she magically turns into her 22-year-old self. Now, posing as \"Maria\" to hide her true identity, she becomes the lead singer of her grandson's band and tries to recover her dream of singing, which she had to give up at some point.",
  "popularity": 28.385,
  "poster_path": "/6gIJuFHh5Lj4dNaPG3TzIMl7L68.jpg",
  "release_date": "2022-09-14",
  "title": "Cuando Sea Joven",
  "video": false,
  "vote_average": 8.6,
  "vote_count": 213
},]

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "movies",
        element: <Movies movies={mov} />,
      },
      {
        path: "about",
        element: <About />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

