import React from "react";
import ReactDOM from "react-dom";




//create your first component
const Home = (props) => {
	return (

		< >		


<div className="container text-center">
  <div className="row">
    <div className="col m-5 pt-5 pb-5">
	<i className="far fa-clock"></i>
    </div>
   
    <div className="col m-5 pt-5 pb-5">
	<h1>{props.hora}</h1>
    </div>

	<div className="col m-5 pt-5 pb-5">
	<h1>{props.minuto2}</h1>
    </div>

	<div className="col m-5 pt-5 pb-5">
	<h1>{props.minuto}</h1>
    </div>


	<div className="col m-5 pt-5 pb-5">
	<h1>{props.segundos2}</h1>
    </div>


	<div className="col m-5 pt-5 pb-5">
	<h1> {props.segundos}</h1>
    </div>
  </div>
</div>


</ >		

	  );
  };

export default Home;
