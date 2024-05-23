import { FaFacebook, FaWhatsappSquare } from 'react-icons/fa';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';


const Navbar = () => {
  return (
    <nav className='mb-20 flex  items-center justify-between py-6'>
      <div className='flex items-center'>
        <p className='text-4xl sm:text-6xl'>K <span className='text-gray-900'>S.</span></p>
      </div>
      <div className='mt-4 sm:mt-0 flex items-center justify-center sm:justify-end gap-6 text-3xl'>
        
        <a href="https://www.linkedin.com/in/md-kawser-ahmed-97428a262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "> <FaLinkedin/></a>
        <a href="https://github.com/Kwsr5070"> <FaGithub/></a>
        <a href="https://www.facebook.com/profile.php?id=100085062704582&mibextid=ZbWKwL"><FaFacebook/></a>
        <a href="https://wa.me/01857399180"> <FaWhatsappSquare/></a>
      </div>
    </nav>
  )
}

export default Navbar;
