import logo from '../../assets/images/1.jpg'

const Home = function () {

    const displayMsg = (msg) => {
        alert(msg)
    }


    return <>
        <h2>Hello from Home</h2>
        <img src={logo}/>
        {/* <button onClick={displayMsg}>Click Me</button> */}
        <button onClick={() => { displayMsg("Hello world") }}>Click Me</button>

    </>
}

export default Home