import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CharacterDetails } from "src/pages/character-details";
import { FavouriteCharacters } from "src/pages/favourite-characters";
import { HomePage } from "src/pages/homepage";
import { Layout } from "src/pages/layout";
import { NotFound } from "src/pages/not-found";
import { ROUTES } from "./routes";

const router = createBrowserRouter([
  {
    path: ROUTES.HOMEPAGE,
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: ROUTES.DETAILS,
    element: (
      <Layout>
        <CharacterDetails />
      </Layout>
    ),
  },
  {
    path: ROUTES.FAVOURITES,
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
