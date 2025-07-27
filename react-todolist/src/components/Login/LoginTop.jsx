import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginTop = ({ setIsAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ダミー認証 ※API呼び出しする
    if(username === 'admin' && password === 'password'){
      setIsAuth(true);
      navigate('/Todo');
    }else{
      alert('アカウント名またはパスワードが違います');
    }
  }
  
  return(
    <form onSubmit={handleSubmit}>
    <h2>ログイン画面</h2>
      <div>
        <label>アカウント名</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="アカウント名を入力して下さい"/>
      </div>
      <div>
        <label>パスワード</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="パスワードを入力してください"/>
      </div>
      <button type="submit">ログイン</button>

    </form>
  );

};

export default LoginTop;