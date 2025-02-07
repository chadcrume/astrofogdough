<script setup>
import Menubar from "primevue/menubar";
import MenuItem from "primevue/menubar";
import Badge from "primevue/badge";
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';
import 'primeicons/primeicons.css'

const props = defineProps({
  items: [MenuItem],
});
// const items = [
//   { 
//     label: "Home", url: "/",
//     shortcut: "⌘+b",
//     badge: 2,
//     icon: "pi pi-bolt" 
//   },
// ];
</script>

<template>
  <!-- Example description and UI -->
  <Menubar :model="props.items">
    <a v-ripple class="flex items-center" v-bind="props.action">
      <span>{{ item.label }}</span>1
      <Badge
        v-if="item.badge"
        :class="{ 'ml-auto': !root, 'ml-2': root }"
        :value="item.badge"
      />2
      <span
        v-if="item.shortcut"
        class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
        >{{ item.shortcut }}</span
      >3
      <i
        v-if="hasSubmenu"
        :class="[
          'pi pi-angle-down ml-auto',
          { 'pi-angle-down': root, 'pi-angle-right': !root },
        ]"
      ></i>
    </a>
    <!-- <template #item="{ item, props, hasSubmenu, root }">
      <a class="menubar-item" :href="item.url">{{ item.label }}</a>
    </template> -->
    <template #end>
      <div class="flex items-center gap-2">
        <InputText placeholder="Search" type="text" class="w-32 sm:w-auto" />
        <Avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          shape="circle"
        />
      </div>
    </template>
  </Menubar>
</template>

<style scoped>
.menubar-item {
  margin: 0 7px;
}
</style>
