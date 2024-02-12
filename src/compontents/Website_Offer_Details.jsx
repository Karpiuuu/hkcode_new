import React, {useState, useRef, useEffect} from 'react'

function Website_Offer_Details() {
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
            <div className='grid md:grid-cols-3'>
                <div className={`mx-auto text-center pt-[20px] ${isVisible ? 'animate-zoom-in' : ''}`}>
                    <h2 className='text-[#80868c] text-[55px] font-bold'>One</h2>
                    <div className='w-[166px] h-[12px] bg-gradient-to-r from-[#b8c0d9] to-[#ba73d9] rounded-xl mx-auto mt-[20px]'></div>
                    <p className='text-[black] font-normal text-[28px] pt-8 p-2'>Zakup domeny</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Polityka prywatności</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Certyfikat SSL</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Responsywność</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Formularz kontaktowy</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Wizualizacja</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>SEO</p>
                    <p className='text-[black] font-normal text-[28px] p-2 pt-[80px] md:hidden'>Ilość podstron <span className='text-[#ba73d9] font-black'>2</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2 md:hidden'>Logotyp <span className='text-[#ba73d9] font-black'>+400 zł</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2 md:hidden'>Zaawansowane animacje <span className='text-[#ba73d9] font-black'>0</span></p>
                </div>
                <div className={`mx-auto text-center pt-[20px] ${isVisible ? 'animate-zoom-in' : ''}`}>
                    <h2 className='text-[#80868c] text-[55px] font-bold'>Simple</h2>
                    <div className='w-[166px] h-[12px] bg-gradient-to-r from-[#b8c0d9] to-[#ba73d9] rounded-xl mx-auto mt-[20px]'></div>
                    <p className='text-[black] font-semibold text-[28px] pt-8 p-2'>Zawiera wszystko co pakiet One, posiada dodatkowo:</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Wspracie naszych ekspertów</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Mapa z API Google</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Google Analitics</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Piksel meta</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Dodatkowe formularze</p>
                    <p className='text-[black] font-normal text-[28px] p-2 pt-[95px] md:hidden'>Ilość podstron <span className='text-[#ba73d9] font-black'>5</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2 md:hidden'>Logotyp <span className='text-[#ba73d9] font-black'>+200 zł</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2 md:hidden'>Zaawansowane animacje <span className='text-[#ba73d9] font-black'>2</span></p>
                </div>
                <div className={`mx-auto text-center pt-[20px] ${isVisible ? 'animate-zoom-in' : ''}`}>
                    <h2 className='text-[#80868c] text-[55px] font-bold'>Full</h2>
                    <div className='w-[166px] h-[12px] bg-gradient-to-r from-[#b8c0d9] to-[#ba73d9] rounded-xl mx-auto mt-[20px]'></div>
                    <p className='text-[black] font-semibold text-[28px] pt-8 p-2'>Zawiera wszystko co pakiety One i Simple, posiada dodatkowo:</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Indywidualny szablon witryny</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Blog</p>
                    <p className='text-[black] font-normal text-[28px] p-2 pt-[95px] md:hidden'>Ilość podstron <span className='text-[#ba73d9] font-black'>5</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2 md:hidden'>Logotyp <span className='text-[#ba73d9] font-black'>+200 zł</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2 md:hidden'>Zaawansowane animacje <span className='text-[#ba73d9] font-black'>2</span></p>
                </div>
            </div>
            <div className={`hidden md:grid md:grid-cols-3 ${isVisible ? 'animate-zoom-in' : ''}`}>
                <div className='mx-auto text-center'>
                    <p className='text-[black] font-normal text-[28px] p-2 pt-[80px]'>Ilość podstron <span className='text-[#ba73d9] font-black'>2</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Logotyp <span className='text-[#ba73d9] font-black'>+400 zł</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Zaawansowane animacje <span className='text-[#ba73d9] font-black'>0</span></p>
                </div>
                <div className='mx-auto text-center'>
                    <p className='text-[black] font-normal text-[28px] p-2 pt-[80px]'>Ilość podstron <span className='text-[#ba73d9] font-black'>5</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Logotyp <span className='text-[#ba73d9] font-black'>+200 zł</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Zaawansowane animacje <span className='text-[#ba73d9] font-black'>2</span></p>
                </div>
                <div className='mx-auto text-center'>
                    <p className='text-[black] font-normal text-[28px] p-2 pt-[80px]'>Ilość podstron <span className='text-[#ba73d9] font-black'>10</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Logotyp <span className='text-[#ba73d9] font-black'>Bezpłatnie</span></p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Zaawansowane animacje <span className='text-[#ba73d9] font-black'>5</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Website_Offer_Details