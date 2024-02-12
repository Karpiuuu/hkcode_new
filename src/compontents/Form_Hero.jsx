import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Recaptcha from './Recaptcha';
import ReCAPTCHA from 'react-google-recaptcha';

function Form_Hero() {
    const form = useRef();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const [recaptchaToken, setRecaptchaToken] = useState('');

    const handleRecaptchaChange = (token) => {
        setRecaptchaToken(token);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        
        if (!recaptchaToken) {
            setErrorMessage('Potwierdź, że nie jesteś robotem.');
            return;
        }

        const formData = new FormData(form.current);
        const checkboxChecked = formData.get('regulamin') === 'on';
        const fieldsFilled =
            formData.get('user_name') &&
            formData.get('user_email') &&
            formData.get('user_topic') &&
            formData.get('message');

        if (!fieldsFilled || !checkboxChecked) {
            setErrorMessage('Wypełnij wszystkie pola i zaakceptuj regulamin.');
            return;
        }

        try {
            await emailjs.sendForm('service_sbazo4z', 'template_dgwotf4', form.current, {
                publicKey: 'Uz10yZXle6TLMXztB',
            });
            console.log('SUCCESS!');
            setShowSuccessMessage(true);
            form.current.reset();

        } catch (error) {
            console.error('FAILED...', error);
        }
    };

    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 py-[100px]'>
                <div className='md:hidden block animate-slide-from-right text-center'>
                    <h2 className='text-[white] text-[50px] font-medium'>Skontaktuj się z nami</h2>
                    <p className='text-[#333333] text-[20px] font-normal py-[10px] mb-[20px]'>Napisz parę słów od serca massa metus, dapibus ac sagittis eget, gravida sit amet magna. Vivamus feugiat gravida tellus ac iaculis.</p>
                </div>
                <div className='flex flex-col w-[80%] animate-slide-from-left mx-auto md:mx-[1px]'>
                    <div className='flex glass-form-box p-8 '>
                        <div className='mx-auto w-full'>
                            <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                                <input type="text" name="user_name" placeholder="Imię i nazwisko" className='shadow-md rounded px-6 py-4 glass-form'/>
                                <br />
                                <input type="email" name="user_email" placeholder="E-mail" className='shadow-md rounded px-6 py-4 glass-form'/>
                                <br />
                                <input type="text" name="user_topic" placeholder="Temat" className='shadow-md rounded px-6 py-4 glass-form'/>
                                <br />
                                <textarea name="message" rows="10" placeholder='Treść wiadomości' className='shadow-md rounded px-6 py-4 glass-form'></textarea>
                                
                                <div className='flex py-4 w-full'>
                                    <input type="checkbox" id="regulamin" name="regulamin" className='form-checkbox h-[20px] w-[20px] rounded-full'/>
                                    <label htmlFor="regulamin" className='text-[15px] font-normal text-[#444048]'>&nbsp;Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w formularzu</label>
                                </div>
                                <input type="submit" value="Wyślij wiadomość" className='flex mx-auto my-[20px] hover:scale-105 duration-300 bg-white text-black text-[20px] rounded-full w-[200px] h-[52px] items-center justify-center'/>
                                <Recaptcha onChange={handleRecaptchaChange} />
                                {errorMessage && <div className="bg-red-500 text-white p-4 mb-4 rounded">{errorMessage}</div>}
                                {showSuccessMessage && <div className="bg-green-500 text-white p-4 mb-4 rounded">Poprawnie przesłano formularz!</div>}
                            </form>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block animate-slide-from-right'>
                    <h2 className='text-[white] text-[50px] font-medium'>Skontaktuj się z nami</h2>
                    <p className='text-[#333333] text-[20px] font-normal py-[10px] mb-[20px]'>Napisz parę słów od serca massa metus, dapibus ac sagittis eget, gravida sit amet magna. Vivamus feugiat gravida tellus ac iaculis.</p>
                </div>
            </div>
        </div>
    );
}

export default Form_Hero;
