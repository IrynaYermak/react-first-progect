// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React + TS</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
//     </>
//   );
// }

// export default App;
// -----------------|||||-----------------

// import Product from './Product';

// export default function App() {
//   return (
//     <>
//       <h1>Best selling</h1>
//       <Product
//         name="Tacos With Lime"
//         imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
//         price={10.99}
//       />
//       <Product
//         name="Fries and Burger"
//         imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
//         price={14.29}
//       />
//     </>
//   );
// }

// -----------------|||||-----------------

interface Book {
  id: string;
  name: string;
}

const books: Book[] = [
  { id: 'id-1', name: 'JS for beginers' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Query overview' },
];

export default function App() {
  return (
    <>
      <h1>Books of the week</h1>
      <ul>
        {books.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}

// -----------------|||||_-----------------
// import { useState } from 'react';
// import Button from './Button';
// import CountButton from './CountButton';
// import UserMenu from './UserMenu';

// export default function App() {
//   const [clicks, setClicks] = useState<number>(0);
//   const [isOpen, setIsOpen] = useState<booleab>(false);

//   const handleClick = () => {
//     setClicks(clicks + 1);
//     console.log(clicks + 1);
//   };

//   const toggleMessage = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <UserMenu name="Patrick" />
//       <CountButton value={clicks} onUpdate={handleClick} />
//       <CountButton value={isOpen ? 'Hide message' : 'Show message'} onUpdate={toggleMessage} />

//       <Button variant="primary" text="Login" />
//       <Button variant="secondary" text="Follow" />
//     </>
//   );
// }

// -----------------|||||-----------------
