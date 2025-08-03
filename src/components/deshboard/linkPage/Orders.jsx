import Link from 'next/link';
import { ChevronDown } from 'lucide-react'; // lucide-react থেকে chevron আইকন আনুন
const Orders = ()=>{
  return (<>
    <details className="group border border-gray-200 rounded-md p-3 bg-gray-50 hover:bg-gray-100 transition">
      <summary className="cursor-pointer text-gray-800 font-medium group-open:text-blue-600 flex justify-between items-center">
        <span>Orders</span>
        <ChevronDown className="w-4 h-4 transition-transform duration-300 group-open:rotate-180 text-gray-500" />
      </summary>
            <ul className="mt-2 ml-4 list-disc text-gray-600 text-sm space-y-1 list-none">
              <li className="li-style">Orders List</li>
            </ul>
          </details>

  </>)
}
export default Orders