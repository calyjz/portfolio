// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from '@formspree/react';
import { Contact } from 'lucide-react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xnjqpdgr");
  if (state.succeeded) {
    return (
      <div className='self-center'>
        <p>Thank you for your message!</p>
      </div>
    );
  }
    return (
        <div className='connect-form'>
          <form className='w-full' onSubmit={handleSubmit}>

            <label htmlFor="email">
              <h5>Email</h5>
            </label>
            <input
              id="email"
                type="email" 
                name="email"
              className='px-4 w-full focus:outline-none focus:ring focus:border-blue-50'
            />
            <ValidationError 
              prefix="Email" 
                field="email"
              errors={state.errors}
            />

              <h5>Message</h5>
              <textarea
                id="message"
                name="message"
                className="px-4 p-2 h-20 focus:outline-none focus:ring focus:border-blue-50"
              />
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
              />
              
            <button type="submit" disabled={state.submitting}>Submit</button>
        </form>
        </div>
  );
}

const Connect = () => {
  return (
    <div id="connect" className='connect-container'>
      <div className="title-header">
          <h3>━━ Connect</h3>
      </div>
      <ContactForm />
    </div>
  )
}

export default Connect;