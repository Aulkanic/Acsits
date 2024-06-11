import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'
import LPBG from '../assets/acsits-1.png'
import { RouterUrl } from '../routes';

export default function Public() {
    const navigate = useNavigate();
    const location = useLocation()

    const handleNavigate = (path:string) => {
      navigate(path);
    };
    const getLinkClass = (path: string) => {
      return location.pathname === path ? 'text-[#060E61]' : 'text-black';
    }
  return (
  <div className='h-screen w-full bg-center relative bg-no-repeat bg-cover overflow-hidden' style={{ backgroundImage: `url(${LPBG})` }}>
  <header className='w-full px-24 z-50 fixed top-0 h-24 flex flex-nowrap justify-between items-center'>
    <div className='flex h-full gap-12'>
        <img className='w-40 h-full object-fill' src={Logo} alt="" />
        <ul className='flex items-center gap-8 text-[20px] leading-[25px] font-[500]'>
            <li className={`cursor-pointer font-[500] ${getLinkClass(RouterUrl.ACHIEVEMENTS)}`} onClick={() => handleNavigate(RouterUrl.ACHIEVEMENTS)}>ACHIEVEMENTS</li>
            <li className={`cursor-pointer font-[500] ${getLinkClass(RouterUrl.ABOUTUS)}`} onClick={() => handleNavigate(RouterUrl.ABOUTUS)}>ABOUT US</li>
            <li className={`cursor-pointer font-[500] ${getLinkClass(RouterUrl.LMERCHANDISE)}`} onClick={() => handleNavigate(RouterUrl.LMERCHANDISE)}>MERCHANDISE</li>
            <li className={`cursor-pointer font-[500] ${getLinkClass(RouterUrl.EVENTPLANS)}`} onClick={() => handleNavigate(RouterUrl.EVENTPLANS)}>EVENTS/PLANS</li>
        </ul>
    </div>
    <ul className='flex items-center gap-8 h-full text-[20px] leading-[25px] font-[500]'>
        <li className='cursor-pointer' onClick={() => handleNavigate(RouterUrl.LOGIN)}>LOGIN</li>
        <li className='cursor-pointer' onClick={() => handleNavigate(RouterUrl.SIGNUPPAGE)}>SIGN UP</li>
    </ul>
  </header>
  <main className='pt-24 pl-32 h-full'>
  <Outlet />
  </main>
  </div>
);
}