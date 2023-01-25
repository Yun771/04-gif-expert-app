import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories ] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = (value) => {
  
      setCategories(cat => [ value,...cat ]);
  }

  return (
    <>

      {/* titulo */}
      

      <h1>
        GifExpetApp
      </h1>

      {/* input */}

      <AddCategory 
        // onAddCategories={ onAddCategory }
        onNewCategory={ onAddCategory  }
      />

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

