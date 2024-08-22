import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Unexploed Gems",
        desc: "Unearth hidden treasures in Hyderabad Karnataka, from ancient forts to tranquil lakes, offering unique cultural experiences and breathtaking landscapes.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Plans",
        desc: "We provide top-tier tour plans featuring comprehensive accommodation and food details, alongside precise distance insights.",
    },
    {
        imgUrl: customizationImg,
        title: "360 degree view",
        desc: "Explore locations with a simple scroll using our 360-degree feature.",
    },
]

const ServiceList = () => {
    return (
        <>
            {servicesData.map((item, index) => (
                <Col lg='3' key={index}>
                    <ServiceCard item={item} />
                </Col>
            ))}
        </>
    );
};

export default ServiceList;