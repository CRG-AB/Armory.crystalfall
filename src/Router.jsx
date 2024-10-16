import { createHashRouter } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { LandingPage } from "./pages/LandingPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { BrowsePage } from "./pages/BrowsePage";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import { DisplayOwnedToken } from "./pages/ProfilePage/DisplayOwnedToken";
import { Page404 } from "./pages/Page404";

export const Router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <LandingPage />, index: true },
      { path: "/profile", element: <ProfilePage /> },
      { path: "/profile/:address", element: <ProfilePage /> },
      {
        path: "/token/:tokenId",
        element: <DisplayOwnedToken />,
      },
      { path: "/about", element: <AboutPage /> },
      { path: "/browse", element: <BrowsePage /> },
      { path: "*", element: <Page404 /> },
    ],
  },
]);
