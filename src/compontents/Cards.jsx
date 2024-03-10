import React, { useRef, useEffect, useState } from 'react';
import Single from '../assets/strony.webp'
import Triple from '../assets/sklepy.webp'
import Double from '../assets/marketing.webp'
import Offery from '../assets/OFERTA.webp'





const Cards = () => {
    const [isVisible, setIsVisible] = useState(false);
    const divRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
            }
        },
        { threshold: 0.01 }
        );

        if (divRef.current) {
        observer.observe(divRef.current);
        }

        return () => {
        if (divRef.current) {
            observer.unobserve(divRef.current);
        }
        };
    }, []);
  return (
    <div className='w-full pt-[80px] md:pt-[10rem] pb-[40px] px-4 bg-white rounded-t-[100px] xl:rounded-bl-[500px]' id='oferta'>
        <div className='flex md:hidden justify-center'>
        <img src={Offery} alt="napis oferta" className='w-[320px] pb-[80px]'/>
        </div>
        <div ref={divRef} className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className=''>
                    <div className={`w-full h-[450px] shadow-xl flex flex-col p-4 my-4 rounded-[100px] hover:scale-105 duration-300 bg-[#eeeeee] ${isVisible ? 'animate-fade-in' : ''}`}>
                    <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Single} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>Strony internetowe</h2>
                    <p className='text-center text-[18px] text-[#333333]'>Uzyskaj wizualny odbiór Twojej marki w przestrzeni cyfrowej, korzystając z nowoczesnego, elastycznego i starannie zaprojektowanego serwisu internetowego.</p>
                    <button className='text-[#333333] text-[18px] underline mt-[80px] pb-[20px] font-bold hover:scale-105 duration-300'><a href="/website_offer">Dowiedz się więcej</a></button>
                    </div>
            </div>
            <div className=''>
                     <div className={`w-full h-[450px] shadow-xl flex flex-col p-4 my-4 rounded-[100px] hover:scale-105 duration-300 bg-[#eeeeee] ${isVisible ? 'animate-fade-in' : ''}`}>
                     <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Triple} alt="" />
                     <h2 className='text-2xl font-bold text-center py-8'>Sklepy internetowe</h2>
                     <p className='text-center text-[18px] text-[#333333]'>Oferujemy profesjonalne tworzenie sklepów internetowych, dopasowane do Twoich potrzeb i oczekiwań. Dzięki naszym rozwiązaniom, łatwość obsługi oraz estetyka idą w parze, zapewniając Ci sukces w e-commerce.</p>
                     <button className='text-[#333333] text-[18px] underline mt-[80px] font-bold hover:scale-105 duration-300'><a href="/shops">Dowiedz się więcej</a></button>
                    </div>
                    
            </div>
            <div className=''>
                     <div className={`w-full h-[450px] shadow-xl flex flex-col p-4 my-4 rounded-[100px] hover:scale-105 duration-300 bg-[#eeeeee] ${isVisible ? 'animate-fade-in' : ''}`}>
                     <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="" />
                     <h2 className='text-2xl font-bold text-center py-8'>Social Media Marketing</h2>
                     <p className='text-center text-[18px] text-[#333333]'>Specjalizujemy się w tworzeniu skutecznych strategii promocyjnych na platformach społecznościowych. Zwiększamy zasięg i zaangażowanie, wykorzystując kreatywne treści i analizę danych. Pozwól nam pomóc Ci w budowaniu silnej obecności online.</p>
                     <button className='text-[#333333] text-[18px] underline mt-[80px] font-bold hover:scale-105 duration-300'><a href="/socialmedia">Dowiedz się więcej</a></button>
                    </div>
                    
            </div>
            
           
            
            
        </div>
        <div className='hidden md:flex justify-end pt-[100px]'>
            <img src={Offery} alt="napis oferta" className={`xl:w-[1000px] ${isVisible ? 'animate-slide-from-right' : ''}`}/>
        </div>
    </div>
  )
}

export default Cards