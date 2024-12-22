import React, { useState } from 'react';
import img1 from './imge/s.avif';
import vid from './imge/c.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Navbar, Nav, Button ,Carousel} from 'react-bootstrap';
import mani from './imge/manibro.jpeg';
function Tap() {

return(
    <Carousel>
          <Carousel.Item>
                <img src={mani} className='w-75'/>

                <Carousel.Caption>
                    <h1>iam a surya</h1>
                    <p>surya</p>
                </Carousel.Caption>

          </Carousel.Item>

    </Carousel>
);

}

export default Tap 