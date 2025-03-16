import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-1'>
            <h3 className='footer-h3'>MediCare Hospital</h3>
            <p>123 health care avenue</p>
            <p>medical city</p>
            <p>+1 234 567 890</p>
        </div>
        <div className='footer-2'>
            <h3 className='footer-h3'>Contact</h3>
            <p>emergency contact number:987654321 </p>
            <p>Reception</p>
            <p>+1 234 567 890</p>
        </div>
        <div className='footer-3'>
            <h3 className='footer-h3'>Quick Links</h3>
            <p>about us</p>
            <p>services</p>
            <p>contact</p>
        </div>
        <div className='footer-4'>
            <h3 className='footer-h3'>version</h3>
            <p>last updated:2023</p>
            <p>2024</p>
        </div>

    </div>
  )
}

export default Footer