import '../common/Login.css'
import { useNavigate } from 'react-router-dom';

export const Login =()=>{
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard');
      };
    

    return (
        <div className="main">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email"  />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password"  />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
  
}
