import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import MultiAccueil from "./pages/MultiAccueil";
import MutliPage from "./pages/MultiPage";
import SoloPage from "./pages/SoloPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        index: true,
      },

      {
        path: "/multiaccueil",
        element: <MultiAccueil/>,
      },

      {
        path: "/multipage",
        element: <MutliPage />,
      },
      {
        path: "/solopage",
        element: <SoloPage />,
      },
    ],
  },
]);

export default router;
