import React, { useState } from 'react'
import data from './data';
import List from './List';

const App = () => {

  const [people, setPeople] = useState(data)

  return (
    <main className=" h-screen bg-pink-300 w-full">
      <section className="container">
        <div className=" flex justify-center items-center h-screen">
          <div className=" bg-white px-6 py-3 rounded shadow-lg w-[40%]">
            <h2 className=" font-serif text-center flex text-xl">
              {people.length} birthdays today
            </h2>
            <List people={people} />
            <button onClick={() => {setPeople([])}} className=' px-4 bg-pink-400 hover:bg-pink-600 text-white py-2 rounded-md block w-full'>Clear all</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App