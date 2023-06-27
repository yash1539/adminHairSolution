import React,{useState} from 'react'
import Footer from './components/footer'
import SideDrawer from './components/SideDrawer'
import "./App.css"
import Logo from './components/logo'
function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleStayLoggedInChange = () => {
    setStayLoggedIn(!stayLoggedIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add login logic here
  };
  return (
    <div>
      <div className='login-wrap'>
        <Logo />
      </div>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
      <p  className='login-txt'>Login</p>
      <p className='login-statement'>Welcome Team! Please enter your details.</p>
      </div>
      <div>
      <form onSubmit={handleSubmit}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <div>
          <label htmlFor="email">Enter your Email ID:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            style={{
              width: '588px',
              height: '48px',
              borderRadius: '5px',
              border: '1px solid #EEE',
              backgroundColor:'#191919'
            }}
          />
        </div>
        <div>
          <label htmlFor="password">Enter your password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              width: '588px',
              height: '48px',
              borderRadius: '5px',
              border: '1px solid #EEE',
              marginLeft:'-7px',
              marginTop:'20px',
                            backgroundColor:'#191919'

            }}
          />
        </div>
        </div>
        <div>
          <label htmlFor="stayLoggedIn">Stay logged in:</label>
          <input
            type="checkbox"
            id="stayLoggedIn"
            checked={stayLoggedIn}
            onChange={handleStayLoggedInChange}
          />
        </div>
        <div>
          <a href="#">Forgot password?</a>
        </div>
        <button
          type="submit"
          style={{
            borderRadius: '5px',
            background: 'rgba(255, 222, 136, 0.65)',
            width: '588px',
            height: '52px',
            flexShrink: 0,
          }}
        >
          Login
        </button>
      </form>
    </div>
      {/* <SideDrawer /> */}
      <Footer />
    </div>
  )
}

export default App