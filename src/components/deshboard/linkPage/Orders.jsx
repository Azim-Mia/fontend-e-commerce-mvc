import Link from 'next/link';
const Orders = ()=>{
  return (<>
         <details className="group border border-gray-200 rounded-md p-3 bg-gray-50 hover:bg-gray-100 transition">
            <summary className="cursor-pointer text-gray-800 font-medium group-open:text-blue-600">
              Orders
            </summary>
            <ul className="mt-2 ml-4 list-disc text-gray-600 text-sm space-y-1">
              <li className="hover:text-blue-600 cursor-pointer">Orders List</li>
            </ul>
          </details>

  </>)
}
export default Orders