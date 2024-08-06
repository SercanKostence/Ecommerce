import React, { Component, Fragment } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SuggestedProduct extends Component {
    componentDidMount(){
        window.scroll(0,0)
   }
  renderCard(imageSrc, productName, price) {
    return (
      <Col className="p-2" xl={2} lg={2} md={3} sm={4} xs={6}>
        <Link to="/productdetails" className='no-underline'>
          <div className="bg-white shadow-md rounded overflow-hidden transition-transform hover:scale-105">
            <div className="w-full h-48 flex items-center justify-center">
              <img className="w-full h-full object-contain" src={imageSrc} alt={productName} />
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold">{productName}</p>
              <p className="text-gray-700">Price: {price}</p>
            </div>
          </div>
        </Link>
      </Col>
    );
  }

  render() {
    return (
      <Fragment>
        <Container className="text-center py-8" fluid={true}>
          <div className="section-title mb-12">
            <h2 className="text-2xl font-bold mb-2">YOU MAY ALSO LIKE</h2>
            <p className="text-gray-600">Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            {this.renderCard("https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/q/j/x/c21-rmx3201-realme-original-imagfxfwbszrxkvu.jpeg?q=70", "Realme C21 (Cross Black, 64 GB)", "$120")}
            {this.renderCard("https://rukminim1.flixcart.com/image/416/416/knm2s280/mobile/j/x/c/hot-10-play-x688b-infinix-original-imag29gxqzuxkmnk.jpeg?q=70", "Realme C21 (Cross Blue, 64 GB)", "$120")}
            {this.renderCard("https://rukminim1.flixcart.com/image/416/416/kn7sdjk0/mobile/g/r/g/c21-rmx3201-realme-original-imagfxfwn9aryyda.jpeg?q=70", "Realme C21 (Cross Black, 64 GB)", "$120")}
            {this.renderCard("https://rukminim1.flixcart.com/image/416/416/knm2s280/mobile/v/l/u/hot-10-play-x688b-infinix-original-imag29hfaedkgdfe.jpeg?q=70", "Realme C21 (Cross Black, 64 GB)", "$120")}
            {this.renderCard("https://rukminim1.flixcart.com/image/416/416/knrsjgw0/mobile/f/o/w/8-5g-rmx3241-realme-original-imag2d8eksc2szzy.jpeg?q=70", "Realme C21 (Cross Black, 64 GB)", "$120")}
            {this.renderCard("https://rukminim1.flixcart.com/image/416/416/kd69z0w0/mobile/a/n/g/mi-redmi-note-9-b086982zkf-original-imafu4qf8gfcutde.jpeg?q=70", "Realme C21 (Cross Black, 64 GB)", "$120")}
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default SuggestedProduct
