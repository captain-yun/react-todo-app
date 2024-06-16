import './App.css';
import Header from './components/Header';
import TodoSearch from './components/TodoSearch';
import TodoInput from './components/TodoInput';
import TodoProgress from './components/TodoProgress';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="p-4 space-y-4">
        <TodoSearch />
        <TodoInput />
        <TodoProgress />
        <TodoList />
      </main>
    </div>
  );
}

export default App;
