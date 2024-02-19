import React from 'react'
import Navbar from '../../compontents/Navbar'
import Footer from '../../compontents/Footer'

function StudeMarketingArticle() {
  return (
    <div className='px-4 wfull'>
    <Navbar />
    <header class="   ">
        <div class="container mx-auto py-4">
            <h1 class="text-3xl font-bold text-center">Gdzie na studia marketing?</h1>
        </div>
    </header>
    <section class="container mx-auto my-8">
        <p class="mb-4">Jeśli interesujesz się marketingiem online i planujesz rozpocząć studia na tym kierunku, warto rozejrzeć się za renomowanymi uczelniami oferującymi odpowiednie programy studiów z zakresu marketingu.</p>
        <p class="mb-4">W Polsce istnieje wiele uczelni, które mają w swojej ofercie kierunki związane z marketingiem. Kilka z nich to:</p>
        <ul class="list-disc ml-8 mb-4">
            <li class="mb-2">Uniwersytet Ekonomiczny w Krakowie</li>
            <li class="mb-2">Szkoła Główna Handlowa w Warszawie</li>
            <li class="mb-2">Uniwersytet Warszawski</li>
            <li class="mb-2">Politechnika Warszawska</li>
            <li class="mb-2">Uniwersytet Jagielloński w Krakowie</li>
        </ul>
        <p class="mb-4">Te uczelnie oferują bogate programy studiów z marketingu, które pozwalają zdobyć wiedzę teoretyczną i praktyczne umiejętności przydatne w branży marketingowej. Ponadto, możliwe jest również kształcenie się na kierunkach związanych z technologiami internetowymi i tworzeniem stron internetowych, co jest zgodne z usługą "Tworzenie stron internetowych".</p>
    </section>
    <section class="container mx-auto my-8">
        <h2 class="text-2xl font-bold mb-4">Słowa kluczowe związane z marketingiem online:</h2>
        <ul class="list-disc ml-8">
            <li class="mb-2">Studia marketing</li>
            <li class="mb-2">Uczelnie marketing</li>
            <li class="mb-2">Tworzenie stron internetowych</li>
            <li class="mb-2">Marketing online</li>
            <li class="mb-2">Kariera w marketingu</li>
        </ul>
    </section>


    <Footer />  
    </div>
  )
}

export default StudeMarketingArticle