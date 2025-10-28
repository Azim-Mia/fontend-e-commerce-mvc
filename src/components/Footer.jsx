import Link from 'next/link';
import Image from 'next/image';
import bkashImg from '../assets/images/bkash.png';
import nogotImg from '../assets/images/nogot.png';
import paypalImg from '../assets/images/paypal.png';
import rocketImg from '../assets/images/rocket.png';
import masterCartImg from '../assets/images/master_cart.png';
import facebookImg from '../assets/images/facebook.png';
import instagramImg from '../assets/images/instagram.png';
import twitterImg from '../assets/images/twitter.webp';
import youtubeImg from '../assets/images/youtube.webp';
import map from '../assets/images/map.jpg';
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 px-6 py-12 xs:text-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12">
        {/* LEFT */}
                <div className="space-y-4 ">
          <Link href="/" className="text-3xl font-bold tracking-wide">LIMA</Link>
          <p>Dewangonj Market, Fashion House</p>
          <p>mdazimmia53@gmail.com</p>
          <p>+8801703357281</p>
          <div className="flex gap-4 mt-4 text-center justify-center justify-around">
            <Image src={facebookImg} width={28} height={28} alt="Facebook" />
            <Image src={instagramImg} width={28} height={28} alt="Instagram" />
            <Image src={twitterImg} width={28} height={28} alt="Twitter" />
            <Image src={youtubeImg} width={28} height={28} alt="YouTube" />
          </div>
        </div>

        {/* CENTER - COMPANY */}
        <div>
          <h2 className="font-semibold text-xl mb-4">Company</h2>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/about">About Us</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/affiliates">Affiliates</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact Us</Link>
          </div>
        </div>

        {/* CENTER - HELP */}
        <div>
          <h2 className="font-semibold text-xl mb-4">Help</h2>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/">Shipping Info</Link>
            <Link href="/">Returns</Link>
            <Link href="/">Order Tracking</Link>
            <Link href="/">FAQs</Link>
          </div>
        </div>

        {/* RIGHT - SUBSCRIBE */}
        <div>
          <h2 className="font-semibold text-xl mb-4">Subscribe</h2>
          <p className="text-sm mb-4">
            Be the first to get the latest news about trends, promotions, and much more!
          </p>
          <div className="flex sm:w-1/3 md:2/3 flex-1 mb-4">
            {/* <input
              type="email"
              placeholder="Email address"
              className="p-2 text-gray-800 border rounded-l"
            /> */}
            <button className="bg-black text-white px-4 py-2 rounded-r">Join</button>
          </div>
          <h3 className="text-lg font-semibold mt-6">Secure Payments</h3>
          <div className="flex gap-4 mt-4">
            <Image src={bkashImg} width={40} height={24} alt="Bkash" />
            <Image src={masterCartImg} width={40} height={24} alt="Master Card" />
            <Image src={nogotImg} width={40} height={24} alt="Nagad" />
            <Image src={rocketImg} width={40} height={24} alt="Rocket" />
            <Image src={paypalImg} width={40} height={24} alt="Paypal" />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div>© 2025 LIMA Shop</div>
        <div className="text-center mt-4 md:mt-0">
          <div className="font-semibold">Language</div>
          <div>Bangla | English</div>
        </div>
        <div className="text-center mt-4 md:mt-0">
          <div className="font-semibold">Currency</div>
          <div>BDT | USD</div>
        </div>
      </div>
        <div>
          <Image src={map} alt="Location Map" />
        </div>
    </footer>
  );
};

export default Footer;
