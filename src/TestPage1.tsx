// testing component page, exported to app interface but will eventually be deleted (most likely)

// Use PascalCasing please!

import { useNavigate } from "react-router-dom";

function OpeningTextBox_Page1() {
    const navigate = useNavigate();

    return (
        // JSX syntax -> JavaScript HTML
        <div>
            <h1>Hello World</h1>

            {/* test routing */}
            <button onClick={() => navigate("/TestPage2")}>
                Route to the second test page
            </button>
        </div>
    );
}

export default OpeningTextBox_Page1;
