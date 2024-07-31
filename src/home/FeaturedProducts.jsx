import React, { Component, Fragment } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import '../assets/css/card.css'; 

export class FeaturedProducts extends Component {
  render() {
    return (
       <Fragment>
            <Container className='text-center' fluid={true}>
        <div className='section-title text-center'>
            <h2>FEATURED PRODUCTS</h2>
        </div>
        <p>Some of Our Exclusive Collection</p>


            <Row>
<Col xl={2} lg={2} md={2} sm={4} xs={6}>
    <Card className='image-box card'>
        <img className='center' src="https://m.media-amazon.com/images/I/71hLIZTbrUL._AC_SX679_.jpg" alt="iphone15" />
      <Card.Body>
        <p style={{ color: 'black', fontSize: '16px', fontWeight: '400' }}>Apple iPhone 15 Plus (512 GB) - Sarı</p>
        <p>Price: $120</p>  
      </Card.Body>
    </Card>
</Col>
<Col xl={2} lg={2} md={2} sm={4} xs={6}>
    <Card className='image-box card'>
        <img className='center' src="https://m.media-amazon.com/images/I/71hLIZTbrUL._AC_SX679_.jpg" alt="iphone15" />
      <Card.Body>
        <p style={{ color: 'black', fontSize: '16px', fontWeight: '400' }}>Apple iPhone 15 Plus (512 GB) - Sarı</p>
        <p>Price: $120</p>  
      </Card.Body>
    </Card>
</Col>
<Col xl={2} lg={2} md={2} sm={4} xs={6}>
    <Card className='image-box card'>
        <img className='center' src="https://m.media-amazon.com/images/I/71hLIZTbrUL._AC_SX679_.jpg" alt="iphone15" />
      <Card.Body>
        <p style={{ color: 'black', fontSize: '16px', fontWeight: '400' }}>Apple iPhone 15 Plus (512 GB) - Sarı</p>
        <p>Price: $120</p>  
      </Card.Body>
    </Card>
</Col>
<Col xl={2} lg={2} md={2} sm={4} xs={6}>
    <Card className='image-box card'>
        <img className='center' src="https://m.media-amazon.com/images/I/71hLIZTbrUL._AC_SX679_.jpg" alt="iphone15" />
      <Card.Body>
        <p style={{ color: 'black', fontSize: '16px', fontWeight: '400' }}>Apple iPhone 15 Plus (512 GB) - Sarı</p>
        <p>Price: $120</p>  
      </Card.Body>
    </Card>
</Col>
<Col xl={2} lg={2} md={2} sm={4} xs={6}>
    <Card className='image-box card'>
        <img className='center' src="https://m.media-amazon.com/images/I/71hLIZTbrUL._AC_SX679_.jpg" alt="iphone15" />
      <Card.Body>
        <p style={{ color: 'black', fontSize: '16px', fontWeight: '400' }}>Apple iPhone 15 Plus (512 GB) - Sarı</p>
        <p>Price: $120</p>  
      </Card.Body>
    </Card>
</Col>
<Col xl={2} lg={2} md={2} sm={4} xs={6}>
    <Card className='image-box card'>
        <img className='center' src="https://m.media-amazon.com/images/I/71hLIZTbrUL._AC_SX679_.jpg" alt="iphone15" />
      <Card.Body>
        <p style={{ color: 'black', fontSize: '16px', fontWeight: '400' }}>Apple iPhone 15 Plus (512 GB) - Sarı</p>
        <p>Price: $120</p>  
      </Card.Body>
    </Card>
</Col>
<Col xl={2} lg={2} md={2} sm={4} xs={6}>
    <Card className='image-box card'>
        <img className='center' src="https://m.media-amazon.com/images/I/71hLIZTbrUL._AC_SX679_.jpg" alt="iphone15" />
      <Card.Body>
        <p style={{ color: 'black', fontSize: '16px', fontWeight: '400' }}>Apple iPhone 15 Plus (512 GB) - Sarı</p>
        <p>Price: $120</p>  
      </Card.Body>
    </Card>
</Col>
            </Row>

            </Container>
       </Fragment>
    )
  }
}

export default FeaturedProducts
