import Logo from "../assets/logo-text.png"

const Navbar = () => {
    return (
        
    <div className="bg-white sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto flex justify-between items-center px-5 py-3" >

            {/* logo */}
            <div>
                <img src={Logo} alt="" />
            </div>

            {/* Menus */}
            <div>
                <ul className="flex justify-center items-center gap-4">
                    <li className="hover:text-[#d01e7a]"><a href="">Home</a></li>
                    <li className="hover:text-[#d01e7a]"><a href="">Technologies</a></li>
                    <li className="hover:text-[#d01e7a]"><a href="">Projects</a></li>
                    <li className="hover:text-[#d01e7a]"><a href="">About</a></li>
                    <li className="hover:text-[#d01e7a]"><a href="">Contact</a></li>
                </ul>
            </div>

            {/* Nav Button */}
            <div className="flex justify-center items-center gap-4">
                <button className="border border-[#d01e7a] rounded-full px-4 py-2.5 text-black hover:bg-[#d01e7a]">Sign In</button>
                <button className="border border-[#d01e7a] rounded-full px-4 py-2.5 text-black hover:bg-[#d01e7a]">Sign Up</button>
            </div>
        </nav>
    </div>
        
    );
};

export default Navbar;