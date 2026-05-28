import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [formData, setFormData] = useState({ username: '', password: ''});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!formData.username.trim() || !formData.password.trim()) {
      alert('Please enter both username and password.');
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include', // important for httpOnly cookie
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Register failed');

      // Registered and cookie set
      navigate('/');
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: 'Arial, sans-serif' }}>
      <div style={{ width: 350, margin: '120px auto', background: 'white', padding: 30, borderRadius: 20 }}>
        <h1>Register</h1>
        <input placeholder="Username" value={formData.username} onChange={e=>setFormData({...formData, username:e.target.value})} style={{width:'100%',padding:12,marginBottom:12}}/>
        <input type="password" placeholder="Password" value={formData.password} onChange={e=>setFormData({...formData, password:e.target.value})} style={{width:'100%',padding:12,marginBottom:12}}/>
        <button onClick={handleRegister} disabled={isLoading} style={{width:'100%',padding:12}}>{isLoading?'Loading...':'Create account'}</button>
      </div>
    </div>
  );
}
