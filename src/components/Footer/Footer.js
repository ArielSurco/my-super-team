import React from 'react';

const Footer = () => {
    const totalHeight = document.documentElement.scrollHeight;
    const viewportHeight = window.innerHeight;
    
    return (
    <footer className={totalHeight >= viewportHeight ? "container-fluid mt-5" : "vw-100 position-absolute bottom-0 start-0 sticky-bottom"}>
        <p className="text-center align-baseline fs-4">Developed by <a href="https://github.com/ArielSurco/" className="text-decoration-none">ArielSurco</a></p>
    </footer>
    )
}

export { Footer };