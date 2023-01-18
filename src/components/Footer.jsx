import React from "react";

function Footer() {
    const Year = new Date().getFullYear();
    return(
        <div>
            <footer>
                <p>Copyright © {Year}</p>
            </footer>
        </div>
    );
}

export default Footer;