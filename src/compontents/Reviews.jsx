import React, { useEffect, useRef, useState } from 'react';

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
    <div className='w-full flex mx-auto justify-center pb-[150px]' id='opinie'>
        <div ref={divRef} className='max-w-[1240px]'>
            <h2 className={`flex justify-center font-black text-[87px] py-[80px] text-white ${isVisible ? 'animate-zoom-in' : ''}`}>OPINIE</h2>
            <div className={`elfsight-app-ef704e39-b761-478c-8af9-5ecd593e4a34 review ${isVisible ? 'animate-zoom-in' : ''}`} data-elfsight-app-lazy></div>
        </div>
        
    </div>
    
  );
};

export default Reviews;