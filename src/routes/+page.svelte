<script>
    import RatingSelect from "../components/RatingSelect.svelte";
    import ThankYouState from "../components/ThankYouState.svelte";

    let rating = 5;
    const handleSelect = e => rating = e.detail;

    const handleSubmit = () => {
        const Page = document.querySelector(".page");
        const ThankYouState = document.querySelector(".thank-you-state");
        Page.classList.remove("grid");
        Page.classList.add("hidden");
        ThankYouState.classList.remove("hidden");
        ThankYouState.classList.add("grid");
    }

    $: console.log(rating);
</script>

<ThankYouState {rating} />

<main class="page grid h-screen place-items-center">
    <!-- Container -->
    <div class="flex flex-col space-y-5 bg-gradient-to-t from-veryDarkBlue to-darkBlue mx-auto rounded-3xl w-88 h-96">
        
        <!-- Star Icon -->
        <div class="bg-darkBlue mt-6 ml-6 rounded-full w-10 h-10">
            <img src=".\images\icon-star.svg" alt="" class="w-4 mt-3 mx-auto">
        </div>

        <!-- Header -->
        <h1 class="text-white ml-6 text-2xl font-bold">How did we do?</h1>

        <!-- Paragraph -->
        <p class="px-6 text-sm text-lightGray leading-6">
            Please let us know how we did with your support request. 
            All feedback is appreciated to help us improve our offering!
        </p>

        <!-- Input Select -->
        <RatingSelect on:rating-select={handleSelect} />

        <!-- Submit Button -->
        <button on:click={handleSubmit} class="bg-orange-500 mx-6 h-12 rounded-3xl  text-white hover:bg-white hover:text-orange-400">SUBMIT</button>

    </div>

</main>
