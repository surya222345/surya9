
// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Button, Form, Card, Spinner } from 'react-bootstrap';

// const ImageUpload = () => {
//   const [images, setImages] = useState([]); // Array to hold all uploaded images
//   const [loading, setLoading] = useState(false); // Loading state while images are being processed
//   const [product, setProduct] = useState({
//     name: '',
//     quantity: 1,
//     price: 0,
//   }); // State for product details
//   const [orders, setOrders] = useState([]); // State to hold the list of orders
//   const [isAdmin, setIsAdmin] = useState(false); // State to track if user is admin

//   useEffect(() => {
//     // Check if user is admin
//     const adminStatus = localStorage.getItem('isAdmin');
//     setIsAdmin(adminStatus === 'true'); // Admin status based on localStorage

//     // Retrieve images and orders from localStorage on initial load
//     const savedImages = JSON.parse(localStorage.getItem('images')) || [];
//     const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
//     setImages(savedImages);
//     setOrders(savedOrders);
//   }, []);

//   const handleImageChange = (event) => {
//     const files = event.target.files; // Get selected files
//     const newImages = [];
//     setLoading(true);

//     // Loop through files and convert each to a base64 string
//     for (let i = 0; i < files.length; i++) {
//       const file = files[i];
//       const reader = new FileReader();

//       reader.onloadend = () => {
//         newImages.push(reader.result); // Add image to array
//         if (newImages.length === files.length) { // Ensure all files are processed
//           const updatedImages = [...images, ...newImages];
//           setImages(updatedImages); // Update state with new images
//           localStorage.setItem('images', JSON.stringify(updatedImages)); // Save to localStorage
//           setLoading(false); // Set loading to false after processing
//         }
//       };

//       reader.readAsDataURL(file); // Convert each file to base64 string
//     }
//   };

//   const handleDelete = (index) => {
//     const updatedImages = images.filter((_, i) => i !== index); // Delete the image by index
//     setImages(updatedImages);
//     localStorage.setItem('images', JSON.stringify(updatedImages)); // Update localStorage
//   };

//   const handleProductChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({
//       ...product,
//       [name]: value,
//     });
//   };

//   const handleOrderSubmit = (e) => {
//     e.preventDefault();

//     const newOrder = {
//       ...product,
//       total: product.quantity * product.price,
//     };

//     const updatedOrders = [...orders, newOrder];
//     setOrders(updatedOrders);
//     localStorage.setItem('orders', JSON.stringify(updatedOrders)); // Save to localStorage
//     setProduct({ name: '', quantity: 1, price: 0 }); // Reset product details
//   };

//   return (
//     <div style={{ backgroundColor: '#fafafa', minHeight: '100vh', paddingTop: '50px' }}>
//       <div style={{ backgroundColor: '#fff', padding: '10px 20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 10 }}>
//         <h4 style={{ color: '#262626', margin: 0, fontFamily: 'sans-serif', fontWeight: 'bold' }}>InstaClone</h4>
//       </div>

//       <Container className="mt-5 pt-5">
//         <Row>
//           <Col xs={12} md={6} className="mx-auto">
//             <h3 className="text-center mb-4" style={{ color: '#262626', fontFamily: 'Arial', fontWeight: 'bold' }}>Upload Images</h3>
//             {/* <Form>
//               <Form.Group controlId="formFileMultiple" className="mb-3">
//                 <Form.Label style={{ color: '#262626' }}>Select Images</Form.Label>
//                 <Form.Control
//                   type="file"
//                   accept="image/*"
//                   multiple
//                   onChange={handleImageChange}
//                   style={{
//                     borderRadius: '5px',
//                     border: '1px solid #dbdbdb',
//                     padding: '10px',
//                     height:'300px',
//                     width:'300px',
//                     backgroundColor: '#fafafa',
//                   }}
//                 />
//               </Form.Group>
//               <Button variant="primary" disabled={loading} style={{ width: '100%', borderRadius: '5px', backgroundColor: '#3897f0', border: 'none' }}>
//                 {loading ? <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> : 'Upload'}
//               </Button>
//             </Form> */}
//           </Col>
//         </Row>

//         {images.length > 0 && (
//           <Row className="mt-5">
//             <Col xs={12} className="mt-5">
//               <h4 className="text-center mb-4" style={{ color: '#262626' }}>Uploaded Images</h4>
//               <div className="d-flex flex-wrap justify-content-center">
//                 {images.map((image, index) => (
//                   <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
//                     <Card style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//                       <Card.Img
//                         variant="top"
//                         src={image}
//                         alt={`Uploaded ${index}`}
//                         style={{
//                           width: '100%',
//                           height: '200px', // Fixed height for all images
//                           objectFit: 'cover',
//                           borderRadius: '10px',
//                         }}
//                       />
//                       <Card.Body>
//                         <Button variant="danger" onClick={() => handleDelete(index)} style={{ width: '100%' }}>Delete</Button>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </div>
//             </Col>
//           </Row>
//         )}

//         <Row className="mt-5">
//           <Col xs={12} md={6} className="mx-auto">
//             <h3 className="text-center mb-4" style={{ color: '#262626', fontFamily: 'Arial', fontWeight: 'bold' }}>Order Product</h3>
//             <Form onSubmit={handleOrderSubmit}>
//               <Form.Group controlId="formProductName" className="mb-3">
//                 <Form.Label style={{ color: '#262626' }}>Product Name</Form.Label>
//                 <Form.Control
//                   type="text"
//                   name="name"
//                   value={product.name}
//                   onChange={handleProductChange}
//                   placeholder="Enter product name"
//                   required
//                   style={{
//                     borderRadius: '5px',
//                     border: '1px solid #dbdbdb',
//                     padding: '10px',
//                     backgroundColor: '#fafafa',
//                   }}
//                 />
//               </Form.Group>
//               <Form.Group controlId="formQuantity" className="mb-3">
//                 <Form.Label style={{ color: '#262626' }}>Quantity</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="quantity"
//                   value={product.quantity}
//                   onChange={handleProductChange}
//                   min="1"
//                   required
//                   style={{
//                     borderRadius: '5px',
//                     border: '1px solid #dbdbdb',
//                     padding: '10px',
//                     backgroundColor: '#fafafa',
//                   }}
//                 />
//               </Form.Group>
//               <Form.Group controlId="formPrice" className="mb-3">
//                 <Form.Label style={{ color: '#262626' }}>Price</Form.Label>
//                 <Form.Control
//                   type="number"
//                   name="price"
//                   value={product.price}
//                   onChange={handleProductChange}
//                   min="0"
//                   required
//                   style={{
//                     borderRadius: '5px',
//                     border: '1px solid #dbdbdb',
//                     padding: '10px',
//                     backgroundColor: '#fafafa',
//                   }}
//                 />
//               </Form.Group>
//               <Button type="submit" variant="success" style={{ width: '100%', borderRadius: '5px' }}>
//                 Submit Order
//               </Button>
//             </Form>
//           </Col>
//         </Row>

//         {/* Admin only view for orders */}
//         {isAdmin && orders.length > 0 && (
//           <Row className="mt-5">
//             <Col xs={12}>
//               <h4 className="text-center mb-4" style={{ color: '#262626' }}>Orders</h4>
//               {/* <div className="d-flex flex-wrap justify-content-center">
//                 {orders.map((order, index) => (
//                   <Col xs={12} sm={6} md={4} key={index} className="mb-4">
//                     <Card style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//                       <Card.Body>
//                         <Card.Title>{order.name}</Card.Title>
//                         <Card.Text>
//                           Quantity: {order.quantity}<br />
//                           Price: ${order.price}<br />
//                           Total: ${order.total}
//                         </Card.Text>
//                       </Card.Body>
//                     </Card>
//                   </Col>
//                 ))}
//               </div> */}
//             </Col>
//           </Row>
//         )}

//         {/* If the user is not admin, show a message */}
//         {!isAdmin && (
//           <Row className="mt-5">
//             <Col xs={12}>
//               <h5 className="text-center" style={{ color: '#ff4d4d' }}>You are not authorized to view orders</h5>
//             </Col>
//           </Row>
//         )}
//       </Container>
//     </div>
//   );
// };

// export default ImageUpload;
