import React, { useEffect } from 'react';

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

  return (
    <div className='w-full flex mx-auto justify-center pb-[150px]'>
        <div className='max-w-[1240px]'>
            <h2 className='flex justify-center font-black text-[87px] py-[80px] text-white'>OPINIE</h2>
            <div className="elfsight-app-ef704e39-b761-478c-8af9-5ecd593e4a34 review" data-elfsight-app-lazy></div>
        </div>
        
    </div>
    
  );
};

export default Reviews;