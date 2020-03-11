import React from 'react';
import skype_cont from './img/skype_cont.jpg';
import mail_cont from './img/mail_cont.jpg';
import phone_cont from './img/phone_cont.png';

function Contacts(){
    return( 
        <div id="contact_bg"> 
            <h3 className="contactsh3">CONTACTS</h3>
            <div id="contacts">
                <div className="formcont">
                    <p>Feedback form:</p>
                    <input id="inpPhone" type="text" placeholder="Phone" required/>
                    <input id="inpEmail" type="text" placeholder="Email" required/>
                    <textarea placeholder="Message" required>
                    </textarea> 
                    <button>Ok</button> 
                </div>
                <div className="contacts">
                    <div>
                    <img src={phone_cont}/> <span>Phone: +1 917 292 6494</span>
                    </div>
                    <div>
                    <img src={mail_cont}/> <span>Email: denisbalandin.work@yahoo.com</span>
                    </div>
                    <div>
                    <img src={skype_cont}/> <span>Skype: denis.balandin17@yahoo.com </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contacts;