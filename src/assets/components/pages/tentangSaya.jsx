import '../../../assets/css/tentangSaya.css';
// import Maxword from '../../../assets/js/maxWord';
// import { Helmet } from 'react-helmet';

// React Bootstrap CONTAINER, ROW, COL 
import {Container, Row, Col} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';

function tentangSaya() {
  return(
    <div className='tentangSaya py-5 text-white' id='tentangSayaID'>
        <Container>
            <Row>
                <Col xs={12}>
                    <div className='title_ts px-3 py-1 d-flex gap-2'>
                        <h2 className='mb-1'>Tentang Saya</h2>
                        <FontAwesomeIcon icon={faCircleInfo} />
                    </div>
                    <div className='desc_ts my-4'>
                        <p><span>Halo, Saya Muhammad Alvin</span>, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </Col>
                <Col md={5}>
                    <div className='subTitle_ts px-3 py-1 '>
                        <h2 className='mb-1'>Detail Tentang Saya</h2>
                    </div>
                <ul className="timeline">
                    <li>
                        <h3>Tempat, Tanggal Lahir</h3>
                        <p className='sm'>Jakarta, 06 Maret 2005</p>
                    </li>
                    <li>
                        <h3>Telepon</h3>
                        <p className='sm'>0888-1404-833</p>
                    </li>
                    <li>
                        <h3>Email</h3>
                        <p className='sm'>alvin@gmail.com</p>
                    </li>
                    <li>
                        <h3>Website</h3>
                        <p className='sm'>alvin.com</p>
                    </li>
                    <li>
                        <h3>Alamat</h3>
                        <p className='sm'>Tapos, Depok</p>
                    </li>
            </ul>
                </Col>
                <Col md={7}>
                    <div className='subTitle_ts px-3 py-1 '>
                        <h2 className='mb-1'>Kesukaan Saya</h2>
                    </div>
                    <div className='ks_list d-flex gap-2 mt-3'>
                        <div>
                            <div className='ks_content px-2 py-3 text-center'> 
                                <FontAwesomeIcon icon={faMugHot} size='2xl' />
                                <p className='mt-2'>Kopi</p>
                            </div>
                        </div>
                        <div>
                            <div className='ks_content px-2 py-3 text-center'> 
                                <FontAwesomeIcon icon={faMugHot} size='2xl' />
                                <p className='mt-2'>Kopi</p>
                            </div>
                        </div>
                        <div>
                            <div className='ks_content px-2 py-3 text-center'> 
                                <FontAwesomeIcon icon={faMugHot} size='2xl' />
                                <p className='mt-2'>Kopi</p>
                            </div>
                        </div>
                        <div>
                            <div className='ks_content px-2 py-3 text-center'> 
                                <FontAwesomeIcon icon={faMugHot} size='2xl' />
                                <p className='mt-2'>Kopi</p>
                            </div>
                        </div>
                        <div>
                            <div className='ks_content px-2 py-3 text-center'> 
                                <FontAwesomeIcon icon={faMugHot} size='2xl' />
                                <p className='mt-2'>Kopi</p>
                            </div>
                        </div>
                        <div>
                            <div className='ks_content px-2 py-3 text-center'> 
                                <FontAwesomeIcon icon={faMugHot} size='2xl' />
                                <p className='mt-2'>Kopi</p>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <Button variant="outline-primary text-white d-flex align-items-center gap-2 px-5">
                        <p className='sm'>Download CV</p>
                        <FontAwesomeIcon icon={faDownload} />
                    </Button>
                </Col>
            </Row>
        </Container>
    </div>
  );
}


export default tentangSaya;