import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { baseProfile } from '../constants/profile.js';
import Button from '../components/Button.jsx';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef(null);
  const [hasCopied, setHasCopied] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: '', text: '' });

  const handleCopy = () => {
    navigator.clipboard.writeText(baseProfile.basics.email);
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setAlert({
        show: true,
        type: 'success',
        text: 'Message sent successfully!',
      });

      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      console.log(err);
      setAlert({
        show: true,
        type: 'danger',
        text: 'Something went wrong. Please try again.',
      });
    } finally {
      setIsLoading(false);

      // Hide alert after 3 seconds
      setTimeout(() => {
        setAlert({ show: false, type: '', text: '' });
      }, 3000);
    }
  };

  return (
    <section className="c-space my-20" id="contact">
      <div className="w-full text-white-600">
        <p className="head-text">Get in Touch</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-black-100 p-8 rounded-2xl">
            <div className="space-y-6">
              <div>
                <p className="text-2xl font-bold text-white">Let&apos;s Connect</p>
                <p className="text-gray-400 mt-2">
                  I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi,
                  I&apos;ll try my best to get back to you!
                </p>
              </div>

              <div className="space-y-4">
                <div
                  className="flex items-center space-x-4 p-4 bg-black-200 rounded-lg cursor-pointer"
                  onClick={handleCopy}>
                  <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" className="w-6 h-6" />
                  <p className="text-lg font-medium text-white">{baseProfile.basics.email}</p>
                </div>

                <div className="flex space-x-4">
                  <a
                    href={baseProfile.basics.profiles[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-black-200 rounded-lg hover:bg-black-300 transition-colors">
                    <img src="assets/linkedin.svg" alt="linkedin" className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/raza-kontakt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-black-200 rounded-lg hover:bg-black-300 transition-colors">
                    <img src="assets/github.svg" alt="github" className="w-6 h-6 object-contain" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black-100 p-8 rounded-2xl">
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black-200 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black-200 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black-200 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"></textarea>
              </div>

              <Button
                name={isLoading ? 'Sending...' : 'Send Message'}
                isBeam={!isLoading}
                containerClass="w-full"
                type="submit"
                disabled={isLoading}
              />
            </form>
          </div>
        </div>
      </div>

      {alert.show && <Alert type={alert.type} text={alert.text} />}
    </section>
  );
};

export default Contact;
