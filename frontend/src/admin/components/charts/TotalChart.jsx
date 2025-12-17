import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  Bar,
  ResponsiveContainer
} from "recharts";
import { TotalBarData } from "../../contants/DataAdmin";

const TotalChart = () => {
  return (
    <div className="w-full ">
      <h3 className="text-white font-semibold p-2 pb-4">
        Total Revenue
      </h3>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={TotalBarData}>
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Legend />
          <Bar dataKey="Total" fill="#2979ff" radius={[4,4,0,0]} />
          <Bar dataKey="Successfull" fill="#651fff" radius={[4,4,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TotalChart;
