import React from "react";

import { bgMobil, Mobil, ourservice, checkIcon, iconCardHarga, iconCardJempol, iconCardSopir, iconCardTime, iconSosmed } from "./posts/Assets";
import "./posts/css/home.css";

function Home() {
    return (
        <div>
            <div className="heroSection d-flex justify-content-between">
                <div className="text">
                    <div className="text1">
                        <p>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
                    </div>
                    <div className="text2">
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    </div>
                    <div className="TextButton">
                        <a href="/cars" type="button" className="btn text-light fw-bold" style={{ backgroundColor: "#5cb85f" }}>
                            Mulai Sewa Mobil
                        </a>
                    </div>
                </div>
                <div className="image position-relative">
                    <img className="img position-absolute img-fluid" src={bgMobil} alt="" style={{ right: 0, bottom: 0 }} />
                    <img className="img position-absolute img-fluid" src={Mobil} alt="" style={{ right: 0, bottom: 0 }} />
                </div>
            </div>

            <div className="ourServices d-flex justify-content-center" id="ourServices">
                <div className="image">
                    <img src={ourservice} alt="" />
                </div>
                <div className="textServices">
                    <div className="titleServices mb-3">
                        <p>Best Car Rental for any kind of trip in (Lokasimu)!</p>
                    </div>
                    <div className="detailsServices mb-2">
                        <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    </div>
                    <div className="listServices">
                        <div className="services d-flex align-item-center mb-1">
                            <div className="me-3">
                                <img src={checkIcon} alt="" />
                            </div>
                            <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                        </div>
                        <div className="services d-flex align-item-center mb-1">
                            <div className="me-3">
                                <img src={checkIcon} alt="" />
                            </div>
                            <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                        </div>
                        <div className="services d-flex align-item-center mb-1">
                            <div className="me-3">
                                <img src={checkIcon} alt="" />
                            </div>
                            <p>Sewa Mobil Jangka Panjang Bulanan</p>
                        </div>
                        <div className="services d-flex align-item-center mb-1">
                            <div className="me-3">
                                <img src={checkIcon} alt="" />
                            </div>
                            <p>Gratis Antar - Jemput Mobil di Bandara</p>
                        </div>
                        <div className="services d-flex align-item-center mb-1">
                            <div className="me-3">
                                <img src={checkIcon} alt="" />
                            </div>
                            <p>Layanan Airport Transfer / Drop In Out</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="whyUs container" id="whyUs">
                <div className="titleWhyus">
                    <div className="whyTitle">
                        <p>Why Us?</p>
                    </div>
                    <div className="whyInfo">
                        <p>Mengapa harus pilih Binar Car Rental?</p>
                    </div>
                </div>
                <div className="whyCard d-flex justify-content-between">
                    <div className="card">
                        <div className="card-body">
                            <div className="title">
                                <div className="iconCard">
                                    <img className="mb-3" src={iconCardJempol} alt="" />
                                </div>
                                <h5 className="card-title mb-3">Mobil Lengkap</h5>
                            </div>
                            <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="title">
                                <div className="iconCard">
                                    <img className="mb-3" src={iconCardHarga} alt="" />
                                </div>
                                <h5 className="card-title mb-3">Harga Murah</h5>
                            </div>
                            <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="title">
                                <div className="iconCard">
                                    <img className="mb-3" src={iconCardTime} alt="" />
                                </div>
                                <h5 className="card-title mb-3">Layanan 24 Jam</h5>
                            </div>
                            <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="title">
                                <div className="iconCard">
                                    <img className="mb-3" src={iconCardSopir} alt="" />
                                </div>
                                <h5 className="card-title mb-3">Sopir Profesional</h5>
                            </div>
                            <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="order container card text-center p-4" style={{ backgroundColor: "#0d28a6" }}>
                <div className="card-body">
                    <h5 className="card-title text-light p-2">Sewa Mobil di (Lokasimu) Sekarang</h5>
                    <p className="card-text text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#" className="btn btn-primary" style={{ backgroundColor: "#5cb85f" }}>
                        Mulai Sewa Mobil
                    </a>
                </div>
            </div>

            <div className="faq container d-flex justify-content-between" id="faq">
                <div className="titleFAQ">
                    <div className="faqTitle">
                        <p>Frequently Asked Question</p>
                    </div>
                    <div className="faqInfo">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>

                <div className="faqList">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item border">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Apa saja syarat yang dibutuhkan?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, nobis unde? Accusantium, quaerat facere ullam nihil mollitia nesciunt excepturi odit?</div>
                            </div>
                        </div>
                        <div className="accordion-item border">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Berapa hari minimal sewa mobil lepas kunci?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga magni aspernatur enim eligendi et explicabo saepe odio rerum porro sunt.</div>
                            </div>
                        </div>
                        <div className="accordion-item border">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores saepe ut deleniti eius doloremque esse quis error asperiores, officia pariatur!</div>
                            </div>
                        </div>
                        <div className="accordion-item border">
                            <h2 className="accordion-header" id="flush-headinFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Apakah Ada biaya antar-jemput?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi consectetur quibusdam earum dolor beatae explicabo nesciunt voluptatibus rem quisquam vitae!</div>
                            </div>
                        </div>
                        <div className="accordion-item border">
                            <h2 className="accordion-header" id="flush-headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Bagaimana jika terjadi kecelakaan
                                </button>
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio in illum explicabo natus! Recusandae quae eum minus modi sint numquam?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer container d-flex justify-content-start">
                <div className="footer footer1">
                    <div className="addres">
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
                    </div>
                    <div className="email">
                        <p>binarcarrental@gmail.com</p>
                    </div>
                    <div className="phone">
                        <p>081-233-334-808</p>
                    </div>
                </div>
                <div className="footer footer2">
                    <div>
                        <p>Our Services</p>
                    </div>
                    <div>
                        <p>Why Us</p>
                    </div>
                    <div>
                        <p>Testimonial</p>
                    </div>
                    <div>
                        <p>FAQ</p>
                    </div>
                </div>
                <div className="footer footer3">
                    <div className="connect">
                        <p>Connect With Us</p>
                    </div>
                    <div className="sosmed">
                        <img src={iconSosmed} alt="" />
                    </div>
                </div>
                <div className="footer footer4">
                    <div className="copyright">
                        <p>Copyright Binar 2022</p>
                    </div>
                    <div className="logoBinar">
                        <div style={{ width: "100px", height: "34px", backgroundColor: "#0d28a6" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
