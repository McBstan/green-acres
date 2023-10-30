import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import ServicesHero from '../ServicesHero';
import Cards from '../Cards';

//ServiceHero is used for video and formatting on Services Page.
export default function Services()
{
    return (
        <>
        <ServicesHero/>
        <Cards/>
        <Footer/>
        </>
    );
}