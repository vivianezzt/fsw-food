import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex gap-2">
      <Input placeholder="Buscar Restaurantes" className="border-none" />
      <Button size={"icon"} className="h-10 w-10">
        <SearchIcon size={20} />
      </Button>
    </div>
  );
};

export default Search;
