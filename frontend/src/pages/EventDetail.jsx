import { useNavigate, useParams } from "react-router-dom";
import { events } from "../data/events";
import EventNavbar from "../components/EventNavbar";

function EventDetails() {
    const { eventId } = useParams();
    const navigate = useNavigate()
    const event = events.find((e) => e.id === eventId);

    if (!event) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <h1 className="text-4xl font-bold text-red-500">
                    Event Not Found
                </h1>
            </div>
        );
    }
// // <button
//                 onClick={handleBack}
//                 className="hidden md:flex items-center gap-2 bg-[#ae68f0] text-white px-4 py-2 rounded-md hover:bg-[#9448df] shadow-md mb-4 transition-colors"
//             >
//                 <ArrowLeft size={18} />
//                 Go Back
//             </button>

    function handleBack() {
        navigate(-1)
    }

    function handleRegistration(){
        navigate(`/events/${event.id}/register`)
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-6 relative">

            <button onClick={handleBack} className="absolute bg-[#ae68f0]  top-20 left-20 px-3 py-2 rounded-md hover:bg-[#9448df] hidden md:block">Go back</button>

            <div className="bg-white/90 border border-[#ae68f0] rounded-2xl shadow-lg w-full max-w-6xl overflow-hidden">

                <div className="flex flex-col md:flex-row">

                    {/* Left Side - Event Poster */}
                    <div className="md:w-1/2">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Side - Event Details */}
                    <div className="md:w-1/2 p-8 flex flex-col justify-center">

                        <h1 className="text-4xl font-bold text-[#ae68f0] mb-4">
                            {event.title}
                        </h1>

                        <p className="text-gray-600 text-lg mb-6">
                            {event.description}
                        </p>

                        {event.prize && (
                            <div className="mb-4">
                                <h2 className="text-xl font-semibold">
                                    Prize Pool
                                </h2>
                                <p className="text-green-600 font-bold">
                                    {event.prize}
                                </p>
                            </div>
                        )}

                        {event.rules && (
                            <div className="mb-6">
                                <h2 className="text-xl font-semibold mb-2">
                                    Rules
                                </h2>

                                <ul className="list-disc list-inside space-y-1 text-gray-700">
                                    {event.rules.map((rule, index) => (
                                        <li key={index}>{rule}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <button
                            className="w-fit px-6 py-3 bg-[#ae68f0] text-white rounded-lg hover:bg-[#9448df] transition duration-300 cursor-pointer" 
                            onClick={handleRegistration}
                        >
                            Register Now
                        </button>

                    </div>

                </div>

            </div>
        </div>


    );
}

export default EventDetails;