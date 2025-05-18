import MonthlySalseAnalysis from '@/components/deshboard/MonthlySalseAnalysis';
import Cart from '@/components/deshboard/Cart';

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-100 p-4">
      {/* Sidebar */}
      <aside className="w-64 bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <nav className="space-y-2">
          <strong className="block text-xl font-semibold text-blue-600 mb-4">
            Dashboard Menu
          </strong>

          <details className="group border border-gray-200 rounded-md p-3 bg-gray-50 hover:bg-gray-100 transition">
            <summary className="cursor-pointer text-gray-800 font-medium group-open:text-blue-600">
              Products
            </summary>
            <ul className="mt-2 ml-4 list-disc text-gray-600 text-sm space-y-1">
              <li className="hover:text-blue-600 cursor-pointer">Product List</li>
            </ul>
          </details>

          <details className="group border border-gray-200 rounded-md p-3 bg-gray-50 hover:bg-gray-100 transition">
            <summary className="cursor-pointer text-gray-800 font-medium group-open:text-blue-600">
              Orders
            </summary>
            <ul className="mt-2 ml-4 list-disc text-gray-600 text-sm space-y-1">
              <li className="hover:text-blue-600 cursor-pointer">Product List</li>
            </ul>
          </details>

          <details className="group border border-gray-200 rounded-md p-3 bg-gray-50 hover:bg-gray-100 transition">
            <summary className="cursor-pointer text-gray-800 font-medium group-open:text-blue-600">
              Categories
            </summary>
            <ul className="mt-2 ml-4 list-disc text-gray-600 text-sm space-y-1">
              <li className="hover:text-blue-600 cursor-pointer">Product List</li>
            </ul>
          </details>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Cart title="Active Users" value="12" />
          <Cart title="Total Products" value="1,254" />
          <Cart title="Revenue" value="$56,746" />
          <Cart title="Conversion Rate" value="123.2%" />
        </div>

        {/* Sales Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <MonthlySalseAnalysis />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
