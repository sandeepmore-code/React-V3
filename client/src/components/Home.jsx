import React, { useContext } from "react";



function Home() {
  const { theme, toggleTheme } = useContext();
  const { counter, Increment, Decrement, Reset } = useContext();

  const handleLightTheme = () => {
    toggleTheme();
  };

  const handleDarkTheme = () => {
    toggleTheme();
  };

  return (
    <div style={{ background: theme === "light" ? "white" : "grey" }}>
      <h1>Home Page</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <button onClick={handleLightTheme}>Switch to Light Theme</button>
      <button onClick={handleDarkTheme}>Switch to Dark Theme</button>
    </div>
  );
}

export default Home;