// src/components/Navbar/Navbar.jsx
import './Navbar.css';

// Basic syntax for a component
// (can do this the same way as we declare a JS arrow function)
// Starting with accepting nothing and returning nothing; however, we want to set it up so it returns the nav section for a Navbar component.
// Our Objective: To have this component to return the nav section in App.jsx... so can copy/cut this nav section from App.jsx and put it here.
const Navbar = () => {
    // Make sure you wrap the nav bar in a return statement, like you need to do for all JS
    return <nav id="top-navbar">
        <a href="/">Home</a>
        <a href="/about-us">About Us</a>
        <a href="/money-pit">Investment Opportunities</a>
        <a href="/the-fine-print">Terms of Service</a>
    </nav>
};
// Lastly, need to export this - Navbar being the name that we've given the React Component here.
export default Navbar;

