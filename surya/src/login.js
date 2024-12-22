// import React, { useState } from 'react';
// import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [adminPassword, setAdminPassword] = useState(''); // Admin password field
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); // Initialize useNavigate

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Simulating login with predefined credentials
//     const adminCredentials = { username: 'admin', password: 'admin123', adminPassword: 'adminpass' };
//     const userCredentials = { username: '', password: '' };

//     // Check for admin credentials
//     if (username === adminCredentials.username && password === adminCredentials.password && adminPassword === adminCredentials.adminPassword) {
//       localStorage.setItem('isAdmin', 'true');
//       navigate('/admin'); // Redirect to ImageUpload page (replace with your actual route)
//     }
//     // Check for user credentials
//     else if (username === userCredentials.username && password === userCredentials.password) {
//       localStorage.setItem('isAdmin', 'false');
//       navigate('/upload'); // Redirect to ImageUpload page (replace with your actual route)
//     } else {
//       setError('Invalid username, password, or admin password');
//     }
//   };

//   return (
//     <div style={{ backgroundColor: '#fafafa', minHeight: '100vh', paddingTop: '50px' }}>
//       <Container className="mt-5 pt-5">
//         <Row>
//           <Col xs={12} md={6} className="mx-auto">
//             <h3 className="text-center mb-4" style={{ color: '#262626', fontFamily: 'Arial', fontWeight: 'bold' }}>Login</h3>

//             {error && <Alert variant="danger">{error}</Alert>}

//             <Form onSubmit={handleLogin}>
//               <Form.Group controlId="formUsername" className="mb-3">
//                 <Form.Label style={{ color: '#262626' }}>Username</Form.Label>
//                 <Form.Control
//                   type="text"
//                   placeholder="Enter your username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   required
//                   style={{
//                     borderRadius: '5px',
//                     border: '1px solid #dbdbdb',
//                     padding: '10px',
//                     backgroundColor: '#fafafa',
//                   }}
//                 />
//               </Form.Group>

//               <Form.Group controlId="formPassword" className="mb-3">
//                 <Form.Label style={{ color: '#262626' }}>Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   style={{
//                     borderRadius: '5px',
//                     border: '1px solid #dbdbdb',
//                     padding: '10px',
//                     backgroundColor: '#fafafa',
//                   }}
//                 />
//               </Form.Group>

//               {/* Admin Password field */}
//               <Form.Group controlId="formAdminPassword" className="mb-3">
//                 <Form.Label style={{ color: '#262626' }}>Admin Password</Form.Label>
//                 <Form.Control
//                   type="password"
//                   placeholder="Enter admin password (if applicable)"
//                   value={adminPassword}
//                   onChange={(e) => setAdminPassword(e.target.value)}
//                   style={{
//                     borderRadius: '5px',
//                     border: '1px solid #dbdbdb',
//                     padding: '10px',
//                     backgroundColor: '#fafafa',
//                   }}
//                 />
//               </Form.Group>

//               <Button type="submit" variant="primary" style={{ width: '100%', borderRadius: '5px' }}>
//                 Login
//               </Button>
//             </Form>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// };

// export default LoginPage;
