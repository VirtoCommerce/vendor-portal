/* eslint-disable */
import { computed, Ref, ref } from "vue";
import { StoreModuleClient, Store } from "@virtoshell/api-client";

const stores: Ref<Store[]> = ref([]);

export default () => {
  async function loadStores() {
    const client = new StoreModuleClient("");
    stores.value = await client.getStores();
  }

  return {
    stores: computed(() => stores.value),
    loadStores,
  };
};