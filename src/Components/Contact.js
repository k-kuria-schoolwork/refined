import React from 'react'

function Contact() {
  return (
    <div className='contactcontainer'>
      <div>
          <form class="form">
        <div class="title">Contact us</div>
        <input type="text" placeholder="Your Name" class="input"/>
        <input type="text" placeholder="Your email" class="input"/>
        <textarea placeholder="Your message"></textarea>
        <button>Submit</button>
        </form>
      </div>

      <div className='adrress'>
        <div>
          <h5>ADDRESS</h5>
          <p>725 5TH Ave, New York, NY10022</p>
        </div>
        <div>
          <h5>PHONES</h5>
          <p>0768696986</p>
          <p>0768696986</p>
        </div>
        <div>
          <h5>EMAIL</h5>
          <p>kungukuria@gmail.com</p>
        </div>
        <div>
          <h5>WORKING HOURS</h5>
          <p>Mon-Fri 10:00am - 6:00pm</p>
        </div>
        <div>
          <h5>FOLLOW US</h5>
          <p>725 5TH Ave, New York, NY10022</p>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
