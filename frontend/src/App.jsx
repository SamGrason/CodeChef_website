import logo from "./assets/cc_logo.png";
import e1 from "./events_images/e1.jpg";
import e2 from "./events_images/e2.jpg";
import Navbar from "./components/Navbar";
import EventNavbar from "./components/EventNavbar";
import Footer from "./components/Footer";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate()

  function handleHeatCode() {
    navigate("/heatcode")
  }
  function handleClubExpo() {
    navigate("/clubexpo")
  }
  function handleHome(){
    navigate('/')
  }

  return (
    <div>


      <div className="relative z-10">
        <div>
          <EventNavbar />

          {/* Events */}
          <div className="mt-8 px-10  flex flex-col md:grid grid-cols-2 xl:grid-cols-3 gap-3 md:py-10 md:px-20">

            {/* Event 1 */}
            <div
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-lg"
              onClick={handleHeatCode}
            >
              {/* Background Image */}
              <img
                src={e1}
                alt="Heat Code"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>
              {/* Text  */}
              <div className="absolute bottom-0 left-0 w-full p-10 text-white
                  translate-y-16 group-hover:translate-y-0
                  transition-transform duration-500 ">

                <h1 className="text-3xl font-bold">
                  Heat Code
                </h1>

                <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Coding competition description here...
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="group relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-lg"
              onClick={handleClubExpo}
            >
              <img
                src={e2}
                alt="Club expo image"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-100">
              </div>
              <div className="absolute bottom-0 left-0 w-full p-10 text-white translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                <h1 className="text-3xl font-bold">Club Expo</h1>
                <p className="mt-2 opacity-0 group-hover:opacity-100">Club Expo description</p>
              </div>
            </div>

            {/* Events Reapeated after this */}
            <div
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-lg"
              onClick={handleHeatCode}
            >
              {/* Background Image */}
              <img
                src={e1}
                alt="Heat Code"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>
              {/* Text  */}
              <div className="absolute bottom-0 left-0 w-full p-10 text-white
                  translate-y-16 group-hover:translate-y-0
                  transition-transform duration-500 ">

                <h1 className="text-3xl font-bold">
                  Heat Code
                </h1>

                <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Coding competition description here...
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="group relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-lg"
              onClick={handleClubExpo}
            >
              <img
                src={e2}
                alt="Club expo image"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-100">
              </div>
              <div className="absolute bottom-0 left-0 w-full p-10 text-white translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                <h1 className="text-3xl font-bold">Club Expo</h1>
                <p className="mt-2 opacity-0 group-hover:opacity-100">Club Expo description</p>
              </div>
            </div>
            <div
              className="group relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-lg"
              onClick={handleHeatCode}
            >
              {/* Background Image */}
              <img
                src={e1}
                alt="Heat Code"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>
              {/* Text  */}
              <div className="absolute bottom-0 left-0 w-full p-10 text-white
                  translate-y-16 group-hover:translate-y-0
                  transition-transform duration-500 ">

                <h1 className="text-3xl font-bold">
                  Heat Code
                </h1>

                <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  Coding competition description here...
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="group relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-lg"
              onClick={handleClubExpo}
            >
              <img
                src={e2}
                alt="Club expo image"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-100">
              </div>
              <div className="absolute bottom-0 left-0 w-full p-10 text-white translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                <h1 className="text-3xl font-bold">Club Expo</h1>
                <p className="mt-2 opacity-0 group-hover:opacity-100">Club Expo description</p>
              </div>
            </div>


          </div>

        </div>




      </div>
    </div>

  );
}

export default App;