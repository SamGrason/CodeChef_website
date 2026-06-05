import { useNavigate, useParams } from "react-router-dom"
import { events } from "../data/events"


function EventRegistration() {
    const { eventId } = useParams();
    const event = events.find((e) => e.id === eventId);
    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }


    return (
        <div className="flex justify-center items-center min-h-screen p-6 relative">

            <button onClick={handleBack} className="absolute bg-[#ae68f0]  top-20 left-20 px-3 py-2 rounded-md hover:bg-[#9448df]">Go back</button>

            <div className="bg-white/90 border border-[#ae68f0] rounded-2xl shadow-lg w-full max-w-3xl p-8 flex flex-col gap-6">

                <h1 className="text-3xl font-bold text-center text-[#ae68f0]">
                    {event.id.toLocaleUpperCase()} Form
                </h1>

                {/* Name & Reg No */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <h3 className="font-semibold mb-1">Name</h3>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <h3 className="font-semibold mb-1">Registration No</h3>
                        <input
                            type="text"
                            placeholder="Enter your Reg No"
                            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>
                </div>

                {/* Phone & email */}
                <div className="grid md:grid-cols-2 gap-5">
                    <div>
                        <h3 className="font-semibold mb-1">Phone No</h3>
                        <input
                            type="text"
                            placeholder="Enter your number"
                            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <h3 className="font-semibold mb-1">VIT Email</h3>
                        <input
                            type="email"
                            placeholder="Enter your email ID"
                            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                </div>

                <button className="bg-[#ae68f0] text-white px-6 py-2 self-auto rounded-lg hover:bg-[#9d4ef0] transition-all duration-300 md:self-start">
                    Register
                </button>
            </div>
        </div>
    )
}
export default EventRegistration