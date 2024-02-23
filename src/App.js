import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Sunglasses", quantity: 1, packed: true },
  { id: 4, description: "Sandals", quantity: 2, packed: false },
  { id: 5, description: "umbrella", quantity: 3, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far away👜</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [select, setSelect] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) {
      return;
    }
    const newItem = { description, select, packed: false, id: Date.now() };
    console.log(newItem);
    setDescription("");
    setSelect(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={select}
        onChange={(evento) => setSelect(+evento.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((nums) => (
          <option value={nums} key={nums}>
            {nums}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        <li>
          {initialItems.map((item) => (
            <Item x={item} key={item.id} />
          ))}
        </li>
      </ul>
    </div>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>👜You have X items on your list, and you already packed X(%)</em>
    </footer>
  );
}
function Item({ x }) {
  return (
    <li>
      <span style={x.packed ? { textDecoration: "line -through" } : {}}>
        {x.quantity} {x.description}
      </span>
      <button>❌</button>
    </li>
  );
}
