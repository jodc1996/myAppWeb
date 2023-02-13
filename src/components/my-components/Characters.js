import React from "react";

import {
    Chart, Series, CommonSeriesSettings, Label, Format, Legend,
  } from 'devextreme-react/chart';

import { SingleCard } from "../../layouts";

const data = (dat) =>{
    console.log(dat)
}

const Characters = ({characters = []}) => {
    return(
        <div className="row col-xs-12">
                {characters.map((item, index) => (
                    <div key={index} >
                    
                        
                    
                            {item.workunits.map((data, key) =>(
                                <SingleCard key ={key} 
                                title={data.wkuname}
                                description={data.sitname}
                                color={data.sitcolor}
                                data={data}
                                >

                            <Chart id="chart"
                            >
                                <Series
                                // argumentField={data.tprod}
                                valueField={data.tprod}
                                name="Producida"
                                color="#008000"
                                />
                                <Series
                                valueField={data.tprep}
                                name="Preparada"
                                color="orange"
                                />
                                <Series
                                valueField={data.tpar}
                                name="Paros"
                                color="red"
                                />
                                <CommonSeriesSettings
                                argumentField={data.serie}
                                type="bar"
                                hoverMode={data.serie}
                                selectionMode={data.serie}
                                >
                                <Label visible={true}>
                                    <Format type="fixedPoint" precision={0} />
                                </Label>
                                </CommonSeriesSettings>

                                <Legend verticalAlignment="top" horizontalAlignment="center"></Legend>
                            </Chart>
                        </SingleCard>
                            ))}
                    </div>
                ))}
        </div>
    )
}

export default Characters;