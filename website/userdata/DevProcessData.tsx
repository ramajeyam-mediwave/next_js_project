// src/data.ts
export interface DevProcessData {
  id: number;
  header: string;
  body: string;
  headerColor: string;
}

export const DevProcessDataArray: DevProcessData[] = [
  {
    id: 1,
    header: "Research & Discovery",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt.",
    headerColor: "#DA3D16",
  },
  {
    id: 2,
    header: "Design & prototyping",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt.",
    headerColor: "#4A2870",
  },
  {
    id: 3,
    header: "Software development",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt.",
    headerColor: "#125E9C",
  },
  {
    id: 4,
    header: "Software testing",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt.",
    headerColor: "#125E9C",
  },
  {
    id: 5,
    header: "Software deployment",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt.",
    headerColor: "#125E9C",
  },
  {
    id: 6,
    header: "Maintenance & updates",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt.",
    headerColor: "#E50064",
  },
];
