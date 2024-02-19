import React, {useState, useRef, useEffect} from 'react'











function BlogComponent() {
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
    <div className='bg-[white] w-full px-4 py-[4rem]' id='portfolio'>
        <div ref={divRef} className='flex justify-center text-center max-w-[1240px] mx-auto'>
            <div className='mx-auto max-w-[1240px]'>
                <h2 className={`text-[#404040] md:text-[56px] text-[40px] font-black pt-[40px] ${isVisible ? 'animate-zoom-in' : ''}`}>Blog</h2>
                <p className={`py-[10px] pb-[20px] font-normal text-[#333333] ${isVisible ? 'animate-zoom-in' : ''}`}>Sprawdź artykuły napisane przez naszych specjalistów.</p>
                <div className='flex justify-center pb-[80px]'>
                <a href="/blog"><button className={`flex mx-auto hover:scale-105 duration-300 bg-transparent text-black border-[1px] text-[18px] rounded-full w-[200px] h-[52px] items-center justify-center ${isVisible ? 'animate-zoom-in' : ''}`}>Sprawdź blog</button></a>  
                </div>
                </div>
            </div>
            
        </div>
  )
}

export default BlogComponent