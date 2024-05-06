import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

import mk from '../assets/images/pages/mk.png'
import buy from '../assets/images/items/buyMovile.png'
import Action from '../components/layouts/Action';

import img from '../assets/images/items/group-ntf-03.png'
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';

const MktPerformance = () => {
    return (
        <div className='service'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Marketing Performance</h2>
                                <p className="fs-24 mb-33" >Publicidad online <br /> GOOGLE ADS - META ADS - TICK TOCK ADS<br />  </p>
                            </div>
                            <img className="s2" src={img} alt="WebTotal" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-section visions">
                <div className="container">
                    <div className="row reverse">
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image" data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <img src={mk} alt="mk" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Marketing Performance</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">ESTRATEGIA</h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">
                                    Armamos tu estrategia de paid media a partir de investigación del contexto y el propósito de tu marca</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-section visions">
                <div className="container">
                    <div className="row reverse">
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Marketing Performance</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">OBJETIVOS</h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">
                                    Fijamos objetivos de performance y nos obsesionamos con ellos</p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Marketing Performance</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">OPTIMIZACIÓN</h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">
                                    Optimizamos tus campañas y todos sus elementos de manera contínua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="tf-section visions">
                <div className="container">
                    <div className="row reverse">
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Marketing Performance</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">TRANSPARENCIA</h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">
                                    Te compartimos como trabajamos en tus campañas. Nadie conoce tu marca mejor que vos y nos alimentamos de eso.

                                </p>
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Marketing Performance</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">REPORTES</h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">
                                    Generamos reportes y encuentros mensuales para analizar métricas e identificar oportunidades de crecimiento.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="tf-section servicesvjvj">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Marketing Performance</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">¿POR QUÉ INVERTIR EN TU MARCA?</h3>
                                <ul data-aos="fade-up" data-aos-duration="1000">
                                    <li><i className="fa fa-check"></i><p className="fs-18">Para ampliar tu público más allá de los referidos
                                    </p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Para aumentar tus ventas a corto plazo
                                    </p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Para posicionar tu marca
                                    </p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Para conseguir mayor engagement
                                    </p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">Para hacer crecer tu comunidad online</p></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image" data-aos="flip-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <img src={buy} alt="buyMovile" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

       
            <Action />
            <ButtonWhatsapp />
            <Footer />
        </div>
    );
}

export default MktPerformance;