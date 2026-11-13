import Profile from "./components/profile";
import Counter from "./components/counter";
import "./App.css";

function App() {
  const user = {
    fullName: "John Doe",
    profession: "React Developer",
    age: 25,
  };

  return (
    <div className="app">
      <h1>React Debugging Application</h1>

      <Profile
  fullName={user.fullName}
  profession={user.profession}
  age={user.age}
/>

      <Counter />
    </div>
  );
}

export default App;