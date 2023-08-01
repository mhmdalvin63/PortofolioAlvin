import '../../../assets/css/skills.css';
import { Container, Row, Col } from 'react-bootstrap';
import html from '../../../assets/images/html.png';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';

function skills() {
    return(
        <div className='skills py-5'>
            <Container>
                <div className='title_skills text-white px-3 py-1 d-flex gap-2'>
                    <h2 className='mb-1'>SKILLS</h2>
                    <FontAwesomeIcon icon={faChartSimple} />
                </div>
                <Row lg={5} md={4} sm={3} xs={2}>
                    <Col>
                        <div className='parent_img'>
                            <img className='html' src={html} alt="html" />
                            <div className='persen p-xl-4 p-md-3 p-sm-3 p-3 text-white d-flex justify-content-center align-items-center'>
                                <p>70%</p>
                            </div>
                        </div>
                        <div className='description text-center'>
                            <h3 className='text-white'>HTML</h3>
                            <p className='sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='parent_img'>
                            <img className='html' src={html} alt="html" />
                            <div className='persen p-xl-4 p-md-3 p-sm-3 p-3 text-white d-flex justify-content-center align-items-center'>
                                <p>70%</p>
                            </div>
                        </div>
                        <div className='description text-center'>
                            <h3 className='text-white'>HTML</h3>
                            <p className='sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='parent_img'>
                            <img className='html' src={html} alt="html" />
                            <div className='persen p-xl-4 p-md-3 p-sm-3 p-3 text-white d-flex justify-content-center align-items-center'>
                                <p>70%</p>
                            </div>
                        </div>
                        <div className='description text-center'>
                            <h3 className='text-white'>HTML</h3>
                            <p className='sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='parent_img'>
                            <img className='html' src={html} alt="html" />
                            <div className='persen p-xl-4 p-md-3 p-sm-3 p-3 text-white d-flex justify-content-center align-items-center'>
                                <p>70%</p>
                            </div>
                        </div>
                        <div className='description text-center'>
                            <h3 className='text-white'>HTML</h3>
                            <p className='sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='parent_img'>
                            <img className='html' src={html} alt="html" />
                            <div className='persen p-xl-4 p-md-3 p-sm-3 p-3 text-white d-flex justify-content-center align-items-center'>
                                <p>70%</p>
                            </div>
                        </div>
                        <div className='description text-center'>
                            <h3 className='text-white'>HTML</h3>
                            <p className='sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='parent_img'>
                            <img className='html' src={html} alt="html" />
                            <div className='persen p-xl-4 p-md-3 p-sm-3 p-3 text-white d-flex justify-content-center align-items-center'>
                                <p>70%</p>
                            </div>
                        </div>
                        <div className='description text-center'>
                            <h3 className='text-white'>HTML</h3>
                            <p className='sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='parent_img'>
                            <img className='html' src={html} alt="html" />
                            <div className='persen p-xl-4 p-md-3 p-sm-3 p-3 text-white d-flex justify-content-center align-items-center'>
                                <p>70%</p>
                            </div>
                        </div>
                        <div className='description text-center'>
                            <h3 className='text-white'>HTML</h3>
                            <p className='sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default skills;
