import React from 'react'
import Navbar from '../../compontents/Navbar'
import Footer from '../../compontents/Footer'

function BluePageArticle() {
  return (
    <div className='px-4 w-full'>
        <Navbar />
        <header class="   ">
        <div class="container mx-auto py-4">
            <h1 class="text-3xl font-bold text-center">Co to jest niebieska strona internetowa?</h1>
        </div>
    </header>
    <section class="container mx-auto my-8">
        <p class="mb-4">Niebieska strona internetowa to termin używany w branży <strong>tworzenia stron internetowych</strong>, który odnosi się do projektu lub stylu graficznego, w którym dominuje kolor niebieski. Jest to jeden z popularnych wyborów kolorystycznych przy projektowaniu stron internetowych, ze względu na jego pozytywne skojarzenia i uniwersalność.</p>
        <p class="mb-4">W niebieskiej stronie internetowej można zauważyć zastosowanie różnych odcieni niebieskiego, od jasnych pastelowych tonów po głębokie, intensywne kolory. Ten kolor może być wykorzystywany zarówno w tle strony, jak i w nagłówkach, przyciskach czy innych elementach graficznych.</p>
        <p class="mb-4">Projektując niebieską stronę internetową, ważne jest, aby dobierać kolory w sposób spójny i harmonijny, aby zapewnić użytkownikom przyjemne doświadczenie wizualne. Dodatkowo, warto pamiętać o czytelności tekstu na tle niebieskiego koloru, stosując odpowiednie kontrasty.</p>
    </section>
    <section class="container mx-auto my-8">
        <h2 class="text-2xl font-bold mb-4">Słowa kluczowe związane z niebieską stroną internetową:</h2>
        <ul class="list-disc ml-8">
            <li class="mb-2">Niebieska strona internetowa</li>
            <li class="mb-2">Projektowanie stron internetowych</li>
            <li class="mb-2">Tworzenie stron internetowych</li>
            <li class="mb-2">Kolory w projektowaniu stron</li>
            <li class="mb-2">Grafika internetowa</li>
            <li class="mb-2">Dobór kolorów</li>
            <li class="mb-2">Harmonijne projektowanie stron</li>
        </ul>
    </section>
    <Footer />
    </div>
  )
}

export default BluePageArticle