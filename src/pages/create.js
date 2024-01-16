function leerValoresUsuarios() {
    return new Promise(async (resolve) => {
        let array [];
        try {
            const response = await fetch('/src/json/db.json');
            const responseData = await response.json();
            array = [...responseData.tareas];
            console.log(array);
        
        } catch (error) {
        console.log(error);
      }
    })
  }