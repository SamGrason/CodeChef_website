import { useState } from "react"
import axios from "axios"
function Recruitment() {
    const [name, setName] = useState("")
    const [regno, setRegno] = useState("")
    const [mail, setMail] = useState("")
    const [degree, setDegree] = useState("")
    const [branch, setBranch] = useState("")
    const [pnum, setPnum] = useState("")
    const [dept, setDept] = useState("")
    const [exp, setExp] = useState("")
    const [interest, setInterest] = useState("")
    const [errors, setErrors] = useState({})
    const isDisabled = name.trim() == "" && regno.trim() == "" && mail.trim() == "" && degree.trim() == "" && branch.trim() == "" && pnum.trim() == "" && dept.trim() == "" && exp.trim() == "" && interest.trim() == ""

    function handleName(evt) {
        const val = evt.target.value
        setName(val.toUpperCase())
    }
    function handleRegno(evt) {
        const val = evt.target.value
        setRegno(val.toUpperCase())
    }
    function handleMail(evt) {
        setMail(evt.target.value)
    }
    function handleDegree(evt) {
        const val = evt.target.value
        setDegree(val.toUpperCase())
    }
    function handleBranch(evt) {
        const val = evt.target.value
        setBranch(val.toUpperCase())
    }
    function handlePnum(evt) {
        setPnum(evt.target.value)
    }
    function handleDept(evt) {
        setDept(evt.target.value)

    }
    function handleExp(evt) {
        setExp(evt.target.value)
    }
    function handleInterest(evt) {
        setInterest(evt.target.value)
    }

    function handleSubmit() {

        const formData = {
            name,
            regno,
            mail,
            degree,
            branch,
            pnum,
            dept,
            exp,
            interest
        };

        try {

            const response = axios.post(
                "http://localhost:5000/recruitment",
                formData
            )

            console.log(response.data);

            alert("Form submitted successfully!");

            // Clear form
            setName("");
            setRegno("");
            setMail("");
            setDegree("");
            setBranch("");
            setPnum("");
            setDept("");
            setExp("");
            setInterest("");
            setErrors({});

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to submit form"
            );
        }
    }


    return (
        <div>
            <div className="flex justify-center items-center min-h-screen p-6">
                <div className="bg-white/90 border border-[#ae68f0] rounded-2xl shadow-lg w-full max-w-3xl p-8 flex flex-col gap-6">

                    <h1 className="text-3xl font-bold text-center text-[#ae68f0]">
                        Recruitment Form
                    </h1>

                    {/* Name & Reg No */}
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <h3 className="font-semibold mb-1">Name</h3>
                            <input
                                value={name}
                                onChange={handleName}
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <h3 className="font-semibold mb-1">Registration No</h3>
                            <input
                                value={regno}
                                onChange={handleRegno}
                                type="text"
                                placeholder="Enter your Reg No"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <h3 className="font-semibold mb-1">VIT Email</h3>
                        <input
                            value={mail}
                            onChange={handleMail}
                            type="email"
                            placeholder="Enter your email ID"
                            className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Degree & Branch */}
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <h3 className="font-semibold mb-1">Degree</h3>
                            <input
                                value={degree}
                                onChange={handleDegree}
                                type="text"
                                placeholder="Enter your degree"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <h3 className="font-semibold mb-1">Branch</h3>
                            <input
                                value={branch}
                                onChange={handleBranch}
                                type="text"
                                placeholder="Enter your branch"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    {/* Phone & Department */}
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <h3 className="font-semibold mb-1">Phone No</h3>
                            <input
                                value={pnum}
                                onChange={handlePnum}
                                type="text"
                                placeholder="Enter your number"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <h3 className="font-semibold mb-1">Department</h3>
                            <select
                                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                onChange={handleDept}
                            >
                                <option value="">Select your department</option>
                                <option value="Competitive Programming">Competitive Programming</option>
                                <option value="Design">Design</option>
                                <option value="Event Managment">Event Managment</option>
                                <option value="Sponsorship & Marketing">Sponsorship & Marketing</option>
                                <option value="Projects">Projects</option>
                                <option value="Social Media">Social Media</option>
                            </select>
                        </div>
                    </div>

                    {/* Experience */}
                    <div>
                        <h3 className="font-semibold mb-1">Relevant Experience</h3>
                        <textarea
                            value={exp}
                            onChange={handleExp}
                            rows="4"
                            placeholder="Enter your experience...."
                            className="w-full p-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    {/* Why Join */}
                    <div>
                        <h3 className="font-semibold mb-1">
                            Why do you want to join this club?
                        </h3>
                        <textarea
                            value={interest}
                            onChange={handleInterest}
                            rows="4"
                            placeholder="Enter your thoughts...."
                            className="w-full p-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <button
                        disabled={isDisabled}
                        onClick={handleSubmit}
                        className={`text-white px-6 py-2 rounded-lg self-auto md:self-start transition-all duration-300
                    ${isDisabled
                                ? "bg-gray-500 cursor-not-allowed"
                                : "bg-[#ae68f0] hover:bg-[#9d4ef0] cursor-pointer"
                            }`}
                    >
                        Submit
                    </button>
                </div>
            </div>

        </div>


    )
}
export default Recruitment