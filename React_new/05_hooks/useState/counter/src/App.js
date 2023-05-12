// 1. Dùng khi nào
// Khi muốn dữ liệu thay đổi thì giao diện tự động được cập nhật (render lại dữ liệu)

// 2. Cách dùng
// import { useState } from 'react';
// function Component() {
//   const [state, setState] = useState(initState);
//   ...
// }

// 3. Lưu ý
// - Component được re-render sau khi `setState`
// - Initial state chỉ dùng cho lần đầu
// - Set state với callback?
// - Initial state với callback?
// - Set state là thay thế state bằng giá trị mới

import { useState } from 'react';

const orders = [100, 200, 300];

// function App() {

//   // const [counter, setCounter] = useState(1)

//   const [counter, setCounter] = useState(() => {
//     const total = orders.reduce((total, cur) => total + cur);
//     console.log(total);
//     return total;
//   })

//   const handleIncrease = () => {
//     // setCounter(counter + 1);
//     setCounter(preState => preState + 1)
//     setCounter(preState => preState + 1)
//     setCounter(preState => preState + 1)
//   }

//   return (
//     <div className="App" style={{ padding:20 }}>
//         <h1>{counter}</h1>
//         <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }
function App() {
  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 18,
    address: 'Ha Noi, VN'
  })

  const handleUpdate = () => {
    setInfo(prev => ({
      ...prev,
      bio: 'Yeu mau hong ^^'
    }));
    // setInfo({
    //   ...info,
    //   bio: 'Yeu mau hong ^^'
    // });
  }

  return (
    <div className="App" style={{ padding:20 }}>
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handleUpdate}>Update</button>
    </div>
  );
}




export default App;
