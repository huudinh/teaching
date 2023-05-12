// use Memo
// import { memo } from "react";

// function Content({count}) {
//   console.log('re-render');

//   return (
//     <h3>Hello {count}</h3>
//   )
// }

// export default memo(Content);

// use Callback & memo
import { memo } from "react";

function Content({onIncrease}) {
  console.log('re-render');

  return (
    <>
        <h3>Hello</h3>
        <button onClick={onIncrease}>Click me!</button>
    </>
  )
}

export default memo(Content);