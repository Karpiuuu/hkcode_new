import React from 'react'
import Navbar from '../compontents/Navbar'
import Footer from '../compontents/Footer'

function OpenPageArticle() {
  return (
    <div className='px-4 w-full'>
        <Navbar />
        <header class="   ">
    <div class="container mx-auto py-4">
        <h1 class="text-3xl font-bold text-center">Dlaczego strona internetowa nie chce się otworzyć?</h1>
    </div>
</header>
<section class="container mx-auto my-8">
    <p class="mb-4">Istnieje wiele przyczyn, dla których strona internetowa może nie chcieć się otworzyć. Poniżej przedstawiamy najczęstsze z nich oraz możliwe sposoby rozwiązania problemu:</p>
    <ul class="list-disc ml-8">
        <li class="mb-2"><strong>Problemy z połączeniem internetowym:</strong> Częstym powodem jest problem z połączeniem internetowym, zarówno po stronie użytkownika, jak i serwera. Sprawdź swoje połączenie internetowe i upewnij się, że nie ma problemów z dostępem do sieci.</li>
        <li class="mb-2"><strong>Błędy w adresie URL:</strong> Niekiedy strona może nie otwierać się poprawnie z powodu błędnie wpisanego adresu URL. Upewnij się, że wpisujesz poprawny adres strony.</li>
        <li class="mb-2"><strong>Problemy z serwerem hostingowym:</strong> Awaria serwera hostingowego lub przeciążenie ruchem mogą prowadzić do niedostępności strony. Skontaktuj się z dostawcą hostingu, aby sprawdzić, czy nie ma problemów z serwerem.</li>
        <li class="mb-2"><strong>Ataki hakerskie:</strong> Strona internetowa może być niedostępna z powodu ataku hakerskiego, na przykład DDoS (rozproszony atak typu usługa). Wdrożenie odpowiednich zabezpieczeń może pomóc w zapobieżeniu takim atakom.</li>
    </ul>
</section>
<section class="container mx-auto my-8">
    <h2 class="text-2xl font-bold mb-4">Słowa kluczowe związane z niedziałającą stroną internetową:</h2>
    <ul class="list-disc ml-8">
        <li class="mb-2">Strona internetowa nie chce się otworzyć</li>
        <li class="mb-2">Błąd w adresie URL</li>
        <li class="mb-2">Problemy z połączeniem internetowym</li>
        <li class="mb-2">Awaria serwera hostingowego</li>
        <li class="mb-2">Ataki hakerskie</li>
        <li class="mb-2">Zabezpieczenia strony internetowej</li>
        <li class="mb-2">Dostawca hostingu</li>
    </ul>
</section><Footer /></div>
  )
}

export default OpenPageArticle