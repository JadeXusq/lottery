import { createPersistedState } from "pinia-plugin-persistedstate";
import { useUserStore } from "./modules/user";

const store = createPinia();
store.use(
  createPersistedState({
    storage: localStorage,
  })
);

export { useUserStore };
export default store;
