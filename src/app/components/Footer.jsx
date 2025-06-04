import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className='container pt-0 pr-10 pb-10 pl-10 flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-right'>
                <span></span>
                <p className='text-slate-600'>&copy; {currentYear} Joseph Web Designs<br />All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer;
