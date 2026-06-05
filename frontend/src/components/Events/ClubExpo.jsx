import e4 from "../../events_images/e4.png";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
function ClubExpo() {
    const navigate = useNavigate()
    function handleBack() {
        navigate(-1)
    }

    return (
        <div className="relative">

            <button onClick={handleBack} className="absolute  bg-[#ae68f0] left-5 px-3 py-2 rounded-md hover:bg-[#9448df] hidden md:block "> 
                <div className="flex items-center">
                    <ArrowLeft size={18} />

                <p>Back</p>
                
                </div>
                </button>

            <div className="flex flex-col md:flex-row p-12 m-2 border-none bg-white/75 rounded-2xl shadow-xl mt-5">



                <img src={e4} alt="" className="  flex-1 md:w-[25%] px-10" />

                <div className="flex-1 p-10 text-[#374151] ">
                    <h1 className="text-3xl font-bold md:text-5xl">Club Expo - July 2025 </h1>
                    <p className="text-sm">July 18, 2025</p>
                    <h2 className="text-lg font-medium ">Club Expo 2025 , an event conducted by VIT-Chennai to introduce freshers with the clubs in the campus and the CodeChef VIT-Chennai team was ready to hit the ground running.</h2>
                    <p className="text-sm">Honestly, it turned out to be one of the highlights of our entire semester. Our goal was simple: meet the new faces on campus, show off our technical side, and prove that competitive programming is way more than just staring at a screen for hours.We spent the day chatting with freshers, sharing our mission, and geeking out over the coding culture we’ve built here. The real showstopper? Our custom-built Pac-Man game. It was a total magnet for the crowd. Not only did it give people a reason to stop by, but it also broke the ice perfectly. Instead of just handing out flyers, we were actually playing games and having real conversations with everyone who dropped by. It turned our little corner of the expo into a high-energy hub where people felt comfortable asking questions about what we do.</p>
                    <h2 className="text-lg font-medium">The expo wasn't just about showing off; it was about building a community.</h2>

                    <p className="text-sm">During the event, the CodeChef VITC team presented its mission, highlighted the coding culture it nurtures, and explained the various events and initiatives conducted throughout the year. Through discussions, demonstrations, and interactive activities, visitors gained a clear understanding of the club’s objectives and opportunities for learning and collaboration. The collective effort of the team ensured smooth execution, effective coordination, and consistent engagement throughout the expo.In addition to student participation, the event was further enriched by visits from members of the university’s student welfare administration. Their presence and encouragement served as a strong source of motivation and reinforced the importance of student-led technical communities on campus.</p>

                </div>


            </div>

        </div >
    )
}
export default ClubExpo