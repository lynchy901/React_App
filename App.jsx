import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
         </div>
      );
   }
}

class Header extends React.Component {
   render() {
      return (
         <div>
            <h1>Header</h1>
            <button type = "button" className = "btn btn-danger">Danger Button</button>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
      );
   }
}

export default App;