import { useEffect, useState } from 'react';
import { getAll, create, remove, edit } from './services/userService'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Search from './components/Search';
import UsersTable from './components/UsersTable';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAll()
      .then(users => {
        setUsers(users)
      })
      .catch(err => {
        console.log('Error:' + err);
      })
  }, []);

  const onUserCreateSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const createdUser = await create(data);
    
    setUsers(state => [...state, createdUser]);
  };

  const onUserDelete = async (userId) => {
    await remove(userId);

    setUsers(state => state.filter(user => user._id !== userId));
  };

  const onUserEditSubmit = async(e, userId) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const updatedUser = await edit(userId, data);

    setUsers(state => state.map(u => u._id === userId ? updatedUser : u));
  };

  return (
    <>
      <Header />
      <main className="main">
        <section className="card users-container">
          <Search />

          <UsersTable
            users={users}
            onUserCreateSubmit={onUserCreateSubmit}
            onUserDelete={onUserDelete}
            onUserEditSubmit={onUserEditSubmit}
          />
          <Pagination />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
