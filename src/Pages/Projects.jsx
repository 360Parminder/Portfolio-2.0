// import cover from '../Assets/Images/Cover.png'
import Project1 from '../Assets/Images/auraVideos.png'
import Project2 from '../Assets/Images/slug.png'
import { IonIcon } from '@ionic/react';
import { information, logoGithub, paperPlaneOutline } from 'ionicons/icons';
const Projects = () => {
    return (
        <div className="w-full  h-screen flex flex-col mt-5 justify-center items-center bg-cover" >
            <div className='w-5/6 h-4/5 carousel rounded-lg'>

                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={Project1}
                        className="w-full" alt='cover' />

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                    <div className=' absolute top-[85%] left-[34%] flex justify-center items-center gap-2'>
                        <p target='_blank' rel="noreferrer" className='btn'><IonIcon className=' text-[1.6rem]' icon={information} /> Info </p>
                        <a href='https://github.com/360Parminder/Aura-Frontend' rel="noreferrer" target='_blank' className=' flex items-center btn'> <IonIcon className=' text-[1.6rem]' icon={logoGithub} /> Source Code </a>
                        <a href='https://auravideos.vercel.app/' rel="noreferrer" target='_blank' className='flex items-center btn '><IonIcon className=' text-[1.6rem]' icon={paperPlaneOutline} /> Visit</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={Project2}
                        className="w-full" alt='cover' />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                    <div className=' absolute top-[85%] left-[34%] flex justify-center items-center gap-2'>
                        <p className='btn'><IonIcon className=' text-[1.6rem]' icon={information} /> Info </p>
                        <a href='https://github.com/360Parminder/TheSlug' rel="noreferrer" target='_blank' className=' flex items-center btn'> <IonIcon className=' text-[1.6rem]' icon={logoGithub} /> Source Code </a>
                        <a href='https://slug-url.vercel.app/' target='_blank' rel="noreferrer" className='flex items-center btn '><IonIcon className=' text-[1.6rem]' icon={paperPlaneOutline} /> Visit</a>
                    </div>
                </div>
                {/* <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" alt='cover'  />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" alt='cover' />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}

            </div>
        </div>
    )
}
export default Projects;