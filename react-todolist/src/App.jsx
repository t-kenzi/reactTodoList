import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Todo from "./components/Todo";
import LoginTop from "./components/Login/LoginTop"

// React側todoリストの動作確認用
// const App = () => {
//     return (
//       <>
//         <h3>Reminder</h3>
//         <Todo />
//       </>
//     );
// };

// ログイン機能付きTodoリスト用
const App = () => {
  const[isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<LoginTop setIsAuth={setIsAuth} />} />
        <Route 
          path={'/Todo'}
          element={isAuth ? <Todo /> : <Navigate to="/" replace />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;


{/*
編集処理について
useEffect：関数の実行タイミングをreactのレンダリング後まで遅らせるhook
ユーザーが「編集」ボタンを押す
↓
editingTodoに選択したTODOをセット（startEdit）
↓
FormのuseEffectで入力欄に反映
↓
入力値を変更して「更新」ボタンを押す
↓
updateTodoでtodos配列を更新（該当IDのtodoだけ上書き）
↓
editingTodoをnullに戻し、フォーム初期化


 */}