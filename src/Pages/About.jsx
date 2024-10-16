
const About =()=>{
    return(
      <div className="w-full h-screen flex flex-row justify-center items-center bg-cover bg-black text-white">
        <div className=" w-4/12 h-full flex flex-col items-center">
            <h3 className="text-3xl font-semibold mt-20">About Me</h3>
        </div>
        <div className=" flex flex-col px-10 w-8/12 h-full">
                <p className=" text-2xl font-semibold mt-20">
                I am currently a Web and App Development Engineer,Freelancer At the same time,
                I am undertaking a  Bachelor of Technology in 
                computer Science Engineering at Bikaner Technical University
                </p>
          
            <div>

            </div>
            <div className="w-full flex flex-row justify-evenly">
                <div className="flex flex-col items-center">

                    <p className=" text-[6rem]">+25</p>
                    <p className="text-2xl uppercase w-[10rem] text-right">Total Projects</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className=" text-[6rem]">+2</p>
                    <p className="text-2xl uppercase w-[10rem] text-right ">years of Experience</p>
                </div>
            </div>
        </div>
      </div>
    )
}
export default About;