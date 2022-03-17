<template>
  <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="">
      <h1
        class="text-4xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
      >
        <span class="block xl:inline text-blue-600">Hilf </span>
        <span class="block xl:inline">mit!</span>
      </h1>

      <p
        class="mt-3 text-justify text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
      >
        Die Hilfsbereitschaft der Linzerinnen und Linzer ist wirklich
        beeindruckend. Die letzten Tage haben hunderte Helferinnen und Helfer
        das Team von Support Ukraine NOW Upper Austria tatkräftig unterstützt.
        Sei es beim Sortieren und Verpacken der Sachspenden, beim Kontaktieren
        von Firmen oder beim Organisieren der Transporte in die Ukraine. Wir
        sind sprachlos und sagen DANKE!
        <br />
        Wer Zeit hat mitzuhelfen ist herzlich willkommen in unserer Zentrale auf
        der Landstraße 113 (vormals Betten Reiter).
      </p>

      <h1
        class="text-4xl text-center tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
      >
        <span class="block xl:inline text-blue-600">Pop-up </span>
        <span class="block xl:inline">Sammelstelle einrichten!</span>
      </h1>

      <p
        class="mt-3 text-justify text-base text-gray-500 sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
      >
        Falls Ihr in eurem Viertel, Unternehmen oder im Verein selbst eine
        Sammelstelle einrichten wollt, dann könnt Ihr euch hier den Leitfaden
        für mobile (Pop-Up) Sammelstellen downloaden. Im Dokument ist auch eine
        Liste der am dringendsten benötigen Güter enthalten.
      </p>
      <div class="py-5 text-center">
        <a href="Sammellaktion März 2022.pdf">
          <button
            class="w-50 bg-yellow-500 hover:bg-blue-600 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>

            Download Leitfaden
          </button>
        </a>
      </div>
      <div class="masonry masonry-md">
        <img v-for="image in images.images" :src="image.default" />
      </div>
    </div>
  </main>
</template>

<script setup>
import useAssets from "../composables/images";
const images = useAssets();
</script>
