import { Select } from "@chakra-ui/react";

type Props = {
  setSelectedRegion: (value: string) => void;
};

function SelectorButton({ setSelectedRegion }: Props) {
  return (
    <Select
      width="200px"
      marginRight="50px"
      placeholder="Filter by Region"
      onChange={(e) => setSelectedRegion(e.target.value)} // Aquí manejas el cambio de selección
    >
      <option value="Americas">Americas</option>
      <option value="Europe">Europe</option>
      <option value="Asia">Asia</option>
      <option value="Oceania">Oceania</option>
      <option value="Africa">Africa</option>
    </Select>
  );
}

export default SelectorButton;
