import React, {useState, useEffect, useRef} from 'react'

function SocialMedia_Offer_Details() {
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
    <div className='w-full pt-[80px] px-4 bg-white rounded-t-[100px] pb-[10rem]' id='szczegoly'>
        <div ref={divRef} className='max-w-[1240px] mx-auto'>
            <div className='grid md:grid-cols-2'>
                <div className={`mx-auto text-center pt-[20px] ${isVisible ? 'animate-zoom-in' : ''}`}>
                    <h2 className='text-[#80868c] text-[55px] font-bold'>One</h2>
                    <div className='w-[166px] h-[12px] bg-gradient-to-r from-[#b8c0d9] to-[#ba73d9] rounded-xl mx-auto mt-[20px]'></div>
                    <p className='text-[black] font-normal text-[28px] pt-8 p-2'>Codzienne relacje</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Optymalizacja wizytówki Google</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Analiza Marketingu Online</p>
                    <p className='text-[black] font-normal text-[28px] p-2 pt-[80px] md:hidden'>Ilość postów tygodniowo <span className='text-[#ba73d9] font-black'>2</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2 md:hidden'>Ilość rolek tygodniowo <span className='text-[#ba73d9] font-black'>2</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2 md:hidden'>Ilość kampanii reklamowych <span className='text-[#ba73d9] font-black'>2</span></p>
                </div>
                <div className={`mx-auto text-center pt-[20px] ${isVisible ? 'animate-zoom-in' : ''}`}>
                    <h2 className='text-[#80868c] text-[55px] font-bold'>Simple</h2>
                    <div className='w-[166px] h-[12px] bg-gradient-to-r from-[#b8c0d9] to-[#ba73d9] rounded-xl mx-auto mt-[20px]'></div>
                    <p className='text-[black] font-semibold text-[28px] pt-8 p-2'>Zawiera wszystko co pakiet One, posiada dodatkowo:</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>klucz wizualny</p>
                    <p className='text-[black] font-normal text-[28px] p-2 pt-[95px] md:hidden'>Ilość postów tygodniowo <span className='text-[#ba73d9] font-black'>3</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2 md:hidden'>Ilość rolek tygodniowo <span className='text-[#ba73d9] font-black'>3</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2 md:hidden'>Ilość kampanii reklamowych <span className='text-[#ba73d9] font-black'>4</span></p>
                </div>
            </div>
            <div className={`hidden md:grid md:grid-cols-2 ${isVisible ? 'animate-zoom-in' : ''}`}>
                <div className='mx-auto text-center'>
                    <p className='text-[black] font-normal text-[28px] p-2 pt-[80px]'>Ilość postów tygodniowo <span className='text-[#ba73d9] font-black'>2</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Ilość rolek tygodniowo <span className='text-[#ba73d9] font-black'>2</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Ilość kampanii reklamowych <span className='text-[#ba73d9] font-black'>2</span></p>
                </div>
                <div className='mx-auto text-center'>
                    <p className='text-[black] font-normal text-[28px] p-2 pt-[80px]'>Ilość postów tygodniowo <span className='text-[#ba73d9] font-black'>3</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Ilość rolek tygodniowo <span className='text-[#ba73d9] font-black'>3</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Ilość kampanii reklamowych <span className='text-[#ba73d9] font-black'>4</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SocialMedia_Offer_Details