import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

import brands from '../assets/images/pages/brands.png'
import Action from '../components/layouts/Action';
import buy from '../assets/images/items/buyMovile.png'
import img from '../assets/images/items/group-ntf-03.png'
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';

const BrandStrategy = () => {
    return (
        <div className='service'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body rm">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Brand Strategy</h2>
                                <p className="fs-24 mb-33" >
Metodología Probada.<br/>Creamos y transformamos marcas desde el análisis y  <br/> el concepto hasta la creatividad y la activación.<br/> </p>
                            </div>
                            <img className="s2" src={img} alt="ecommerce" />
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
                                <img src={brands} alt="brands" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Objetivo</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">Creatividad e Innovacion </h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">Ofrecemos servicios de branding especializados en consultoría y creatividad para sumar nuestro talento al de nuestros clientes con un servicio de branding a medida. ¿Nuestra misión? Impulsar el crecimiento de tu marca. ¿Nuestro objetivo? Tu desafío. </p>                        
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
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">EN 5 PASOS</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">LLEVAMOS TU MARCA AL PRÓXIMO NIVEL
</h3>                              
                                <ul data-aos="fade-up" data-aos-duration="1000">
                                
                                    <li><i className="fa fa-check"></i><p className="fs-18">ANALIZAMOS EL CONTEXTO<br/>
Exploramos el ambiente que rodea a tu marca para identificar oportunidades.</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">REVELAMOS QUE ESTA HACIENDO TU COMPETENCIA<br/>
Investigamos tu entorno competitivo. Te traemos qué estan haciendo otras marcas</p></li>
                                    <li><i className="fa fa-check"></i><p className="fs-18">REPORTES<br/>
Encaramos un proceso de construcción colectiva con el objetivo de definir la razón de ser de tu marca.</p></li>                       
                                    <li><i className="fa fa-check"></i><p className="fs-18">TRAZAMOS TU ROADMAP<br/>
Diseñamos el camino a seguir para alcanzar el propósito de tu marca.

</p></li>                                    
                                    <li><i className="fa fa-check"></i><p className="fs-18">MEDIMOS EL VALOR QUE PERCIBE TU AUDIENCIA<br/>
Te acompañamos a descubrir qué es lo que tu público piensa, siente y dice de tu marca.

</p></li>
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
            <ButtonWhatsapp/>
            <Footer />
        </div>
    );
}

export default BrandStrategy;