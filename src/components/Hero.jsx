import React, { useState } from 'react'

const Hero = () => {

  const [click, setclick] = useState(false);
  const [empty, setempty] = useState(true);
  
  const handleToggle = () => setclick(!click);

  const [task, setTask] = useState([]);
  const [input, setInput] = useState('');

  const add = ( e ) =>{
    e.preventDefault();
    if (input === '') return;
    setTask([...task,{
        text:input,
        completed:false
    }]);
    setInput('');
    setempty(false);
    }

    const  remove = (index) => {
        setTask(task.filter((_item,i)=> i !== index));    
    }

    const toggleChecked = (index) => {
        ///haciendo un spread de task con el parametro de index
        const obj = {
            ...task[index]
        };
        // cambiando el valor de object completed a true o false
        obj.completed= !obj.completed;

        setTask([...task.slice(0, index),obj].concat(task.slice(index + 1)));
    }

  

  return (
    <div>
        {!click ? (
        <div className="App">
            <section className="bg-accent-two py-64 md:py-48 text-bg">
                <div className="container md:my-20 mx-auto  items-center justify-center md:justify-between">
                    <div className="all-notes text-center mx-5 md:mx-auto max-w-md justify-self-center pb-5 md:pb-10 ">
                        <h1 className="hero-text-one text-3xl md:text-5xl text-left md:px-2 px-6">
                            The Only Todo App 
                        </h1>
                        <h1 className="hero-text-two text-3xl md:text-5xl mt-2 text-left md:px-2 px-7">
                            You will ever need.
                        </h1>
    
                        <button onClick={handleToggle} className="mt-20 text-2xl outline-none focus:outline-none">
                        <a  className="relative px-6 py-3 font-bold text-accent-one group outline-none focus:outline-none">
                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-bg group-hover:translate-x-0 group-hover:translate-y-0"></span>
                            <span className="absolute inset-0 w-full h-full border-4 border-accent-one"></span>
                            <span className="relative">Get Started</span>
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        </div>
        ) : 
        (
            <section className="bg-accent-two py-32 md:py-16 text-bg">
                <div className="container grid  md:grid-cols-2  md:my-20 mx-auto md:items-start space-x-10 md:space-x-20 justify-start md:justify-left">

                    {/* LEFT HEADING */}
                    <div className="all-notes text-center mx-5 max-w-md justify-self-center md:justify-start pb-5 md:pb-10 ">
                        <div className='heading'>
                            <h1 className="text-3xl md:text-5xl  md:px-2 px-6" >Your Todo List</h1>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div>
                        <div className="justify-self-start mb-6 mt-6 md:mt-0">
                            <input type="text" onChange={e => setInput(e.target.value)}  value={input} className="md:w-6/12 w-full text-sm text-black focus:ring-bg focus:ring-2 md:outline-none outline-none p-2.5 md:p-2.5 " 
                            placeholder="todo todo"/>
                        </div>
                        <div className="button-add md:align-middle ">
                            <button onClick={add}  className="outline-none focus:outline-none text-sm">
                                <a className="relative inline-block px-4 py-2 font-medium group">
                                    <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-1 translate-y-1 bg-text group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                    <span className="absolute inset-0 w-full h-full bg-bg  group-hover:bg-text " ></span>
                                    <span className="relative text-text group-hover:text-bg">New Todo</span>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* LIST OF TODOS */}
                <section className="bg-accent-two py-40 md:py-36 text-bg">
                    <div className='all-notes text-start mx-5 md:mx-auto max-w-md pb-2 md:pb-6 '>
                        <div className="todo-list ">
                            {!empty ? (
                            <div>
                                <ul className="max-w-md divide-y divide-accent-one bg-bg p-2 px-5  ">
                                    {
                                        task.map((item,i) => (
                                            <div key={i}>
                                                <li className="pb-3 sm:pb-4">
                                                    <div className="flex items-center space-x-4  mt-4">
                                                        <div className="flex-1 min-w-0">
                                                        <p className="text-base  text-text truncate ">
                                                            {item.text}
                                                        </p>
                                                        </div>
                                                        <div onClick={() => remove(i)} className="inline-flex items-center text-base font-semibold text-text ">
                                                            <p>X</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </div>
                                        ))
                                    }
                                </ul>
                            </div>
                            ) : (
                            <div className='my-10 p-2 px-5'>

                            </div>
                            )}
                            
                        </div>
                    </div>
                </section>
            </section>
        )}
        
    </div>
  )
}

export default Hero