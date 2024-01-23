import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Details = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {data: plants, error, isPending } = useFetch('http://localhost:3001/products/'+ id)

    const handleClick = ()=> {
        fetch('http://localhost:3001/products/'+ id,{
            method: 'DELETE'
        }).then(() => {
            navigate('/')
        })
    }


    return (
        <div className="plant-details">
            { isPending && <div>loading...</div>}
            { error && <div>{error}</div>}
            {plants && (
                <>
                    <div className="container">
                    <header>
                        <h1>Selva Urbana</h1>
                    <img src={Logo} alt="" id="logo"/>
                    </header>
                    <main>
                        <div className="productContainer">
                            <h2> {plants.name}</h2>
                            <img src={plants.photo} alt={plants.name} className='plantImgBig'/>
                            <p className="plantDescription">{plants.description}</p>
                            <button className="backBtn" onClick={handleClick}>delete</button>
                            <Link to={'/'}>
                                <button className="backBtn">back</button>              
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
 