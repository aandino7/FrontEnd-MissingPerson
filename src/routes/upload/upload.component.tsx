import "./upload.css";
import { useNavigate } from "react-router-dom";
  
const Upload = () => {
const Navigate = useNavigate(); 
const ClickCheck = () => {
  Navigate("/found")
}
return <div>  

<div className="div1">    

<form>
<label>
Name
<input type="text" className="borderr" />
</label>

<br></br>

<label>
Last Name
<input type="text" className="borderr" />
</label>

<br></br>

<label>
Last Seen
<input type="text" className="borderr" />
</label>

<br></br>

<label>
Date:   
<input className="date" type="date" name="date" />
</label>

<br></br>

<input className="subir" type="file" id="myfile" name="myfile"/>

<br></br>

<div className="wrap">
<button onClick={() => ClickCheck()} className="button">Check</button>
</div>

</form>

</div> 

</div>;
};

export default Upload;