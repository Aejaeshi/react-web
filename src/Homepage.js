const Homepage = () =>{
    const click =()=>{
        console.log('hello world')
    }



  return (
   <div className="home">
    <h2>Home Page</h2>
    <button onClick={click}>click</button>
   </div>
  )
}

export default Homepage
