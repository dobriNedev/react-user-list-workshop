import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Pagination from './components/Pagination';
import Search from './components/Search';
import UsersTable from './components/UsersTable';

function App() {
  return (
    <>
      <Header />
        <main className="main">
          <section className="card users-container">
            <Search />
            <div className="table-wrapper">
              <UsersTable />
              <button className="btn-add btn">Add new user</button>
              <Pagination />
            </div>
          </section>
        </main> 
      <Footer />
    </>
  );
}

export default App;
