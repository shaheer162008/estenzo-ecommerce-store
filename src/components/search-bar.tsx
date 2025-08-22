import { Input } from "./ui/input";

export default function SearchBar() {
  return (
    <div className="w-full max-w-md mx-auto my-4">
      <Input placeholder="Search products..." />
    </div>
  );
}
