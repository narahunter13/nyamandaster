<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Nyamandaster
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Fitur Aplikasi
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Table Statis',
    caption: 'Menampilkan daftar tabel statis',
    icon: 'dashboard',
    link: 'tabel-statis'
  },
  {
    title: 'Publikasi',
    caption: 'Menampilkan daftar publikasi',
    icon: 'menu_book',
    link: 'publikasi'
  },
  {
    title: 'Berita Resmi Statistik',
    caption: 'Berita Resmi Statistik dari BPS Kota Lubuklinggau',
    icon: 'rss_feed',
    link: 'berita'
  },
  // {
  //   title: 'Pengaduan',
  //   caption: 'Sarana Whistle Blowing Publik',
  //   icon: 'record_voice_over',
  //   link: 'pengaduan'
  // },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
