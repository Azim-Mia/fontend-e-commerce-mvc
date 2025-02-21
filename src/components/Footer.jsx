import Link from 'next/link';
import Image from 'next/image';
import bkashImg from '../assets/images/bkash.png';
import nogotImg from '../assets/images/nogot.png';
import paypalImg from '../assets/images/paypal.png';
import rocketImg from '../assets/images/rocket.png';
import master_cartImg from '../assets/images/master_cart.png';
import facebookImg from '../assets/images/facebook.png';
import instagramImg from '../assets/images/instagram.png';
import twitterImg from '../assets/images/twitter.webp';
import youtubeImg from '../assets/images/youtube.webp';
import map from '../assets/images/map.jpg';
const Footer =()=>{
  return(<>
  <div className="flex justify-center gap-24 items-center py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-[#000] text-[#FFF] text-sm mt-24 sm:text-2xl">
    {/*TOP*/}
  <div className="flex flex-wrap gap-4 justify-center items-center text-center">
    {/*LEFT*/}
    <div className="flex justify-center items-center w-full md:w-1/2 lg:w-1/4 flex-col gap-6">
    <Link href="/">
    <div className="text-2xl tracking-wide"> LIMA</div></Link>
    <p className="text-semibold text-1xl">Dewangonj Market, Fassion_House</p>
  <span className="text-semibold">mdazimmia53@gmail.com</span>
  <span className="text-semibold">+8801703357281</span>
  <div className="flex gap-12">
<Image src={facebookImg} width={28} height={28} alt="Facebook" />
<Image src={instagramImg} width={28} height={28} alt="Instagram" />
<Image src={twitterImg} width={28} height={28} alt="Twitter" />
<Image src={youtubeImg} width={28} height={28} alt="YouTube" />
  </div>
    </div>
    {/*CENTER*/}
    <div className="flex gap-4 flex-between sm:gap-8 xs:gap-6">
        <div className="flex flex-col gap-4 ">
          <h1 className="bg-[#FDFDFD] text-[#000] rounded-sm px-4 py-1">COMPANY</h1>
        <div className="flex flex-col gap-4 lg:gap-12">
        <Link href="/about">About Us</Link>
       <Link href="/careers">Careers</Link>
      <Link href="/affiliates">Affiliates</Link>
     <Link href="/blog">Blog</Link>  
       <Link href="/contract">Contract Us</Link>  
        </div>
        </div>
      <div className="flex flex-col gap-4 lg:gap-12">
        <h1 className="bg-[#FDFDFD] text-[#000] px-4 py-1 rounded-sm">SHOP</h1>
        <div className="flex flex-col gap-4 lg:gap-12 ">
        <Link href="/">About</Link>
       <Link href="/">About</Link>
      <Link href="/">About</Link>
     <Link href="/">About</Link>  
        </div>
        </div>
       <div className="flex flex-col gap-4">
        <h1 className="bg-[#FDFDFD] text-[#000] px-4 py-1 rounded-sm">HELP</h1>
        <div className="flex flex-col gap-4 lg:gap-12">
        <Link href="/">About</Link>
       <Link href="/">About</Link>
      <Link href="/">About</Link>
     <Link href="/">About</Link>  
        </div>
        </div>
        </div>
    {/*RIGHT*/}
    {/* ContractUs Information*/}
 <div className="w-full p-4  md:w-1/2 lg:w-1/4 flex flex-col gap-4 sm:gap-4">
      <div className="">
      <h1 className="font-medium">SUBSCRIBE</h1>
      <p className="mt-4">Be the firsr to get the latest news aboud trends, promotions, and much more! </p>
      </div>
      <div className="flex">
    <input type="text" name="" placeholder="email address" className="p-2 text-[#000] text-center w-3/4 text-2xl " />
      <button className="w-1/4 bg-lama text-white rounded-sm text-2xl">JOIN</button>
      </div>
      <div>
      <span className="text-semibold sm:text-2xl">Surce Payments</span>
        <div className="flex gap-6 justify-center items-center mt-4 sm:gap-12">
      <Image src={bkashImg} width={40} height={20} alt="Bkash" />
      <Image src={master_cartImg} width={40} height={20} alt="Mastetr Cart" />
      <Image src={nogotImg} width={40} height={20} alt="Nagot" />
      <Image src={rocketImg} width={40} height={20} alt="Rocket" />
      <Image src={paypalImg} width={40} height={20} alt="image" />
      </div>
      </div>
      </div>
  </div>
  </div>
  {/*BUTTOM */}
  <div className="flex flex-col bg-[#000] text-[#FFF] sm:flex-col sm:gap-12 sm:text-2xl md:flex-row items-center justify-between gap-4 mb-8 p-4">
  <div className="">2025 LIMA Shop</div>
    <div className="flex flex-col gap-2 text-center">
    <span className="text-semibold text-gray">Language</span>
     <span className="text-semibold">Bangla | United</span>
    </div>
        <div className="flex flex-col gap-2 text-center mt-1">
    <span className="text-semibold text-gray">Currence</span>
     <span className="text-semibold">BDT OR $USD</span>
    </div>
          {/* MAP USE*/}
          <div className="">
    <Image src={map} alt="map" size="100%" className="rounded-md" />
    </div>
  </div>
  </>)
}
export default Footer;