import React from 'react'
import Navbar from '../compontents/Navbar'
import Footer from '../compontents/Footer'

function HowPageWorksArticle() {
  return (
    <div className='px-4 w-full'>
        <Navbar />
        <header class="   ">
        <div class="container mx-auto py-4">
            <h1 class="text-3xl font-bold text-center">Jak działa strona internetowa?</h1>
        </div>
    </header>
    <section class="container mx-auto my-8">
        <p class="mb-4">Strona internetowa to zbiór plików zapisanych na serwerze, które są przetwarzane i wyświetlane przez przeglądarkę internetową. Proces działania strony można podzielić na kilka kroków:</p>
        <ol class="list-decimal ml-8">
            <li class="mb-2"><strong>Żądanie od klienta:</strong> Kiedy użytkownik wpisuje adres URL strony w przeglądarce, przeglądarka wysyła żądanie (request) do serwera, na którym znajduje się strona internetowa.</li>
            <li class="mb-2"><strong>Odpowiedź serwera:</strong> Serwer odbiera żądanie od przeglądarki i wysyła odpowiedź (response), która zawiera pliki HTML, CSS, JavaScript oraz inne zasoby potrzebne do wyświetlenia strony.</li>
            <li class="mb-2"><strong>Przetwarzanie w przeglądarce:</strong> Przeglądarka otrzymuje odpowiedź od serwera i przetwarza otrzymane pliki HTML, interpretując je i renderując na ekranie użytkownika.</li>
            <li class="mb-2"><strong>Interakcja użytkownika:</strong> Użytkownik może interaktywnie korzystać ze strony, klikając na linki, przyciski lub wypełniając formularze.</li>
            <li class="mb-2"><strong>Komunikacja z serwerem:</strong> Jeśli użytkownik wykonuje jakieś akcje na stronie, takie jak wysłanie formularza, przeglądarka wysyła kolejne żądania do serwera w celu aktualizacji danych.</li>
        </ol>
    </section>
    <section class="container mx-auto my-8">
        <h2 class="text-2xl font-bold mb-4">Słowa kluczowe związane z działaniem strony internetowej:</h2>
        <ul class="list-disc ml-8">
            <li class="mb-2">Jak działa strona internetowa</li>
            <li class="mb-2">Tworzenie stron internetowych</li>
            <li class="mb-2">Struktura strony internetowej</li>
            <li class="mb-2">Przetwarzanie żądań HTTP</li>
            <li class="mb-2">Odpowiedź serwera</li>
            <li class="mb-2">Renderowanie HTML w przeglądarce</li>
            <li class="mb-2">Interakcja użytkownika z stroną</li>
            <li class="mb-2">Komunikacja klient-serwer</li>
        </ul>
    </section>
    <Footer />
    </div>
  )
}

export default HowPageWorksArticle