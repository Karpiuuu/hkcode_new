import React from 'react'
import Navbar from '../compontents/Navbar'
import Footer from '../compontents/Footer'

function HowPageLooksLikeArticle() {
  return (
    <div className='px-4 w-full'>
        <Navbar />
        <header class="   ">
        <div class="container mx-auto py-4">
            <h1 class="text-3xl font-bold text-center">Jak wygląda strona internetowa?</h1>
        </div>
    </header>
    <section class="container mx-auto my-8">
        <p class="mb-4">Strona internetowa może przyjmować różnorodne formy i wyglądy, zależnie od celu, branży i preferencji projektanta. Oto kilka popularnych elementów, które mogą być obecne na stronach internetowych:</p>
        <ul class="list-disc ml-8">
            <li class="mb-2"><strong>Logo:</strong> Większość stron internetowych wykorzystuje logo, które jest unikalnym znakiem identyfikacyjnym firmy lub marki.</li>
            <li class="mb-2"><strong>Menu nawigacyjne:</strong> Menu nawigacyjne umożliwia użytkownikom łatwe poruszanie się po stronie i znalezienie potrzebnych informacji.</li>
            <li class="mb-2"><strong>Baner główny:</strong> Baner główny to obszar na górze strony, który często zawiera główny tytuł, zdjęcie lub grafikę, oraz wywołuje główne działanie (CTA).</li>
            <li class="mb-2"><strong>Treść:</strong> Treść jest kluczowym elementem strony internetowej i może zawierać tekst, obrazy, filmy, oraz inne multimediów.</li>
            <li class="mb-2"><strong>Stopka:</strong> Stopka strony zawiera zazwyczaj informacje kontaktowe, linki do mediów społecznościowych i inne istotne informacje.</li>
        </ul>
    </section>
    <section class="container mx-auto my-8">
        <h2 class="text-2xl font-bold mb-4">Słowa kluczowe związane z wyglądem strony internetowej:</h2>
        <ul class="list-disc ml-8">
            <li class="mb-2">Jak wygląda strona internetowa</li>
            <li class="mb-2">Tworzenie stron internetowych</li>
            <li class="mb-2">Elementy strony internetowej</li>
            <li class="mb-2">Projektowanie stron internetowych</li>
            <li class="mb-2">Wygląd strony internetowej</li>
            <li class="mb-2">Logo na stronie internetowej</li>
            <li class="mb-2">Menu nawigacyjne</li>
            <li class="mb-2">Baner główny na stronie</li>
            <li class="mb-2">Stopka strony internetowej</li>
        </ul>
    </section>
    <Footer />
    </div>
  )
}

export default HowPageLooksLikeArticle