import emailjs from "emailjs-com";
import React from "react";

export default function ContactContent() {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_4bpEg06l', e.target, 'user_Jkx2uuZlp7YZrseCuhOWf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      }
    
    
      return(
        <div className="bg-blue-200">
            <div className=" flex justify-center max-h-screen">
            <form onSubmit={sendEmail}>
                    <div className="row pt-16 pb-20 mx-auto" >
                        <div >
                            <input className="w-96 cursive tracking-wider pt-2 pb-2 pl-2 rounded-lg" type="text"  placeholder="your name" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input className="w-96 cursive tracking-wider pt-2 pb-2 pl-2 rounded-lg" type="email" id="email" placeholder="your email" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input className="w-96 cursive tracking-wider pt-2 pb-2 pl-2 rounded-lg" type="text"  id="subject" placeholder="the subject of this correspondence" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="w-96 cursive tracking-wider pt-2 pb-2 pl-2 rounded-lg" cols="30" rows="8" id="text" placeholder="your message to jackie" name="message"></textarea>
                        </div>
    
    
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-dark btnContact bg-blue-500 cursive tracking-wider hover:text-white pt-2 pb-2 pl-2 pr-2 rounded-lg" id="button" value="send message"></input>
                        </div>
    
    
                    </div>
                </form>
            </div>
        </div>
    )
    

}
