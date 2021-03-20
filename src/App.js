import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Albums from './components/Albums';
import Footer from './components/Footer';
import Hello from './components/Hello';

function App() {
  const students = [
    {id: 1, name: "To"},
    {id: 2, name: "Ten"},
    {id: 3, name: "Tien"},
  ]
  return(
    <div className= "container">
      {students.map(({id,name}, index) => {
          return <div key = {index}>
            Xin chào <Hello name={name} /> có id là {id}
          </div>
      })}
    </div>
  )
//   return (
//     <div className="App">
//       <div>
//   <Header />
//   <main>
//   <Banner />
//   <Albums />
//   </main>
//   <Footer />
// </div>

//     </div>
//   );
}

export default App;
