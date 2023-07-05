<script>
  export let url = 'foo';
  export let title = 'some title';
</script>

<a
  href={url}
  class="max-w-md text-center flex justify-center items-center px-16 py-4 not-prose card border border-base-content rounded-md"
>
  <span class="text-white">{title}</span>
</a>
