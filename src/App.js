
import './App.css';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button'
// import Card from '@material-ui/core/Card'
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Todo from './Todo';
import Topbar from './Topbar';
// import _Appbar from '@material-ui/core/AppBar'
import db from './firebase';
import firebase from 'firebase';


// this will have a custom
// TODO component
function App() {
  
  // using firebase now instead of hardcoded
  // const [todos, setTodos] = useState(['Take the dogs for a walk.', 'Take the trash out.', 'Another item gets to go here.']);
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads we listen to the database and fetch new todos as they get added/removed
  //firestore read
  //task is the key in the key-value pair
  useEffect(() => {
    //this code will execute as soon as the app loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log(snapshot.docs.map(doc => doc.data()));
      // setTodos(snapshot.docs.map(doc =>  doc.data().task))
      setTodos(snapshot.docs.map(doc =>  doc.data()))
    })
  }, []);

  const addTodo = (event) => {
    var photo_url = "https://www.lpi.usra.edu/publications/slidesets/3dsolarsystem/images/SS3d18.jpg";
    event.preventDefault(); //will stop refresh; when you hit enter button, it is like clicking the button
    console.log('This button click is working');
    db.collection('todos').add({
      task: input,
      subtext: "Silly Dilly",
      url: photo_url,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    }).then((docRef) => {
      db.collection('todos').doc(docRef.id).update({
        key_id: docRef.id
      })
    })
    setInput(''); //clear input field after upload of list item
  }
  
  // const addTodo = (event) => {
  //   event.preventDefault(); //will stop refresh; when you hit enter button, it is like clicking the button
  //   console.log('This button click is working');
  //   setTodos([...todos, input]);
  //   setInput('');
  // }

  return (
    <div className="App">
      
      <Topbar />

      <div className="main-area">
        <div className="input-area">
          <form className="form-area">

            <FormControl>
              <InputLabel>Write a Todo Item</InputLabel>
              <Input className="input-field" value={input} onChange={event => setInput(event.target.value)} />
            </FormControl>

            <Button disabled={!input} type="submit" className="input-button" onClick={addTodo} variant="contained" color="primary">Add TODO Item</Button>
          </form>
        </div>
        
        {todos.map(todo => (
            <Todo text={todo.task} subtext={todo.subtext} url={todo.url} key_id={todo.key_id} timestamp={todo.timestamp} />
        ))}

      </div>

    </div>
  );
}





// with material design
// function App() {

//   const [todos, setTodos] = useState(['Take the dogs for a walk.', 'Take the trash out.', 'Another item gets to go here.']);
//   const [input, setInput] = useState('');
  
//   const addTodo = (event) => {
//     //add item to firebase
//     //the ...todos is the current list
//     //the input value is defined by whatever text is retrieved from the input field
//     event.preventDefault(); //will stop refresh; when you hit enter button, it is like clicking the button
//     console.log('This button click is working');
//     setTodos([...todos, input]);
//     setInput('');
//   }

//   return (
//     <div className="App">
//       <h1>
//         Firebase TODO App 
//       </h1>

//       <div className="input-area">
//         <form className="form-area">
//           {/* <input placeholder="Enter an item..." className="input-field" value={input} onChange={event => setInput(event.target.value)} /> */}

//           <FormControl>
//             <InputLabel>Write a Todo Item</InputLabel>
//             <Input className="input-field" value={input} onChange={event => setInput(event.target.value)} />
//           </FormControl>

//           <Button disabled={!input} type="submit" className="input-button" onClick={addTodo} variant="contained" color="primary">Add TODO Item</Button>
//         </form>
//       </div>
      
//       {todos.map(todo => (
//           <Card className="list-card">
//             <div className="card-area">
//               {todo}
//             </div>
//           </Card>
//           // <li>{todo}</li>
//         ))}

//     </div>
//   );
// }




// function App() {

//   const [todos, setTodos] = useState(['Take the dogs for a walk.', 'Take the trash out.', 'Another item gets to go here.']);
//   const [input, setInput] = useState('');
  
//   const addTodo = (event) => {
//     //add item to firebase
//     //the ...todos is the current list
//     //the input value is defined by whatever text is retrieved from the input field
//     event.preventDefault(); //will stop refresh; when you hit enter button, it is like clicking the button
//     console.log('This button click is working');
//     setTodos([...todos, input]);
//     setInput('');
//   }

//   return (
//     <div className="App">
//       <h1>
//         Firebase TODO App 
//       </h1>
//       <form>
//         <input value={input} onChange={event => setInput(event.target.value)} />
//         <button onClick={addTodo}>Add TODO Item</button>
//       </form>
      
//       <ul>
//         {todos.map(todo => (
//           <li>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// const [things, setThings] = useState([
  //   {robber: {message: 'First', loser: 'Second', funny: 'Third'}}
  //   , {robber: {message: "Fourth", loser:  'Fifth', funny:  'Sixth'}}
  //  ]) ;

// function App() {

//   const [todos, setTodos] = useState(['Take the dogs for a walk.', 'Take the trash out.'])
//   const [things, setThings] = useState([
//     {robber: {message: 'First', loser: 'Second', funny: 'Third'}}
//     , {robber: {message: "Fourth", loser:  'Fifth', funny:  'Sixth'}}
//    ]) ;

//   return (
//     <div className="App">
//       <h1>
//         Firebase TODO App 
//       </h1>
//       <input />
//       <button>Add TODO Item</button>

//       <ul>
//         {/* map() the array object. the object in a singular form is the index or single item in the
//         list. map() loops over the list and creates a li item for each object in the list */}
//         {todos.map(todo => (
//           <li>{todo}</li>
//         ))}

//         {things.map(thing => (
//           <li>{thing.robber['loser']}</li>
//         ))}

//         {things.map(thing => (
//           <li>{thing.robber['funny']}</li>
//         ))}

//         {/* <li>
//           Take the dogs for a walk.
//         </li>
//         <li>
//           Take the trash out.
//         </li> */}
//       </ul>

//     </div>
//   );
// }

export default App;
