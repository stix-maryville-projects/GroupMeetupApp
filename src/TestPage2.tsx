// second testing component page, exported to app interface but will eventually be deleted (most likely)

// Use PascalCasing please!

import { useNavigate } from "react-router-dom";

function OpeningTextBox_Page2() {
    const navigate = useNavigate();

    return (
        <div className = "Main-Container">
            <h1>Hello World, but on the second page!</h1>
            <button onClick={() => navigate("/")}>Go Back to First Page</button>
        </div>
    );
}

export default OpeningTextBox_Page2;
