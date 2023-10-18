<script>
    import RatingSelect from "./RatingSelect.svelte";
    export let rating;

    const handleExit = () => {
        const Page = document.querySelector(".page");
        const ThankYouState = document.querySelector(".thank-you-state");
        Page.classList.remove("hidden");
        Page.classList.add("grid");
        ThankYouState.classList.remove("grid");
        ThankYouState.classList.add("hidden");
    }
</script>

<main class="thank-you-state hidden h-screen place-items-center font-Overpass">
    <!-- Container -->
    <div on:click|preventDefault={handleExit} class="flex flex-col space-y-5 bg-gradient-to-t from-veryDarkBlue to-darkBlue mx-auto rounded-3xl w-88 h-96">
        <!-- Image -->
        <img src=".\images\illustration-thank-you.svg" alt="" class="mx-auto mt-10">
        <!-- Rate -->
        <div class="mx-auto text-orange-500 bg-darkBlue py-1.5 px-3 rounded-3xl">
            You selected {rating} out of 5
        </div>
        <!-- Header -->
        <h1 class="mx-auto text-white font-bold text-2xl">Thank you!</h1>
        <!-- Paragraph -->
        <p class="px-6 text-center text-sm leading-6 text-lightGray">
            We appreciate you taking the time to give a rating.
            If you ever need more support,
            don’t hesitate to get in touch!
        </p>
    </div>

</main>

<style>

</style>