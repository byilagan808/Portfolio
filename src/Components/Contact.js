import React, { useEffect } from 'react';

export const Contact = () => {
    useEffect(() => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbyKNo7Sp2uTUSCyWpgU2KbNZhfCMUofr23LnHMWx6qZGJHqmiyDLLsEj43Iapcte6g/exec';
        const form = document.forms['submit-to-google-sheet'];
    
        const handleSubmit = (e) => {
          e.preventDefault();
          fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => alert("Thank you! Your form is submitted successfully."))
            .then(() => { window.location.reload(); })
            .catch(error => console.error('Error!', error.message));
        };
    
        form.addEventListener('submit', handleSubmit);
    
        // Cleanup event listener on component unmount
        return () => {
          form.removeEventListener('submit', handleSubmit);
        };
      }, []); // Empty dependency array ensures the effect runs only once on mount
    
    return (
        <>
            <div className="container" id="contact" style={{ paddingTop: 100, paddingBottom: 100 }}>
                <h1 style={{ textAlign: 'center', textDecoration: 'underline' }}> CONTACT ME </h1>
                <div className="row">
                    <div className="col">
                        <p><i className="fa-solid fa-envelope"></i> Blake25@hawaii.edu</p>
                        <p><i className="fa-solid fa-phone"> </i> (808) 265 - 8557</p>
                        <div className="icons">
                            <a href="https://www.linkedin.com/in/blakeilagan/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="https://github.com/byilagan808" target="_blank"><i className="fa-brands fa-github"></i></a>
                            <a href="https://www.instagram.com/blake.ilagan?igsh=MXV1cm94dnNqYXZhcg%3D%3D&utm_source=qr" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col">
                        <form method="post" action="" name="submit-to-google-sheet">
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" placeholder="Message" cols="30" rows="10" ></textarea>
                            <button type="submit" style={{ borderRadius: '10px' }}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

};