import React, {useState, useEffect, useRef} from 'react'

function Shops_Offer_Details() {
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
                    <h2 className='text-[#80868c] text-[55px] font-bold'>Sklep<br/>WooCommerce</h2>
                    <div className='w-[166px] h-[12px] bg-gradient-to-r from-[#b8c0d9] to-[#ba73d9] rounded-xl mx-auto mt-[20px]'></div>
                    <p className='text-[black] font-normal text-[28px] pt-8 p-2'>Instalację i konfigurację sklepu WooCommerce na wybranej domenie.</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Dostosowanie wyglądu do identyfikacji wizualnej Twojej marki.</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Optymalizację SEO, aby Twój sklep był lepiej widoczny w wyszukiwarkach.</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Integrację z systemami płatności oraz kurierami dla ułatwienia obsługi zamówień.</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Podstawowe szkolenie z obsługi sklepu, umożliwiające samodzielne zarządzanie treścią i produktami.</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Wsparcie techniczne na początkowym etapie działania sklepu.</p>
                </div>
                <div className={`mx-auto text-center pt-[20px] ${isVisible ? 'animate-zoom-in' : ''}`}>
                    <h2 className='text-[#80868c] text-[55px] font-bold'>Sklep<br/>Dedykowany</h2>
                    <div className='w-[166px] h-[12px] bg-gradient-to-r from-[#b8c0d9] to-[#ba73d9] rounded-xl mx-auto mt-[20px]'></div>
                    <p className='text-[black] font-normal text-[28px] pt-8 p-2'>Pełną personalizację funkcjonalności sklepu, włączając rozbudowane filtry produktów, zaawansowane opcje wyszukiwania i inne.</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Integrację z zewnętrznymi systemami ERP/CRM, dla płynnej synchronizacji danych i zarządzania przedsiębiorstwem.</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Rozbudowane analizy i raportowanie, umożliwiające dokładne śledzenie zachowań użytkowników i efektywność sprzedaży.</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Zaawansowane zabezpieczenia, zapewniające ochronę przed atakami i zagwarantowanie bezpieczeństwa danych klientów.</p>
                    <p className='text-[black] font-normal text-[28px] p-2'>Indywidualne doradztwo i wsparcie na każdym etapie projektu i po jego zakończeniu, gwarantujące szybką reakcję na potrzeby</p>
                </div>
            </div>
            <div className={`hidden md:grid md:grid-cols-2 ${isVisible ? 'animate-zoom-in' : ''}`}>
                <div className='mx-auto text-center'>
                </div>
                <div className='mx-auto text-center'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Shops_Offer_Details