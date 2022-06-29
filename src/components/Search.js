import React, { useState } from 'react'
import Fooddata from './FoodData'
import "./style.css"
import Form from 'react-bootstrap/Form'
import Cards from './Cards'

const Search = () => {

    const [fdata, setFdata] = useState(Fooddata)
    //console.Log(fdata);


    const zomatologo = "https://freedesignfile.com/upload/2020/07/GROCERY-STORE-logo-vector.jpg"

    return (
        <>
            <div classname="container d-flex justify-content-between align-items-center">
                <img src={zomatologo} style={{ width: "20rem",position: "relative", left: "40%", cursor: "pointer" }} alt="" />
                <h2 style={{ color: "#1b1464", cursor: "pointer" }} className="mt-3" > Online Grocery store in Greater Noida</h2>
            </div>

            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className=" mx-2 col-lg-4" controlId="formBasicEmail">
                     
                    <Form.Control type="text" placeholder="Search Products" />
                </Form.Group>
                <button className='btn text-light col-lg-1' style={{background:"#ed4c67"}}>Submit</button>
            </Form>
            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{fontWeight:400}}>Guarantee Delivery in 30 mins</h2>

                <div className="row mt-2 d-flex justify-content-around align-items-center">
                    <Cards data={fdata} />
                </div>
            </section>
        </>
    )
}

export default Search 