import React from 'react';
import skype_cont from './img/skype_cont.jpg';
import mail_cont from './img/mail_cont.jpg';
import phone_cont from './img/phone_cont.png';

function Contacts(){
    console.debug('1');
setTimeout(() => console.debug('2'),0);
new Promise((resolve) => {
	console.debug('3');
    resolve();
}).then(() => {
	console.debug('5');
});
console.debug('4');
    return( 
        <div id="contact_bg"> 
            <h3 className="contactsh3">CONTACTS</h3>
            <div id="contacts">
                <div className="formcont">
                    <p>Feedback form:</p>
                    <input id="inpPhone" type="text" placeholder="Phone"/>
                    <input id="inpEmail" type="text" placeholder="Email"/>
                    <textarea placeholder="text">
                    </textarea> 
                </div>
                <div className="contacts">
                    <div>
                    <img src={phone_cont}/> <span>Phone:</span>
                    </div>
                    <div>
                    <img src={mail_cont}/> <span>Email: denis.balandin16@yahoo.com  </span>
                    </div>
                    <div>
                    <img src={skype_cont}/> <span>Skype: denis.balandinq </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contacts;