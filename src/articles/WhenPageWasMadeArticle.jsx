import React from 'react'
import Navbar from '../compontents/Navbar'
import Footer from '../compontents/Footer'

function WhenPageWasMadeArticle() {
  return (
    <div className='px-4 w-full'>
        <Navbar />
        <header class="   ">
        <div class="container mx-auto py-4">
            <h1 class="text-3xl font-bold text-center">Kiedy strona internetowa powstała?</h1>
        </div>
    </header>
    <section class="container mx-auto my-8">
        <p class="mb-4">Początki Internetu sięgają lat 60. XX wieku, jednak pierwsza strona internetowa powstała nieco później. Data jej powstania to 20 grudnia 1990 roku. Była to strona opisująca projekt World Wide Web autorstwa Sir Timothy'ego Johna Berners-Lee. Pierwsza strona internetowa zawierała proste informacje o projekcie oraz instrukcje dotyczące korzystania z WWW.</p>
        <p class="mb-4">Od tamtego czasu Internet znacząco ewoluował, a strony internetowe stały się nieodłączną częścią naszego życia. W dzisiejszych czasach, wraz z rozwijającymi się technologiami, tworzenie stron internetowych stało się niezwykle ważnym narzędziem dla firm i osób prywatnych, umożliwiając prezentację, promocję, oraz prowadzenie działalności online.</p>
        <p class="mb-4">Dzięki możliwościom, jakie dają strony internetowe, przedsiębiorcy mogą dotrzeć do szerszego grona klientów, oferując swoje produkty i usługi w Internecie. Jest to niezwykle istotne w dzisiejszych czasach, gdy coraz więcej osób korzysta z Internetu do poszukiwania informacji oraz dokonywania zakupów.</p>
    </section>
    <section class="container mx-auto my-8">
        <h2 class="text-2xl font-bold mb-4">Słowa kluczowe związane z powstaniem strony internetowej:</h2>
        <ul class="list-disc ml-8">
            <li class="mb-2">Kiedy strona internetowa powstała</li>
            <li class="mb-2">Historia strony internetowej</li>
            <li class="mb-2">Ewolucja Internetu</li>
            <li class="mb-2">Początki World Wide Web</li>
            <li class="mb-2">Tworzenie stron internetowych</li>
            <li class="mb-2">Rozwój technologii internetowych</li>
            <li class="mb-2">Znaczenie stron internetowych dla biznesu</li>
            <li class="mb-2">Korzystanie z Internetu w dzisiejszych czasach</li>
        </ul>
    </section>
    <Footer />
    </div>
  )
}

export default WhenPageWasMadeArticle