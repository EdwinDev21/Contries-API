import { Box, Grid, GridItem, Image, Text, Button } from "@chakra-ui/react";
import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { Country } from "../types";

function CountryInf() {
  const location = useLocation();
  const country: Country | undefined = location.state?.country; // Obtener el país desde el estado y tiparlo
  const navigate = useNavigate();

  return (
    <>
      <Grid
        templateAreas={`"header header"`}
        gridTemplateRows={"50px 1fr"}
        gridTemplateColumns={"1fr"}
      >
        <GridItem
          boxShadow="lg"
          pl="50"
          pt="2"
          bg="white"
          fontSize={20}
          fontWeight="bold"
          area={"header"}
          position="relative" // Necesario para posicionar el botón
        >
          Where in the world?
        </GridItem>

        <GridItem pos="sticky" height="calc(100vh - 60px)" w="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
            margin="10px"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Button
              position="absolute"
              top="50px"
              left="100px"
              onClick={() => navigate(-1)}
              leftIcon={<FaArrowLeft />}
            >
              Back
            </Button>
            {country ? (
              <Box
                display="flex"
                alignItems="center"
                flexDirection={{ base: "column", md: "row" }}
              >
                <Image
                  h={{ base: "200px", md: "300px" }}
                  w={{ base: "300px", md: "400px" }}
                  src={country.flags.png}
                  borderRadius="lg"
                  mb={{ base: "10px", md: "0" }}
                />

                <Box
                  ml={{ base: "0", md: "20px" }}
                  textAlign={{ base: "center", md: "left" }}
                >
                  <Text fontSize="lg" fontWeight="bold">
                    {country.name.common}
                  </Text>
                  <Text>Population: {country.population}</Text>
                  <Text>Region: {country.region}</Text>
                  <Text>Capital: {country.capital}</Text>
                  {country.borders && country.borders.length > 0 ? (
                    <Text>Borders: {country.borders.join(" ")}</Text>
                  ) : null}
                </Box>
              </Box>
            ) : (
              <Text>No country information available.</Text>
            )}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default CountryInf;
