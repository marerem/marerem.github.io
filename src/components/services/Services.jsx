import React from 'react';
import './Services.css';
import Image1 from '../../assets/pngfind.com-msu-logo-png-6298911.png'
import Image2 from '../../assets/epfl-circubat-project-member.png'
import Image3 from '../../assets/pngegg.png'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Bachelor Degree",
        description:
            "Bachelor of Biotechnology and Genetics Engineering",
    },
    {
        id: 2,
        image: Image2,
        title: "Master Degree",
        description:
            "Master of Computer and Life Science",
    },
    {
        id: 3,
        image: Image3,
        title: "Master Thesis",
        description:
            "Master Thesis in Computer Vision at Edelam Lab",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Education</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <div className="services__content">
                                <img src={image} alt='' className='services__img' width="80" />
                                <div className="services__info">
                                    <h3 className="services__title">{title}</h3>
                                    <p className="services__description">{description}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services