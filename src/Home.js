import React, { useState, useEffect } from 'react';
import './Home.css'; // Ensure you create this CSS file for styles
import logo from './images/logo.png'; // Ensure you have a logo image in the same directory
import MultiCarousel from 'react-multi-carousel';
import { useTranslation } from 'react-i18next';
import 'react-multi-carousel/lib/styles.css';
import mediaImage1 from './images/MediaImage1.jpeg'
import mediaImage2 from './images/MediaImage2.jpeg'
import mediaImage3 from './images/MediaImage3.jpeg'
import mediaImage4 from './images/MediaImage4.jpeg'
import mediaImage5 from './images/MediaImage5.jpeg'
import mediaImage6 from './images/MediaImage6.jpeg'
import mediaImage7 from './images/MediaImage7.jpeg'
import mediaImage8 from './images/MediaImage8.jpeg'
import mediaImage9 from './images/MediImage9.jpeg'
import mediaImage10 from './images/MediaImage10.jpeg'
import doctorphoto from './images/doctorphoto.jpeg'
import { FaPhone, FaWhatsapp } from 'react-icons/fa6';

const mediaImages = [
    mediaImage1,
    mediaImage2,
    mediaImage3,
    mediaImage4,
    mediaImage5,
    mediaImage6,
    mediaImage7,
    mediaImage8,
    mediaImage9,
    mediaImage10,
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const Home = () => {
    const [headerClass, setHeaderClass] = useState('');
    const { t } = useTranslation();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setHeaderClass('white');
            } else {
                setHeaderClass('');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const handleCallNow = () => {
        window.location.href = 'tel:+91 98225 48780';
      };

    return (
        <div className="home">
          
            <header className={`header ${headerClass}`}>
                <div className="logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className='head'>
                    <a href="https://wa.link/y7zu6e "> <button className='wp-button' ><FaWhatsapp className='phone-icon'/>Enquire Us</button></a>
                <button className="shake-animation" onClick={handleCallNow}><FaPhone className='phone-icon' />Call Now</button>
                </div>
            </header>

            <main>
                <section className="hero">
                    <div className="hero-content">
                        <div className="hero-text">
                            <p className="hero-text-head">{t('hero-head')}</p>
                            <p className="hero-text-para">{t('welcome')}</p>
                          
                        </div>
                        <div className="hero-form">
                               <p className='form-head'>{t('Book An Appointment')}</p>
                               <p className='form-para'>{t('appointment-para')}</p>
                               <p className='confidential'>{t('confidential')}</p>
                            <form className="consultation-form">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required />
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" id="phone" name="phone" required />
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" required></textarea>
                                <button type="submit" className='consultation-form-button'>Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
                      
                <p className="welcome-h">Welcome to</p>
                  <p className="welcome-head"> Dr. Vyas Super Specialty Sexology Clinic
                  </p>

                <section className="welcome">
                   <div className='Doctor-info'>
                    <p className="welcome-subhead">{t('welcome-subhead')}</p>
                        <p className='welcome-para'>{t('description')}</p>
                        <ul>
                            <li>{t('experience')}</li>
                            <li>{t('best_results')}</li>
                            <li>{t('best_treatment')}</li> 
                            <li>{t('effective_for_men')}</li>
                            <li>{t('no_side_effects')}</li>
                            <li>{t('reliable_doctor')}</li>
                           
                        </ul>
                        <a href='/'><button className='welcome-button '>Learn More</button></a>
                   </div>
                   <div className='Doctor-photo'>
                      <img alt='doctor image'  src={doctorphoto}></img>
                   </div>
                </section>

                <section className='Media'>
                    <p className='media-head'>{t('media')}</p>
                    <MultiCarousel
                        swipeable={true}
                        draggable={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-20-px"
                    >
                        {mediaImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Media Image ${index + 1}`}
                            />
                        ))}
                    </MultiCarousel>
                </section>

            </main>

        </div>
    );
};

export default Home;
