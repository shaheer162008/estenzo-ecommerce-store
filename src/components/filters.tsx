import { Card } from "./ui/card";
import { Select } from "./ui/select";

export default function Filters() {
  return (
    <Card className="p-4 mb-4">
      <h3 className="font-semibold mb-2">Filters</h3>
      <Select>
        <option value="">Sort by</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </Select>
    </Card>
  );
}
