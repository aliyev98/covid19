import React, { useEffect, useState } from 'react'
import './Styles/styles.scss'
import axios from 'axios'
function App() {

  const [date, setDate] = useState('')
  const [data, setData] = useState('')

  useEffect(() => {
    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
      .then(res => setData(res.data[date]))
      .catch(err => console.log(err))
  }, [data, date])

  return (
    <div className="container">

      <h1>COVID - 19 TEST RESULTS FOR TURKEY</h1>

      <div className="input">
        <input type="text" placeholder='DD/MM/YY (05/05/2020)' onChange={e => setDate(e.target.value)} />
      </div>

      <div className="table">
        <table>
          <tbody>
            <tr className='first-row'>
              <td>#</td>
              <td>Tests  </td>
              <td>Patients</td>
              <td>Deaths</td>
            </tr>

            <tr className={data === undefined ? "failed" : "succes"}>
              <td>1</td>
              <td>{data === undefined ? "-" : data.totalTests}</td>
              <td>{data === undefined ? "-" : data.patients}</td>
              <td>{data === undefined ? "-" : data.deaths}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default App