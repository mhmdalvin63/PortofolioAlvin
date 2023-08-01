import '../../../assets/css/header.css';
import profilBayi from '../../../assets/images/profilBayi.jpg';

// React Bootstrap CONTAINER, ROW, COL 
import {Container, Row, Col} from 'react-bootstrap';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return(
      <div className='header d-flex justify-content-center align-items-center'>
        <Container>
          <Row>
            <Col md={12}>
              <Row className='d-flex justify-content-center'> 
                <Col xs={6} md={4} lg={3} xl={3}>
                  <div className='parent-blur p-2 p-sm-4'>
                    <img className='profilBayi' src={profilBayi} alt="profilBayi" />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={12}>
              <Row className='d-flex justify-content-center'> 
                <Col className='text-white text-center bg-alvindesc' md={6} lg={6}>
                  <div className='alvin_desc mt-5'>
                    <h1>Muhammad Alvin</h1>
                    <p>FrontEnd Developer</p>
                  </div>
                  <div className='online_account d-flex gap-3 mt-3'>
                    <div className='icon p-3'>
                      <a href=''>
                      <FontAwesomeIcon icon={faFacebookF} size='lg' />
                      </a>
                    </div>
                    <div className='icon p-3'>
                      <a href=''>
                      <FontAwesomeIcon icon={faTwitter} size='lg' />
                      </a>
                    </div>
                    <div className='icon p-3'>
                      <a href=''>
                      <FontAwesomeIcon icon={faInstagram} size='lg' />
                      </a>
                    </div>
                    <div className='icon p-3'>
                      <a href=''>
                      <FontAwesomeIcon icon={faGithub} size='lg' />
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
          <a href="#tentangSayaID" className='buttonDown d-flex justify-content-center align-items-center p-3'>
           <div className=''>
            <FontAwesomeIcon className='bounce' icon={faArrowDown} style={{color: "#ffffff",}} />
           </div>
          </a>
      </div>
  );
}
export default Header;