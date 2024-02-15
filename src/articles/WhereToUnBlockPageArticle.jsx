import React from 'react'
import Navbar from '../compontents/Navbar'
import Footer from '../compontents/Footer'

function WhereToUnBlockPageArticle() {
  return (
    <div className='px-4 w-full'>
        <Navbar />
        <header class="   ">
        <div class="container mx-auto py-4">
            <h1 class="text-3xl font-bold text-center">Gdzie odblokować stronę internetową?</h1>
        </div>
    </header>
    <section class="container mx-auto my-8">
        <p class="mb-4">Jeśli Twoja strona internetowa została zablokowana, istnieją różne miejsca, gdzie możesz to odblokować. Poniżej przedstawiamy kilka opcji:</p>
        <ul class="list-disc ml-8">
            <li class="mb-2"><strong>Panel administracyjny serwera:</strong> Jeśli masz dostęp do panelu administracyjnego swojego serwera, możesz odblokować stronę poprzez zmianę odpowiednich ustawień bezpieczeństwa.</li>
            <li class="mb-2"><strong>Firewall:</strong> Jeśli strona została zablokowana przez firewall, możesz skontaktować się z dostawcą usług hostingowych lub administratorami sieci w celu odblokowania dostępu.</li>
            <li class="mb-2"><strong>Pluginy bezpieczeństwa:</strong> Jeśli korzystasz z systemu zarządzania treścią (CMS) takiego jak WordPress, możesz sprawdzić, czy niektóre pluginy bezpieczeństwa nie blokują dostępu do strony. W takim przypadku wystarczy wyłączyć lub skonfigurować odpowiednio te pluginy.</li>
        </ul>
    </section>
    <section class="container mx-auto my-8">
        <h2 class="text-2xl font-bold mb-4">Słowa kluczowe związane z odblokowywaniem strony internetowej:</h2>
        <ul class="list-disc ml-8">
            <li class="mb-2">Gdzie odblokować stronę internetową</li>
            <li class="mb-2">Tworzenie stron internetowych</li>
            <li class="mb-2">Odblokowywanie dostępu do strony</li>
            <li class="mb-2">Panel administracyjny serwera</li>
            <li class="mb-2">Firewall</li>
            <li class="mb-2">Pluginy bezpieczeństwa</li>
            <li class="mb-2">CMS</li>
            <li class="mb-2">WordPress</li>
        </ul>
    </section>
    <Footer />
    </div>
  )
}

export default WhereToUnBlockPageArticle