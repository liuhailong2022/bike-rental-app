import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import bikeData from '../assets/data/bikeData'
import { Container, Row, Col } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'

const BikeReserve = () => {
    const { slug } = useParams()
    const singleBikeItem = bikeData.find((item) => item.bikeName === slug)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [singleBikeItem])

    return (
        <Helmet>
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
                                <p className="section__description">
                                    {singleBikeItem.description}
                                </p>
                            </div>
                            <div></div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default BikeReserve
