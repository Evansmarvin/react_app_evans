// eslint-disable-next-line
import React, { useRef, useState } from 'react';
import './App.css';
//import * as firebase from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/analytics';
// eslint-disable-next-line
import { useCollectionData } from 'react-firebase-hooks/firestore';

import Chat from './components/Chat';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import { auth } from './firebase.js'
import { useAuthState } from 'react-firebase-hooks/auth';

//const auth = firebase.auth();
// eslint-disable-next-line
const firestore = firebase.firestore();
// eslint-disable-next-line
const analytics = firebase.analytics();
// eslint-disable-next-line
{/*
function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('user_messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder=".." />

      <button type="submit" disabled={!formValue}>🕊️</button>

    </form>
  </>)
}
*/}

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className="App">
    <header>
      <h1>⚛️Evans App</h1>
      <SignOut />
    </header>
    <section>
      {user ? <Chat /> : <SignIn />}
    </section>
    </div>
  );
}

export default App;