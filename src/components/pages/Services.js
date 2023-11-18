import React from 'react';
import '../../App.css';
import ServicesHero from '../ServicesHero';
import Cards from '../Cards';
import Footer from '../Footer';

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