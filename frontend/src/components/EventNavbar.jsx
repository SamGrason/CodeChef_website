import { useNavigate, useLocation } from "react-router-dom";
function EventNavbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const iseEventsPage = location.pathname === "/events"


  function handleUpcomingEvents() {
    navigate('events')
  }
  function handleHome() {
    navigate('/')
  }

  return (
    <div className="bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="flex justify-between items-center px-10 py-4">
        <div className={
          iseEventsPage ? "text-sm md:text-xl" : "text-lg md:text-3xl"
        }>
          <h2 className=" font-medium tracking-tight bg-clip-text  cursor-pointer"
            onClick={handleHome}
          >
            Events Blogs
          </h2>
        </div>
        <div className={
          iseEventsPage ? "text-lg md:text-3xl" : "text-sm md:text-xl"
        }>
          <button className="relative font-semibold text-gray-700 hover:text-purple-600 transition-colors duration-300 group cursor-pointer"
            onClick={handleUpcomingEvents}
          >
            Upcoming Events

            <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>

      </div>
    </div>
  );
}

export default EventNavbar;