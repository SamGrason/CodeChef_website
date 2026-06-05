import e3 from "../../events_images/e3.png";
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



                <img src={e3} alt="" className="  flex-1 md:w-[25%] px-10" />

                <div className="flex-1 p-10 text-[#374151] ">
                    <h1 className="text-3xl font-bold md:text-5xl">Heat Code </h1>
                    <p className="text-sm">January 9, 2026</p>
                    <h2 className="text-lg font-medium ">The Grid of Innovation: A Tactical Gambit in Competitive Programming</h2>
                    <p className="text-sm">The inaugural event of the year, HeatCode, redefined the traditional coding contest by transforming a standard problem set into a high-stakes psychological and strategic battlefield. By leveraging a 3x3 interactive grid format in the opening round, we challenged participants from VIT Chennai and the greater Chennai technical circuit to move beyond mere syntax and logic. Each cell in the matrix represented a unique algorithmic hurdle, but the true path to victory lay in the "Combo Bonus" mechanics. Teams were forced to evaluate the risk-to-reward ratio of tackling harder problems to complete rows, columns, or diagonals, effectively turning a coding competition into a game of Grandmaster-level chess. This gamified approach, powered by our collaboration with the Microsoft Innovations Club (MIC) and our official partner UNSTOP, ensured that only the top 30 teams those who possessed both the mental agility to code and the foresight to strategize advanced to the next phase</p>
                    <h2 className="text-lg font-medium">The Arena of Resilience: A Multi-Stage Coding Tug of War</h2>

                    <p className="text-sm">As the competition transitioned into its second phase, the atmosphere shifted from tactical calculation to the raw, adrenaline-fueled intensity of the "Tug of War" rounds. This wasn't just a test of who could write the cleanest code, but who could maintain their composure as the stakes doubled and the support systems halved. The progression was relentless: starting with a collaborative 4 vs 4 skirmish in Stage 1, narrowing down to a high-precision 2 vs 2 encounter in Stage 2, and finally culminating in a breathtaking 1 vs 1 gladiator-style duel in Stage 3. Each 30-minute interval served as a filter, stripping away everything but the core problem-solving abilities of the participants. The final parallel brackets, which saw winners fighting for the crown and losers battling for the final podium spot, ensured a fair yet grueling conclusion. Thanks to the seamless coordination between CodeChef VITC and MIC leads, the event stood as a testament to the thriving developer culture in Chennai, ending with the crowning of three exceptional teams and setting a massive precedent for every event following in its wake.</p>

                </div>


            </div>

        </div >
    )
}
export default ClubExpo