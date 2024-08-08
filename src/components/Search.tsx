import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

type Props = {
  searchContry: string;
  setSearchContry: (value: string) => void;
};

function Search({ searchContry, setSearchContry }: Props) {
  return (
    <Stack m="10" spacing={2}>
      <InputGroup>
        <InputLeftElement>
          <FaSearch />
        </InputLeftElement>
        <Input
          width="400px"
          value={searchContry}
          onChange={(e) => setSearchContry(e.target.value)}
          placeholder="Search for a country…"
        />
        z
      </InputGroup>
    </Stack>
  );
}

export default Search;
