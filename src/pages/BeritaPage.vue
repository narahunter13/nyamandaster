<template>
  <q-page padding>
    <div class="q-pa-md">
      <q-table title="Daftar Publikasi BPS Kota Lubuklinggau" :rows="rows" :columns="columns" row-key="pub_id"
        v-model:pagination="myPagination" :separator="'cell'" :filter="filter" @request="handleRequest">
        <template v-slot:header="props">
          <q-tr :props="props">
            <q-th v-for="col in props.cols" :key="col.name" :props="props" class="text-center text-weight-bolder">
              {{ col.label }}
            </q-th>
          </q-tr>
        </template>
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body-cell-title="props">
          <q-td :props="props">
            <div class="row items-center">
              <p class="q-ml-sm">{{ props.row.title }}</p>
            </div>
          </q-td>
        </template>
        <template v-slot:body-cell-link="props">
          <q-td :props="props">
            <a :href="props.row.pdf" target="_blank">Unduh</a>
          </q-td>
        </template>
        <template v-slot:body-cell-qrcode="props">
          <q-td :props="props">
            <qr-code :value="props.row.pdf" width=130></qr-code>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { api } from 'boot/axios';
import { ListPublikasi } from 'components/models';
import { Loading, QTableColumn } from 'quasar';

const columns: QTableColumn[] = [
  {
    name: 'title',
    required: true,
    label: 'Judul Publikasi',
    align: 'left',
    field: row => row.title,
    format: val => `${val}`,
    sortable: true
  },
  {
    name: 'link',
    required: true,
    align: 'center',
    label: 'Link Unduhan',
    field: 'pdf'
  },
  {
    name: 'qrcode',
    required: true,
    align: 'center',
    label: 'QR Code (Scan)',
    field: 'qrcode'
  },
];

export default defineComponent({
  name: 'BeritaPage',

  setup() {
    Loading.show({
      message: 'Harap tunggu...'
    });
  },

  created() {
    this.fetchData()
  },

  methods: {
    fetchData(page = undefined, keyword = '') {
      Loading.show({
        message: 'Harap tunggu...'
      });
      api.get('/v1/api/list', {
        params: {
          key: '9a1097f6a7994990a7a8db0e463615ce',
          model: 'pressrelease',
          domain: 1674,
          page: page,
          keyword: keyword
        }
      }).then((response) => {
        this.rows = response.data.data[1];
        const meta = response.data.data[0];

        this.myPagination.page = meta.page;
        this.myPagination.rowsPerPage = meta.per_page;
        this.myPagination.rowsNumber = meta.total
      }).finally(() => {
        Loading.hide();
      });
    },

    handleRequest(props: any) {
      this.fetchData(props.pagination.page, props.filter);
    }
  },

  data() {
    const myPagination = {
      page: 0,
      rowsPerPage: 10,
      rowsNumber: 0
    }

    let filter = '';

    let rows: ListPublikasi[] = [];

    return {
      filter,
      myPagination,
      columns,
      rows,
    }
  }
})
</script>
