import { FaUser, FaMapMarkerAlt, FaEnvelopeSquare } from 'react-icons/fa'

const Contact = ()=>{
  return (
    <section className="my-20 lg:mx-20" id="contact">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        <h1 className="sub-title">
            get in touch
        </h1>
      </div>

      <div className="mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="mb-8">
          <div className="text-xl font-bold my-8">Contact Information</div>
          <div className="icons">
            <div className="flex items-center space-x-8">
              <FaUser className="text-primary text-2xl"/>
              <div className="info">
                <div className="font-semibold">Name</div>
                <div className="text-gray-500">Abdulrahman Hamad</div>
              </div>
            </div>
            <div className="flex items-center space-x-8 my-4">
              <FaMapMarkerAlt className="text-primary text-2xl"/>
              <div className="info">
                <div className="font-semibold">Address</div>
                <div className="text-gray-500">Riyadh - Saudi Arabia</div>
              </div>
            </div>
            <div className="flex items-center space-x-8">
              <FaEnvelopeSquare className="text-primary text-2xl"/>
              <div className="info">
                <div className="font-semibold">Email</div>
                <div className="text-gray-500">wadaln3ma@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="column right">
          <div className="text-xl font-bold mb-8">Message me</div>
          <form action="https://mailto:wadaln3ma@gmail.com" method="post" enctype="text/plain">
            <div className="fields">
              <div className="field name">
                <input type="text" placeholder="Name" required 
                  className="form-input"/>
              </div>
              <div className="field email">
                <input type="email" placeholder="Email" required 
                  className="form-input"/>
              </div>
            </div>
            <div className="field">
              <input type="text" placeholder="Subject" required
                className="form-input"/>
            </div>
            <div className="field textarea">
              <textarea cols="30" rows="10" placeholder="Message..." required 
                className="w-full ring-[1px] ring-gray-400 focus:outline-none rounded-lg p-3 mb-4 font-bold hover:ring-primary h-40">
              </textarea>
            </div>
            <div className="button">
              <button type="submit" className="bg-primary px-4 py-3 font-bold text-white rounded-lg hover:bg-transparent hover:text-primary hover:ring-[2px] ring-primary transition duration-200">
              Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
)}

export default Contact
