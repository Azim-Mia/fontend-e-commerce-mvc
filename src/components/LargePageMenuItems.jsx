import Link from 'next/link';
const LargePageMenuItems =()=>{
    return (<>
    <ul className="flex gap-4 xl:gap-8 flex-wrap">
        <Link href="/new/arrival">NEW ARRIVAL</Link>
         <Link href="/men">MEN</Link>
           <Link href="/women">WOMEN</Link>
            <Link href="/child">CHILD</Link>
    </ul>
    </>)
}
export default LargePageMenuItems