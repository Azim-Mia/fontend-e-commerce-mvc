import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { ShoppingCart, Users, DollarSign } from "lucide-react";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 7000 },
  { month: "May", sales: 6000 },
];

const recentOrders = [
  { id: "#1234", customer: "John Doe", total: "$120.00", status: "Shipped" },
  { id: "#1235", customer: "Jane Smith", total: "$90.00", status: "Pending" },
  { id: "#1236", customer: "Mike Johnson", total: "$150.00", status: "Delivered" },
];

export default function EcommerceDashboard() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Summary Cards */}
      <Card className="p-4 flex items-center space-x-4">
        <ShoppingCart className="text-blue-500" size={32} />
        <div>
          <p className="text-sm text-gray-500">Total Orders</p>
          <p className="text-xl font-semibold">1,245</p>
        </div>
      </Card>
      <Card className="p-4 flex items-center space-x-4">
        <Users className="text-green-500" size={32} />
        <div>
          <p className="text-sm text-gray-500">Customers</p>
          <p className="text-xl font-semibold">3,567</p>
        </div>
      </Card>
      <Card className="p-4 flex items-center space-x-4">
        <DollarSign className="text-yellow-500" size={32} />
        <div>
          <p className="text-sm text-gray-500">Revenue</p>
          <p className="text-xl font-semibold">$89,245</p>
        </div>
      </Card>

      {/* Sales Chart */}
      <Card className="col-span-1 md:col-span-2 p-4">
        <h2 className="text-lg font-semibold mb-4">Sales Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Recent Orders Table */}
      <Card className="p-4 col-span-1 md:col-span-3">
        <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
