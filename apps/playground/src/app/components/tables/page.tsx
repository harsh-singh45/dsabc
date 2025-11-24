'use client'

import { Table, Card, Box, Button } from '@intelation/ui'
import Link from 'next/link'

export default function TablesPage() {
  const basicData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor' },
    { id: 4, name: 'Alice Williams', email: 'alice@example.com', role: 'User' },
  ]

  const basicColumns = [
    { id: 'name', label: 'Name', field: 'name' },
    { id: 'email', label: 'Email', field: 'email' },
    { id: 'role', label: 'Role', field: 'role' },
  ]

  const productsData = [
    { id: 1, product: 'Laptop', category: 'Electronics', price: '$999', stock: 45 },
    { id: 2, product: 'Headphones', category: 'Audio', price: '$149', stock: 120 },
    { id: 3, product: 'Keyboard', category: 'Accessories', price: '$79', stock: 200 },
    { id: 4, product: 'Mouse', category: 'Accessories', price: '$49', stock: 350 },
    { id: 5, product: 'Monitor', category: 'Electronics', price: '$399', stock: 67 },
  ]

  const productColumns = [
    { id: 'product', label: 'Product', field: 'product' },
    { id: 'category', label: 'Category', field: 'category' },
    { id: 'price', label: 'Price', field: 'price' },
    { id: 'stock', label: 'Stock', field: 'stock' },
  ]

  return (
    <div>
      <Box className="mb-8">
        <Link href="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Back to Playground
        </Link>
        <h1 className="text-4xl font-bold mb-3">Tables</h1>
        <p className="text-xl text-gray-600">
          Display and organize data in table format.
        </p>
      </Box>

      {/* Basic Table */}
      <Card title="Basic Table" description="Simple data table" className="mb-8">
        <Table
          columns={basicColumns}
          data={basicData}
        />
      </Card>

      {/* Table with More Columns */}
      <Card title="Products Table" description="Inventory management" className="mb-8">
        <Table
          columns={productColumns}
          data={productsData}
        />
      </Card>

      {/* Table with Custom Styling */}
      <Card title="Styled Table" description="Table with status badges" className="mb-8">
        <Table
          columns={[
            { id: 'status', label: 'Status', field: 'status' },
            { id: 'orderId', label: 'Order ID', field: 'orderId' },
            { id: 'customer', label: 'Customer', field: 'customer' },
            { id: 'amount', label: 'Amount', field: 'amount' },
          ]}
          data={[
            {
              id: 1,
              status: <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>,
              orderId: '#ORD-001',
              customer: 'John Doe',
              amount: '$1,234',
            },
            {
              id: 2,
              status: <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>,
              orderId: '#ORD-002',
              customer: 'Jane Smith',
              amount: '$856',
            },
            {
              id: 3,
              status: <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Cancelled</span>,
              orderId: '#ORD-003',
              customer: 'Bob Johnson',
              amount: '$567',
            },
          ]}
        />
      </Card>

      {/* Table with Actions */}
      <Card title="Table with Actions" description="Interactive table rows">
        <Table
          columns={[
            { id: 'name', label: 'User', field: 'name' },
            { id: 'email', label: 'Email', field: 'email' },
            { id: 'role', label: 'Role', field: 'role' },
          ]}
          data={basicData.map((user) => ({
            ...user,
            actions: (
              <div className="flex gap-2 justify-end">
                <Button size="sm" variant="ghost">Edit</Button>
                <Button size="sm" variant="ghost" colorScheme="danger">Delete</Button>
              </div>
            ),
          }))}
        />
      </Card>
    </div>
  )
}
