import React from 'react'
import Navbar from '../../compontents/Navbar'
import Footer from '../../compontents/Footer'

function WhenSitesArticle() {
  return (
    <div className='px-4 w-full'>
        <Navbar />
        <header class="   ">
        <div class="container mx-auto py-4">
            <h1 class="text-3xl font-bold text-center">Kiedy strony internetowe?</h1>
        </div>
    </header>
    <section class="container mx-auto my-8">
        <p class="mb-4">Strony internetowe stały się integralną częścią życia codziennego, ale kiedy dokładnie zaczęły zdobywać popularność i stawać się nieodłącznym elementem naszej cyfrowej rzeczywistości?</p>
        <p class="mb-4">Pierwsze próby tworzenia stron internetowych można datować na lata 90. XX wieku, kiedy to World Wide Web zaczęło nabierać rozpędu. Jednak prawdziwy boom w tworzeniu i użytkowaniu stron internetowych nastąpił w pierwszych latach XXI wieku, gdy Internet stał się bardziej powszechny i dostępny dla szerszego grona użytkowników.</p>
        <p class="mb-4">Wraz z rozwojem technologii, zwłaszcza mobilnych urządzeń, oraz rosnącą dostępnością do Internetu na całym świecie, strony internetowe zyskały na znaczeniu jako niezastąpione narzędzia komunikacji, informacji, oraz biznesu.</p>
    </section>
    <section class="container mx-auto my-8">
        <h2 class="text-2xl font-bold mb-4">Słowa kluczowe związane z pojawieniem się stron internetowych:</h2>
        <ul class="list-disc ml-8">
            <li class="mb-2">Kiedy strony internetowe</li>
            <li class="mb-2">Historia stron internetowych</li>
            <li class="mb-2">Początki World Wide Web</li>
            <li class="mb-2">Rozwój Internetu</li>
            <li class="mb-2">Tworzenie stron internetowych</li>
            <li class="mb-2">Popularność stron internetowych</li>
            <li class="mb-2">Strony internetowe w XXI wieku</li>
            <li class="mb-2">Ewolucja stron internetowych</li>
        </ul>
    </section>
    <Footer />
    </div>
  )
}

export default WhenSitesArticle