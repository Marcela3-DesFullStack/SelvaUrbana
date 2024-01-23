import Plant from './Plant';
import useFetch from '../hooks/useFetch';

const PlantList = () => {

    const {data: plants, isPending, error} = useFetch('http://localhost:3001/products/')
    
    return (
      <>
          {error && <div>{error}</div>}
          {isPending && <div>Loading...</div>}
          {plants && <Plant plants = {plants}/>}
      </>
    )
}

export default PlantList