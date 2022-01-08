import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Covid = () => {

    const [dataCovid, setDataCovid] = useState([])
    //componentDidMount
    useEffect(async () => {
        let res = await axios.get('https://api.covid19api.com/country/south-africa?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z')
        let data = res & res.data ? res.data : []
        setDataCovid(data)
    }, [])

    return (
        <div>
            <table>
                {console.log('data', dataCovid)}
                <thead>
                    <tr>
                        <th>Confirmed</th>
                        <th>Active</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                    </tr>

                </thead>
                <tbody>
                    {dataCovid && dataCovid.length > 0 &&
                        dataCovid.map(item => {
                            return (
                                <tr key={item.ID}>
                                    <td>{item.Confirmed}</td>
                                    <td>{item.Active}</td>
                                    <td>{item.Deaths}</td>
                                    <td>{item.Recovered}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>
        </div>
    )
}

export default Covid
