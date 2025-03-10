/*routing is broken, see Framer app!
*/

import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import EventViewOwner from "./pages/EventViewOwner";
import Profile from "./pages/Profile";
import NewEventCreation from "./pages/NewEventCreation";
import UpcomingEvents from "./pages/UpcomingEvents";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/new-event-creation":
        title = "";
        metaDescription = "";
        break;
      case "/upcomingevents":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<EventViewOwner />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/new-event-creation" element={<NewEventCreation />} />
      <Route path="/upcomingevents" element={<UpcomingEvents />} />
    </Routes>
  );
}
export default App;
