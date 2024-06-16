import { useState } from 'react';

const Authentication = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    // 로그인 로직 추가
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    // 로그아웃 로직 추가
  };

  return (
    <div>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-300 text-white px-4 py-2 rounded-md hover:bg-red-400"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-500"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Authentication;
