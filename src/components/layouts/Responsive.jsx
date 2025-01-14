import React , { useState } from 'react';
import item from '../../assets/fake-data/item';

const Responsive = () => {

    const [data] = useState(
        {
            subtitle: 'Unicorn Global',
            title: 'DE ARGENTINA AL MUNDO',
            desc1: 'Trabajamos con empresas de diversos países. Contamos con metodología, flexibilidad y un equipo bilingüe que nos permite romper las barreras de la distancia.',
            
        }
    )

  return (
    <section className="tf-section section-about" id='about'>
        <div className="container">
            <div className="row reverse">
                <div className="col-xl-7 col-md-12">
                    <div className="group-image">
                        <div className="left">
                            <div className="item bg-1 big"><img src={item.item27} alt="Monteno" /></div>
                        </div>
                       
                    </div>
                </div>
                <div className="col-xl-5 col-md-12">
                    <div className="block-text pt-12">
                        <h5 className="sub-title mb-10" data-aos="fade-up" data-aos-duration="1000">{data.subtitle}</h5>
                        <h3 className="title mb-58" data-aos="fade-up" data-aos-duration="1000">{data.title}</h3>
                        <p className="fs-21 mb-33" data-aos="fade-up" data-aos-duration="1000">{data.desc1}</p>                       
                                          
                                      
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Responsive;