import Link from 'next/link';
import Menu from '@/components/Menu';
import SearchBar from '@/components/SearchBar';
import NavIcon from '@/components/NavIcon';
import MenuItems from '@/components/MenuItems';
const Navbar = ()=>{
  return(<>
  <div className="top-0 sticky z-40 h-15 px-4 bg-gray-light sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
  <div className="flex pt-4 pb-4 justify-between items-center">
  <div className="flex items-center gap-4">
    <div className="xs:hidden sm:hidden md:hidden lg:inline-flex xl:inline-flex 2xl:inline-flex"><MenuItems /></div>
  <div className="lg:hidden xl:hidden 2xl:hidden"><Menu/></div>
  <div className="text-3xl sm:text-2xl xs:text-1.5xl"><Link href ='/'>Logo</Link></div>
   </div>
    <div className="xs:hidden sm:inline-flex"><SearchBar /></div>
<NavIcon />
  </div>
  </div>
 <div className="ml-3 xs:inline-flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
 <SearchBar />
 </div>
  </>)
}
export default Navbar;