import React, { useEffect } from 'react'
import '../components/Covid.css'

const Covid = () => {

    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/v4/min/data.min.json');
            const actualData = await res.json();
            console.log(actualData);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, [])
    

  return (
    <>
    <h1 className=''>🔴Live</h1>
    <h2>COVID-19 CORONAVIRUS TRACKER</h2>
    <li className='card'>
        <div className='card_main'>
            <div className='card_inner'>
                <p className='card_name'><span>OUR</span>COUNTRY</p>
                <p className='card_total card_small'><span>INDIA</span></p>
            </div>
        </div>
    </li>
    </>
  )
}

export default Covid