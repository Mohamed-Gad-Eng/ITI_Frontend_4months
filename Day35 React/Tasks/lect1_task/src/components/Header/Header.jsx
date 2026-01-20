import './Header.css'

function Header() {
    return (
        <>
            <div className="header">
                <div>
                    <div className='left'>
                        <div className="logo">
                            <p>B</p>
                        </div>
                        <hr className="v-hr" />
                        <div className="nav">
                            <ul>
                                <li><a href="#">HOME</a></li>
                                <li><a href="#">ABOUT ME</a></li>
                                <li><a href="#">SKILLS</a></li>
                                <li><a href="#">WORK</a></li>
                                <li><a href="#">BLOG</a></li>
                                <li><a href="#">CONTACT</a></li>
                                <li><a href="#">PAGES</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="right">
                        <hr className="v-hr" />
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Header