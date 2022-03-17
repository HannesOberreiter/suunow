<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <h4 class="bg-white text-center text-lg tracking-tight font-extrabold">
    Support Ukraine NOW Upper Austria
  </h4>
  <Disclosure as="nav" class="bg-white" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center">
          <div class="flex-shrink-0 flex items-center">
            <img
              class="block lg:hidden h-8 w-auto"
              src="../assets/Flag_of_Ukraine.svg"
              alt="Workflow"
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="../assets/Flag_of_Ukraine.svg"
              alt="Workflow"
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.href === router.currentRoute.value.path
                    ? 'bg-blue-600 text-white'
                    : 'text-yellow-500 hover:bg-blue-600 hover:text-white',
                  item.href === '/spenden' ? 'font-extrabold' : 'font-medium',

                  'px-3 py-2 rounded-md text-lg font-large',
                ]"
                :aria-current="
                  item.href === router.currentRoute.value.path
                    ? 'page'
                    : undefined
                "
              >
                {{ item.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.href === router.currentRoute.value.path
              ? 'bg-blue-600 text-white'
              : 'text-yellow-500 hover:bg-blue-600 hover:text-white',
            item.href === '/spenden' ? 'font-extrabold' : 'font-medium',
            'block px-3 py-2 rounded-md text',
          ]"
          :aria-current="
            item.href === router.currentRoute.value.path ? 'page' : undefined
          "
          >{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
import { useRouter } from "vue-router";

const router = useRouter();

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Mithelfen", href: "/mithelfen" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Spenden", href: "/spenden" },
];
</script>
