import React from 'react';
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import img from '../assets/images/items/group-ntf-03.png'
import cont from '../assets/images/items/cont.png'
import ButtonWhatsapp from '../components/button/ButtonWhatsapp';


const AboutUs = () => {
    return (
        <div className='about'>
            <Header />
            <section className="tf-section page-title">
                <div className="container">
                    <div className="col-md-12">
                        <div className="page-title__body ab">
                            <div className="block-text pt-12">
                                <h2 className="sub-title mb-20">Sobre Nosotros</h2>
                                <p className="fs-24 mb-33" >Un equipo multidisciplinario para acompañarte en <br></br>este viaje apasionante.Con calidez, compromiso y amor, <br></br>dedicamos a cada cuenta la atención necesaria para verla despegar. <br></br>¡Nos encanta crecer junto a ellas! </p>
                            </div>
                            <img src={img} alt="nosotros" />
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
                                <img src={cont} alt="cont" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-md-12">
                            <div className="block-text pt-12">
                                <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">Objetivo</h5>
                                <h3 className="title mb-37" data-aos="fade-up" data-aos-duration="1000">SOMOS UNICORN GLOBAL </h3>
                                <p className="fs-18 mb-41" data-aos="fade-up" data-aos-duration="1000">Creamos productos y servicios de Marketing innovadores, diseñados para crear experiencias de contenido a escala. Nuestra empresa cultiva relaciones exitosas con clientes, socios y colaboradores, mientras impulsa la competitividad global.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ButtonWhatsapp />
            <Footer />
        </div>
    );
}

export default AboutUs;