import React from 'react';

class Search extends React.Component {
   // Etiquette (ref)
   constructor(props) {
      super(props);
      this.searchRef = React.createRef();
   }

   // Ajouter aux JSX

   // Utiliser
   componentDidMount() {
      this.searchRef.focus();
   }



   render() {
      return(
         <input 
            type="text"
            ref={(e) => this.searchRef = e}
            style={{
               width: '90%',
               display: 'block',
               margin: 'auto',
               padding: '3px'
            }}
         />
      )
   }
}

export default Search;                              