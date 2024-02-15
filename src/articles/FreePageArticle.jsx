import React from 'react'
import Navbar from '../compontents/Navbar'
import Footer from '../compontents/Footer'

function FreePageArticle() {
  return (
    <div className='px-4 w-full'>
        <Navbar />
        <header class="   ">
        <div class="container mx-auto py-4">
            <h1 class="text-3xl font-bold text-center">Gdzie założyć stronę internetową za darmo?</h1>
        </div>
    </header>
    <section class="container mx-auto my-8">
        <p class="mb-4">Jeśli chcesz założyć stronę internetową za darmo, istnieje kilka platform, które oferują taką możliwość. Poniżej przedstawiamy kilka opcji, które warto rozważyć:</p>
        <ul class="list-disc ml-8">
            <li class="mb-2"><strong>WordPress.com:</strong> WordPress.com oferuje darmowe plany hostingowe, które pozwalają na założenie prostych stron internetowych. Możesz wybierać spośród wielu darmowych szablonów i korzystać z podstawowych funkcji.</li>
            <li class="mb-2"><strong>Wix.com:</strong> Wix oferuje również darmowe plany hostingowe, które umożliwiają tworzenie stron internetowych za darmo. Posiada intuicyjny kreator stron, który ułatwia proces tworzenia.</li>
            <li class="mb-2"><strong>Google Sites:</strong> Google Sites to kolejna opcja, która pozwala za darmo tworzyć proste strony internetowe. Jest to dobre rozwiązanie dla osób preferujących prosty interfejs i integrację z innymi usługami Google.</li>
            <li class="mb-2"><strong>Weebly:</strong> Weebly oferuje darmowy plan, który umożliwia tworzenie stron internetowych z łatwością. Posiada intuicyjny kreator, który nie wymaga specjalistycznej wiedzy technicznej.</li>
        </ul>
    </section>
    <section class="container mx-auto my-8">
        <h2 class="text-2xl font-bold mb-4">Słowa kluczowe związane z zakładaniem darmowej strony internetowej:</h2>
        <ul class="list-disc ml-8">
            <li class="mb-2">Gdzie założyć stronę internetową za darmo</li>
            <li class="mb-2">Tworzenie stron internetowych</li>
            <li class="mb-2">Darmowe strony internetowe</li>
            <li class="mb-2">WordPress.com</li>
            <li class="mb-2">Wix.com</li>
            <li class="mb-2">Google Sites</li>
            <li class="mb-2">Weebly</li>
        </ul>
    </section>
    <Footer />
    </div>
  )
}

export default FreePageArticle