//import { useState } from 'react';
// import { Button, Modal } from 'react-bootstrap';

// const IntrestGForm = () => {
//     const [showModal, setShowModal] = useState(false);

//     const handleClose = () => setShowModal(false);
//     const handleShow = () => setShowModal(true);

//     return (
//         <>
//             <Button variant="primary" className="ud-btn btn-thm me-3 rounded-pill" onClick={handleShow}>
//                 Intrested
//             </Button>

//             <Modal show={showModal} onHide={handleClose}>
//                 {/* <Modal.Header closeButton>
//                     <Modal.Title>Interest Form</Modal.Title>
//                 </Modal.Header> */}
//                 <Modal.Body>
//                     <iframe
//                         src="https://docs.google.com/forms/d/e/1FAIpQLSeQ9pLp-I-LOa-Gjo17J0lwlLZIH4_gHjlPYbjg9cYQRPzAVw/viewform?embedded=true"
//                         width="100%"
//                         height="500"
//                         frameborder="0"
//                         marginheight="0"
//                         marginwidth="0"
//                     >
//                         Loading...
//                     </iframe>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// };

// export default IntrestGForm;