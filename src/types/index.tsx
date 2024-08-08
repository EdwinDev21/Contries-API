export type Country = {
  capital?: string;
  region: string;
  population: string;
  cca3: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  name: {
    common: string;
  };
};
