<template>
  <div class="page-wrap">
    <contacts-administration />
    <contacts-services />
    <contacts-subdivision />
  </div>
</template>

<script>
import ContactsAdministration from "@/components/ContactsAdministration";
import ContactsServices from "@/components/ContactsServices";
import ContactsSubdivision from "@/components/ContactsSubdivision";
export default {
  name: "ContactsView",
  components: { ContactsAdministration, ContactsServices, ContactsSubdivision },
};
</script>

<style scoped></style>
