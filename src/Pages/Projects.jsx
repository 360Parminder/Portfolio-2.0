import cover from '../Assets/Images/Cover.png'
import office from '../Assets/Images/office.jpg'
const Projects =()=>{
    return(
        <div className="w-full h-screen flex flex-col justify-center items-center bg-cover" style={{backgroundImage:`url(${cover})`}}>
                <img className='w-5/6 h-4/5 object-cover rounded-lg' src={office} alt="cover"/>
        </div>
    )
}
export default Projects;