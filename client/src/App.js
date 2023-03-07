import { useEffect, useState } from 'react';
import {getAll} from './services/userService'
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


  return (
    <>
      <Header />
        <main className="main">
          <section className="card users-container">
            <Search />
            
            <UsersTable users={users} />

            <Pagination />
          </section>
        </main> 
      <Footer />
    </>
  );
}

export default App;
