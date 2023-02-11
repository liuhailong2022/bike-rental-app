import React, { useEffect } from 'react'

import bikeData from '../assets/data/bikeData'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import { useParams } from 'react-router-dom'
import BookingForm from '../components/UI/BookingForm'

const BikeDetails = () => {
    const { slug } = useParams()

    const singleBikeItem = bikeData.find((item) => item.bikeName === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [singleBikeItem])

    return (
        <Helmet title={singleBikeItem.bikeName}>
            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <img
                                src={singleBikeItem.imgUrl}
                                alt=""
                                className="w-100"
                            />
                        </Col>

                        <Col lg="6">
                            <div className="bike__info">
                                <h2 className="section__title">
                                    {singleBikeItem.bikeName}
                                </h2>

                                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                                    <h6 className="rent__price fw-bold fs-4">
                                        ${singleBikeItem.price}.00 / Day
                                    </h6>

                                    <span className=" d-flex align-items-center gap-2">
                                        <span style={{ color: '#f9a826' }}>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                            <i class="ri-star-s-fill"></i>
                                        </span>
                                        ({singleBikeItem.rating} ratings)
                                    </span>
                                </div>

                                <p className="section__description">
                                    {singleBikeItem.description}
                                </p>

                                <div
                                    className=" d-flex align-items-center mt-3"
                                    style={{ columnGap: '4rem' }}
                                >
                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i
                                            class="ri-roadster-line"
                                            style={{ color: '#f9a826' }}
                                        ></i>{' '}
                                        {singleBikeItem.brand}
                                    </span>

                                    <span className=" d-flex align-items-center gap-1 section__description">
                                        <i
                                            class="ri-settings-2-line"
                                            style={{ color: '#f9a826' }}
                                        ></i>{' '}
                                        {singleBikeItem.model}
                                    </span>

                                </div>
                            </div>
                        </Col>

                        <Col lg="7" className="mt-5">
                            <div className="booking-info mt-5">
                                <h5 className="mb-4 fw-bold ">
                                    Booking Information
                                </h5>
                                <BookingForm />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default BikeDetails
