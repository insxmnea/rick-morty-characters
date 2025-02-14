import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CharacterDetails } from "src/pages/character-details";
import { FavouriteCharacters } from "src/pages/favourite-characters";
import { HomePage } from "src/pages/homepage";
import { Layout } from "src/pages/layout";
import { NotFound } from "src/pages/not-found";

const router = createBrowserRouter([
  {
    path: "/rick-morty-characters/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/rick-morty-characters/details",
    element: (
      <Layout>
        <CharacterDetails />
      </Layout>
    ),
  },
  {
    path: "/rick-morty-characters/favourites",
    element: (
      <Layout>
        <FavouriteCharacters />
      </Layout>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
