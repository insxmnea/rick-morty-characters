import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "src/pages/homepage";
import { NotFound } from "src/pages/not-found";

const router = createBrowserRouter([
  {
    path: "/rick-morty-characters/",
    element: <HomePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
