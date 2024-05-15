import React from 'react'

const AddList = ({value,setValue,handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
        <div className="input-container">
            <input type="text" className="input"   
             placeholder="Add New Task" 
             value={value}
             onChange={e => setValue (e.target.value)}
             />
            <button className="add-btn" >Add</button>
        </div>
    </form>
  )
}

export default AddList

// {/* <div>
//         <div className="input-container">
//             <input type="text" className="input" ref={inputRef} onKeyUp={handleKeyPress} 
//              placeholder="Add New Task" value={value}
//              onChange={(e) => {
//                 setValue(e.target.value)
//              }}/>
//             <button onClick={addItem} className="add-btn">Add</button>
//         </div>
//     </div> */}

    // const [value, setValue] = useState("")
    // const  inputRef = useRef(null);
    // const addItem = () => {
    //     addTask(value)
    //     setValue("")
    //     inputRef.current.focus();
    // }
    // const handleKeyPress = (event) => {
    //   if (event.key === 'Enter') {
       
    //     addItem()
        
    //   }
    // };