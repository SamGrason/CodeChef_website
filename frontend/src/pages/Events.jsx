import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { events } from "../data/events";
import EventNavbar from "../components/EventNavbar";
function Events() {
    const navigate = useNavigate();
    const [timers, setTimers] = useState({});

    useEffect(() => {
        const updateTimers = () => {
            const newTimers = {};

            events.forEach((event) => {
                const diff = new Date(event.deadline) - new Date();

                if (diff <= 0) {
                    newTimers[event.id] = "Closed";
                    return;
                }

                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (diff % (1000 * 60 * 60 * 24)) /
                    (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (diff % (1000 * 60 * 60)) /
                    (1000 * 60)
                );

                newTimers[event.id] =
                    `${days}d ${hours}h ${minutes}m`;
            });

            setTimers(newTimers);
        };

        updateTimers();

        const timer = setInterval(updateTimers, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <EventNavbar />
            <div className="mt-8 px-10 grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:py-10 md:px-20">
                {events.map((event) => (
                    <div
                        key={event.id}
                        onClick={() => navigate(`/events/${event.id}`)}
                        className="group relative h-72 rounded-xl overflow-hidden cursor-pointer shadow-lg"
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500"></div>

                        <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
                            <h1 className="text-3xl font-bold">
                                {event.title}
                            </h1>

                            <p className="mt-2 text-yellow-300 bg-black/70 border rounded-xl w-fit p-1">
                                ⏳ {timers[event.id]}
                            </p>

                            <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {event.description}
                            </p>

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/events/${event.id}`);
                                }}
                                className="mt-4 px-5 py-2 bg-red-600 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-red-700"
                            >
                                Register Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;