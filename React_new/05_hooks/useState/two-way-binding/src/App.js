import { useState, useEffect, useLayoutEffect } from 'react';

// 1. Random Gift
const gifts = [
  'CPU i9',
  'RAM 32GB RGB',
  'RGB Keyboard',
]

function Gift() {
  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length)
    setGift(gifts[index]);
  }

  return (
    <div>
        <h1>{gift || 'Chưa có phần thưởng'}</h1>
        <button onClick={randomGift}>Lấy thưởng</button>
    </div>
  );

}

// 2. Input
function InputChange() {
  const [name, setName] = useState('');
  
  console.log(name);

  return (
    <>
      <input 
          value={name}
          onChange={e => setName(e.target.value)} 
      />
      <button onClick={() => setName('Nguyen Van Bbbbb') }>Change</button>
    </>
  )

}

// 3. Register
function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log({
      name,
      email
    })
  }
  return (
    <>
      <input 
          value={name}
          onChange={e => setName(e.target.value)} 
      />
      <input 
          value={email}
          onChange={e => setEmail(e.target.value)} 
      />
      <button onClick={handleSubmit }>Register</button>
    </>
  )
}

// 4. Radio
const courses = [
  {
    id: 1,
    name: 'HTML, CSS'
  },
  {
    id: 2,
    name: 'Javascript'
  },
  {
    id: 3,
    name: 'ReactJS'
  },
]

function Radio() {
  const [checked, setChecked] = useState(2);

  const handleSubmit = () => {
    console.log({id: checked});
  }
  return (
    <>
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type='radio'
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit }>Register</button>

    </>
  )
}

// 5. Checkbox
function Checkbox() {
  const [checked, setChecked] = useState([]);

  console.log(checked);

  const handleChecked = (id) => {
    setChecked(prev => {
      const isChecked = checked.includes(id)
      if (isChecked) {
        return checked.filter(item => item !== id);
      } else {
        return [...prev, id]
      }
    })
  }

  const handleSubmit = () => {
    console.log({id: checked});
  }

  return (
    <>
      {courses.map(course => (
        <div key={course.id}>
          <input 
            type='checkbox'
            checked={checked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
          />
          {course.name}
        </div>
      ))}

      <button onClick={handleSubmit }>Register</button>

    </>
  )
}

// 6. TodoList

function TodoList() {
  
  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'));
    console.log(storageJobs);
    return storageJobs;
  });

  const handleSubmit = () => {
    setJobs(prev => {
      const newJobs = [...prev, job];

      // Save to local storage
      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);

      return newJobs;
    });
    setJob('');
  }
  return (
    <>
      <input
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </>
  )
}

// 7. Mounted/Unmounted
function Content() {
  return <h1>Hello world</h1>
}

function ShowHide() {
  const [show, setShow] = useState(false);

  return(
    <>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {/* {show && <Content />} */}
      {/* {show && <Title />} */}
      {/* {show && <Resize />} */}
      {/* {show && <Counter />} */}
      {/* {show && <Avatar />} */}
      {show && <Chat />}
    </>
  )
}

// 8. useEffect
// Event: Add / remove event Listener
// Observer pattern: Subcribe / únubcribe
// Closure
// Timers: setInterval, setTimeout, clearInterval, clearTimeout
// useState
// mounted / unmounted
// ===
// Call API
// 1. useEffect(callback)
// - Goi callback mỗi khi component re-render
// - Goi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
// Chỉ gọi callback 1 lần sau khi component mounted
// 3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi deps thay đổi

// -----------------
// 1. Callback luôn được gọi sau khi component mounted
// 2. Cleanup function luôn được gọi trước khi Component unmounted
// 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

const tabs = ['posts', 'comments', 'albums']

function Title() {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    document.title = title;
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts)
      })
  }, [type]);

  useEffect(() => {

    const handleScroll = () => {
      if(window.scrollY >= 200) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }

  }, [])

  return (
    <>
      {tabs.map(tab => (
        <button
          key={tab}
          style={type === tab ? {
            color:'#fff',
            backgroundColor:'#333',
          }: {}}
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input 
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>

      {showGoToTop && (
        <button
          style={{
            position:'fixed',
            right: 20,
            bottom: 20,
          }}
        >
          Go to Top
        </button>
      )}

    </>
  )
}

function Resize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {

    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    // cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, []);

  return (
    <>
        <h1>{width}</h1>
    </>
  )
}

function Counter() {
  const [countdown, setCountdown] = useState(180);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountdown(prevState => prevState - 1);
      console.log('Countdown...');
    }, 1000);

    return () => clearInterval(timerId);
  }, [])


  return (
    <>
      <h1>{countdown}</h1>
    </>
  )
}

function Avatar() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar]);

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]

    file.preview = URL.createObjectURL(file);

    setAvatar(file);
  }

  return (
    <>
      <input 
        type='file'
        onChange={handlePreviewAvatar}
      />
      {avatar && (
        <img src={avatar.preview} alt='' width='80%' />
      )}
    </>
  )

}

// Fake comments
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

const lessons = [
  {
    id: 1,
    name: 'ReacJs là gì'
  },
  {
    id: 2,
    name: 'SPA/MPA là gì'
  },
  {
    id: 3,
    name: 'Arrow function là gì'
  },
]

function Chat() {
  const [lessonId, setLessonId] = useState(1);

  useEffect(() => {

    const handleComment = ({ detail }) => {
      console.log(detail);
    }

    window.addEventListener(`lesson-${lessonId}`, handleComment );

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment);
    }

  }, [lessonId]);

  return (
    <>
      <ul>
        {lessons.map(lesson => (
          <li
            key={lesson.id}
            style={{
              color: lessonId === lesson.id ? 
                'red' :
                '#333'
            }}
            onClick={() => setLessonId(lesson.id)}
          >
            {lesson.name}
          </li>
        ))}
      </ul>
    </>
  )
}

// useEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Render lại UI
// 4. Gọi Cleanup nếu deps thay đổi
// 5. Gọi useEffect callback

// useLayoutEffect
// 1. Cập nhật lại state
// 2. Cập nhật DOM (mutated)
// 3. Gọi cleanup nếu deps thay đổi (sync)
// 4. Gọi useLayoutEffect callback (sync)
// 5. Render lại UI

function App() {

  return (
    <div style={{ padding: 32 }}>
        <ShowHide />
    </div>
  )
}

export default App;

