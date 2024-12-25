import React, { useEffect, useRef, useState } from 'react'

const App = () => {

  const oggyRef = useRef(null)
  const [xvalue, setXValue] = useState(50)
  const [yvalue, setYValue] = useState(50)

 const check=(event)=>{
  var pressedKey=event.key;
  const step=5;
  if(pressedKey ==='ArrowDown'){
    setYValue(yvalue+step)
    oggyRef.current.style.top=yvalue+'%'
    console.log("neeche toh dekho bsk");
  }
  else if(pressedKey === 'ArrowUp'){ 
    setYValue(yvalue-step)
    oggyRef.current.style.top=yvalue+'%'
  }

  else if (pressedKey === 'ArrowRight'){
    
    setXValue(xvalue+step)

    oggyRef.current.style.left=xvalue+'%'

  }
  else if(pressedKey === 'ArrowLeft'){
    setXValue(xvalue-step)
    oggyRef.current.style.left=xvalue+'%'
  }


 }

//  useEffect(function(){
//   check(event)
//  },[yvalue,xvalue])


 

  return (
    <div 
    tabIndex="0"
    onKeyDown={(event)=>{
      check(event)

    }
  }
    className='h-screen w-full bg-black relative overflow-hidden '>

      <h1 className='text-2xl font-semibold text-center'>Move image by the pressing cursor keys... </h1>
      <img 
      ref={oggyRef}
      className='h-60 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out'
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/96768393-b5ef-4ecd-b39c-6ef9c12ef61a/dgnid74-e506cf25-aad2-42d7-8a26-2b0739ab66fb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk2NzY4MzkzLWI1ZWYtNGVjZC1iMzljLTZlZjljMTJlZjYxYVwvZGduaWQ3NC1lNTA2Y2YyNS1hYWQyLTQyZDctOGEyNi0yYjA3MzlhYjY2ZmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.h1RWRnD6K0lxv6auiKuh4Xp64SFcqoVlaPYEGTkNo7U" alt="" />
    </div>

  )
}

export default App