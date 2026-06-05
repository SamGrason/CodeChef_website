function Footer() {
    return (
        <div className="flex text-sm justify-around bg-[#0F172A] text-white  px-12 py-8 mt-5 md:text-sm">
            <div>
                <h1 className="text-gray-400 underline p-2">Events</h1>
                <p className="cursor-pointer hover:underline p-2">Upcoming Event</p>
            </div>
            <div>
                <h1 className="text-gray-400 underline p-2">Blogs</h1>
                <p className="cursor-pointer hover:underline p-2">Club Expo</p>
                <p className="cursor-pointer hover:underline p-2">Decode DSA 2.0</p>
                <p className="hover:cursor-pointer hover:underline p-2">Reality Check</p>
            </div>
            <div>
                <h1 className="text-gray-400 underline p-2">Our Club</h1>
                <p className="cursor-pointer hover:underline p-2">View Team</p>
                <p className="cursor-pointer hover:underline p-2">About Us</p>
            </div>
            <div>
                <h1 className="text-gray-400 underline p-2">Follow Us</h1>
                <p className="cursor-pointer hover:underline p-2">Upcoming Event</p>
            </div>
        </div>
    )
}
export default Footer