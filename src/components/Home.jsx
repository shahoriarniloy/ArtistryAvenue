import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import 'animate.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import { Helmet } from 'react-helmet';





const Home = () => {



    
   

    return (
        <div className='max-w-[1400px] m-auto lg:mt-0 md:mt-4 sm:mt-8 '>
            <Helmet>
                <title>Home</title>
            </Helmet>
           <Swiper  spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper" >
            <SwiperSlide>
                <div className="flex lg:flex-row flex-col  justify-center items-center max-w-[1400px] h-[554px] bg-neutral-100 rounded-3xl lg:p-20 mt-12 m-auto mb-16 lg:text-left text-center " style={{
    backgroundImage: "url('https://i.ibb.co/DQ27Stk/woman-arranging-paintings-home.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', filter: 'brightness(0.9)'
}}
>
                    <div className="lg:ml-20">
                        <h1 className=" text-white text-[56px] font-bold text-center font-text border border-solid border-gray-300 bg-black  bg-opacity-50">Step into our emporium of dreams, where each stroke of creativity dances upon the canvas of imagination.</h1>
                    </div>
                </div>

            </SwiperSlide>

            <SwiperSlide>
                <div className="flex lg:flex-row flex-col  justify-center items-center max-w-[1400px] h-[554px] bg-neutral-100 rounded-3xl lg:p-20 mt-12 m-auto mb-16 lg:text-left text-center " style={{backgroundImage: "url('https://i.ibb.co/BZ6KPMy/woman-art-exhibition.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',  filter: 'brightness(0.9)'}}>
                    <div className="lg:ml-20">
                        <h1 className=" text-white text-[56px] font-bold text-center font-text w-full border border-solid border-gray-300  bg-black  bg-opacity-50">Whispers of inspiration intertwine with the threads of craftsmanship, weaving a tapestry of unparalleled beauty.</h1>
                    </div>
                </div>
                
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex lg:flex-row flex-col justify-center items-center max-w-[1400px] h-[554px] bg-neutral-100 rounded-3xl lg:p-20 mt-12 m-auto mb-16 lg:text-left text-center  " style={{backgroundImage: "url('https://i.ibb.co/gWhycbX/lifeofpix-jorgemallo2270-307911.webp')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', filter: 'brightness(0.9)'}}>
                    <div className="lg:ml-20">
                        <h1 className="text-white text-[56px] font-bold text-center font-text w-full border border-solid border-gray-300  bg-black  bg-opacity-50">Embrace the allure of artisanal wonders, where every piece tells a story of passion and vision.</h1>

                    </div>
                </div>
                
            </SwiperSlide>

            <SwiperSlide>
                <div className="flex lg:flex-row flex-col justify-center items-center max-w-[1400px] h-[554px] bg-neutral-100 rounded-3xl lg:p-20 mt-12 m-auto mb-16 lg:text-left text-center  " style={{backgroundImage: "url('https://i.ibb.co/P6CwPmx/green-leafy-plant-sits-elegant-wooden-table-generative-ai.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat', filter: 'brightness(0.9)'}}>
                    <div className="lg:ml-20">
                        <h1 className="text-white text-[56px] font-bold text-center font-text w-full border border-solid border-gray-300  bg-black  bg-opacity-50">Welcome to our sanctuary of artistic expression, where the world is a canvas, and every creation is a masterpiece in the making.</h1>

                    </div>
                </div>
                
            </SwiperSlide>

           
              
               
               
            
           </Swiper>

         

           
        </div>
    );
};

export default Home;