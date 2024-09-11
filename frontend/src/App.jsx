
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./app.css";

/** Imports for all pages and components */
import LoginPage from "./pages/authPages/LoginPage";
import RegisterPage from "./pages/authPages/RegisterPage";
import HomeLayout from "./pages/HomeLayout";
import DashboardLayout from "./pages/DashboardLayout";
import ErrorPageComponent from "./components/ErrorPageComponent";
import EventsPage from "./pages/dashboardPages/EventsPage";
import ClientPage from "./pages/dashboardPages/ClientPage";
import SubscriptionsPage from "./pages/dashboardPages/SubscriptionsPage";

import ProjectsPage from "./pages/dashboardPages/ProjectsPage";
import DashboardIndexPage from "./pages/dashboardPages/DashboardIndexPage";
import SettingsPage from "./pages/dashboardPages/SettingsPage";
import SalesPage from "./pages/dashboardPages/SalesPage";
import InvoicesPage from "./pages/dashboardPages/InvoicesPage";
import OrdersPage from "./pages/dashboardPages/OrdersPage";
import ShopPage from "./pages/dashboardPages/ShopPage";
import PaymentsPage from "./pages/dashboardPages/PaymentsPage";
import ItemsPage from "./pages/dashboardPages/ItemsPage";
import ContractsPage from "./pages/dashboardPages/ContractsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPageComponent />,
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          path: "register",
          element: <RegisterPage />,
        },
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <DashboardIndexPage />,
            },
            {
              path: "events",
              element: <EventsPage />,
            },
            {
              path: "clients",
              element: <ClientPage />,
            },
            {
              path: "subscriptions",
              element: <SubscriptionsPage />,
            },
            {
              path: "projects",
              element: <ProjectsPage />,
            },
            {
              path: "sales",
              element: <SalesPage />,
              children: [
                {
                  index: true,
                  element: <InvoicesPage />, // Assurez-vous d'avoir un composant par défaut ou une page pour les sous-menus
                },
                {
                  path: "invoices",
                  element: <InvoicesPage />,
                },
                {
                  path: "orders",
                  element: <OrdersPage />,
                },
                {
                  path: "shop",
                  element: <ShopPage />,
                },
                {
                  path: "payments",
                  element: <PaymentsPage />,
                },
                {
                  path: "items",
                  element: <ItemsPage />,
                },
                {
                  path: "contracts",
                  element: <ContractsPage />,
                },
              ],
            },
            {
              path: "settings",
              element: <SettingsPage />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


