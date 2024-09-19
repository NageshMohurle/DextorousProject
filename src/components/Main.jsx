import { useEffect, useState } from "react"
import "../style/main.css"
import Categries from "./Categries"

const Main = ({ sendData }) => {

    const [count, setCount] = useState(0)
    const [item, setItem] = useState(1)
    const [style, setStyle] = useState("d-none")
    const [styleCart, setStyleCart] = useState("d-block")

    function handleCart() {
        setCount(count + 1)
        sendData(count)
        if (count > 0) {
            setStyle("d-block")
            setStyleCart("d-none")
        } else {
            setStyle("d-none")
            setStyleCart("d-block")
        }
    }

    function handleIncrement() {
        setItem(item + 1)
    }
    function handleDecrement() {
        if (item == 0) {
            setCount(0)
            setItem(0)
            handleCart()
        } else {
            setItem(item - 1)
        }
    }



    useEffect(() => {
        handleCart()
    }, [])


    return (
        <div className="main-container">
            <div className="main-img">
                {/* <img src="./images/corousel.jpg" alt="" /> */}

                <div id="carouselExampleFade" className="carousel slide carousel-fade">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="./images/caro1.png" className="d-block w-100" alt="..." height={300} />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/caro2.jpg" className="d-block w-100" alt="..." height={300} />
                        </div>
                        <div className="carousel-item">
                            <img src="./images/corousel.jpg" className="d-block w-100" alt="..." height={300} />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="products">
                <div className="organic-products">
                    <h3>Organic Vegetable</h3>
                    <div className="boxes">
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>

                                    <div className={`btn-group d-flex align-items-center gap-2 ${style}`}>
                                        <button className="btn btn-success" onClick={handleDecrement}>-</button>
                                        <span>{item}</span>
                                        <button className="btn btn-success" onClick={handleIncrement}>+</button>
                                    </div>
                                    <button className={styleCart} onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart} className="">+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="organic-products">
                    <h3>Organic Vegetable</h3>
                    <div className="boxes">
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="organic-products">
                    <h3>Organic Vegetable</h3>
                    <div className="boxes">
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <span className="discount">25% off</span>
                            <div className="inner-box">
                                <div className="box-img">
                                    <img src="./images/p1.webp" alt="" />
                                </div>
                                <p className="title">Red Capsicum..</p>
                                <p className="price">&#8377; 54 <span className="o-price">&#8377; 104</span></p>
                                <div className="box-footer">
                                    <p>250 g</p>
                                    <button onClick={handleCart}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Categries />
        </div>
    )
}

export default Main