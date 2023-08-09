import '../../../assets/css/skills.css';
import { Container, Row, Col } from 'react-bootstrap';
import html from '../../../assets/images/html.png';
import css from '../../../assets/images/logo-css.png';
import js from '../../../assets/images/logo-js.png';
import laravel from '../../../assets/images/logo-laravel.png';
import react from '../../../assets/images/logo-react.png';
import bootstrap from '../../../assets/images/logo-bootstrap.png';
// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';

function skills() {
    return(
        <div className='skills py-5'>
            <Container>
                <div className='title_skills text-white px-3 py-1 d-flex gap-2 mb-1 mb-sm-5'>
                    <h2 className='mb-1'>KEMAMPUAN</h2>
                    <FontAwesomeIcon icon={faChartSimple} />
                </div>
                <Row lg={5} md={4} sm={3} xs={2} className='parentSkill'>
                    <Col className='listSkill mt-4'>
                        <div className='parent_img'>
                            <img className='html' src={html} alt="html" />
                            <div className='persen text-white d-flex justify-content-center align-items-center'>
                                <p>80%</p>
                            </div>
                        </div>
                        <div className='description text-center'>
                            <h3 className='text-white'>HTML</h3>
                            <p className='sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                    <Col className='listSkill mt-4'>
                        <div className='parent_img'>
                            <img className='css' src={css} alt="css" />
                            <div className='persen text-white d-flex justify-content-center align-items-center'>
                                <p>80%</p>
                            </div>
                        </div>
                        <div className='description text-center'>
                            <h3 className='text-white'>CSS</h3>
                            <p className='sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                    <Col className='listSkill mt-4'>
                        <div className='parent_img'>
                            <img className='js' src={js} alt="js" />
                            <div className='persen text-white d-flex justify-content-center align-items-center'>
                                <p>30%</p>
                            </div>
                        </div>
                        <div className='description text-center'>
                            <h3 className='text-white'>Javascript</h3>
                            <p className='sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                    <Col className='listSkill mt-4'>
                        <div className='parent_img'>
                            <img className='bootstrap' src={bootstrap} alt="bootstrap" />
                            <div className='persen text-white d-flex justify-content-center align-items-center'>
                                <p>90%</p>
                            </div>
                        </div>
                        <div className='description text-center'>
                            <h3 className='text-white'>Bootstrap</h3>
                            <p className='sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                    <Col className='listSkill mt-4'>
                        <div className='parent_img'>
                            <img className='laravel' src={laravel} alt="laravel" />
                            <div className='persen text-white d-flex justify-content-center align-items-center'>
                                <p>50%</p>
                            </div>
                        </div>
                        <div className='description text-center'>
                            <h3 className='text-white'>Laravel</h3>
                            <p className='sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                    <Col className='listSkill mt-4'>
                        <div className='parent_img'>
                            <img className='react' src={react} alt="react" />
                            <div className='persen text-white d-flex justify-content-center align-items-center'>
                                <p>50%</p>
                            </div>
                        </div>
                        <div className='description text-center'>
                            <h3 className='text-white'>React</h3>
                            <p className='sm'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </Col>
                    <Col className='listSkill mt-4'>
                        <div className='parent_img'>
                            <img className='html' src={html} alt="html" />
                            <div className='persen text-white d-flex justify-content-center align-items-center'>
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
