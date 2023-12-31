import { v as validate_store, s as subscribe } from "../../../chunks/utils.js";
import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { a as user } from "../../../chunks/firebase.js";
import "firebase/auth";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  validate_store(user, "user");
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  $$unsubscribe_user();
  return `<h2 data-svelte-h="svelte-bhb3ah">Login</h2> ${$user ? `<h2 class="card-title">Welcome, ${escape($user.displayName)}</h2> <p class="text-center text-success mt-1 mb-2" data-svelte-h="svelte-63kkm8">You are logged in</p> <button class="btn btn-warning" data-svelte-h="svelte-1t27kh4">Sign out</button>` : `<button class="btn btn-primary mt-3" data-svelte-h="svelte-lbolbn">Sign in with Google</button>`}`;
});
export {
  Page as default
};
