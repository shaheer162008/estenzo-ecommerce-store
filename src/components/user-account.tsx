import { Card } from "./ui/card";
import { Button } from "./ui/button";

export default function UserAccount() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">User Account</h2>
      <div className="mb-2">Name: John Doe</div>
      <div className="mb-2">Email: john@example.com</div>
      <Button>Edit Profile</Button>
    </Card>
  );
}
