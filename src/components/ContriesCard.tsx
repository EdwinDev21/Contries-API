import { Card, CardBody, Heading, Image, List, Stack } from "@chakra-ui/react";
import { Country } from "../types";

type Props = {
  country: Country;
};

function ContriesCard({ country }: Props) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image h="200px" w="300px" src={country.flags.png} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{country.name.common}</Heading>
          <List>
            <ul>Population:{country.population}</ul>
            <ul>Region:{country.region}</ul>
            <ul>Capital:{country.capital}</ul>
          </List>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default ContriesCard;
