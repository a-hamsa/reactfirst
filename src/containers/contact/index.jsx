import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from 'react-icons/bs';
import { Animate } from "react-simple-animate";
import './styles.scss'

const Contact=()=>{
    return(
        <section id="contact" className="conctact">
            <PageHeaderContent
                headerText = "My Contact"
                icon = {<BsInfoCircleFill size={40} />}
            />
            <div className="contact__content">
                <Animate
                play
                duration={1}
                delay={0}
                start={{ 
                    transform: "translate(-200px)"
                 }}
                end={{ 
                    transform: "translate(0px)"
                 }}
                >
                    <h3 className="contact__content__header-text">Let's Talk</h3>
                </Animate>
                <Animate
                play
                duration={1}
                delay={0}
                start={{ 
                    transform: "translate(-200px)"
                 }}
                end={{ 
                    transform: "translate(0px)"
                 }}
                >
                    <div className="contact__content__form">
                        <div className="contact__content__form__controlswrapper">
                            <div className="namewrapper">
                                <input required name="name" className="inputname" type={'text'} />
                                <label htmlFor="name" className="namelabel">Name</label>
                            </div>
                            <div className="emailwrapper">
                                <input required name="email" className="inputemail" type={'text'} />
                                <label htmlFor="email" className="emaillabel">E-Mail</label>
                            </div>
                            <div className="descriptionwrapper">
                                <textarea required name="description" className="inputdescription" type={'text'} rows="5" />
                                <label htmlFor="description" className="descriptionlabel">Description</label>
                            </div>
                        </div>
                        <button>Submit</button>
                    </div>
                </Animate>
            </div>
        </section>
    )
}
export default Contact;