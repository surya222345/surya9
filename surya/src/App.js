import React, { useState } from 'react';
import AN from './imge/an.jpg';
import companies from './imge/Companies.jpeg';
import Home from './imge/Home.jpeg';
import hospital from './imge/hospital.jpeg';
import sp from './imge/sp.jpg';
import sp1 from './imge/sp1.jpg';
import sp2 from './imge/sp2.jpg';
import sp4 from './imge/sp4.jpg';
import sp6 from './imge/sp6.jpeg';
import sp7 from './imge/sp7.jpeg';
import sp5 from './imge/sp5.jpg';
import resort from './imge/Resort.jpeg';
import restarurant from './imge/Restaurant.jpeg';
import school from './imge/school.jpeg';
import college from './imge/college.jpeg';
import city from './imge/city.jpeg';
import vid from './imge/c.mp4';
import anbu from './imge/vi.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Navbar, Nav, Button, Carousel, } from 'react-bootstrap';
import mani from './imge/manibro.jpeg';


function App() {

  // const navigate = useNavigate(); // Get the navigate function from useNavigate hook

  // Function to handle navigation
  // const handleNavigate = () => {
  //   navigate('/login'); // This will navigate to the /login page
  // };
  

  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
const [num,setNum]=useState(1);
const handleAdd=()=>{
  setNum(num+1)



}
  const columnStyle = {
    padding: '20px',
    textAlign: 'center',
    height: '300px',
  };

  const card1 = {
    border: '1px solid #ddd',
    height: '400px',
    backgroundColor: 'red',
    backgroundImage: `url(${sp})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    textAlign: 'center',
    paddingTop: '100px',
    color: 'white',
  };
  const card2 = {
    border: '1px solid #ddd',
    height: '400px',
    backgroundColor: 'red',
    backgroundImage: `url(${sp2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    textAlign: 'center',
    paddingTop: '100px',
    color: 'white',
  };

  const card3 = {
    border: '1px solid #ddd',
    height: '400px',
    backgroundColor: 'red',
    backgroundImage: `url(${sp1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    textAlign: 'center',
    paddingTop: '100px',
    color: 'white',
  };

  const videoStyle = {
    position: 'absolute',
    left: '50%',
    width: '100%',
    objectFit: 'cover',
    transform: 'translate(-50%, -50%)',
  };

  const CarouselImage = ({ text }) => (
    <div
      style={{
        backgroundImage: `url(${AN})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
      }}
    >
      <h3 style={{ color: 'white', textAlign: 'center', paddingTop: '150px' }}>
        {text}
      </h3>
    </div>
  );

  return (
    <>
    
      {/* Navbar */}
      <Navbar id='home' expand="lg" style={{ borderBottom: '2px solid #ddd', backgroundColor: '#FF7F50', background: 'linear-gradient(45deg, rgb(248, 136, 0), rgb(255, 191, 0))' }}>
      <Navbar.Brand href="#home" style={{ color: 'white', fontSize: '15px', fontFamily: 'Roboto, sans-serif', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        Sree Vinayaga Septic Tank Cleaning Services<br></br> |  <a href="tel:+917373211561" style={{ color: 'white', textDecoration: 'none' }}>Phone: +91 7373211561</a>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbar-nav" />

      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          {/* Navbar links for larger screens */}
          <Nav.Link
            href="#home"
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Roboto, sans-serif',
              padding: '10px 20px',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
            }}
            className="navbar-item"
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="#About"
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Roboto, sans-serif',
              padding: '10px 20px',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
            }}
            className="navbar-item"
          >
            About
          </Nav.Link>
          <Nav.Link
            href="#features"
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Roboto, sans-serif',
              padding: '10px 20px',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
            }}
            className="navbar-item"
          >
            Features
          </Nav.Link>
          <Nav.Link
            href="#contact"
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Roboto, sans-serif',
              padding: '10px 20px',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
            }}
            className="navbar-item"
          >
            Contact
          </Nav.Link>

          {/* Mobile number for medium and larger screens */}
          <Nav.Link
            href="tel:+917373211561"
            style={{
              color: 'green',
              fontSize: '18px',
              whiteSpace: 'nowrap',
              fontFamily: 'Roboto, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
            }}
            className="d-none d-md-block" // Show on medium screens and larger
          >
            <span style={{ color: 'white' }}> Mobile numbers: </span>+91 7373211561, 9940953660
          </Nav.Link>

          {/* Mobile version of phone number, visible on smaller screens */}
          <Nav.Link
            href="tel:+917373211561"
            style={{
              color: 'white',
              fontSize: '14px',
              fontFamily: 'Roboto, sans-serif',
              padding: '10px',
              textAlign: 'center',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
            className="d-block d-md-none" // Show only on mobile screens
          >
            Call: +91 7373211561
          </Nav.Link>

          {/* Optional Button or Link */}
          <Nav.Link
            href="#connect"
            style={{
              color: 'white',
              fontSize: '20px',
              fontFamily: 'Roboto, sans-serif',
              padding: '10px 20px',
            }}
          >
            {/* Optional button */}
            {/* <button style={buttonStyles}>Click</button> */}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>





      

      
      {/* Main Content */}
      
      <Row noGutters>
      <Col style={columnStyle} className="p-0">
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '300px',
            overflow: 'hidden',
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              minWidth: '100%',
              minHeight: '100%',
              objectFit: 'cover',
              zIndex: 1,
            }}
          >
            <source src={anbu} />
            Your browser does not support the video tag.
          </video>

          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              position: 'absolute',
              zIndex: 5,
              textAlign: 'center',
              width: '100%',
              paddingTop: '20vh', // Adjust padding to fit content nicely
            }}
          >
            <div>
              <h1
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  marginBottom: '20px',
                  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                }}
                className="display-3 display-sm-4 display-md-3 display-lg-2 display-xl-1"
              >
                Welcome to Our Website
              </h1>
              <h2
                 style={{
                  color: 'white',
                  fontWeight: 'bold',
              
                  marginBottom: '20px',
                  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)',
                }}
                className="display-4 display-sm-5 display-md-4 display-lg-3 display-xl-2"
              >
                 Sree Vinayaga Septic Tank<br></br> Cleaning Services
              </h2>
            </div>
          </div>
        </div>
      </Col>
    </Row>


      {/* Cards Section */}
      <Row>
        <Col sm={12} md={4}>
          <Card style={card1}>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={4}>
          <Card style={card2}>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
               
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col sm={12} md={4}>
        
          <Card style={card3}>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
               
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>







      <Container id="About"
  fluid
  className="mt-5 p-5"
  style={{
    backgroundColor: '#00ffff',
    backgroundImage: 'linear-gradient(orange, skyblue)',
  }}
>
  <Row className="justify-content-center w-100">
    <Col
      xs={12}
      md={8}
      lg={6}
      className="border border-info rounded p-4 shadow-lg bg-white text-center"
      style={{ minHeight: '100vh' }}
    >
      {/* Heading for the About Section */}
      <h2
        className="mb-4"
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          color: 'orange',
          fontFamily: 'Roboto, sans-serif',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      >
        About Sree Vinayaga Septic Tank Cleaning Services
      </h2>

      {/* Introductory Text */}
      <p className="text-primary" style={{ fontSize: '1.2rem', lineHeight: '1.6', fontFamily: 'Arial, sans-serif' }}>
        <strong>Sree Vinayaga Septic Tank Cleaning Services</strong> is a trusted and professional septic tank cleaning service provider based in Coimbatore...
      </p>

      {/* Image Section */}
      <div className="text-center mb-4">
        <img
          src={sp}
          alt="Service"
          className="d-block mx-auto img-fluid"
          style={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderRadius: '10px', // Adding rounded corners for a softer look
          }}
        />
      </div>

      {/* Why Choose Us Section */}
      <h4
        className="text-success mt-5 mb-3"
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textTransform: 'uppercase', // Making the title bold and uppercase
          letterSpacing: '1px', // Adding spacing between letters for a modern feel
        }}
      >
        Why Choose Us?
      </h4>
      <ul
        className="list-unstyled mt-3"
        style={{ fontSize: '1.2rem', lineHeight: '1.8', fontFamily: 'Verdana, sans-serif' }}
      >
        <li className="mb-4">
          <strong>Expertise & Experience:</strong> Our team consists of highly trained and experienced professionals...
          <div className="text-center mt-2">
            <img
              src={sp1}
              alt="Affordable"
              className="d-block mx-auto img-fluid"
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
        </li>
        <li className="mb-4">
          <strong>Affordable & Transparent Pricing:</strong> We believe in providing excellent service at the most competitive prices...
          <div className="text-center mt-2">
            <img
              src={sp2}
              alt="Affordable"
              className="d-block mx-auto img-fluid"
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
        </li>
        <li className="mb-4">
          <strong>24/7 Availability:</strong> We understand that septic issues can occur at any time...
          <div className="text-center mt-2">
            <img
              src={sp4}
              alt="24/7 Support"
              className="d-block mx-auto img-fluid"
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
        </li>
        <li className="mb-4">
          <strong>Eco-Friendly Approach:</strong> We are committed to protecting the environment...
          <div className="text-center mt-2">
            <img
              src={sp}
              alt="Eco-Friendly"
              className="d-block mx-auto img-fluid"
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
        </li>
        <li className="mb-4">
          <strong>Customer Satisfaction Guaranteed:</strong> We take pride in our work...
          <div className="text-center mt-2">
            <img
              src={AN}
              alt="Customer Satisfaction"
              className="d-block mx-auto img-fluid"
              style={{
                maxWidth: '100%',
                height: 'auto',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />
          </div>
        </li>
      </ul>

      {/* Our Services Section */}
      <h4
        className="text-info mt-5 mb-3"
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        Our Services Include:
      </h4>

      <ul
        className="list-unstyled"
        style={{ fontSize: '1.3rem', lineHeight: '1.8', fontFamily: 'Verdana, sans-serif' }}
      >
        <li className="mb-4 d-flex justify-content-between align-items-center">
          <strong>Regular septic tank cleaning and maintenance</strong>
          <i
            className="fas fa-arrow-right text-info"
            style={{ fontSize: '1.5rem' }}
          ></i>
        </li>
        <li className="mb-4 d-flex justify-content-between align-items-center">
          <strong>Septic tank pumping and waste removal</strong>
          <i
            className="fas fa-arrow-right text-info"
            style={{ fontSize: '1.5rem' }}
          ></i>
        </li>
        <li className="mb-4 d-flex justify-content-between align-items-center">
          <strong>Inspection and repair of septic systems</strong>
          <i
            className="fas fa-arrow-right text-info"
            style={{ fontSize: '1.5rem' }}
          ></i>
        </li>
        <li className="mb-4 d-flex justify-content-between align-items-center">
          <strong>Emergency septic tank services</strong>
          <i
            className="fas fa-arrow-right text-info"
            style={{ fontSize: '1.5rem' }}
          ></i>
        </li>
        <li className="mb-4 d-flex justify-content-between align-items-center">
          <strong>Drainage solutions</strong>
          <i
            className="fas fa-arrow-right text-info"
            style={{ fontSize: '1.5rem' }}
          ></i>
        </li>
      </ul>

      {/* Closing Message */}
      <p
        className="mt-4"
        style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          color: '#333',
          letterSpacing: '0.5px',
        }}
      >
        At <strong>Sree Vinayaga Septic Tank Cleaning Services</strong>, we focus on providing reliable and efficient septic tank services...
      </p>

      {/* Contact Button */}
      <div className="d-flex justify-content-center mt-4">
        <a
          href="tel:+917373211561"
          className="btn btn-info btn-lg text-white"
          style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            padding: '12px 30px',
            textTransform: 'uppercase',
            borderRadius: '8px', // Softening the button edges
          }}
        >
          Contact Us Today (+91 7373211561)
        </a>
      </div>
    </Col>
  </Row>
</Container>





    
<Container className="my-5">
  <Row className="text-center">
    {/* Column 1 */}
    <Col xs={12} md={6} lg={3} className="mb-4 d-flex justify-content-center">
      <Card className="w-100 d-flex flex-column">
        <Card.Img className="mx-auto d-block" style={{ width: '100%', height: '300px' }} variant="top" src={companies} alt="Industries and Companies" />
        <Card.Body>
          <Card.Footer className="fs-2">All Industries and Companies</Card.Footer> {/* Increased font size */}
        </Card.Body>
      </Card>
    </Col>

    {/* Column 2 */}
    <Col xs={12} md={6} lg={3} id="features" className="mb-4 d-flex justify-content-center ">
      <Card className="w-100 d-flex flex-column">
        <Card.Img className="mx-auto d-block" style={{ width: '100%', height: '300px' }} variant="top" src={sp6} alt="School" />
        <Card.Body>
          <Card.Footer className="fs-2">School</Card.Footer> {/* Increased font size */}
        </Card.Body>
      </Card>
    </Col>

    {/* Column 3 */}
    <Col xs={12} md={6} lg={3} className="mb-4 d-flex justify-content-center">
      <Card className="w-100 d-flex flex-column">
        <Card.Img className="mx-auto d-block" style={{ width: '100%', height: '300px' }} variant="top" src={sp7} alt="College" />
        <Card.Body>
          <Card.Footer className="fs-2">College</Card.Footer> {/* Increased font size */}
        </Card.Body>
      </Card>
    </Col>

    {/* Column 4 */}
    <Col xs={12} md={6} lg={3} className="mb-4 d-flex justify-content-center">
      <Card className="w-100 d-flex flex-column">
        <Card.Img className="mx-auto d-block" style={{ width: '100%', height: '300px' }} variant="top" src={hospital} alt="Hospital" />
        <Card.Body>
          <Card.Footer className="fs-2">Hospital</Card.Footer> {/* Increased font size */}
        </Card.Body>
      </Card>
    </Col>

    {/* Column 5 */}
    <Col xs={12} md={6} lg={3} className="mb-4 d-flex justify-content-center">
      <Card className="w-100 d-flex flex-column">
        <Card.Img className="mx-auto d-block" style={{ width: '100%', height: '300px' }} variant="top" src={resort} alt="Resort" />
        <Card.Body>
          <Card.Footer className="fs-2">Resort</Card.Footer> {/* Increased font size */}
        </Card.Body>
      </Card>
    </Col>

    {/* Column 6 */}
    <Col xs={12} md={6} lg={3} className="mb-4 d-flex justify-content-center">
      <Card className="w-100 d-flex flex-column">
        <Card.Img className="mx-auto d-block" style={{ width: '100%', height: '300px' }} variant="top" src={restarurant} alt="Restaurant" />
        <Card.Body>
          <Card.Footer className="fs-2">Restaurant</Card.Footer> {/* Increased font size */}
        </Card.Body>
      </Card>
    </Col>

    {/* Column 7 */}
    <Col xs={12} md={6} lg={3} className="mb-4 d-flex justify-content-center">
      <Card className="w-100 d-flex flex-column">
        <Card.Img className="mx-auto d-block" style={{ width: '100%', height: '300px' }} variant="top" src={Home} alt="Home" />
        <Card.Body>
          <Card.Footer className="fs-2">Home</Card.Footer> {/* Increased font size */}
        </Card.Body>
      </Card>
    </Col>

    {/* Column 8 */}
    <Col xs={12} md={6} lg={3} className="mb-4 d-flex justify-content-center">
      <Card className="w-100 d-flex flex-column">
        <Card.Img className="mx-auto d-block" style={{ width: '100%', height: '300px' }} variant="top" src={city} alt="City" />
        <Card.Body>
          <Card.Footer className="fs-2">City</Card.Footer> {/* Increased font size */}
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>







<Container
  style={{
    background: 'linear-gradient(to right, #FFA500, #FF6347)', // Gradient from orange to tomato red
    padding: '50px'
  }}
  className=" p-5 mt-5"
>
  <Row>
    {/* Column 1 with Carousel */}
    <Col xs={12} md={4} className=" p-3">
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block "
            src={sp2}
            alt="First slide"
            style={{ height: '400px', width: '400px' }}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={sp}
            alt="Second slide"
            style={{ height: '400px', width: '400px' }}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={sp4}
            alt="Third slide"
            style={{ height: '400px', width: '400px' }}
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Col>

    {/* Column 2 with Carousel */}
    <Col xs={12} md={4} className=" p-3" style={{ backgroundColor: 'transparent' }}>
    
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block "
            src={sp}
            alt="First slide"
            style={{ height: '400px', width: '400px' }}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={AN}
            alt="Second slide"
            style={{ height: '400px', width: '400px' }}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={sp4}
            alt="Third slide"
            style={{ height: '400px', width: '400px' }}
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Col>

    {/* Column 3 with Carousel */}
    <Col xs={12} md={4} className=" p-3" style={{ backgroundColor: 'transparent' }}>
      
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sp}
            alt="First slide"
            style={{ height: '400px', width: '400px' }}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={sp1}
            alt="Second slide"
            style={{ height: '400px', width: '400px' }}
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sp2}
            alt="Third slide"
            style={{ height: '400px', width: '400px' }}
          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Col>
  </Row>
</Container>


     {/* Google Map Section */}
     <div style={{ marginTop: '20px' }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7529.50224495441!2d76.93650989999999!3d10.9035745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85b6a3c397cdf%3A0x5aa702b5a8f7f351!2sMarappalam%2C%20Madukkarai%2C%20Tamil%20Nadu%20641105!5e1!3m2!1sen!2sin!4v1734856398857!5m2!1sen!2sin"
    width="100%"  // Use 100% width for responsiveness
    height="450"
    style={{ border: '0', borderRadius: '10px' }}  // Applied correct JSX style object
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map - Marappalam, Madukkarai"
  ></iframe>
</div>





         {/* Contact Section */}
{/* <section id="contact" style={{ padding: '50px 0', backgroundColor: '#f1f1f1' }}>
  <Container>
    <Row>
      <Col md={8} className="mx-auto">
        <h2 className="text-center text-info mb-4">Contact Us</h2>
        
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
          </div>

          <Button variant="info" type="submit" style={{ width: '100%' }}>
            Send Message
          </Button>
        </form>
      </Col>
    </Row>
  </Container>
</section> */}


      {/* Footer */}
      {/* <footer id='conect' className="bg-dark text-light py-4">
        <Container>
          <Row>
            <Col md={4}>
              <h5>About Us</h5>
              <p>
                We are a company focused on delivering quality products and services.
              </p>
            </Col>
            <Col md={4}>
              <h5>Quick Links</h5>
              <Nav className="flex-column">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#">Services</Nav.Link>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>
            </Col>
            <Col md={4}>
              <h5>Follow Us</h5>
              <Nav className="d-flex">
                <Nav.Link href="#" className="text-light">Facebook</Nav.Link>
                <Nav.Link href="#" className="text-light">Twitter</Nav.Link>
                <Nav.Link href="#" className="text-light">Instagram</Nav.Link>
              </Nav>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col className="text-center">
             
            </Col>
          </Row>
        </Container>
      </footer> */}




<footer id='conect' className="bg-dark text-light py-4">
  <Container>
    <Row>
      <Col md={4}>
        <h5>About Us</h5>
        <p>
          Vinayaga Septic Tank Cleaning Services specializes in providing professional and reliable septic tank cleaning solutions. We are committed to maintaining a clean and safe environment for our clients.
        </p>
      </Col>
      <Col md={4}>
        <h5>Quick Links</h5>
        <Nav className="flex-column">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Services</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Col>
      <Col md={4}>
        <h5>Follow Us</h5>
        <Nav className="d-flex">
          <Nav.Link href="home" className="text-light">Facebook</Nav.Link>
          <Nav.Link href="#" className="text-light">Twitter</Nav.Link>
          <Nav.Link href="#" className="text-light">Instagram</Nav.Link>
        </Nav>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col className="text-center">
        {/* <p>&copy; 2024 Vinayagam Septic Tank Cleaning Services. All rights reserved.</p> */}
      </Col>
    </Row>
  </Container>
</footer>


      



      
    </>
  );
}

export default App;
