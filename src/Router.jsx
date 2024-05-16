import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import MultiAccueil from "./pages/MultiAccueil";
import MultiPage from "./pages/MultiPage";
import SoloPage from "./pages/SoloPage";
import Instructions from "./pages/Instructions";

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
        element: <MultiPage />,
      },
      {
        path: "/solopage",
        element: <SoloPage />,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
    ],
  },
]);

export default router;
