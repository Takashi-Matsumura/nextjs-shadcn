import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  // {
  //   invoice: "INV002",
  //   paymentStatus: "Pending",
  //   totalAmount: "$150.00",
  //   paymentMethod: "PayPal",
  // },
  // {
  //   invoice: "INV003",
  //   paymentStatus: "Unpaid",
  //   totalAmount: "$350.00",
  //   paymentMethod: "Bank Transfer",
  // },
  // {
  //   invoice: "INV004",
  //   paymentStatus: "Paid",
  //   totalAmount: "$450.00",
  //   paymentMethod: "Credit Card",
  // },
  // {
  //   invoice: "INV005",
  //   paymentStatus: "Paid",
  //   totalAmount: "$550.00",
  //   paymentMethod: "PayPal",
  // },
  // {
  //   invoice: "INV006",
  //   paymentStatus: "Pending",
  //   totalAmount: "$200.00",
  //   paymentMethod: "Bank Transfer",
  // },
  // {
  //   invoice: "INV007",
  //   paymentStatus: "Unpaid",
  //   totalAmount: "$300.00",
  //   paymentMethod: "Credit Card",
  // },
];

export function TableDemo() {
  return (
    <Table>
      <TableCaption>A list of our recent schedules.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>月</TableHead>
          <TableHead>火</TableHead>
          <TableHead>水</TableHead>
          <TableHead>木</TableHead>
          <TableHead>金</TableHead>
          <TableHead>土</TableHead>
          <TableHead>日</TableHead>
          {/* <TableHead className="w-[100px]">Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {/* 月曜日 */}
          <TableCell>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>沖縄太郎</CardTitle>
                </CardHeader>
                <CardContent>10:00-11:00</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>琉球花子</CardTitle>
                </CardHeader>
                <CardContent>13:00-15:00</CardContent>
              </Card>
            </div>
          </TableCell>
          {/* 火曜日 */}
          <TableCell>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>利用者A</CardTitle>
                  <CardDescription>ヘルパー1 (10:00-11:00)</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>利用者B</CardTitle>
                  <CardDescription>ヘルパー2 (13:00-15:00)</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>利用者C</CardTitle>
                  <CardDescription>ヘルパー3 (15:00-16:00)</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </TableCell>
          {/* 水曜日 */}
          <TableCell>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>利用者A</CardTitle>
                  <CardDescription>
                    ヘルパー1
                    <br />
                    10:00-11:00
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>利用者B</CardTitle>
                  <CardDescription>
                    ヘルパー2
                    <br />
                    13:00-15:00
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </TableCell>
          {/* 木曜日 */}
          <TableCell>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>利用者A</CardTitle>
                  <CardDescription>10:00-11:00</CardDescription>
                </CardHeader>
                <CardContent>
                  ヘルパー1
                  <br />
                  ヘルパー2
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>利用者B</CardTitle>
                  <CardDescription>13:00-15:00</CardDescription>
                </CardHeader>
                <CardContent>
                  ヘルパー3
                  <br />
                  ヘルパー4
                  <br />
                  ヘルパー5
                </CardContent>
              </Card>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
      {/* <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className="text-right">{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody> */}
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  );
}
