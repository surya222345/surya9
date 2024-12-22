import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Navbar, Nav, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [images, setImages] = useState(
    // Sample images for the admin page
    JSON.parse(localStorage.getItem('images')) || []
  );

  const [orders, setOrders] = useState(
    // Sample orders for the admin page
    JSON.parse(localStorage.getItem('orders')) || []
  );

  const nav = useNavigate();

  // Handle deletion of an image
  const handleImageDelete = (index) => {
    const updatedImages = images.filter((_, i) => i !== index); // Delete the image by index
    setImages(updatedImages);
    localStorage.setItem('images', JSON.stringify(updatedImages)); // Update localStorage
  };

  // Handle deletion of an order
  const handleOrderDelete = (index) => {
    const updatedOrders = orders.filter((_, i) => i !== index); // Delete the order by index
    setOrders(updatedOrders);
    localStorage.setItem('orders', JSON.stringify(updatedOrders)); // Update localStorage
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Once the image is loaded, add it to the images state and update localStorage
        const newImage = reader.result;
        const updatedImages = [...images, newImage];
        setImages(updatedImages);
        localStorage.setItem('images', JSON.stringify(updatedImages));
      };
      reader.readAsDataURL(file); // Convert the image file to a base64 URL
    }
  };

  // Navigate to the upload page
  const onSubmit = () => {
    nav('/upload'); // Correct path for navigation
  };

  return (
    <div style={{ backgroundColor: '#fafafa', minHeight: '100vh', paddingTop: '50px' }}>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">InstaClone</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/admin">Admin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Container className="mt-5 pt-5">
        <Row>
          <Col xs={12}>
            <h3 className="text-center mb-4" style={{ color: '#262626', fontFamily: 'Arial', fontWeight: 'bold' }}>Admin Panel</h3>

            {/* Image Management Section */}
            <div className="d-flex justify-content-center">
              <Card style={{ width: '100%', maxWidth: '600px' }}>
                <Card.Body>
                  <h5>Manage Uploaded Images</h5>
                  {images.length > 0 ? (
                    <div className="d-flex flex-wrap justify-content-center">
                      {images.map((image, index) => (
                        <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                          <Card style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                            <Card.Img variant="top" src={image} alt={`Uploaded ${index}`} style={{ maxWidth: '100%', height: 'auto', objectFit: 'cover', borderRadius: '10px' }} />
                            <Card.Body>
                              <Button variant="danger" onClick={() => handleImageDelete(index)} style={{ width: '100%' }}>Delete</Button>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </div>
                  ) : (
                    <p>No images uploaded yet.</p>
                  )}
                </Card.Body>
              </Card>
            </div>

            <div className="text-center mt-4">
              {/* File input for uploading new images */}
              <Form.Group controlId="imageUpload">
                <Form.Label>Upload New Image</Form.Label>
                <Form.Control type="file" onChange={handleImageUpload} />
              </Form.Group>
            </div>
          </Col>
        </Row>

        {/* Orders Management Section */}
        <Row className="mt-5">
          <Col xs={12}>
            <h4 className="text-center mb-4" style={{ color: '#262626' }}>Manage Orders</h4>
            <div className="d-flex flex-wrap justify-content-center">
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
                    <Card style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                      <Card.Body>
                        <Card.Title>{order.name}</Card.Title>
                        <Card.Text>
                          Quantity: {order.quantity}<br />
                          Price: ${order.price}<br />
                          Total: ${order.total}
                        </Card.Text>
                        <Button variant="danger" onClick={() => handleOrderDelete(index)} style={{ width: '100%' }}>Delete Order</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))
              ) : (
                <p>No orders placed yet.</p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminPage;
