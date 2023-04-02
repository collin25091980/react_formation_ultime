// Librairies
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import styled from 'styled-components';

// Composants
import Eleve from '../../Components/Eleve/Eleve';
import MonFragment from '../../HOC/MonFragment/MonFragment';
import Search from '../../Components/Search/Search';

const MonBoutonStylise = styled.button`
  // CSS !!!
  padding: 10px 30px;
  background-color: ${props => props.transformed ? 'green' : 'black'};
  color: white;
  cursor: pointer;
  margin-bottom: 5px;

  &:hover {
    background-color: ${props => props.transformed ? 'lightgreen' : 'white'};
    color: ${props => props.transformed ? 'white' : 'black' };
  }
`;

function App() {

  // States
  const [eleves, setEleves] = useState([
    {
      nom: 'Eva Dupont',
      moyenne: 10,
      citation: 'Allez toujours plus loin !'
    },
    {
      nom: 'Timothée Galo',
      moyenne: 5,
      citation: null
    }
  ]);
  const [transformation, setTransformation] = useState(false);
  const [afficherEleves, setAfficherEleves] = useState(true);

  // Etats
  useEffect(() => {
    console.log('[App.js] useEffect');

    return() => {
      console.log('[App.js] useEffect (didUnmount)');
    }
  }, []);

  useEffect(() => {
    console.log('[App.js] useEffect (didUpdate)');
  });
  
  // Méthodes
  const buttonClickedHandler = (nouveauNom, index) => {
    const nouveauxEleves = [...eleves];
    nouveauxEleves[index].nom = nouveauNom;
    setEleves(nouveauxEleves);
    setTransformation(true);
    elementInput.current.focus();
  }

  const showHideClickedHandler = () => {
    setAfficherEleves(!afficherEleves);
  }

  const removedClickHandler = index => {
    const nouveauxEleves = [...eleves];
    nouveauxEleves.splice(index, 1);
    setEleves(nouveauxEleves);
  }

  const nameChangedHandler = (event, index) => {
    const nouveauxEleves = [...eleves];
    nouveauxEleves[index].nom = event.target.value;
    setEleves(nouveauxEleves);
  }

  // Variables
  const h1Style = {
    color: 'green',
    backgroundColor: 'lightgreen',
    padding: '15px'
  };

  const elementInput = useRef(null);

  let cartes = eleves.map((eleve, index) => {
    let maVariableRef = null;
    if(index === 0) {
      maVariableRef=elementInput;
    }

    return (
      <Eleve
      key={index}
      nom={eleve.nom}
      moyenne={eleve.moyenne}
      clic={() => buttonClickedHandler('Lea', index)}
      supprimer={() => removedClickHandler(index)}
      changerNom={(e) => nameChangedHandler(e, index)}
      maRef={maVariableRef}
    >
      {eleve.citation}
    </Eleve>
    );
  });



  // JSX
  return (
    <div className="App">
      
      <h1 style={h1Style}>Bienvenue dans la classe Terre</h1>

      <MonBoutonStylise onClick={showHideClickedHandler}>Afficher / Masquer</MonBoutonStylise>

      <MonBoutonStylise transformed={transformation} onClick={buttonClickedHandler.bind(this, 'Elon', 0)}>Transformer le premier élève</MonBoutonStylise>

      <Search />
      { afficherEleves ?
        <MonFragment>
          {cartes}
        </MonFragment>
        
        : null
      }

    </div>
  );

}

export default App;