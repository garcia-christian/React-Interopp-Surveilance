import React, { Fragment, useMemo, useState } from 'react'

import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import Card from 'react-bootstrap/Card';
const dta = [

  {
    district: 'Diphtheria',
    population: 2353442,
    lat: 7.09997,
    lng: 125.63646
  },
  {
    district: 'Hepatitis A',
    population: 2353442,
    lat: 7.20673,
    lng: 125.38005
  },
  {
    district: 'Hepatitis B, Acute',
    population: 2353442,
    lat: 7.21593,
    lng: 125.59497
  },
  {
    district: 'Hepatitis C, Acute',
    population: 2353442,
    lat: 7.1712,
    lng: 125.64523
  },
  {
    district: 'Invasive Meningococcal Disease',
    population: 2353442,
    lat: 7.23398,
    lng: 125.46279
  },
  {
    district: 'Measles',
    population: 2353442,
    lat: 7.329,
    lng: 125.25817
  },
  {
    district: 'Mumps',
    population: 2353442,
    lat: 7.49105,
    lng: 125.48785
  },
  {
    district: 'Pertussis',
    population: 2353442,
    lat: 7.09284,
    lng: 125.60677
  },
  {
    district: 'Rubella',
    population: 23232323,
    lat: 7.08569,
    lng: 125.54789
  },
  {
    district: 'Tetanus',
    population: 2353442,
    lat: 7.0632,
    lng: 125.44678
  },
  {
    district: 'Varicella Hospitalizations',
    population: 2353442,
    lat: 7.12759,
    lng: 125.49828
  },
]
const Toril = () => {
  const [dataa, setDataa] = useState([]);
  const [dist, setDist] = useState([]);

  const loadData = async () => {
    try {
      const respo = await fetch("https://centralserver-production.up.railway.app/dept-data/diseasesurv/disease-dist/9")
      const jData = await respo.json();
      const respo1 = await fetch("https://centralserver-production.up.railway.app/dept-data/diseasesurv/districts/9")
      const jData1 = await respo1.json();
      setDataa(jData)
      setDist(jData1[0])

    } catch (err) {
      console.error(err.message);
    }
  }
  useState(() => {
    loadData()
  }, [])

  const data = {
    labels: dataa.map((value, index) => (value.disease_desc)),
    datasets: [{
      axis: 'y',
      data: dataa.map((value, index) => (value.count)),
      backgroundColor: 'rgb(222, 122, 122,0.5)',
      borderSkipped: false,
      label: 'Numer of Cases',
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
        max: dist.popu,
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
          <Card.Title>Toril</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Population: {dist.popu}</Card.Subtitle>
          <Card.Text>

          </Card.Text>
        </Card.Body>
      </Card>
      <Bar data={data} options={options} ></Bar>

    </div>
  )
}

export default Toril