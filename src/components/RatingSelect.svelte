<script>
    import {createEventDispatcher} from "svelte";
    export let selected; 

    const dispatch = createEventDispatcher();

    const onChange = (e) => {
        selected = e.currentTarget.value;
        dispatch("rating-select", selected);
    }

    console.log(selected)
</script>

<main>
    <ul class="rating container flex px-6 items-center justify-between">
        <li>
            <input type="radio" id="num1" name="rating" value="1" on:change={onChange} checked={selected===1}>
            <label for="num1">1</label>
        </li>
        <li>
            <input type="radio" id="num2" name="rating" value="2" on:change={onChange} checked={selected===2}>
            <label for="num2">2</label>
        </li>
        <li>
            <input type="radio" id="num3" name="rating" value="3" on:change={onChange} checked={selected===3}>
            <label for="num3">3</label>
        </li>
        <li>
            <input type="radio" id="num4" name="rating" value="4" on:change={onChange} checked={selected===4}>
            <label for="num4">4</label>
        </li>
        <li>
            <input type="radio" id="num5" name="rating" value="5" on:change={onChange} checked={selected===5}>
            <label for="num5">5</label>
        </li>
    </ul>
</main>

<style>
    .rating li {
        position: relative;
        background: hsl(213, 19%, 18%);
        width: 50px;
        height: 50px;
        padding: 10px;
        text-align: center;
        border-radius: 50%;
        font-size: 19px;
        transition: 0.3s;
    }

    .rating li label {
        position: absolute;
        color: hsl(216, 12%, 54%);
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        padding: 10px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

    .rating li:hover {
        background: #f97316;
        color: #fff;
    }

    .rating li label:hover {
        color: #fff;
    }

    /* Make actual radio select invisible */
    [type="radio"] {
        opacity: 0;
    }

    /* Use the sibling select */
    [type="radio"]:checked ~ label {
        background: hsl(217, 12%, 63%);
        color: #fff;
    }
</style>