import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Alert from '../Components/Alert'
import useAlert from '../hooks/useAlert'

const Contact = () => {
    const formRef = useRef(null)
    const [form, setForm] = useState({name: '', email: '', message: ''})
    const [isLoading, setIsLoading] = useState(false)


    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = (e) =>{
        setForm({...form, [e.target.name]: [e.target.value]})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setIsLoading(true);
        emailjs.send(
           import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
           import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
           {
            from_name: form.name,
            to_name: "Ankur",
            from_email: form.email,
            to_email: "ankursharma.1611@gmail.com",
            message: form.message
           },
           import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        ).then(() => {setIsLoading(false);
           showAlert({show: true, text: "Message sent Successfully", type: 'success'})
            // TODO: Hide an alert
            setForm({name: '', email: '', message: ''});
            setTimeout(() => {
                hideAlert();
                setForm({name: '', email: '', message: ''});
            },[3000])

        }).catch((error) => {
            setIsLoading(false)
            console.log(error);
            showAlert({show: true, text: "Failed to send", type: 'danger'})
        })
    }

    const handleFocus = () =>{}
    const handleBlur = () =>{}

  return (
    <section  className='relative flex lg:flex-row flex-col max-container h-[100vh]'>
        {alert.show && <Alert {...alert}/>}
        <div className='flex-1 min-w-[50%] flex flex-col'>
            <h1 className='head-text'>Get in Touch</h1>
            
            <form className='w-full flex flex-col gap-7 mt-14'
                onSubmit={handleSubmit}
            >
                <label className='text-black-500 font-semibold'>
                    Name
                    <input 
                        type='text'
                        name='name'
                        className='input'
                        placeholder='Name'
                        required
                        value={form.name}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </label>
                <label className='text-black-500 font-semibold'>
                    Email
                    <input 
                        type='email'
                        name='email'
                        className='input'
                        placeholder='email@mail.com'
                        required
                        value={form.email}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </label>
                <label className='text-black-500 font-semibold'>
                    Your Message
                    <textarea 
                        name='message'
                        rows={4}
                        className="textarea"
                        placeholder='Let me Know how can i help you !!'
                        required
                        value={form.message}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    />
                </label>
                <button
                type='submit'
                className='btn'
                disabled={isLoading}
                onFocus={handleFocus}
                onBlur={handleBlur}
                >
                    {isLoading ? 'Sending...' : 'Send Message'}
                </button>
            </form>
        </div>
    </section>

  )
}

export default Contact
