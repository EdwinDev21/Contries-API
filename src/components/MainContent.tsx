import { SimpleGrid } from "@chakra-ui/react";

import ContriesCard from "./ContriesCard";
import { Country } from "../types";

type Props = {
  countries: Country[];
};

function MainContent({ countries }: Props) {
  return (
    <SimpleGrid m="10" columns={[1, null, 4]} spacing="20px">
      {countries.map((country) => (
        <ContriesCard key={country.cca3} country={country} />
      ))}
    </SimpleGrid>
  );
}

export default MainContent;
