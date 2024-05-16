import { useState } from 'react'
import './App.css'
import HelloWord from './component/helloworld';
import Counter from './component/counter';
import List from './component/list';
import NameForm from './component/form';

function App() {

  return (
    <>
      <div>
        <HelloWord />
        <Counter />
        <List />
      </div>
      <NameForm />
    </>
  )
}

export default App
