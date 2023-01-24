import { useState } from "react";

export const GifExpertApp = () => {

  const [categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = () => {
  
      // categories.push('Hola')
      // setCategories([...categories, 'Hola mundo']);
      setCategories(cat => [ 'Hola Mundo' ,...cat ]);
  }

  return (
    <>

      {/* titulo */}
      
      <button onClick={ onAddCategory }>Agregar</button>

      <h1>
        GifExpetApp
      </h1>

      {/* input */}

      <input />

      {/* Lista */}
      <ol>
        { categories.map( category => {
          return <li key={ category }>{ category }</li>
        }) }
      </ol>
        {/* Gif items */}

    </>
  )
};

