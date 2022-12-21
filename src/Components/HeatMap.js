import React, { Fragment, useMemo, useState } from 'react'
import { GoogleMap, useLoadScript, Marker, Polygon, InfoWindow } from "@react-google-maps/api";
import "../css/globals.css"
import Agdao from './coordinates/Agdao';
import Baguio from './coordinates/Baguio';
import Buhangin from './coordinates/Buhangin';
import Bunawan from './coordinates/Bunawan';
import Calinan from './coordinates/Calinan';
import Marilog from './coordinates/Marilog';
import Paquibato from './coordinates/Paquibato';
import Poblacion from './coordinates/Poblacion';
import Talomo from './coordinates/Talomo';
import Toril from './coordinates/Toril';
import Tugbok from './coordinates/Tugbok';
import mapStyles from "./mapStyles";
import Select from 'react-select'
import Card from 'react-bootstrap/Card';

export default function Home() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey:  process.env.REACT_APP_API,
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}



const defoptAgdao = {
    fillOpacity: 0.90,
    strokeColor: "#00000",
    fillColor: "#db2534",
    strokeWeight: 0.5,
}
const defoptBaguio = {
    fillOpacity: 0.20,
    strokeColor: "#00000",
    fillColor: "#db2534",
    strokeWeight: 0.5,
}
const defoptBuhangin = {
    fillOpacity: 0.80,
    strokeColor: "#00000",
    fillColor: "#db2534",
    strokeWeight: 0.5,
}
const defoptBunawan = {
    fillOpacity: 0.50,
    strokeColor: "#00000",
    fillColor: "#db2534",
    strokeWeight: 0.5,
}
const defoptCalinan = {
    fillOpacity: 0.30,
    strokeColor: "#00000",
    fillColor: "#db2534",
    strokeWeight: 0.5,
}
const defoptMarilog = {
    fillOpacity: 0.10,
    strokeColor: "#00000",
    fillColor: "#db2534",
    strokeWeight: 0.5,
}
const defoptPaquibato = {
    fillOpacity: 0.10,
    strokeColor: "#00000",
    fillColor: "#db2534",
    strokeWeight: 0.5,
}
const defoptPoblacion = {
    fillOpacity: 1,
    strokeColor: "#00000",
    fillColor: "#db2534",
    strokeWeight: 0.5,
}
const defoptTalomo = {
    fillOpacity: 0.70,
    strokeColor: "#00000",
    fillColor: "#db2534",
    strokeWeight: 0.5,
}
const defoptToril = {
    fillOpacity: 0.80,
    strokeColor: "#00000",
    fillColor: "#db2534",
    strokeWeight: 0.5,
}
const defoptTugbok = {
    fillOpacity: 0.30,
    strokeColor: "#00000",
    fillColor: "#db2534",
    strokeWeight: 0.5,
}
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};
const hoverOpt = {
    fillOpacity: 1,
    strokeColor: "#00000",
    fillColor: "#FFFFFF",
    strokeWeight: 0.5,
}

function Map() {
    const [defoptAgdao, setdefoptAgdao] = useState({
        fillOpacity: 0,
        strokeColor: "#00000",
        fillColor: "#db2534",
        strokeWeight: 0.5,
    })
    const [defoptBaguio, setdefoptBaguio] = useState({
        fillOpacity: 0,
        strokeColor: "#00000",
        fillColor: "#db2534",
        strokeWeight: 0.5,
    })
    const [defoptBuhangin, setdefoptBuhangin] = useState({
        fillOpacity: 0,
        strokeColor: "#00000",
        fillColor: "#db2534",
        strokeWeight: 0.5,
    })

    const [defoptBunawan, setdefoptBunawan] = useState({
        fillOpacity: 0,
        strokeColor: "#00000",
        fillColor: "#db2534",
        strokeWeight: 0.5,
    })
    const [defoptCalinan, setdefoptCalinan] = useState({
        fillOpacity: 0,
        strokeColor: "#00000",
        fillColor: "#db2534",
        strokeWeight: 0.5,
    })

    const [defoptMarilog, setdefoptMarilog] = useState({
        fillOpacity: 0,
        strokeColor: "#00000",
        fillColor: "#db2534",
        strokeWeight: 0.5,
    })
    const [defoptPaquibato, setdefoptPaquibato] = useState({
        fillOpacity: 0,
        strokeColor: "#00000",
        fillColor: "#db2534",
        strokeWeight: 0.5,
    })

    const [defoptPoblacion, setdefoptPoblacion] = useState({
        fillOpacity: 0,
        strokeColor: "#00000",
        fillColor: "#db2534",
        strokeWeight: 0.5,
    })
    const [defoptTalomo, setdefoptTalomo] = useState({
        fillOpacity: 0,
        strokeColor: "#00000",
        fillColor: "#db2534",
        strokeWeight: 0.5,
    })
    const [defoptToril, setdefoptToril] = useState({
        fillOpacity: 0,
        strokeColor: "#00000",
        fillColor: "#db2534",
        strokeWeight: 0.5,
    })
    const [defoptTugbok, setdefoptTugbok] = useState({
        fillOpacity: 0,
        strokeColor: "#00000",
        fillColor: "#db2534",
        strokeWeight: 0.5,
    })



    const [optAgdao, setOptAgdao] = useState(defoptAgdao)
    const [optBuhangin, setOptBuhangin] = useState(defoptBuhangin)
    const [optBunawan, setOptBunawan] = useState(defoptBunawan)
    const [optBaguio, setOptBaguio] = useState(defoptBaguio)
    const [optCalinan, setOptCalinan] = useState(defoptCalinan)
    const [optMarilog, setOptMarilog] = useState(defoptMarilog)
    const [optPaquibato, setOPptPaquibato] = useState(defoptPaquibato)
    const [optPoblacion, setOptPoblacion] = useState(defoptPoblacion)
    const [optTalomo, setOptTalomo] = useState(defoptTalomo)
    const [optToril, setOptToril] = useState(defoptToril)
    const [optTugbok, setOptTugbok] = useState(defoptTugbok)
    const [disp, setDisp] = useState(100);
    const [dataa, setDataa] = useState([]);
    const [data, setData] = useState([]);
    const [mdataa, setMDataa] = useState([]);
    const [disesaes, setDisesaes] = useState();
    const [total, setTotal] = useState(0);
    const [local, setLocal] = useState([])
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    const handelChangeDis = value => {
        setDisesaes(value)
        mappData(value);
        console.log(value);

    }
    const loadData = async () => {
        try {
            const respo1 = await fetch("https://centralserver-production.up.railway.app/dept-data/diseasesurv/diseases")
            const jData1 = await respo1.json();
            const respo = await fetch("https://centralserver-production.up.railway.app/dept-data/diseasesurv/districts/")
            const jData = await respo.json();
            setDataa(jData1)
            setData(jData)
        } catch (err) {
            console.error(err.message);
        }
    }
    const matrix = (value, district) => {
        var opp = 0.01;

        data.map((value1, index) => {
            if (value1.district_id === district) {
                var compare = value / value1.popu
                console.log(compare);
                if (compare <= 0.05) {
                    opp = 0.10
                } else if (compare >= 0.05 && compare <= 0.09) {
                    opp = 0.40
                } else if (compare >= 0.9 && compare <= 0.2) {
                    opp = 0.60
                } else if (compare >= 0.3 && compare <= 0.4) {
                    opp = 0.70
                } else if (compare >= 0.4 && compare <= 0.5) {
                    opp = 0.90
                } else if (compare >= 0.5 && compare <= 1) {
                    opp = 1
                }

            }
        })

        return opp;

    }
    const mappData = async (value) => {
        try {
            const respo = await fetch("https://centralserver-production.up.railway.app/dept-data/diseasesurv/get-map-data/" + value.disease_id)
            const jData = await respo.json();
            setTotal(jData[0].total)
            setLocal(jData)
            jData.map((value, index) => {
                if (value.district === 1) {
                    setOPptPaquibato({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                    setdefoptPaquibato({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                }
                if (value.district === 2) {
                    setdefoptMarilog({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                    setOptMarilog({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                }
                if (value.district === 3) {
                    setdefoptBaguio({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                    setOptBaguio({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                }
                if (value.district === 4) {
                    setdefoptTugbok({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                    setOptTugbok({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                }
                if (value.district === 5) {
                    setdefoptBunawan({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                    setOptBunawan({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                }
                if (value.district === 6) {
                    setdefoptCalinan({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                    setOptCalinan({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                }
                if (value.district === 7) {
                    setdefoptBuhangin({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                    setOptBuhangin({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                }
                if (value.district === 8) {
                    setdefoptTalomo({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                    setOptTalomo({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                }
                if (value.district === 9) {
                    setdefoptToril({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                    setOptToril({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                }
                if (value.district === 10) {
                    setdefoptAgdao({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                    setOptAgdao({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                }
                if (value.district === 11) {
                    setdefoptPoblacion({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                    setOptPoblacion({
                        fillOpacity: matrix(value.local, value.district),
                        strokeColor: "#00000",
                        fillColor: "#db2534",
                        strokeWeight: 0.5,
                    })
                }

            })


        } catch (err) {
            console.error(err.message);
        }
    }

    useState(() => {
        loadData()
    }, [])





    const center = useMemo(() => ({ lat: 7.237712225444590, lng: 125.43619516280769 }), []);
    const hover = (value, index) => {
        setDisp(index)
        if (index === 9) {
            setOptAgdao(value)
        } else if (index === 2) {
            setOptBaguio(value)
        } else if (index === 6) {
            setOptBuhangin(value)
        } else if (index === 4) {
            setOptBunawan(value)
        } else if (index === 5) {
            setOptCalinan(value)
        } else if (index === 1) {
            setOptMarilog(value)
        } else if (index === 0) {
            setOPptPaquibato(value)
        } else if (index === 10) {
            setOptPoblacion(value)
        } else if (index === 7) {
            setOptTalomo(value)
        } else if (index === 8) {
            setOptToril(value)
        } else if (index === 3) {
            setOptTugbok(value)
        }
    }
    const outHover = (value, index) => {
        setDisp()
        if (index === 9) {
            setOptAgdao(value)
        } else if (index === 2) {
            setOptBaguio(value)
        } else if (index === 6) {
            setOptBuhangin(value)
        } else if (index === 4) {
            setOptBunawan(value)
        } else if (index === 5) {
            setOptCalinan(value)
        } else if (index === 1) {
            setOptMarilog(value)
        } else if (index === 0) {
            setOPptPaquibato(value)
        } else if (index === 10) {
            setOptPoblacion(value)
        } else if (index === 7) {
            setOptTalomo(value)
        } else if (index === 8) {
            setOptToril(value)
        } else if (index === 3) {
            setOptTugbok(value)
        }
    }
    const pers = (dis, pop) => {
        var percent = (dis / pop) * 100

        return percent.toFixed(2) + " %"
    }
    return (
        <div>

            <GoogleMap options={options} zoom={10.96} center={center} mapContainerClassName="map-container">
                <div class="form-row ">
                    <div class="col-3 d-inline-flex">

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{disesaes ? disesaes.disease_desc : "Select Disease"}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Current Cases: {numberWithCommas(total)} </Card.Subtitle>
                                <Card.Text>
                                    <h6 className='mt-5'>Legend: </h6>

                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"> <i class="bi bi-square-fill l1"></i>  Very High</li>
                                        <li class="list-group-item"> <i class="bi bi-square-fill l2"></i> High</li>
                                        <li class="list-group-item"> <i class="bi bi-square-fill l3"></i> Moderate</li>
                                        <li class="list-group-item"> <i class="bi bi-square-fill l4"></i> Low</li>
                                        <li class="list-group-item"> <i class="bi bi-square-fill l5"></i> Very Low</li>
                                        <li class="list-group-item"> <i class="bi bi-square-fill l0"></i> Low to None</li>
                                    </ul>
                                </Card.Text>


                            </Card.Body>
                        </Card>
                    </div>

                    <div class="col-3 float-end">

                        <Select
                            value={disesaes}
                            options={dataa}
                            getOptionLabel={e => e.disease_desc}
                            getOptionValue={e => e.disease_id}
                            isClearable={true}
                            onChange={handelChangeDis}
                            defaultOptions={false}
                            menuPortalTarget={document.body}
                            placeholder="Select Diseases..."
                            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
                            className="med" />


                    </div>

                </div>
                {data.map((value, index) => (
                    disp === index && <InfoWindow
                        position={{
                            lat: Number(value.lat),
                            lng: Number(value.lng)
                        }}>

                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>{value.district_desc}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Current Population: {numberWithCommas(value.popu)}</Card.Subtitle>
                                <Card.Text>
                                    Number of Cases: {local.length !== 0 ? numberWithCommas(local[index].local) : 0}
                                </Card.Text>
                                <Card.Text>
                                    Percentage: {local.length !== 0 ? pers(local[index].local, value.popu) : 0}
                                </Card.Text>

                            </Card.Body>
                        </Card>

                    </InfoWindow>
                ))
                }
                <Polygon onMouseOut={(e) => outHover(defoptAgdao, 9)} onMouseOver={(e) => hover(hoverOpt, 9)} options={optAgdao} path={Agdao} ></Polygon>
                <Polygon onMouseOut={(e) => outHover(defoptBaguio, 2)} onMouseOver={(e) => hover(hoverOpt, 2)} options={optBaguio} path={Baguio} />
                <Polygon onMouseOut={(e) => outHover(defoptBuhangin, 6)} onMouseOver={(e) => hover(hoverOpt, 6)} options={optBuhangin} path={Buhangin} />
                <Polygon onMouseOut={(e) => outHover(defoptBunawan, 4)} onMouseOver={(e) => hover(hoverOpt, 4)} options={optBunawan} path={Bunawan} />
                <Polygon onMouseOut={(e) => outHover(defoptCalinan, 5)} onMouseOver={(e) => hover(hoverOpt, 5)} options={optCalinan} path={Calinan} />
                <Polygon onMouseOut={(e) => outHover(defoptMarilog, 1)} onMouseOver={(e) => hover(hoverOpt, 1)} options={optMarilog} path={Marilog} />
                <Polygon onMouseOut={(e) => outHover(defoptPaquibato, 0)} onMouseOver={(e) => hover(hoverOpt, 0)} options={optPaquibato} path={Paquibato} />
                <Polygon onMouseOut={(e) => outHover(defoptPoblacion, 10)} onMouseOver={(e) => hover(hoverOpt, 10)} options={optPoblacion} path={Poblacion} />
                <Polygon onMouseOut={(e) => outHover(defoptTalomo, 7)} onMouseOver={(e) => hover(hoverOpt, 7)} options={optTalomo} path={Talomo} />
                <Polygon onMouseOut={(e) => outHover(defoptToril, 8)} onMouseOver={(e) => hover(hoverOpt, 8)} options={optToril} path={Toril} />
                <Polygon onMouseOut={(e) => outHover(defoptTugbok, 3)} onMouseOver={(e) => hover(hoverOpt, 3)} options={optTugbok} path={Tugbok} />
            </GoogleMap>
        </div>

    );
}


