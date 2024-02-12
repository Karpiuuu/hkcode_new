import React from 'react'

function Form_Hero() {
  return (
    <div className='w-full'>
        {/* Wersja desktopowa */}
        <div className='hidden max-w-[1240px] mx-auto md:grid md:grid-cols-2 py-[100px]'>
            <div className='flex flex-col w-[80%] animate-slide-from-left mx-auto md:mx-[1px]'>
                <div className='flex glass-form-box p-8 '>
                    <div className='mx-auto w-full'>
                    <form action="" className='flex flex-col'>
                        <input type="text" name="" id="" placeholder="Imię i nazwisko" className='shadow-md rounded px-6 py-4 glass-form'/>
                        <br />
                        <input type="email" name="" id="" placeholder="E-mail" className='shadow-md rounded px-6 py-4 glass-form'/>
                        <br />
                        <input type="text" name="" id="" placeholder="Temat" className='shadow-md rounded px-6 py-4 glass-form'/>
                        <br />
                        <textarea name="" id="" rows="10" placeholder='Treść wiadomości' className='shadow-md rounded px-6 py-4 glass-form'></textarea>
                        
                        <div className='flex py-4 w-full'>
                            <input 
                                type="checkbox" 
                                id="myCheckbox" 
                                className='form-checkbox h-[20px] w-[20px] rounded-full'
                            />
                            <label 
                                htmlFor="myCheckbox" 
                                className='text-[15px] font-normal text-[#444048]'
                            >
                                &nbsp;Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w formularzu
                            </label>
                        </div>

                        
                    </form>
                    </div>
                    
                    
                </div>
                <button className='flex mx-auto my-[20px] hover:scale-105 duration-300 bg-white text-black text-[20px] rounded-full w-[200px] h-[52px] items-center justify-center'><a href="">Wyślij wiadomość</a></button>
            </div>
            <div className='animate-slide-from-right'>
                <h2 className='text-[white] text-[50px] font-medium'>Skontaktuj się z nami</h2>
                <p className='text-[#333333] text-[20px] font-normal py-[10px] mb-[20px]'>Napisz parę słów od serca massa metus, dapibus ac sagittis eget, gravida sit amet magna. Vivamus feugiat gravida tellus ac iaculis.</p>
            </div>
        </div>
        {/* Wersja mobilna */}
        <div className='md:hidden max-w-[1240px] mx-auto grid md:grid-cols-2 py-[120px]'>
            {/* Lewy */}
            <div className='animate-slide-from-left'>
                <h2 className='text-[white] text-[50px] font-medium mx-auto text-center'>Skontaktuj się z nami</h2>
                <p className='text-[#333333] text-[20px] font-normal py-[10px] text-center'>Napisz parę słów od serca massa metus, dapibus ac sagittis eget, gravida sit amet magna. Vivamus feugiat gravida tellus ac iaculis.</p>
            </div>
            {/* Prawy */}
            <div className='flex flex-col w-[80%] animate-slide-from-right mx-auto md:mx-[1px] mt-[20px]'>
                <div className='flex glass-form-box p-8 '>
                    <div className='mx-auto w-full'>
                    <form action="" className='flex flex-col'>
                        <input type="text" name="" id="" placeholder="Imię i nazwisko" className='shadow-md rounded px-6 py-4 glass-form'/>
                        <br />
                        <input type="email" name="" id="" placeholder="E-mail" className='shadow-md rounded px-6 py-4 glass-form'/>
                        <br />
                        <input type="text" name="" id="" placeholder="Temat" className='shadow-md rounded px-6 py-4 glass-form'/>
                        <br />
                        <textarea name="" id="" rows="10" placeholder='Treść wiadomości' className='shadow-md rounded px-6 py-4 glass-form'></textarea>
                        
                        <div className='flex py-4 w-full'>
                            <input 
                                type="checkbox" 
                                id="myCheckbox" 
                                className='form-checkbox h-[20px] w-[20px] rounded-full'
                            />
                            <label 
                                htmlFor="myCheckbox" 
                                className='text-[15px] font-normal text-[#444048]'
                            >
                                &nbsp;Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w formularzu
                            </label>
                        </div>

                        
                    </form>
                    </div>
                    
                    
                </div>
                <button className='flex mx-auto my-[20px] hover:scale-105 duration-300 bg-white text-black text-[20px] rounded-full w-[200px] h-[52px] items-center justify-center'><a href="">Wyślij wiadomość</a></button>
            </div>
        </div>
    </div>
  )
}

export default Form_Hero