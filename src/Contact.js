function Contact() {
  return (
    <div className="m-5">
      <h2>Contact Form</h2>
      <form class="contact-form" action="#" method="POST" />
      <input id="name" type="type" name="name" placeholder="Name" required="" />
      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        required=""
      />
      <textarea
        id="message"
        type="message"
        name="message"
        placeholder="Message"
        required=""
        rows="1"
      ></textarea>
      <input class="button submit-button" type="submit" value="SEND" />
    </div>
  );
}

export default Contact;
