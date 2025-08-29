import { ResponsiveBar } from "@nivo/bar";

const data = [
  { patient: "OPD", visits: 40 },
  { patient: "IPD", visits: 20 },
  { patient: "ER", visits: 15 },
];

export default function Dashboard() {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveBar
        data={data}
        keys={["visits"]}
        indexBy="patient"
        margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
        colors={{ scheme: "nivo" }}
      />
    </div>
  );
}