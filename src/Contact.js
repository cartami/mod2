function Contact() {
  return (
    <div className="m-5 p-3">
      <div class="form">
        <h2 className="mb-3 pl-3">Contact Form</h2>
        <form class="flex flex-col content-start" action="#" method="POST" />
        <input
          className="block mb-2.5 w-auto bg-[#ced7dd] text-[#1b1b1b] 
          rounded-sm border-solid"
          id="name"
          type="type"
          name="name"
          placeholder="Name"
          required=""
        />
        <input
          className="block mb-2.5 w-auto bg-[#ced7dd] text-[#1b1b1b]
          border-2 
          rounded-sm border-solid"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required=""
        />
        <textarea className="block mb-2.5 w-auto bg-[#ced7dd] text-[#1b1b1b]
        border-2 
        rounded-sm border-solid"
          id="message"
          type="message"
          name="message"
          placeholder="Message"
          required=""
          rows="1"
        ></textarea>
        <input className="cursor-pointer w-20 bg-[#f15208] text-[#fff]" 
        type="submit" 
        value="SEND" />
      </div>
    </div>
  );
}

export default Contact;
