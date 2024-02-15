import React from 'react'
import Navbar from '../compontents/Navbar'
import Footer from '../compontents/Footer'

function HowToCheckIfPageIsSecureArticle() {
  return (
    <div className='px-4 w-full'>
        <Navbar />
         <header class="   ">
        <div class="container mx-auto py-4">
            <h1 class="text-3xl font-bold text-center">Jak sprawdzić czy strona internetowa jest bezpieczna?</h1>
        </div>
    </header>
    <section class="container mx-auto my-8">
        <p class="mb-4">Bezpieczeństwo w Internecie jest kluczowym zagadnieniem, zwłaszcza w przypadku odwiedzania różnych stron internetowych. Oto kilka kroków, które pomogą ci ocenić bezpieczeństwo strony internetowej:</p>
        <ol class="list-decimal ml-8">
            <li class="mb-2"><strong>Sprawdź adres URL:</strong> Prawdziwe strony internetowe zazwyczaj posiadają odpowiednie domeny, takie jak .com, .org, .pl itp. Unikaj podejrzanych domen i subdomen.</li>
            <li class="mb-2"><strong>Upewnij się, że strona używa protokołu HTTPS:</strong> Bezpieczne strony internetowe korzystają z protokołu HTTPS, co oznacza, że ​​dane są szyfrowane między twoją przeglądarką a serwerem.</li>
            <li class="mb-2"><strong>Sprawdź certyfikat SSL:</strong> Większość bezpiecznych stron internetowych posiada certyfikat SSL, który zapewnia, że twoje dane są bezpieczne podczas transmisji.</li>
            <li class="mb-2"><strong>Analizuj zawartość strony:</strong> Unikaj stron z nieaktualną lub podejrzaną zawartością, błędami gramatycznymi lub brakiem informacji kontaktowych.</li>
            <li class="mb-2"><strong>Uważaj na phishing:</strong> Ostrożnie podchodź do stron internetowych, które próbują uzyskać twoje poufne dane, takie jak hasła czy numery kart kredytowych.</li>
        </ol>
    </section>
    <section class="container mx-auto my-8">
        <h2 class="text-2xl font-bold mb-4">Słowa kluczowe związane z bezpieczeństwem strony internetowej:</h2>
        <ul class="list-disc ml-8">
            <li class="mb-2">Jak sprawdzić czy strona internetowa jest bezpieczna</li>
            <li class="mb-2">Tworzenie stron internetowych</li>
            <li class="mb-2">Bezpieczeństwo stron internetowych</li>
            <li class="mb-2">Protokół HTTPS</li>
            <li class="mb-2">Certyfikat SSL</li>
            <li class="mb-2">Analiza zawartości strony internetowej</li>
            <li class="mb-2">Ochrona danych osobowych</li>
            <li class="mb-2">Phishing</li>
        </ul>
    </section>
    <Footer />
    </div>
  )
}

export default HowToCheckIfPageIsSecureArticle