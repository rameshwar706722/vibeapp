import React from 'react';
import axios from 'axios';
import { useState,useEffect } from "react";
import { useParams,Link, useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Contact(props){
    
    const [inputField , setInputField] = useState({name:'',phone:'',msg:''});

    const handleChange = (e) =>{
        const value = e.target.value;
        setInputField({
            ...inputField,
            [e.target.name]: value
        });
    }
    

    const formSubmit = param => e => {e.preventDefault();
        //console.log('param '+param);return false;
        //if(inputField.lot==''){alert("Please Enter Lot");return false;}
        
      
        axios.post('https://swastikamplemcx.com/Rest/contact_api/'+localStorage.getItem('userid'), {name:inputField.name,mobile:inputField.phone,
    message:inputField.msg,email:'',subject:'Enq Mail'})
            .then((res) => {
            //console.log(res.data);return false;
            alert(res.data.msg);
        }).catch((err) => alert("Error start trading"));    
    }

        return (     
            <div>
            <Helmet>
            <title>MCX Trading</title>
            <link rel="stylesheet" href="/site/css/style.css"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/> 
            <script src="/site/js/lib/bootstrap.bundle.min.js"></script>
            <script src="/site/js/plugins/splide/splide.min.js"></script>
            
            </Helmet>
            
            <div className="appHeader no-border">
        <div className="left">
            <Link to="/settings" className="headerButton goBack">
                <i className="fa fa-arrow-left"></i> 
            </Link>
        </div>
        <div className="pageTitle">Contact Enquiry</div>
        <div className="right"> </div>
    </div>
    <div id="appCapsule">
    
        <div className="section">
            <div className="splash-page  pt-1 pb-1">
                
                        <div className="form-group basic">
                            <div className="input-wrapper">
                                <label className="label" for="email1">Name</label>
                                <input type="text" name="name" value={inputField.name} onChange={handleChange} 
                                 className="form-control" placeholder=""/>
                            </div>
                        </div>

                        <div className="form-group basic">
                            <div className="input-wrapper">
                                <label className="label" for="email1">Phone</label>
                                <input type="text" name="phone" value={inputField.phone} onChange={handleChange} 
                                 className="form-control" placeholder=""/>
                            </div>
                        </div>

                        <div className="form-group basic">
                            <div className="input-wrapper">
                                <label className="label" for="email1">Message</label>
                                <textarea type="text" name="msg" rows="3" onChange={handleChange} 
                                 className="form-control" placeholder=""></textarea>
                            </div>
                        </div>

                    

            
        </div>
        {/* <div className="section full">
                    <div className="wide-block pt-1 pb-1">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onChange={handleChange} value='normal' type="radio" name="otype"
                            checked={inputField.otype === "normal"}/>
                            <label className="form-check-label" for="normal"> Normal Order </label>
                        </div> &nbsp;&nbsp;&nbsp;
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" onChange={handleChange} value='stoploss' type="radio" name="otype" 
                            checked={inputField.otype === "stoploss"}/>
                            <label className="form-check-label" for="stoploss"> Stoploss </label>
                        </div> 
                    </div>
                </div> */}
            </div>

        <div className="fixed-bar">
        <button type='button' onClick={formSubmit()} className="btn btn-lg btn-danger btn-block">SUBMIT</button>
        </div>

    </div>
            </div>
        )
    }



