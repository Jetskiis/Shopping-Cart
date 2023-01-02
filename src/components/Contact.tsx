export const Contact = () => {
  return (
    <div className="bg-primary text-white p-3 m-5">
      <form className="p-5">

        <h2 className="text-center">Contact Us</h2>

        <div className="mb-3 mt-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input type="text" className="form-control" id="first-name" />
        </div>

        <div className="mb-3">
          <label htmlFor="last-name" className="form-label">
            Last Name
          </label>
          <input type="text" className="form-control" id="last-name" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea className="form-control" id="message" rows={3} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
