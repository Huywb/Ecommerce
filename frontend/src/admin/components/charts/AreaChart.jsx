import React from 'react'
import {
  AreaChart as RechartsAreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Label,
  Legend,
} from 'recharts'

const AreaChart = () => {
    const data = [
  { name:(new Date(new Date().setMonth(new Date().getMonth() - 5)).toLocaleString('en-US', { month: 'long' })).slice(0,3), Mobile: 400, Desktop: 240 },
  { name: (new Date(new Date().setMonth(new Date().getMonth() - 4)).toLocaleString('en-US', { month: 'long' })).slice(0,3), Mobile: 300, Desktop: 139 },
  { name: (new Date(new Date().setMonth(new Date().getMonth() - 3)).toLocaleString('en-US', { month: 'long' })).slice(0,3), Mobile: 500, Desktop: 380 },
  { name: (new Date(new Date().setMonth(new Date().getMonth() - 2)).toLocaleString('en-US', { month: 'long' })).slice(0,3), Mobile: 278, Desktop: 390 },
  { name: (new Date(new Date().setMonth(new Date().getMonth() - 1)).toLocaleString('en-US', { month: 'long' })).slice(0,3), Mobile: 189, Desktop: 480 },
  { name: (new Date(new Date().setMonth(new Date().getMonth() )).toLocaleString('en-US', { month: 'long' })).slice(0,3), Mobile: 189, Desktop: 480 },
]
  return (
    <div className="w-full">
      <h3 className="text-white font-semibold p-2 pb-4">
        Total Visitors
      </h3>

      <ResponsiveContainer width="100%" height={350}>
        <RechartsAreaChart data={data}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="Mobile"
            stroke="#8884d8"
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="Desktop"
            stroke="#82ca9d"
            fill="url(#colorPv)"
          />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AreaChart
