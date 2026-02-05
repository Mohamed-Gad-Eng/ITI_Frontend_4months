import './Footer.css'

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div>
                    <div className="section">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>
                            Calle Sandoval 31001 <br /> Pamplona (Spain)
                        </p>
                    </div>
                    <div className="section"><i className="fa-solid fa-mobile-screen-button"></i><p>+123 456 789</p></div>
                    <div className="section"><i className="fa-regular fa-envelope"></i><p>email@domain.com</p></div>
                </div>
                <div>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                </div>
                <p>Copyright 2021 Blanco - All rights reserved.</p>
            </div>
        </>
    )
}

