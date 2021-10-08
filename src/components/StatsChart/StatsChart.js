import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const capitalize = string => {
  const lower = string.toLowerCase();
  return string.charAt(0).toUpperCase() + lower.slice(1);
}

const StatsChart = ({labels, values, width, height, className}) => {

  const data = labels.map((label, i) => {
    return {
      label: capitalize(label),
      value: parseInt(values[i]),
  }})

  return (
      <ResponsiveContainer width={width} height={height} className={className}>
        <RadarChart cx="50%" cy="50%" outerRadius="85%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="label" fontWeight='bold'/>
          <PolarRadiusAxis/>
          <Radar dataKey="value" stroke="#8884e8" fill="#8884d8" fillOpacity={0.6} dot={true} />
        </RadarChart>
      </ResponsiveContainer>
  )
};

export { StatsChart }