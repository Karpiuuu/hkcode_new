import React from 'react'
import Navbar from '../compontents/Navbar'
import Footer from '../compontents/Footer'

function WherePageArticle() {
  return (
    <div className='px-4 w-full'>
        <Navbar />
        <header class="   ">
        <div class="container mx-auto py-4">
            <h1 class="text-3xl font-bold text-center">Gdzie jest strona internetowa?</h1>
        </div>
    </header>
    <section class="container mx-auto my-8">
        <p class="mb-4">Często zdarza się, że strona internetowa nie jest dostępna lub użytkownicy mają trudności z jej znalezieniem. Poniżej przedstawiamy kilka możliwych przyczyn i sposoby ich rozwiązania:</p>
        <ul class="list-disc ml-8">
            <li class="mb-2"><strong>Problemy z serwerem hostingowym:</strong> Strona internetowa może być niedostępna z powodu problemów z serwerem hostingowym. Upewnij się, że płatności za hosting są opłacone i skontaktuj się z dostawcą, aby sprawdzić, czy nie ma problemów z serwerem.</li>
            <li class="mb-2"><strong>Problemy z DNS:</strong> Jeśli adres domeny nie został poprawnie skonfigurowany, strona może być niedostępna. Sprawdź u dostawcy domeny, czy wszystkie ustawienia DNS są prawidłowe.</li>
            <li class="mb-2"><strong>Błędy w adresie URL:</strong> Być może użytkownicy wpisują zły adres URL. Upewnij się, że adres jest poprawnie wpisany i nie zawiera literówek.</li>
            <li class="mb-2"><strong>Problemy z indeksowaniem:</strong> Strona może być niedostępna w wynikach wyszukiwania z powodu problemów z indeksowaniem przez wyszukiwarki. Zadbaj o odpowiednią optymalizację SEO i zarejestruj swoją stronę w narzędziach dla webmasterów.</li>
        </ul>
    </section>
    <section class="container mx-auto my-8">
        <h2 class="text-2xl font-bold mb-4">Słowa kluczowe związane z lokalizacją strony internetowej:</h2>
        <ul class="list-disc ml-8">
            <li class="mb-2">Gdzie jest strona internetowa</li>
            <li class="mb-2">Problemy z serwerem hostingowym</li>
            <li class="mb-2">Błędy w adresie URL</li>
            <li class="mb-2">Problemy z DNS</li>
            <li class="mb-2">Indeksowanie strony internetowej</li>
            <li class="mb-2">Optymalizacja SEO</li>
        </ul>
    </section>
    <Footer />
    </div>
  )
}

export default WherePageArticle