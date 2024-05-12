import{ useRef} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css'


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <div className='relative '>
<div className="mx-auto  h-[400px] md:h-[500px] ml-16 absolute z-30  md:w-[90%] p-5  md:bg- mr-10 bg-gradient-to-r from-[rgb(0,0,0,0)] via-[rgb(0,0,0,0.4)] to-[rgb(0,0,0,0)]" >
<div className=" rounded-[20px]"></div>
  <div className=" text-left text-neutral-content ">
  <div className="max-w-3xl relative top-28 text-center mx-auto ">
      <h1    className="mb-5 text-2xl text-gray-100 md:text-6xl font-bold font-serif italic">WE TRY TO HELP PEOPLE WITH VOLUNTEERING</h1>
      
      <p  className="mb-5 text-yellow-200  font-bold md:text-2xl ">Try Our Programs And Help People For Their Needs</p>
      <div  className="flex flex-col md:flex-row gap-10 justify-center  ">
      <button className="btn btn-outline font-bold border-2 max-w-[200px]  text-cyan-300 hover:bg-cyan-400 hover:text-white hover:scale-105 mr-5">Become A Volunteer</button>
        <button className="btn text-white btn-accent max-w-[200px] bg-cyan-400 hover:scale-105">Our Programme</button>
        
     
     
      
      
      </div>

      
    </div>
  </div>
</div>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
     <SwiperSlide><img className='w-full h-[400px] md:h-[500px]' src="https://i0.wp.com/www.middleeastmonitor.com/wp-content/uploads/2024/01/AA-20240126-33537210-33537201-PALESTINIANS_IN_GAZA_STARVE_AMID_LACK_OF_FOOD_SUPPLIES_DUE_TO_ISRAELI_OFFENSIVE.jpg?fit=1200%2C800&ssl=1" alt="" /></SwiperSlide>


         <SwiperSlide><img className='w-full h-[400px] md:h-[500px]' src="https://media.licdn.com/dms/image/C4D12AQE6ftU0WgNjjw/article-cover_image-shrink_720_1280/0/1569329368314?e=2147483647&v=beta&t=x4Q9KH2xtji70lOlsuVOdeHjU_JOaF8wslb1Ykwy4Us" alt="" /></SwiperSlide>

         <SwiperSlide><img className='w-full h-[400px] md:h-[500px]' src="https://cdn7.dissolve.com/p/D985_71_625/D985_71_625_1200.jpg" alt="" /></SwiperSlide>

      <SwiperSlide><img className='w-full h-[400px] md:h-[500px]' src="https://rs.projects-abroad.ie/v1/hero/product-5b55d73b084b6.[1600].jpeg" alt="" /></SwiperSlide>

      <SwiperSlide><img className='w-full h-[400px] md:h-[500px]' src="https://www.ifrc.org/sites/default/files/styles/article_press_release_featured_image/public/2024-04/palestine_red_crescent_volunteer_youset_taking_pictures_in_a_health_clinic.jpg?itok=oMyBd3NX" alt="" /></SwiperSlide>

      
      
      <SwiperSlide><img className='w-full h-[400px] md:h-[500px]' src="https://unboundproject.org/rubaiya-ahmad/rubaiyas-team/" alt="" /></SwiperSlide>
     


      

      <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      
    </Swiper>
    </>
  );
};

export default Banner;