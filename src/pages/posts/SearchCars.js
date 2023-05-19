import React from "react";
import { useState, useEffect } from "react";

//import component Bootstrap React
import { Row, Col, Form, Container } from "react-bootstrap";

import { bgMobil, Mobil, iconSosmed, carsCardOrang, carsCardTransmission, carsCardTahun } from "./Assets";
import "./css/index.css";

//import axios
import axios from "axios";

function PostIndex() {
    //define state
    const [cars, setCars] = useState([]);
    const [capacity, setCapacity] = useState([]);
    const [type, setType] = useState([]);

    //useEffect hook
    useEffect(() => {
        //panggil method "fetchData"
        fetchData();
    }, []);

    //function "fetchData"
    const fetchData = async () => {
        //fetching
        const response = await axios.get("https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json");
        //get response data
        const data = await response.data;
        //assign response data to state "posts"
        setCars(data);
    };

    return (
        <div>
            <div className="heroSection d-flex justify-content-between">
                <div className="text">
                    <div className="text1">
                        <p style={{ color: "#000" }}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</p>
                    </div>
                    <div className="text2">
                        <p style={{ color: "#000" }}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    </div>
                </div>
                <div className="image position-relative">
                    <img className="img position-absolute img-fluid" src={bgMobil} alt="" style={{ right: 0, bottom: 0 }} />
                    <img className="img position-absolute img-fluid" src={Mobil} alt="" style={{ right: 0, bottom: 0 }} />
                </div>
            </div>

            <Container>
                <Row className="searchCar d-flex justify-content-evenly align-items-center">
                    <Col md={2} className="input input1 me-5">
                        <Form.Group className="formGroup">
                            <Form.Label className="labelForm">Type Driver</Form.Label>
                            <Form.Select className="inputForm" onChange={(e) => setType(e.target.value)}>
                                <option value="" disabled selected hidden>
                                    Pilih Tipe Driver
                                </option>
                                <option value="true">Dengan Sopir</option>
                                <option value="false">Tanpa Sopir</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={2} className="input input2 me-5">
                        <Form.Group className="formGroup">
                            <div className="labelForm">
                                <label>Tanggal</label>
                            </div>
                            <div className="formdate form1">
                                <input name="year" className="inputForm border rounded" type="date" />
                            </div>
                        </Form.Group>
                    </Col>
                    <Col md={2} className="input input3 me-5">
                        <Form.Group className="formGroup">
                            <div className="labelForm">
                                <label>Waktu Jemput/Ambil</label>
                            </div>
                            <Form.Select className="inputForm form1 form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option value="" disabled selected hidden>
                                    Pilih Waktu
                                </option>
                                <option value="1">08.00 WIB</option>
                                <option value="2">09.00 WIB</option>
                                <option value="3">10.00 WIB</option>
                                <option value="4">11.00 WIB</option>
                                <option value="5">12.00 WIB</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={2} className="input input4 me-5">
                        <Form.Group className="formGroup">
                            <Form.Label className="labelForm">Jumlah Penumpang</Form.Label>
                            <Form.Control className="inputForm" type="number" onChange={(e) => setCapacity(e.target.value)} placeholder="Capacity" required></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            </Container>

            {capacity > 6 ? (
                <div className="bg-danger p-1 rounded text-center m-auto mb-4" style={{ width: "450px" }}>
                    <p className="text-white h5">jumlah penumpang melebihi kapasitas mobil !</p>
                </div>
            ) : (
                <div className="car container d-flex justify-content-evenly flex-wrap" style={{ marginBottom: "50px" }}>
                    {cars
                        .filter((item) => String(item.available) === type && item.capacity >= capacity)
                        .map((car) => (
                            <div key={car.id} className="cardCar border rounded mb-3 p-3" style={{ width: "300px", height: "556px" }}>
                                <img className="" style={{ width: "270px", height: "160px" }} src={`/assets/${car.image}`} alt="" />
                                <h4 className="mt-3">{car.type}</h4>
                                <p className="fw-bold mt-3">Rp {car.rentPerDay} / hari</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, exercitationem!</p>
                                <div className="info d-flex align-items-center capacity">
                                    <img className="me-3" style={{ marginTop: "-15px" }} src={carsCardOrang} alt="" />
                                    <p>{car.capacity} orang</p>
                                </div>
                                <div className="info d-flex align-items-center transmission">
                                    <img className="me-3" style={{ marginTop: "-15px" }} src={carsCardTransmission} alt="" />
                                    <p>{car.transmission}</p>
                                </div>
                                <div className="info d-flex align-items-center year">
                                    <img className="me-3" style={{ marginTop: "-15px" }} src={carsCardTahun} alt="" />
                                    <p>tahun {car.year}</p>
                                </div>
                                <button type="button" className="btn text-light fw-bold" style={{ width: "100%", height: "48px", backgroundColor: "#5cb85f" }}>
                                    Register
                                </button>
                            </div>
                        ))}
                </div>
            )}

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

export default PostIndex;
