import './App.css';

let hours = new Date().getHours();

// let greeting = "Hello";

// if (hours > 4 && hours < 12) {
//   greeting = <span className='text-blue-400'>Good Morning!</span>
// } else if (hours >= 12 && hours < 15) {
//   greeting = <span className='text-yellow-400'>Good Afternoon!</span>
// } else if (hours >= 15) {
//   greeting = <span className='text-orange-400'>Good Evening!</span>
// }

let greeting = hours > 4 && hours <= 12 ? (<span className='text-blue-400'>Good Morning!</span>) : hours >= 12 && hours < 15 ? (<span className='text-yellow-400'>Good Afternoon!</span>) : hours >= 15 && hours < 20 ? (<span className='text-orange-400'>Good Evening!</span>) : "hello";


// String year = credits < 30 ? "freshman" : credits <= 59 ? "sophomore" : credits <= 89 ? "junior" : "senior";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>My react dom practice</p>
        <h5>{greeting}</h5>
        <p>The time is {new Date().toLocaleTimeString()}</p>
      </header>
    </div>
  );
}

export default App;
