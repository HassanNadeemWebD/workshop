import React from 'react'
// import cardImg from './logo192.png';

export default function Card(props) {
    return (
        <div className='col-md-3 col-lg-3'>

            <div className="card mt-5 ms-5" style={{width:"18rem",color:"red"}}>
                <img src={props.cardImg} className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{props.cardTitle}</h5>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>

        </div>
    ) 
}
