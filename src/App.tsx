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
import { Profile } from "./screens/Profile";
import { UpcomingEvents } from "./screens/UpcomingEvents";

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
    path: "/add-friend",
    element: <AddFriend />,
  },
  {
    path: "/new-event-creation",
    element: <NewEventCreation />,
  },
  {
    path: "/pollpanel",
    element: <PollPanel />,
  },
  {
    path: "/upcomingevents",
    element: <UpcomingEvents />,
  },
  {
    path: "/profile",
    element: <Profile />,
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
    path: "/eventview-u40owneru41",
    element: <EventviewOwner />,
  },
  {
    path: "/eventview-u40participantu41",
    element: <Eventview />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
