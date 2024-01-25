import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";


const Details = () => {
    const {id} = useParams();
    const {data: plants, error, isPending } = useFetch('http://localhost:3001/products/'+ id)
    return (
        <div className="plant-details">
            { isPending && <div>loading...</div>}
            { error && <div>{error}</div>}
            {plants && (
                <>
                    <div className="details_container">
                    <header>
                        <img className="logo" src={Logo} alt="" id="logo"/>
                        <h1>Selva Urbana</h1>
                    
                    </header>
                    <main>
                        <div className="productContainer_details">
                            <h2> {plants.name}</h2>
                            <img src={plants.photo} alt={plants.name} className='plantImgBig'/>
                            <p className="plantDescription">{plants.description}</p>
                            <Link to={'/'}>
                                <button className="backBtn">Volver</button>              
                            </Link>
                        </div> 
                    </main>
                    <footer>
                        <p>selvaurbana@yahoo.com</p>
                        <p>545 543 826</p>
                        <p>©Selva Urbana</p>

                    </footer>
                    </div>            
                </>
            )}
            

        </div>
    );
}

export default Details
 