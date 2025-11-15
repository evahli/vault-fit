import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Homepage } from "./pages/Homepage.jsx";
import { Booking } from "./pages/Booking.jsx";
import { Terms } from "./pages/Terms.jsx";
import { TakeATour } from "./pages/TakeATour.jsx";

// Create a client
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //errorElement: <ErrorPage />,
    children: [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/booking",
      element: <Booking />
    },
    {
      path: "/terms",
      element: <Terms />
    },
    {
      path: "/take-a-tour",
      element: <TakeATour />
    },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
