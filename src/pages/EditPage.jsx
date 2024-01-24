import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";

const Create = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("/icons/indoor_icon.svg");
  const [photo, setPhoto] = useState();
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams(); 

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3001/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setName(data.name);
          setPrice(data.price);
          setStock(data.stock);
          setDescription(data.description);
          setType(data.type);
        });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const plant = { name, price, stock, description, type };

    setIsPending(true);

    // const apiUrl = id
    //   ? `http://localhost:3001/products/${id}` 
    //   : "http://localhost:3001/products"; 

    // const method = id ? "PUT" : "POST";

    fetch(Url, {
      method: PUT,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plant),
    })
      .then(() => {
        console.log(id ? "Plant updated" : "New plant added");
        setIsPending(false);
        navigate("/");
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsPending(false);
      });
  };

  return (
    <div className="create">
      <h2>{id ? "Edit" : "Add"} a plant</h2>
      <form onSubmit={handleSubmit}>
      <label>plant name</label>
                <input type="text " 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div className="photoContainer">
                     <h1>Image Uploader</h1>
                        <ImageUploader />
                </div>

                <label>price</label>
                <input type="text" 
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>quantity</label>
                <input type="text " 
                    required
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
                <label>description</label>
                <textarea 
                    required
                    value={description}
                    onChange={(e)=> setDescription(e.target.value)}
                >              
                </textarea> 
                <label>indoor/outdoor</label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="/icons/indoor_icon.svg">indoor</option>
                    <option value="/icons/outdoor_icon.svg">outdoor</option>
                </select>

        {!isPending && <button>{id ? "Update" : "Add"} plant</button>}
        {isPending && <button disabled>{id ? "Updating" : "Adding"} plant...</button>}
      </form>
    </div>
  );
};

export default Create;
