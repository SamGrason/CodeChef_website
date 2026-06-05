import logo from "../assets/cc_logo.png";
import slogo from '../assets/cc_logo_title.jpeg'
import { useNavigate } from "react-router-dom";
function Navbar() {
    const navigate = useNavigate()
    
    function handleEvents(){
        navigate('/')
    }
    function handleContact(){
        navigate('/contact')
    }
    function handleJoin(){
        navigate('/recruitment')
    }


    return (
        <div className="sticky top-0 z-50 bg-white h-20 flex justify-between items-center  shadow-md p-5 md:p-10">
            <img src={logo} alt="CodeChef Logo" className="w-40 h-40 hidden md:block" />
            <img src={slogo} className="w-15 h-auto md:hidden" alt="" />

            <div className="flex items-center gap-6 text-md md:text-xl">
                {/*  */}
                <div>
                    <button className="relative  font-semibold text-gray-700 hover:text-purple-600 transition-colors duration-300 group cursor-pointer"
                    onClick={handleEvents}>
                        Events

                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                </div>
                {/*  */}
                <div>
                    <button className="relative  font-semibold text-gray-700 hover:text-purple-600 transition-colors duration-300 group cursor-pointer"
                    onClick={handleContact}
                    >
                        Contact Us

                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                </div>
                {/*  */}
                <div>
                    <button className="relative  font-semibold text-gray-700 hover:text-purple-600 transition-colors duration-300 group cursor-pointer"
                    onClick={handleJoin}
                    >
                        Join Us

                        <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                </div>

            </div>
        </div>
    )

}
export default Navbar