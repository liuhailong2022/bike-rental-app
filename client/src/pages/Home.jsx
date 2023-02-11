import React from 'react'

import Helmet from '../components/Helmet/Helmet'

import { Container, Row, Col } from 'reactstrap'

import bikeData from '../assets/data/bikeData'
import BikeItem from '../components/UI/BikeItem'

const Home = () => {
    return (
        <Helmet title="Home">
            {/* =========== bike offer section ============= */}
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h6 className="section__subtitle">Come with</h6>
                            <h2 className="section__title">Hot Offers</h2>
                        </Col>

                        {bikeData.slice(0, 6).map((item) => (
                            <BikeItem item={item} key={item.id} />
                        ))}
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home
