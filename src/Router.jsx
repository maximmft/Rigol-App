import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import MultiAccueil from "./pages/MultiAccueil";
import MultiPage from "./pages/MultiPage";
import SoloPage from "./pages/SoloPage";
import Instructions from "./pages/Instructions";
import FinishSoloGame from "./pages/FinishSoloGame";

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
        path:"/finish",
        element: <FinishSoloGame/>,
      },
      {
        path: "/instructions",
        element: <Instructions />,
      },
    ],
  },
]);

export default router;
