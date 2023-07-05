<script>
  import { userData } from '$lib/firebase';
</script>

<main class="flex w-full min-h-screen">
  <div class="hero">
    <div class="hero-content text-center">
      <div class="w-full">
        <img
          src="/antlers.svg"
          alt="antler logo"
          width="256"
          class="mx-auto mb-4"
        />
        <h1 class="text-7xl font-extrabold text-primary">|a|ntlers</h1>
        <p class="py-6 font-semibold text-lg opacity-75">
          Present yourself, simply.
        </p>
        {#if $userData?.username}
          <a
            href="/{$userData.username}/edit"
            class="btn btn-primary capitalize text-lg font-medium px-10"
            >Edit your Profile</a
          >
        {:else}
          <a href="/login" class="btn btn-primary">Get Started</a>
        {/if}
      </div>
    </div>
  </div>
</main>
