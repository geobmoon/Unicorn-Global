import React from 'react';
import { useState } from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import buy from '../assets/images/items/buyMovile.png'
import conect from '../assets/images/pages/conect.png'
import comunic from '../assets/images/pages/comunic.png'
import reg from '../assets/images/pages/reg.png'
import reporting from '../assets/images/pages/reporting.png'

import Action from '../components/layouts/Action';

import img from '../assets/images/items/group-ntf-03.png'
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';



const SocialMedia = () => {

    const [visible, setVisible] = useState(9);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    }

    return (
        <div className='service '>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Social Media</h2>
                                <p className="fs-24 mb-33" >Entendemos las redes sociales <br /> como un espacio de diálogo de tu marca </p>
                            </div>
                            <img className="s2" src={img} alt="Social Media" />
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
                                <img src={conect} alt="conect" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Objetivo</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">COMMUNITY MANAGEMENT</h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">
                                    Gestionamos tus canales sociales. Apuntamos  ampliar tu comunidad y a construir relaciones duraderas con tu público.</p>
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
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Objetivo</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">MODERACION</h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">Representamos a tu marca. Respondemos mensajes y comentarios de los usuarios que se pongan en contacto con ella.</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image" data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <img src={comunic} alt="comunic" />
                            </div>
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
                                <img src={reporting} alt="reporting" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Objetivo</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">REPORTING</h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">Medimos día a día la performance y reportamos resultados mensualmente.</p>
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
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Objetivo</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">REGENERACIÓN DE CONTENIDO</h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">Creamos contenido de valor que te ayude a interactuar con tu audiencia. Seguimos de cerca las últimas tendencias sin dejar de lado la creatividad.</p>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image" data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <img src={reg} alt="reg" />
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
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Social Media</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">CREAMOS TU ESTRATEGIA DE
                                    SOCIAL MEDIA </h3>
                                <ul data-aos="fade-up" data-aos-duration="1000">
                                    <li><i className="fa fa-check"></i><p className="fs-18">NOS VOLVEMOS EXPERTAS EN TU PRODUCTO</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">DISEÑAMOS LA ESTRATEGIA DE TU MARCA</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">CONSTRUIMOS EJES DE CONTENIDO Y CALENDARIOS</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">ABRIMOS CANALES DIRECTOS DE COMUNICACIÓN</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">MEDIMOS CONTINUAMENTE</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-7 col-md-12">
                            <div className="group-image" data-aos="flip-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                <img src={buy} alt="buy" />
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

export default SocialMedia;