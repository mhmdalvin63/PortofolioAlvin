import '../../../assets/css/experience.css';
// import profilBayi from '../../../assets/images/profilBayi.jpg';

// React Bootstrap CONTAINER, ROW, COL 
import {Container, Row, Col} from 'react-bootstrap';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';

function experience() {
  return(
    <div className='experience py-5'>
        <Container>
            <Row>
                <Col xs={12}>
                    <div className='title_experience text-white px-3 py-1 d-flex gap-2'>
                        <h2 className='mb-1'>PENGALAMAN</h2>
                        <FontAwesomeIcon icon={faShoePrints} />
                    </div>
                    <Row className='mt-3 parentOfExperience' xs={1} sm={2} md={2} lg={3}>
                        <Col className='mt-sm-4 mt-2'>
                            <div className='bordered px-3 py-3 px-sm-4 py-sm-3'>
                                <div className='title_bordered'>
                                    <h3 className='mb-0'>PKL</h3>
                                    <p className='xs'>20 Maret - 15 April 2023</p>
                                </div>
                                    <p className='xs mt-1'>PT Spero Mahakarya Nusantara</p>
                                    <p className='sm mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </Col>
                        <Col className='mt-sm-4 mt-2'>
                            <div className='bordered px-3 py-3 px-sm-4 py-sm-3'>
                                <div className='title_bordered'>
                                    <h3 className='mb-0'>PKL</h3>
                                    <p className='xs'>20 Maret - 15 April 2023</p>
                                </div>
                                    <p className='xs mt-1'>PT Spero Mahakarya Nusantara</p>
                                    <p className='sm mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </Col>
                        <Col className='mt-sm-4 mt-2'>
                            <div className='bordered px-3 py-3 px-sm-4 py-sm-3'>
                                <div className='title_bordered'>
                                    <h3 className='mb-0'>PKL</h3>
                                    <p className='xs'>20 Maret - 15 April 2023</p>
                                </div>
                                    <p className='xs mt-1'>PT Spero Mahakarya Nusantara</p>
                                    <p className='sm mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </Col>
                        <Col className='mt-sm-4 mt-2'>
                            <div className='bordered px-3 py-3 px-sm-4 py-sm-3'>
                                <div className='title_bordered'>
                                    <h3 className='mb-0'>PKL</h3>
                                    <p className='xs'>20 Maret - 15 April 2023</p>
                                </div>
                                    <p className='xs mt-1'>PT Spero Mahakarya Nusantara</p>
                                    <p className='sm mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </Col>
                        <Col className='mt-sm-4 mt-2'>
                            <div className='bordered px-3 py-3 px-sm-4 py-sm-3'>
                                <div className='title_bordered'>
                                    <h3 className='mb-0'>PKL</h3>
                                    <p className='xs'>20 Maret - 15 April 2023</p>
                                </div>
                                    <p className='xs mt-1'>PT Spero Mahakarya Nusantara</p>
                                    <p className='sm mt-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
  );
}
export default experience;