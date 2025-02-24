import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AddFriend } from "./screens/AddFriend";
import { Eventview } from "./screens/Eventview";
import { EventviewOwner } from "./screens/EventviewOwner";
import { HomeScreen } from "./screens/HomeScreen";
import { MessagePanel } from "./screens/MessagePanel";
import { NavigationPanel } from "./screens/NavigationPanel";
import { NewEventCreation } from "./screens/NewEventCreation";
import { PollPanel } from "./screens/PollPanel";
import { ProfileScreen } from "./screens/ProfileScreen";
import { UpcomingEventsScreen } from "./screens/UpcomingEventsScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomeScreen />,
  },
  {
    path: "/home-screen",
    element: <HomeScreen />,
  },
  {
    path: "/navigationpanel",
    element: <NavigationPanel />,
  },
  {
    path: "/messagepanel",
    element: <MessagePanel />,
  },
  {
    path: "/add-friend",
    element: <AddFriend />,
  },
  {
    path: "/eventview-u40participantu41",
    element: <Eventview />,
  },
  {
    path: "/new-event-creation",
    element: <NewEventCreation />,
  },
  {
    path: "/upcomingevents",
    element: <UpcomingEventsScreen />,
  },
  {
    path: "/profile",
    element: <ProfileScreen />,
  },
  {
    path: "/eventview-u40owneru41",
    element: <EventviewOwner />,
  },
  {
    path: "/pollpanel",
    element: <PollPanel />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
