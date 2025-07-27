import Todo from "./components/Todo"

const App = () => {
    return (
      <>
        <h3>Reminder</h3>
        <Todo />
      </>
    );
};

export default App;


{/*
編集処理について
①編集ボタンを押下

useEffect：関数の実行タイミングをreactのレンダリング後まで遅らせるhook



 */}