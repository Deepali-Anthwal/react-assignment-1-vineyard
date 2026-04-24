import React from 'react';
import './App.css';

function UserCard(props) {
  return (
    <div className="user-card">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Email: {props.email}</p>
    </div>
  );
}

const ProductList = ({ data }) => {
  return (
    <ul>
      {data.map((item, i) => (
        <li key={i}>
          {item.name} - Price: {item.price}
        </li>
      ))}
    </ul>
  );
};

function App() {
  const name = "Deepali Anthwal";
  const profession = "Student";
  const hobby = "Arts and Crafts";

  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();
  const msg = "Hello, World!";

  const myItems = [
    { title: 'Item One', url: '#', author: 'Deepali', num_comments: 5, points: 10, objectID: 1 },
    { title: 'Item Two', url: '#', author: 'Rashmi', num_comments: 2, points: 20, objectID: 2 },
  ];

  const products = [
    { name: 'Pencil', price: 10 },
    { name: 'Eraser', price: 5 },
    { name: 'Notebook', price: 50 }
  ];

  return (
    <div className="container">
      <h1>About Me</h1>

      <section>
        <h3>Personal Information:</h3>
        <p>Name: {name}</p>
        <p>Profession: {profession}</p>
        <p>Hobby: {hobby}</p>
        <p><b>Date:</b> {date} | Time: {time}</p>
        <p><b>Greeting:</b> {msg}</p>
      </section>

      <section>
        <h3>Table:</h3>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Comments</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {myItems.map((item) => (
              <tr key={item.objectID}>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.num_comments}</td>
                <td>{item.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h3>User Card Component:</h3>
        <UserCard name="Deepali Anthwal" age="22" email="deepalianthwal2003@gmail.com" />
      </section>

      <section>
        <h3>Products List</h3>
        <ProductList data={products} />
      </section>
    </div>
  );
}

export default App;