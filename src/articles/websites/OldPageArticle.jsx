import React from 'react'
import Navbar from '../../compontents/Navbar'
import Footer from '../../compontents/Footer'

function OldPageArticle() {
  return (
    <div className='px-4 w-full'>
        <Navbar />
        <header class="   ">
        <div class="container mx-auto py-4">
            <h1 class="text-3xl font-bold text-center">Jak wyglądała strona internetowa kiedyś?</h1>
        </div>
    </header>
    <section class="container mx-auto my-8">
        <p class="mb-4">Wczesne lata internetu charakteryzują się prostotą i minimalistycznym podejściem do projektowania stron. Oto kilka cech, które wyróżniały strony internetowe kiedyś:</p>
        <ul class="list-disc ml-8">
            <li class="mb-2"><strong>Brak zaawansowanych stylów CSS:</strong> W początkowych latach internetu strony często wykorzystywały ograniczoną liczbę kolorów i prostą strukturę HTML, co sprawiało, że wyglądali one dość prymitywnie.</li>
            <li class="mb-2"><strong>Używanie tabel do układu:</strong> Przed wprowadzeniem elastycznych układów CSS, strony internetowe często wykorzystywały tabele do organizacji treści, co sprawiało, że kod był mniej czytelny i trudniejszy do zarządzania.</li>
            <li class="mb-2"><strong>Animowane GIF-y:</strong> Animowane GIF-y były popularnym elementem na stronach internetowych kiedyś, często wykorzystywanym do dodania ruchu i atrakcyjności dla użytkowników.</li>
            <li class="mb-2"><strong>Brak responsywności:</strong> Strony internetowe nie były responsywne i nie dostosowywały się automatycznie do różnych rozmiarów ekranów, co sprawiało, że korzystanie z nich na urządzeniach mobilnych było utrudnione.</li>
        </ul>
    </section>
    <section class="container mx-auto my-8">
        <h2 class="text-2xl font-bold mb-4">Słowa kluczowe związane z dawnymi stronami internetowymi:</h2>
        <ul class="list-disc ml-8">
            <li class="mb-2">Jak wyglądała strona internetowa kiedyś</li>
            <li class="mb-2">Tworzenie stron internetowych</li>
            <li class="mb-2">Strony internetowe w przeszłości</li>
            <li class="mb-2">Historia projektowania stron internetowych</li>
            <li class="mb-2">Minimalistyczny design stron</li>
            <li class="mb-2">Układ tabelarny stron</li>
            <li class="mb-2">Animowane GIF-y na stronach</li>
            <li class="mb-2">Brak responsywności</li>
        </ul>
    </section>
    <Footer />
    </div>
  )
}

export default OldPageArticle