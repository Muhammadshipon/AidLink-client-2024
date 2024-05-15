import { MdCastForEducation } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SiCodeclimate } from "react-icons/si";
import { IoBodyOutline } from "react-icons/io5";
import { GrRestroomWomen } from "react-icons/gr"
import { RiGovernmentFill } from "react-icons/ri";
const Programs = () => {
  return (
    <section  className="m-4 md:m-8 dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
	<h1
  
  data-aos="fade-up"
     data-aos-delay="50"
       data-aos-duration="1000"
  
  className="text-2xl px-5 md:text-5xl text-cyan-400 font-bold text-center my-10">Our Programs</h1>
		<p 
    
    data-aos="fade-up"
    data-aos-delay="100"
         data-aos-duration="1000"
    
    className="dark:text-gray-600 text-yellow-400">We offer a range of programs focused on education, healthcare, environment, and more.</p>
	</div>
	<div 
     data-aos="fade-up"
     data-aos-delay="300"
          data-aos-duration="1000"
  
  
  
  className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4">
   <span className="text-6xl text-orange-400"> <MdCastForEducation /></span>
			<h3 className="my-3 text-3xl font-semibold">Education</h3>
			<div className="space-y-1 leading-tight">
				<p>Our education programs include initiatives to improve literacy rates, support schools and teachers, and provide access to technology and resources.</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
    <span className="text-6xl text-orange-400"> <MdOutlineHealthAndSafety /></span>
			<h3 className="my-3 text-3xl font-semibold">Healthcare</h3>
			<div className="space-y-1 leading-tight">
				<p>Our healthcare programs focus on improving access to quality care, promoting healthy behaviors, and preventing and treating diseases.</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
    <span className="text-6xl text-orange-400"> <SiCodeclimate /></span>
			<h3 className="my-3 text-3xl font-semibold">Climate Change</h3>
			<div className="space-y-1 leading-tight">
				<p>Our environmental programs work to protect natural resources, promote sustainable practices, and mitigate the impact of climate change.</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
    <span className="text-6xl text-orange-400"> <IoBodyOutline /></span>
			<h3 className="my-3 text-3xl font-semibold">Youth</h3>
			<div className="space-y-1 leading-tight">
				<p>We are committed to nurturing the next generation of leaders in Bangladesh. Our youth development programs provide opportunities for young people to develop their skills, gain confidence, and learn about social responsibility.</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
    <span className="text-6xl text-orange-400"> <GrRestroomWomen /></span>
			<h3 className="my-3 text-3xl font-semibold">Women</h3>
			<div className="space-y-1 leading-tight">
				<p>We believe in gender equality and are working to empower women and girls across Bangladesh. Our programs focus on promoting women,s rights, providing education and vocational training, and creating opportunities for economic empowerment.</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
    <span className="text-6xl text-orange-400"> <RiGovernmentFill /></span>
			<h3 className="my-3 text-3xl font-semibold">Good Governance</h3>
			<div className="space-y-1 leading-tight">
				<p>We believe in the importance of good governance and are working to promote transparency, accountability, and civic engagement at all levels of society. We promote good governance and encourage civic engagement to build a better future for Bangladesh.</p>
			</div>
		</div>
	</div>
</section>
  );
};

export default Programs;