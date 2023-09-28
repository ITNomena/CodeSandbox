import { useState } from "react";

/* Un composant react se refere à 3 box
- State (état/données) 
- Comportement
- Affichage(render)
JSX : langage crée par Facebook pour utiliser de l'HTML dans du javascript
NB: ne jamais modifier un state directement, on passe tjr par son setter
*/
function App() {
  // state
  const [Compteur, setCompteur] = useState(1);

  //Comportement
  //On branche un comportement à l'affichage avec handeClick
  const handeClick = () => {
    setCompteur(Compteur + 1);
  };

  //Affichage(render)
  return (
    <div>
      <h2>{Compteur}</h2>
      <button onClick={handeClick}>Incremente</button>
    </div>
    //un evenement en react recois toujours une fonction flêchée
  );
  // {}(afficher la valeur de la variable)<= interpolation JSX (inclure du code javascript dans du JSX )
}

export default App;
