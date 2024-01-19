let array = [];
function leerValoresUsuarios() {
    return new Promise(async (resolve) => {
        try {
            const response = await fetch('/api/products.json');
            const responseData = await response.json();
            array = [...responseData.products];
            console.log(array);
        console.log(array[0].name);
        } catch (error) {
        console.log(error);
      }
    })
  } 
  function  insertData() {
    array.map()
      return (
        <div>
          <input className="name" placeholder="Nombre de la Planta"></input>
        </div>
      )




  }
