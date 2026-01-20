import './Content.css'
import profileimage from '../../assets/1.jpg'

function Content() {
    return (<>
        <div className="mycontent">
            <div className="firstpage">
                <div className="profileimg">
                    <img src={profileimage} alt="profileimg" />
                </div>
                <div className="writensection">
                    <h1>HELLO. <br /> I'M WALTER <br /> WHITE</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Vestibulum fringilla nisi finibus, <br />
                        dictum mauris a, facilisis elit. Mauris eget felis <br />
                        dolor. In tristique diam turpis, eu laoreet <br />
                        lectus viverra ac
                    </p>
                    <button >DOWNLOAD RESUME</button>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td><p>NAME</p></td>
                                <td>Walter White</td>
                            </tr>
                            <tr>
                                <td><p>EMAIL</p></td>
                                <td>email@domain.com</td>
                            </tr>
                            <tr>
                                <td><p>BIRHTDAY</p></td>
                                <td>August 18, 1987</td>
                            </tr>
                            <tr>
                                <td><p>ADDRESS</p></td>
                                <td>Calle Sandoval 31001 Pamplona (Spain)</td>
                            </tr>
                            <tr>
                                <td><p>PHONE</p></td>
                                <td>00 123 456 789</td>
                            </tr>
                            <tr>
                                <td><p>WEBSITE</p></td>
                                <td>www.domain.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="secondpage">
                <h5>Here you can know my</h5>
                <h2>SKILLS AND EXPERIENCE</h2>
                <div className="sections">
                    <div className="sec1">
                        <h3>
                            ABOUT ME
                        </h3>
                        <p>
                            Aenean gravida ligula vel mauris volutpat
                            condimentum. Ut eu tortor suscipit, accumsan risus
                            nec, finibus orci. Proin pretium augue at cursus
                            ornare.
                        </p>
                        <p>Curabitur condimentum nibh at suscipit interdum.
                            Aenean ac cursus nunc. Phasellus rutrum consequat
                            bibendum</p>
                        <p>Ut in libero sit amet lectus feugiat iaculis. Cras
                            condimentum lobortis nulla, id varius enims.</p>
                    </div>
                    <div className="sec2">
                        <h3>
                            DESIGN SKILLS
                        </h3>
                        <p>Photoshop 60%</p>
                        <div className="skill s1">
                            <hr />
                            <hr />
                        </div>
                        <p>Illustrator 80%</p>
                        <div className="skill s2">
                            <hr />
                            <hr />
                        </div>
                        <p>Indesign 40%</p>
                        <div className="skill s3">
                            <hr />
                            <hr />
                        </div>
                        <p>Desgin 80%</p>
                        <div className="skill s4">
                            <hr />
                            <hr />
                        </div>
                    </div>
                    <div className="sec3">
                        <h3>
                            DEVELOPMENT SKILLS
                        </h3>
                        <div className="circle" style={{ '--p': 45 }}>
                            <p>Php</p>
                        </div>
                        <div className="circle" style={{ '--p': 28 }}>
                            <p>Java</p>
                        </div>
                        <div className="circle" style={{ '--p': 55 }}>
                            <p>HTML</p>
                        </div>
                        <div className="circle" style={{ '--p': 80 }}>
                            <p>JAVA</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="thirdpage">
                <h5>Check out all</h5>
                <h2>MY SERVICES</h2>
                <div className="newstile">
                    <div className="logo">
                        <i className="fa-regular fa-file-lines"></i>
                    </div>
                    <div className="data">
                        <h3>BRAND DESIGN</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi <br />
                            venenatis dictum tristique proin porta leo sed cursus condimentum
                        </p>
                    </div>
                </div>
                <div className="newstile">
                    <div className="logo">
                        <i className="fa-regular fa-file-lines"></i>
                    </div>
                    <div className="data">
                        <h3>BRAND DESIGN</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi <br />
                            venenatis dictum tristique proin porta leo sed cursus condimentum
                        </p>
                    </div>
                </div>
                <div className="newstile">
                    <div className="logo">
                        <i className="fa-regular fa-file-lines"></i>
                    </div>
                    <div className="data">
                        <h3>BRAND DESIGN</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi <br />
                            venenatis dictum tristique proin porta leo sed cursus condimentum
                        </p>
                    </div>
                </div>
                <div className="newstile">
                    <div className="logo">
                        <i className="fa-regular fa-file-lines"></i>
                    </div>
                    <div className="data">
                        <h3>BRAND DESIGN</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi <br />
                            venenatis dictum tristique proin porta leo sed cursus condimentum
                        </p>
                    </div>
                </div>
                <div className="newstile">
                    <div className="logo">
                        <i className="fa-regular fa-file-lines"></i>
                    </div>
                    <div className="data">
                        <h3>BRAND DESIGN</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi <br />
                            venenatis dictum tristique proin porta leo sed cursus condimentum
                        </p>
                    </div>
                </div>
                <div className="newstile">
                    <div className="logo">
                        <i className="fa-regular fa-file-lines"></i>
                    </div>
                    <div className="data">
                        <h3>BRAND DESIGN</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi <br />
                            venenatis dictum tristique proin porta leo sed cursus condimentum
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Content