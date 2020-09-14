import React, {Fragment, useState} from 'react';

const InputDeed = ({onDeedAdded}) =>{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [location, setLocation] = useState("");
    //const [completed, setCompleted] = useState(false);



    // console.log(title)
    // console.log(description)

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
          const body = {title, description, category, location };  
          const response = await fetch("http://localhost:3440/deed", {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify(body)
          });
          let results = await response.json();
          console.log(results);
          onDeedAdded(results);
        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <h1 className="text-center my-5">Input Deeds</h1>
            <form className="d-flex" onSubmit={onSubmitForm}>
                <div>
                    <div>
                    <label>Choose a Category</label>              
                    <select type="text" className="form control" value={category} onChange={e => setCategory(e.target.value)}>
                        <option>BLM</option>
                        <option>Seniors</option>
                        <option>LGBTQ</option>
                    </select>
                    </div>
                    <input type="text" placeholder="add title - 25 chars" className="form-control" value={title} onChange={e=>setTitle(e.target.value)}></input>
                    <input type="text" placeholder="add description" className="form-control" value={description} onChange={e=>setDescription(e.target.value)}></input>
                    <input type="text" placeholder="add location" className="form-control" value={location} onChange={e=>setLocation(e.target.value)}></input>
                    <button className="btn btn-success">Add</button>
                </div>
            </form>
        </Fragment>
    )
}

export default InputDeed;