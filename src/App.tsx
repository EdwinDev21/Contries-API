import { Box, Grid, GridItem } from "@chakra-ui/react";
import "./App.css";
import Search from "./components/Search";
import MainContent from "./components/MainContent";
import { useEffect, useState } from "react";
import { Country } from "./types";
import SelectorButton from "./components/SelectorButton";

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [data, setData] = useState<Country[]>([]);
  const [searchContry, setSearContry] = useState<string>("");
  const [selectedRegion, setSelectedRegion] = useState<string>("");

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(url);
        const data: Country[] = await response.json();
        setData(data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchCountryData();
  }, []);

  const filterContries = data.filter((country) => {
    const matchesSearchTerm = country.name.common
      .toLowerCase()
      .includes(searchContry.toLowerCase());
    const matchesRegion = selectedRegion
      ? country.region === selectedRegion
      : true;
    return matchesSearchTerm && matchesRegion;
  });

  return (
    <>
      <Grid
        templateAreas={`"header header"
                  `}
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
        >
          Where in the world?
        </GridItem>

        <GridItem pos="sticky" height="calc(100vh - 60px)" w="100%">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            w="100%"
            margin="10px"
          >
            <Search
              searchContry={searchContry}
              setSearchContry={setSearContry}
            />
            <SelectorButton setSelectedRegion={setSelectedRegion} />
          </Box>

          <MainContent countries={filterContries} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
