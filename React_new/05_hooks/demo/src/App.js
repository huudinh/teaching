// 01 - Update DOM

// import { useState, useEffect } from 'react';

// function Content() {
//   const [title, setTitle] = useState('');

//   useEffect(() => {
//     document.title = title;
//   });

//   return <input value={title} onChange={e => setTitle(e.target.value)} />
// }

// function ShowHide() {
//   const [show, setShow] = useState(false);

//   return(
//     <>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </>
//   )
// }

// function App() {
//   return (
//     <div style={{ padding: 32 }}>
//         <ShowHide />
//     </div>
//   )
// }

// export default App;


// -----------------------------------------------------------------------------
// 02 - Call API

// import { useState, useEffect } from 'react';

// function Content() {
//   const [title, setTitle] = useState('');
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     document.title = title;
//   });

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/posts`)
//       .then(res => res.json())
//       .then(posts => {
//         setPosts(posts)
//       })
//   }, []);
//   return (
//     <>
//       <input
//         value={title}
//         onChange={e => setTitle(e.target.value)}
//       />
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title || post.name}</li>
//         ))}
//       </ul>
//     </>
//   )
// }
// function ShowHide() {
//   const [show, setShow] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </div>
//   )
// }

// function App() {
//   return (<div style={{ padding: 32 }}><ShowHide /></div>)
// }
// export default App;


// -----------------------------------------------------------------------------
// 03 - Dependencies

// import { useState, useEffect } from 'react';

// const tabs = ['posts', 'comments', 'albums']

// function Content() {
//   const [title, setTitle] = useState('');
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState('posts');

//   useEffect(() => {
//     document.title = title;
//   });

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then(res => res.json())
//       .then(posts => {
//         setPosts(posts)
//       })
//   }, [type]);

//   return (
//     <div>
//        {tabs.map(tab => (
//          <button key={tab} 
//            style={type === tab ? {color: '#fff', backgroundColor: '#333'} : {}}
//            onClick={() => setType(tab)}
//          >{tab}</button>))}
//        <input value={title} onChange={e => setTitle(e.target.value)} />
//        <ul>
//          {posts.map(post => (<li key={post.id}>{post.title || post.name}</li>))}
//        </ul>
//     </div>)
//  } 
//  function ShowHide() {
//   const [show, setShow] = useState(false);
//   return(
//     <div>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </div>
//   )
// }

// function App() {
//   return (<div style={{ padding: 32 }}><ShowHide /></div>)
// }
// export default App;
// -----------------------------------------------------------------------------

// 04 - DOM Event - scroll

// import { useState, useEffect } from 'react';

// const tabs = ['posts', 'comments', 'albums']

// function Content() {
//   const [title, setTitle] = useState('');
//   const [posts, setPosts] = useState([]);
//   const [type, setType] = useState('posts');
//   const [showGoToTop, setShowGoToTop] = useState(false);

//   useEffect(() => {
//     document.title = title;
//   });

//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${type}`)
//       .then(res => res.json())
//       .then(posts => {
//         setPosts(posts)
//       })
//   }, [type]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if(window.scrollY >= 200) {
//         setShowGoToTop(true);
//         console.log('set state');
//       } else {
//         setShowGoToTop(false);
//       }
//     }
//     window.addEventListener('scroll', handleScroll);
//     console.log('addEventListener');

//     // Cleanup function
//     return () => {
//       console.log('removeEventListener');
//       window.removeEventListener('scroll', handleScroll);
//     }
//   }, [])  
//   console.log('re-render');

//   return (
//     <div>
//        {tabs.map(tab => (
//          <button key={tab} 
//            style={type === tab ? {color: '#fff', backgroundColor: '#333'} : {}}
//            onClick={() => setType(tab)}
//          >{tab}</button>))}
//        <input value={title} onChange={e => setTitle(e.target.value)} />
//        <ul>
//          {posts.map(post => (<li key={post.id}>{post.title || post.name}</li>))}
//        </ul>
//        {showGoToTop && (
//         <button 
//           style={{position:'fixed', right: 20, bottom: 20,}}> 
//           Go to Top 
//         </button>
//         )}
//     </div>)
//  }
//  // End Content 
//  function ShowHide() {
//   const [show, setShow] = useState(false);
//   return(
//     <div>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Content />}
//     </div>
//   )
// }

// function App() {
//   return (<div style={{ padding: 32 }}><ShowHide /></div>)
// }
// export default App;

// -----------------------------------------------------------------------------

// 04 - DOM Event - Resize window

// import { useState, useEffect } from 'react';

// function Resize() {
//   const [width, setWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//     }
//     window.addEventListener('resize', handleResize);

//     // cleanup function
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     }
//   }, []);

//   return <div><h1>{width}</h1></div>
// }

//  function ShowHide() {
//   const [show, setShow] = useState(false);
//   return(
//     <div>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Resize />}
//     </div>
//   )
// }

// function App() {
//   return (<div style={{ padding: 32 }}><ShowHide /></div>)
// }
// export default App;

// -----------------------------------------------------------------------------

// 05 - Timmer

// import { useState, useEffect } from 'react';

// function Counter() {
//   const [countdown, setCountdown] = useState(180);

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       setCountdown(prevState => prevState - 1);
//       console.log('Countdown...');
//     }, 1000);

//     return () => clearInterval(timerId);
//   }, [])

//   return <h1>{countdown}</h1>
// }

//  function ShowHide() {
//   const [show, setShow] = useState(false);
//   return(
//     <div>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Counter />}
//     </div>
//   )
// }

// function App() {
//   return (<div style={{ padding: 32 }}><ShowHide /></div>)
// }
// export default App;

// -----------------------------------------------------------------------------

// 06 - Avatar

// import { useState, useEffect } from 'react';

// function Avatar() {
//   const [avatar, setAvatar] = useState();

//   useEffect(() => {
//     return () => {
//       avatar && URL.revokeObjectURL(avatar.preview)
//     }
//   }, [avatar]);

//   const handlePreviewAvatar = (e) => {
//     const file = e.target.files[0]
//     file.preview = URL.createObjectURL(file);
//     setAvatar(file);
//   }

//   return (
//     <div>
//       <input type='file' onChange={handlePreviewAvatar} />
//       {avatar && <img src={avatar.preview} alt='' width='80%' />}
//     </div>
//   )
// }

//  function ShowHide() {
//   const [show, setShow] = useState(false);
//   return(
//     <div>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Avatar />}
//     </div>
//   )
// }

// function App() {
//   return (<div style={{ padding: 32 }}><ShowHide /></div>)
// }
// export default App;

// -----------------------------------------------------------------------------

// 07 - Fake comments

// import { useState, useEffect } from 'react';

// function emitComment(id) {
//   setInterval(() => {
//     window.dispatchEvent(
//       new CustomEvent(`lesson-${id}`, {
//         detail: `Nội dung comment của lesson ${id}`
//       })
//     )
//   }, 2000)
// }

// emitComment(1)
// emitComment(2)
// emitComment(3)

// const lessons = [
//   {
//     id: 1,
//     name: 'ReacJs là gì'
//   },
//   {
//     id: 2,
//     name: 'SPA/MPA là gì'
//   },
//   {
//     id: 3,
//     name: 'Arrow function là gì'
//   },
// ]

// function Comment() {
//   const [lessonId, setLessonId] = useState(1);

//   useEffect(() => {

//     const handleComment = ({ detail }) => {
//       console.log(detail);
//     }

//     window.addEventListener(`lesson-${lessonId}`, handleComment);

//     return () => {
//       window.removeEventListener(`lesson-${lessonId}`, handleComment);
//     }

//   }, [lessonId]);

//   return (
//     <>
//       <ul>
//         {lessons.map(lesson => (
//           <li
//             key={lesson.id}
//             style={{
//               color: lessonId === lesson.id ?
//                 'red' :
//                 '#333'
//             }}
//             onClick={() => setLessonId(lesson.id)}
//           >
//             {lesson.name}
//           </li>
//         ))}
//       </ul>
//     </>
//   )
// } // End Comment

// function ShowHide() {
//   const [show, setShow] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <Comment />}
//     </div>
//   )
// }

// function App() {
//   return (<div style={{ padding: 32 }}><ShowHide /></div>)
// }
// export default App;

// -----------------------------------------------------------------------------

// 08 - Nhắc lại useEffect

// import { useState, useEffect } from 'react';

// function CountNumber() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     if (count > 3)
//       setCount(0);
//   }, [count])

//   const handleRun = () => {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleRun}>Run</button>
//     </>
//   )
// }

// function ShowHide() {
//   const [show, setShow] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <CountNumber />}
//     </div>
//   )
// }

// function App() {
//   return (<div style={{ padding: 32 }}><ShowHide /></div>)
// }
// export default App;

// -----------------------------------------------------------------------------

// 09 - useLayoutEffect

// import { useState, useLayoutEffect } from 'react';

// function CountNumber() {
//   const [count, setCount] = useState(0);

//   useLayoutEffect(() => {
//     if (count > 3)
//       setCount(0);
//   }, [count])

//   const handleRun = () => {
//     setCount(count + 1);
//   }

//   return (
//     <>
//       <h1>{count}</h1>
//       <button onClick={handleRun}>Run</button>
//     </>
//   )
// }

// function ShowHide() {
//   const [show, setShow] = useState(false);
//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {show && <CountNumber />}
//     </div>
//   )
// }

// function App() {
//   return (<div style={{ padding: 32 }}><ShowHide /></div>)
// }
// export default App;

// -----------------------------------------------------------------------------

// 09 - useRef
// Lưu các giá trị qua 1 tham chiếu bên ngoài function components

// import { useState, useRef } from 'react';

// function App() {
//   const [count, setCount, useEffect] = useState(60);

//   const h1Ref = useRef();
//   const timerId = useRef();

//   const handleStart = () => {
//     timerId.current = setInterval(() => {
//       setCount(prevCount => prevCount - 1);
//     }, 1000);
//     console.log('Start -> ', timerId.current);
//   }

//   const handleStop = () => {
//     clearInterval(timerId.current);
//     console.log('Stop -> ', timerId.current);

//   }

//   return (
//     <div style={{ padding: 32 }}>
//       <h1 ref={h1Ref}>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   )
// }
// export default App;

// -----------------------------------------------------------------------------

// 09 - useRef Accessing DOM Elements

// import { useRef } from "react";

// function App() {
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }

// export default App;

// -----------------------------------------------------------------------------

// React Memo HOC
// Xử lý lại components để tránh những render không cần thiết

// 1. memo() -> Higher Order Component (HOC)
// 2. useCallback()

// import { useState } from "react";
// import Content from "./Content";

// function App() {
//   const [count, setCount] = useState(0);
//   const [count2, setCount2] = useState(0);

//   const increase = () => {
//     setCount(count + 1);
//   }

//   const increase2 = () => {
//     setCount2(count2 + 1);
//   }

//   return (
//     <div style={{padding: '10px 32px'}}>
//       <Content count={count} />
//       <h1>{count}</h1>
//       <h2>{count2}</h2>
//       <button onClick={increase}>Click me!</button>
//       <button onClick={increase2}>Click me 2!</button>
//     </div>
//   );
// }
// export default App;

// -----------------------------------------------------------------------------

// use Callback & Memo
// Giúp tránh tạo ra những hàm mới một cách không cần thiết trong function component

// import { useCallback, useState } from "react";
// import Content from "./Content";

// function App() {
//   const [count, setCount] = useState(0);

//   const handleIncrease = useCallback(() => {
//     setCount(prevCount => prevCount + 1);
//   }, []);

//   return (
//     <div style={{padding: '10px 32px'}}>
//       <Content 
//         onIncrease={handleIncrease} 
//       />
//       <h1>{count}</h1>
//     </div>
//   );
// }

// export default App;

// -----------------------------------------------------------------------------
// useMemo
// import { useState, useMemo, useRef } from "react";

// function App() {
//   const [name, setName] = useState('');
//   const [price, setPrice] = useState('');
//   const [products, setProducts] = useState([]);
//   const nameRef = useRef();

//   const handleSubmit = () => {
//     setProducts([...products, {
//       name,
//       price: +price
//     }]);
//     setName('');
//     setPrice('');

//     nameRef.current.focus();
//   }

//   const total = useMemo(() => {
//     const result = products.reduce((result, prop) => {
//       console.log('Tinh toan lai');
//       return result + prop.price;
//     }, 0);

//     return result;
//   }, [products]);

//   return (
//     <div style={{padding:'10px 32px'}}>
//       <input 
//         ref={nameRef}
//         value={name}
//         placeholder='Enter name...'
//         onChange={e => setName(e.target.value)}
//       />
//       <br />
//       <input 
//         value={price}
//         placeholder='Enter price...'
//         onChange={e => setPrice(e.target.value)}
//       />
//       <br />
//       <button onClick={handleSubmit}>Add</button>
//       <br />
//       Total: {total}
//       <ul>
//         {products.map((product, index) => (
//           <li key={index}>{product.name} - {product.price}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default App;

// -----------------------------------------------------------------------------
// useReducer

// import { useState, useReducer } from 'react';

// const initState = 0;

// const UP_ACTION = 'up';
// const DOWN_ACTION = 'down';

// const reducer = (state, action) => {
//   switch(action) {
//     case UP_ACTION:
//       return state + 1;
//     case DOWN_ACTION:
//       return state - 1;
//     default:
//       throw new Error('Invalid action')
//   }
// }

// function App() {
//   const [count, dispatch] = useReducer(reducer, initState)
//   return (
//     <div style={{padding:'0 20px'}}>
//       <h1>{count}</h1>
//       <button
//         onClick={() => dispatch(DOWN_ACTION)}
//       >Down</button>
//       <button
//         onClick={() => dispatch(UP_ACTION)}
//       >Up</button>
//     </div>
//   )
// }
// export default App;

// -----------------------------------------------------------------------------
// Todo

// import { useReducer, useRef } from 'react';

// const initState = {
//   job: '',
//   jobs: []
// }

// const SET_JOB = 'set_job';
// const ADD_JOB = 'add_job';
// const DELETE_JOB = 'delete_job';

// const setJob = payload => {
//   return {
//     type: SET_JOB,
//     payload
//   }
// }

// const addJob = payload => {
//   return {
//     type: ADD_JOB,
//     payload
//   }
// }
// const deleteJob = payload => {
//   return {
//     type: DELETE_JOB,
//     payload
//   }
// }

// const reducer = (state, action) => {
//   // console.log('Action: ', action);
//   // console.log('Prev state: ', state);
//   let newState;

//   switch(action.type) {
//     case SET_JOB: 
//       newState = {
//         ...state,
//         job: action.payload
//       }
//       break;
//     case ADD_JOB:
//       newState = {
//         ...state,
//         jobs: [...state.jobs, action.payload]
//       }
//       break;
//     case DELETE_JOB:
//       const newJobs = [...state.jobs];
//       newJobs.splice(action.payload, 1);

//       newState = {
//         ...state,
//         jobs: newJobs
//       }
//       break;
//     default:
//       throw new Error('invalid action.');
//   }
//   console.log('New state: ', newState);
//   return newState;
// }

// function App(){
//   const [state, dispatch] = useReducer(reducer, initState)
//   const {job, jobs} = state;

//   const inputRef = useRef();

//   const handleSubmit = () => {
//     dispatch(addJob(job));
//     dispatch(setJob(''));
//     inputRef.current.focus();
//   }

//   return (
//     <div style={{padding: '0 20px'}}>
//       <h3>Todo</h3>
//       <input
//         ref={inputRef}
//         value={job}
//         placeholder='Enter todo...'
//         onChange={e => {
//           dispatch(setJob(e.target.value))
//         }}
//       />
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>
//             {job} 
//             <span onClick={() => dispatch(deleteJob(index))}>
//               &times;
//             </span>
//           </li>
//         ))}
        
//       </ul>
//     </div>
//   )
// }
// export default App;

// -----------------------------------------------------------------------------
// Context (not context)
// CompA => CompB => CompC
// Theme: Dark / Light

// import { useState } from 'react';
// import './App.css';

// function App() {
//   const [theme, setTheme] = useState('dark');

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <button onClick={toggleTheme}>Toggle theme</button>
//       <Content theme={theme} />
//     </div>
//   )
// }

// function Content({ theme }) {
//   return (
//     <div>
//         <Paragraph theme={theme} />
//     </div>
//   )
// }

// function Paragraph({ theme }) {
//   console.log(theme);
//   return (
//     <p className={theme}>
//         Context provides a way to pass data through the component tree without having to pass props down manually at every level
//     </p>
//   )
// }

// export default App;

// -----------------------------------------------------------------------------
// Context (context base)
// 1. Create context
// 2. Provider -> component cha / Nhận dữ liệu
// 3. Consumer -> component con / Đọc dữ liệu

// import { useState, createContext } from 'react';
// import { useContext } from 'react';
// import './App.css';

// export const ThemeContext = createContext();

// function App() {
//   const [theme, setTheme] = useState('dark');

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   }

//   return (
//     <ThemeContext.Provider value={theme}>
//       <div style={{ padding: 20 }}>
//         <button onClick={toggleTheme}>Toggle theme</button>
//         <Content />
//       </div>
//     </ThemeContext.Provider>
//   )
// }

// function Content() {
//   return (
//     <div>
//         <Paragraph />
//     </div>
//   )
// }

// function Paragraph() {
//   const theme = useContext(ThemeContext);
//   return (
//     <p className={theme}>
//         Context provides a way to pass data through the component tree without having to pass props down manually at every level
//     </p>
//   )
// }

// export default App;

// -----------------------------------------------------------------------------
// Context (context advance)

import { ThemeContext } from './ThemeProvider';
import { useContext } from 'react';
import './App.css';

function App() {
  const context = useContext(ThemeContext);
  return (
      <div style={{ padding: 20 }}>
        <button onClick={context.toggleTheme}>Toggle theme</button>
        <Content />
      </div>
  )
}

function Content() {
  return (
    <div>
        <Paragraph />
    </div>
  )
}

function Paragraph() {
  const context = useContext(ThemeContext);
  return (
    <p className={context.theme}>
        Context provides a way to pass data through the component tree without having to pass props down manually at every level
    </p>
  )
}

export default App;