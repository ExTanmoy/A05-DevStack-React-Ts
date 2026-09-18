import Logo from "../assets/logo-text.png"

const Footer = () => {
    return (
        <div className="border-t border-gray-300">

            {/* Footer Upper */}
            <footer className="footer container mx-auto sm:footer-horizontal text-base-content border-b border-gray-300 py-10 ">
                <aside className="space-y-3">
                    <img src={Logo} alt="" />
                    <p>
                    Curated tools, technologies, and resources for developers building
                    <br />
                    modern software.
                    </p>

                <div className="grid grid-flow-col gap-4 text-slate-500">
                    <a className="font-bold link link-hover" > GitHub </a>
                    <a className="font-bold link link-hover" > Twitter </a>
                    <a className="font-bold link link-hover"> LinkedIn </a>
                </div>                    
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

            {/* Footer Lower */}
            <footer className="footer container mx-auto sm:footer-horizontal  text-slate-500 py-4 ">
                <aside className="grid-flow-col items-center ">
                    <p>©{new Date().getFullYear()} - Dev Stack. All rights reserved.</p>
                </aside>

                <nav className="grid-flow-col gap-4 sm:place-self-center sm:justify-self-end">
                    <a className="link link-hover">Privacy</a>
                    <a className="link link-hover">Terms</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;