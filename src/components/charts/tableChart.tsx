import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table";

const invoices = [
  {
    item: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    total: 6518.18,
  },
  {
    item: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    total: 4754.5,
  },
  {
    item: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    total: 2559.36,
  },
  {
    item: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    total: 3680.0,
  },
  {
    item: "Marco Shoes",
    price: "$79.49",
    quantity: 64,
    total: 1965.81,
  },
];

export function TableChart() {
  return (
    <div className="bg-primary-light p-6 rounded-2xl dark:bg-white/15 shadow-none h-full">
      <Table className="">
        <TableHeader className="">
          <TableRow className="text-dark dark:text-white/40 text-xs dark:border-white/20 border-b-[1px]">
            <TableHead className="">Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-dark dark:text-white text-xs">
          {invoices.map((invoice) => (
            <TableRow key={invoice.item} className="border-0">
              <TableCell className="font-medium">{invoice.item}</TableCell>
              <TableCell>{invoice.price}</TableCell>
              <TableCell>{invoice.quantity}</TableCell>
              <TableCell className="">{invoice.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
