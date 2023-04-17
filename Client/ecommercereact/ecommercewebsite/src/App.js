import { useEffect, useState } from 'react';
import './App.css';
import { BASE_API } from './config/API';

function App() {


  const [data, setData] = useState([])

  useEffect(() => {
    const dataFetch = async () => {
      const data = await (
        await fetch(
          `${BASE_API}products`
        )
      ).json();
     console.log(data)
      setData(data);
    };
    dataFetch();
  }, []);
  return (
   <>
      <div className='all__side'>
      <div className='container'>

          <div className='row g-2'>
            {
               
              data.map(item => (
                <div key={item.id} className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-3">
                <div className='box'>
                      <h1> Id:{item.id}</h1>
                      <h1> Name:{item.name}</h1>
                      <h1> Quantity: {item.quantity}</h1>
                </div>
            </div>
              ))
            }
          
      
          </div>
       
        </div>
      </div>
    
      
   </>
  );
}

export default App;
