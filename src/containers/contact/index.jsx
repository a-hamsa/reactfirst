import React from "react";
import PageHeaderContent from "../../components/pageHeader";
import {BsInfoCircleFill} from 'react-icons/bs';

const Contact=()=>{
    return(
        <section id="contact" className="conctact">
            <PageHeaderContent
                headerText = "My Contact"
                icon = {<BsInfoCircleFill size={40} />}
            />
        </section>
    )
}
export default Contact;