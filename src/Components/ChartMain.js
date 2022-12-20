import React, { Fragment, useMemo, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import Card from 'react-bootstrap/Card';

const dta = [
  {
    district: 'Agdao District',
    population: 2353442,
    lat: 7.09997,
    lng: 125.63646
  },
  {
    district: 'Baguio District',
    population: 2353442,
    lat: 7.20673,
    lng: 125.38005
  },
  {
    district: 'Buhangin District',
    population: 2353442,
    lat: 7.21593,
    lng: 125.59497
  },
  {
    district: 'Bunawan District',
    population: 2353442,
    lat: 7.1712,
    lng: 125.64523
  },
  {
    district: 'Calinan District',
    population: 2353442,
    lat: 7.23398,
    lng: 125.46279
  },
  {
    district: 'Marilog District',
    population: 2353442,
    lat: 7.329,
    lng: 125.25817
  },
  {
    district: 'Paquibato District',
    population: 2353442,
    lat: 7.49105,
    lng: 125.48785
  },
  {
    district: 'Poblacion District',
    population: 2353442,
    lat: 7.09284,
    lng: 125.60677
  },
  {
    district: 'Talomo District',
    population: 23232323,
    lat: 7.08569,
    lng: 125.54789
  },
  {
    district: 'Toril District',
    population: 2353442,
    lat: 7.0632,
    lng: 125.44678
  },
  {
    district: 'Tugbok District',
    population: 2353442,
    lat: 7.12759,
    lng: 125.49828
  },
]






const ChartMain = () => {

  const [dataa, setDataa] = useState([]);



  const loadData = async () => {
    try {
      const respo = await fetch("https://centralserver-production.up.railway.app/dept-data/diseasesurv/all-chart-data/")
      const jData = await respo.json();
      setDataa(jData)

    } catch (err) {
      console.error(err.message);
    }
  }
  useState(()=>{
    loadData()
  },[])








  const data = {
    labels: dataa.map((value, index) => (value.district_name)),
    datasets: [{
      axis: 'y',
      data: dataa.map((value, index) => (value.count)),
      backgroundColor: 'rgb(222, 122, 122,0.5)',
      borderSkipped: false,
      label: 'Number of Cases',
      barPercentage: 0.5,
      barThickness: 15,
      fill: false,
      axis: 'y',
    }

    ]
  };
  const options = {
    maintainAspectRatio: true,
    indexAxis: 'y',
    plugins: {

    },
    scales: {
      x: {
        min: 0,
        max: dataa.map((value, index) => (Math.max(value.count)+100)),
        ticks: {
          stepSize: 1000,
          callback: (value) => value + ""
        },
        grid: {
          borderDash: [10]
        }

      },
      y: {
        grid: {
          display: false
        }
      }

    }

  }
 
  return (
    <div  >
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>All Cases</Card.Title>
     
       
        </Card.Body>
      </Card>
      <Bar data={data} options={options} ></Bar>

    </div>
  )
}

export default ChartMain