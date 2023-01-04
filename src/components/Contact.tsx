export const Contact = () => {
  return (
    <div className="bg-primary text-white p-3 m-5 w-25 mx-auto">
      <form className="p-5">
        <h2 className="text-center fs-1 fw-bold text-dark mb-4">Contact Us</h2>

        <div className="mb-3 text-dark fs-3 fw-bold">
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control fs-3" id="first-name" />
        </div>

        <div className="mb-3 text-dark fs-3 fw-bold">
          <label htmlFor="last-name" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control fs-3" id="last-name" />
        </div>

        <div className="mb-3 mt-3 text-dark fs-3 fw-bold">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            className="form-control fs-3"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3 text-dark fs-3 fw-bold">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="form-control fs-3" id="message" rows={8} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
