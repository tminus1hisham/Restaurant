<script setup>
import {ref} from 'vue'

const dialog = ref(true)
</script>

<template>
    <v-sheet class="position-relative" min-height="450">
        <div class="position-absolute d-flex align-center justify-center w-100 h-100">
            
        </div>
    </v-sheet>
</template>

<script setup>
import { ref, computed, watch } from "vue"

// Fake data (replace with your API data)
const items = ref(
  Array.from({ length: 47 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    subtitle: `Subtitle ${i + 1}`,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }))
)

// Pagination state
const currentPage = ref(1)
const itemsPerPage = ref(6)                 // default page size
const perPageOptions = [3, 6, 9, 12, 24]    // dropdown options

// Derived values
const totalPages = computed(() =>
  Math.max(1, Math.ceil(items.value.length / itemsPerPage.value))
)

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  return items.value.slice(start, start + itemsPerPage.value)
})

const showingLabel = computed(() => {
  const total = items.value.length
  if (!total) return "No items"
  const start = (currentPage.value - 1) * itemsPerPage.value + 1
  const end = Math.min(start + itemsPerPage.value - 1, total)
  return `Showing ${start}–${end} of ${total}`
})

// UX niceties
watch(itemsPerPage, () => { currentPage.value = 1 })          // reset when page size changes
watch(totalPages, (tp) => { if (currentPage.value > tp) currentPage.value = tp }) // clamp
</script>

<template>
  <v-container class="py-6">
    <!-- Top controls -->
    <v-row class="align-center mb-4" no-gutters>
      <v-col cols="12" md="6" class="d-flex align-center gap-4">
        <v-select
          v-model="itemsPerPage"
          :items="perPageOptions"
          label="Cards per page"
          variant="outlined"
          density="comfortable"
          style="max-width: 220px"
        />
        <div class="text-medium-emphasis">{{ showingLabel }}</div>
      </v-col>

      <v-col cols="12" md="6" class="d-flex justify-end">
        <v-pagination
          v-model="currentPage"
          :length="totalPages"
          total-visible="7"
          density="comfortable"
        />
      </v-col>
    </v-row>

    <!-- Cards grid -->
    <v-row dense>
      <v-col
        v-for="item in paginatedItems"
        :key="item.id"
        cols="12" sm="6" md="4" lg="3"
      >
        <v-card elevation="4" class="h-100">
          <v-card-item>
            <v-card-title>{{ item.title }}</v-card-title>
            <v-card-subtitle>{{ item.subtitle }}</v-card-subtitle>
          </v-card-item>
          <v-card-text>{{ item.text }}</v-card-text>
          <v-card-actions>
            <v-btn variant="text">Open</v-btn>
            <v-spacer />
            <v-chip size="small" variant="flat">#{{ item.id }}</v-chip>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col v-if="!paginatedItems.length" cols="12">
        <v-alert type="info" variant="tonal">No items to display.</v-alert>
      </v-col>
    </v-row>

    <!-- Bottom pagination (optional) -->
    <div class="d-flex justify-center mt-6">
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        total-visible="7"
        density="comfortable"
      />
    </div>
  </v-container>
</template>
