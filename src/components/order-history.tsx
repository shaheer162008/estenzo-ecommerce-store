import { Card } from "./ui/card";

export default function OrderHistory() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Order History</h2>
      <div>No past orders.</div>
    </Card>
  );
}
