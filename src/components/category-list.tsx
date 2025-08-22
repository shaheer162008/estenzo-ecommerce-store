import { Card } from "./ui/card";

const categories = ["Electronics", "Fashion", "Home", "Books", "Toys"];

export default function CategoryList() {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-2">Categories</h3>
      <ul className="space-y-1">
        {categories.map((cat) => (
          <li key={cat} className="hover:underline cursor-pointer">{cat}</li>
        ))}
      </ul>
    </Card>
  );
}
