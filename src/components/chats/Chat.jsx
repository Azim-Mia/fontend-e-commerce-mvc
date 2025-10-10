"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// ✅ Disable SSR for ApexCharts
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Chat() {
  const [mounted, setMounted] = useState(false);

  // ✅ Mount check: ensures only client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  const [state, setState] = useState({
    optionsMixedChart: {
      chart: { id: "basic-bar", toolbar: { show: false } },
      plotOptions: { bar: { columnWidth: "50%" } },
      stroke: { width: [4, 0, 0] },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      markers: {
        size: 6,
        strokeWidth: 3,
        fillOpacity: 0,
        strokeOpacity: 0,
        hover: { size: 8 },
      },
      yaxis: { tickAmount: 5, min: 0, max: 100 },
    },
    seriesMixedChart: [
      { name: "series-1", type: "line", data: [30, 40, 25, 50, 49, 21, 70, 51] },
      { name: "series-2", type: "column", data: [23, 12, 54, 61, 32, 56, 81, 19] },
      { name: "series-3", type: "column", data: [62, 12, 45, 55, 76, 41, 23, 43] },
    ],
    optionsRadial: {
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0,
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },
          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -20,
              show: true,
              color: "#888",
              fontSize: "13px",
            },
            value: {
              formatter: (val) => val,
              color: "#111",
              fontSize: "30px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: { lineCap: "round" },
      labels: ["Percent"],
    },
    seriesRadial: [76],
    optionsBar: {
      chart: { stacked: true, stackType: "100%", toolbar: { show: false } },
      plotOptions: { bar: { horizontal: true } },
      dataLabels: { dropShadow: { enabled: true } },
      stroke: { width: 0 },
      xaxis: {
        categories: ["Fav Color"],
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      fill: {
        opacity: 1,
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.35,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [90, 0, 100],
        },
      },
      legend: { position: "bottom", horizontalAlign: "right" },
    },
    seriesBar: [
      { name: "blue", data: [32] },
      { name: "green", data: [41] },
      { name: "yellow", data: [12] },
      { name: "red", data: [65] },
    ],
  });

  // ✅ Update charts safely inside useEffect (Math.random inside client-only)
  const updateCharts = () => {
    const max = 90;
    const min = 30;

    const newMixedSeries = state.seriesMixedChart.map((s) => ({
      ...s,
      data: s.data.map(() =>
        Math.floor(Math.random() * (max - min + 1)) + min
      ),
    }));

    const newBarSeries = state.seriesBar.map((s) => ({
      ...s,
      data: s.data.map(() =>
        Math.floor(Math.random() * (180 - min + 1)) + min
      ),
    }));

    const newRadial = [Math.floor(Math.random() * (90 - 50 + 1)) + 50];

    setState({
      ...state,
      seriesMixedChart: newMixedSeries,
      seriesBar: newBarSeries,
      seriesRadial: newRadial,
    });
  };

  // ✅ Auto-randomize charts once after mount (optional)
  useEffect(() => {
    if (mounted) updateCharts();
  }, [mounted]);

  if (!mounted)
    return <p className="p-4 text-gray-500">Loading charts...</p>;

  return (
    <div className="app p-4">
      <div className="row flex flex-wrap gap-6">
        <div className="mixed-chart bg-white rounded-2xl shadow p-4">
          <Chart
            options={state.optionsMixedChart}
            series={state.seriesMixedChart}
            type="line"
            width="500"
          />
        </div>

        <div className="radial-chart bg-white rounded-2xl shadow p-4">
          <Chart
            options={state.optionsRadial}
            series={state.seriesRadial}
            type="radialBar"
            width="280"
          />
        </div>
      </div>

      <div className="row flex flex-wrap mt-6 gap-6">
        <div className="percentage-chart bg-white rounded-2xl shadow p-4">
          <Chart
            options={state.optionsBar}
            series={state.seriesBar}
            type="bar"
            height={240}
            width={500}
          />
        </div>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          onClick={updateCharts}
        >
          Update!
        </button>
      </div>
    </div>
  );
}
