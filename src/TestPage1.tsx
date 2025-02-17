// testing component page, exported to app interface but will eventually be deleted (most likely)

// Use PascalCasing please!

import { useNavigate } from "react-router-dom";
import homeButton from './assets/HomeButton.png';
import notificationIcon from './assets/notifications icon.png';
import messageSquareIcon from './assets/Message square.png';

import "./TestPage1.css";

function OpeningTextBox_Page1() {
    const navigate = useNavigate();

    return (
        // JSX syntax -> JavaScript HTML
        <>
        <div className="home-button-container">
            <button>
                <img src={homeButton} alt = "Home" className = "home-icon" />
            </button>
        </div> 

        <div className="notifications-button-container">
            <button>
                <img src={notificationIcon} alt="Notifications" className="notifications-icon" />
            </button>
        </div>

        <button style={{ position: 'absolute', top: '-5px', right: '50px', background: 'none'}}>
            <img src={messageSquareIcon} alt="Messages" style={{ width: '40px', height: 'auto' }} />
        </button>

        <div className = "page-wrapper">
            <h1>test text</h1>
            <p>text text</p>
            {/* test routing */}
            <button onClick={() => navigate("/TestPage2")}>
                Route to the second test page
            </button>
        </div>
        </>
    );
}

export default OpeningTextBox_Page1;
