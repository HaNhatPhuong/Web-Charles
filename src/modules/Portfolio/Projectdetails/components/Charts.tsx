/* Chart.js */
import { useState, useEffect, useCallback } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const Charts = () => {
  const generateDataPoints = useCallback((noOfDps: number) => {
    let xVal = 1,
      yVal = 50;
    const dps = [];
    for (let i = 0; i < noOfDps; i++) {
      yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
      dps.push({ x: xVal, y: yVal });
      xVal++;
    }
    return dps;
  }, []);

  const [dataPoints, setDataPoints] = useState(generateDataPoints(500));

  useEffect(() => {
    setDataPoints(generateDataPoints(500));
  }, [generateDataPoints]);

  const data = {
    labels: dataPoints.map((point) => point.x),
    datasets: [
      {
        label: "Try Zooming and Panning",
        data: dataPoints.map((point) => point.y),
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default Charts;
