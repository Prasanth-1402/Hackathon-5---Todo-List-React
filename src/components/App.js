import React, {useState} from "react";
import "./../styles/App.css";
import ListItem from "./ListItem.js";
function App() 
{
	const [items, setItems] = useState([]);
	const [newItem, setNewItem] = useState("");
	const addItem = () => {
		items.push(newItem);
		setItems([...items]);
		setNewItem("");
		// console.log([...items]);
	}

	const newItemChanged = (evt) =>{
		setNewItem(evt.target.value);
	}
	const deleteHandler = (itemIndex) => {
		items.splice(itemIndex, 1);
		setItems([...items]);
	}
	const editHandler = (editedValue, itemidx) => {
		items[itemidx] = editedValue;
		setItems([...items]);
	}	

	return (
		<>
			<div id="main">
				<textarea onChange={newItemChanged} id= "task" value={newItem} placeholder = "New Task" > </textarea>
				<button id='btn' onClick={addItem} disabled = {newItem.trim().length === 0}> Add </button>
				{
					
					items.map((item,idx) => (
						// {console.log("Hi from map1 " + item + " "+idx)}
						<ListItem item = {item} key = {`${item}_${idx}`} idx = {idx} editHandler = {editHandler} deleteHandler ={deleteHandler}/>
						// {console.log("Hi from map2")}
					))
				} 
			</div>
		</>
	);
}


export default App;
