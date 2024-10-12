// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TodoList from './components/TodoList'; // Import your existing TodoList component

const App = () => {
  return (
    <div>
      <Header />
      <main className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <TodoList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
