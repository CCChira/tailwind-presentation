import './App.css';
import logo from './assets/d3logo.svg';
import LoginForm from './components/LoginForm';
function App() {
  return (
    <div className='flex items-center'>
      <div className='flex flex-col items-center justify-center w-full min-h-screen bg-background-fill'>
        <img src={logo} className='aspect-square h-60' alt='logo' />
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
