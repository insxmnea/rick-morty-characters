import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CharacterDetails } from "src/pages/character-details";
import { FavouriteCharacters } from "src/pages/favourite-characters";
import { HomePage } from "src/pages/homepage";
import { NotFound } from "src/pages/not-found";

const router = createBrowserRouter([
  {
    path: "/rick-morty-characters/",
    element: <HomePage />,
  },
  {
    path: "/rick-morty-characters/details",
    element: <CharacterDetails />,
  },
  {
    path: "/rick-morty-characters/favourites",
    element: <FavouriteCharacters />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
