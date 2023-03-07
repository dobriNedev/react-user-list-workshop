import { useEffect, useState } from 'react';
import {getAll, create } from './services/userService'
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

  const onUserCreateSubmit = async(e) =>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const createdUser = await create(data);
    console.log(createdUser);
    //TODO: add new user to state
    setUsers(state => [...state, createdUser]);
    //TODO: close dialog with server
  }
 
  return (
    <>
      <Header />
        <main className="main">
          <section className="card users-container">
            <Search />
            
            <UsersTable users={users} onUserCreateSubmit={onUserCreateSubmit} />

            <Pagination />
          </section>
        </main> 
      <Footer />
    </>
  );
}

export default App;
