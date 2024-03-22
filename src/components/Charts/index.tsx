import ReactApexChart from 'react-apexcharts';
import { useState, useEffect, useMemo } from 'react';
import { getData } from '../../service/data';

export default function Charts() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await getData();
        const totalValues = res.res.map((item: any) => item.total);
        setData(totalValues);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }

    fetchData();
  }, []);

  const series = useMemo(() => [{
    name: "coins on the market",
    type: 'line',
    data: data
  }], [data]);

  const options = {
    xaxis: {
      type: '1m' as 'datetime',
    },
    colors: ['#FF3395'],
    chart: {
      toolbar: {
        show: false
      }
    },
    legend: {
      labels: {
        colors: '#ffff' 
      }
    },
    tooltip: {
      theme: 'dark' 
    },    
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
}
