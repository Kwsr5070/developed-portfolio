import { FaWhatsapp, FaEnvelope, FaPhone } from "react-icons/fa";
import { HiArrowNarrowRight } from "react-icons/hi";

const Contact = () => {
    return (
        <div>
            <h2>

            </h2>
            <div className=" min-h-screen text-gray-300 flex flex-col justify-center items-center p-4">
           
            <div className="flex flex-col gap-8 px-4 md:px-48 py-8 md:py-32 max-w-screen-lg w-full">
                {/* Email */}
                <a href="mailto:mdkwsr5070@gmail.com" className="flex items-center text-gray-300 hover:text-orange-400">
                    <FaEnvelope size={30} />
                    <span className="ml-2">mdkwsr5070@gmail.com</span>
                </a>
                {/* WhatsApp */}
                <a href="https://wa.me/91857399180" className="flex items-center text-gray-300 hover:text-orange-400">
                    <FaWhatsapp size={30} />
                    <span className="ml-2">01857399180</span>
                </a>
                {/* Phone Number 1 */}
                <a href="tel:+91857399180" className="flex items-center text-gray-300 hover:text-orange-400">
                    <FaPhone size={30} />
                    <span className="ml-2">01857399180</span>
                </a>
                {/* Phone Number 2 */}
                <a href="tel:+91304939178" className="flex items-center text-gray-300 hover:text-orange-400">
                    <FaPhone size={30} />
                    <span className="ml-2">01304939178</span>
                </a>
            </div>
            <form method="post" action="https://getform.io/f/paoxrjrb" className="flex flex-col max-w-screen-lg w-full">
                <div>
                    <p className='text-4xl py-4 font-bold border-b-4 border-orange-300 text-center'>Contact</p>
                    <p className="text-gray-300 py-4 text-2xl text-center">Submit the form below or shoot me an email</p>
                </div>
                <input className="p-2 bg-slate-600" type="text" placeholder="Name" name='name' />
                <input className="my-4 p-2 bg-slate-600" type="email" placeholder="Email" name='email' />
                <textarea className="bg-slate-600" name="message" placeholder="Message" cols={30} rows={10}></textarea>
                <button type="submit" className="border-2 hover:bg-orange-400 hover:border-purple-400 px-4 py-3 my-8 mx-auto flex items-center">Let's Submit</button>
            </form>

            
        </div>
        
        
        </div>
         


        
        
        
        
    );
};

export default Contact;
