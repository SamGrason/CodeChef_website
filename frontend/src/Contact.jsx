function Contact() {
    return (
        <div>
            <div className="flex justify-center items-center min-h-screen p-6">
                <div className="bg-white/90 border border-[#ae68f0] rounded-2xl shadow-lg w-full max-w-3xl p-8 flex flex-col gap-6">

                    <h1 className="text-3xl font-bold text-center ">
                        Contact Us
                    </h1>

                    {/* Name & Email Id */}
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <h3 className="font-semibold mb-1">Name:</h3>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <h3 className="font-semibold mb-1">Email Id:</h3>
                            <input
                                type="text"
                                placeholder="Enter your Email Id"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>

                    
                    <div>
                            <h3 className="font-semibold mb-1">Subject:</h3>
                            <select
                                className="w-full p-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            >
                                <option value="">Select your Topics</option>
                                <option value="Events">Events</option>
                                <option value="Recruitment">Recruitment</option>
                                <option value="Recruitment">Sponsors</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>

                   
                    <div>
                        <h3 className="font-semibold mb-1">
                            Post your queries here:
                        </h3>
                        <textarea
                            rows="4"
                            placeholder="Enter your thoughts...."
                            className="w-full p-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500"
                        />
                    </div>

                    <button className="bg-[#ae68f0] text-white px-6 py-2 self-auto rounded-lg hover:bg-[#9d4ef0] transition-all duration-300 md:self-start">
                        Submit
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Contact