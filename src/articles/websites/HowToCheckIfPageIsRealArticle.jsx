import React from 'react'
import Navbar from '../../compontents/Navbar'
import Footer from '../../compontents/Footer'

function HowToCheckIfPageIsRealArticle() {
  return (
    <div className='px-4 w-full'>
        <Navbar />
        <header class="   ">
        <div class="container mx-auto py-4">
            <h1 class="text-3xl font-bold text-center">Jak sprawdzić czy strona internetowa jest prawdziwa?</h1>
        </div>
    </header>
    <section class="container mx-auto my-8">
        <p class="mb-4">W dobie internetu pełnego fałszywych informacji, ważne jest umiejętne rozróżnianie prawdziwych stron od oszustw. Oto kilka sposobów, które pomogą ci sprawdzić autentyczność strony internetowej:</p>
        <ol class="list-decimal ml-8">
            <li class="mb-2"><strong>Sprawdź adres URL:</strong> Prawdziwe strony internetowe zazwyczaj mają adresy URL z odpowiednimi domenami, takimi jak .com, .org, .pl itp. Unikaj podejrzanych domen, szczególnie z nieznanymi rozszerzeniami.</li>
            <li class="mb-2"><strong>Sprawdź certyfikat SSL:</strong> Większość prawdziwych stron internetowych korzysta z certyfikatu SSL, który zapewnia bezpieczne połączenie. Możesz sprawdzić to przez zielony zamek w pasku adresu przeglądarki.</li>
            <li class="mb-2"><strong>Zweryfikuj informacje kontaktowe:</strong> Prawdziwe strony internetowe zazwyczaj udostępniają informacje kontaktowe, takie jak adres, numer telefonu lub adres e-mail.</li>
            <li class="mb-2"><strong>Analizuj zawartość strony:</strong> Sprawdź treść strony pod kątem błędów gramatycznych, logicznych nieścisłości i jakości grafiki. Wiarygodne strony zazwyczaj starają się utrzymać wysoki standard treści i wyglądu.</li>
        </ol>
    </section>
    <section class="container mx-auto my-8">
        <h2 class="text-2xl font-bold mb-4">Słowa kluczowe związane ze sprawdzaniem prawdziwości strony internetowej:</h2>
        <ul class="list-disc ml-8">
            <li class="mb-2">Jak sprawdzić czy strona internetowa jest prawdziwa</li>
            <li class="mb-2">Tworzenie stron internetowych</li>
            <li class="mb-2">Bezpieczeństwo stron internetowych</li>
            <li class="mb-2">Certyfikat SSL</li>
            <li class="mb-2">Weryfikacja informacji kontaktowych</li>
            <li class="mb-2">Analiza zawartości strony internetowej</li>
            <li class="mb-2">Weryfikacja autentyczności strony</li>
        </ul>
    </section>
    <Footer />
    </div>
  )
}

export default HowToCheckIfPageIsRealArticle