import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function CheckoutForm() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>
      <form className="space-y-4">
        <Input placeholder="Name" />
        <Input placeholder="Address" />
        <Input placeholder="Card Number" />
        <Button type="submit">Pay Now</Button>
      </form>
    </Card>
  );
}
