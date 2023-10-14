<script>
  import RatingSelect from "../components/RatingSelect.svelte";


</script>

<main class="grid h-screen place-items-center">
    <!-- Container -->
    <div class="container flex flex-col space-y-5 bg-gradient-to-t from-veryDarkBlue to-darkBlue mx-auto rounded-3xl w-88 h-96">
        <!-- Star Icon -->
        <div class="bg-darkBlue mt-6 ml-6 rounded-full w-10 h-10">
            <img src="..\images\icon-star.svg" alt="" class="w-4 mt-3 mx-auto">
        </div>
        <!-- Header -->
        <h1 class="text-white ml-6 text-2xl font-bold">How did we do?</h1>
        <!-- Paragraph -->
        <p class="px-6 text-sm text-lightGray leading-6">
            Please let us know how we did with your support request. 
            All feedback is appreciated to help us improve our offering!
        </p>
        <!-- Input Select -->
        <RatingSelect />
        <!-- Submit Button -->
        <button class="bg-orange-500 mx-6 h-12 rounded-3xl  text-white hover:bg-white hover:text-orange-400">SUBMIT</button>

    </div>

</main>
