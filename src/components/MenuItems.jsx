import Link from 'next/link';
const MenuItems = ()=>{
  return(<> 
    <ul className="p-2 text-center text-white">
   <Link href="/"><li className="p-1 hover:text-black border-b mt-1">Home</li></Link>
  <Link href="/list"><li>Categotis</li></Link>
  </ul>
  </>)
}
 export default MenuItems;