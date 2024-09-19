import { useState } from "react"
import "../style/home.css"
import Main from "./Main"

const Home = () => {

    const [cart, setCart] = useState(1)
    function handleCount(value) {
        setCart(value)
    }

    return (
        <div className="d-flex flex-column">
            <nav className="for-laptop">
                <div className="logo">
                    <img src="./images/logo.jpg" alt="" height={40} width={100} />
                </div>
                <div className="middle-nav">
                    <div className="location-box">
                        <button className="btn btn-light bi bi-geo-alt"></button>
                        <p className="location-text fw-bold">Hyderabd, Telangana</p>
                    </div>
                    <div className="search-box">
                        <input type="text" className="" placeholder="I'm Searching for dry fruits" />
                        <button className="bi bi-search"></button>
                    </div>
                </div>
                <div className="end-nav">
                    <div className="cart-p"><span className="bi bi-cart"></span><span className="cart">{cart}</span></div>
                    <span className="text-dark">|</span>
                    <span className="bi bi-person"></span>
                </div>
            </nav>
            <nav className="for-mobile">
                <div className="middle-nav">
                    <div className="location-box">
                        <div>
                            <button className="btn btn-light bi bi-geo-alt-fill"></button>
                            <p className="location-text fw-bold">Hyderabd, Telangana</p>
                        </div>
                        <p className="bi bi-bell-fill"></p>
                    </div>
                    <div className="search-box">
                        <input type="text" className="" placeholder="I'm Searching for dry fruits" />
                        <button className="bi bi-search"></button>
                    </div>
                </div>
            </nav>
            <Main sendData={handleCount} />
        </div>
    )
}

export default Home