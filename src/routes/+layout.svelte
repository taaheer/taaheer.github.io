<script>
    import {fullname} from "../lib/data/personalInfo";
</script>

<svelte:head>
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><path fill=%22%237ed321%22 d=%22M16.70 85.55L46.73 14.45L55.03 14.45L83.30 85.55L16.70 85.55ZM50.73 25.93L29.49 77.88L70.70 77.88L50.73 25.93Z%22></path></svg>" />
</svelte:head>

<slot></slot>
<footer>© 2024 {fullname}. All rights reserved.</footer>

<style>
    :global(a){
        color: gold;
    }
    footer {
        text-align: center;
        color: darkgray;
        font-family: Arial, Helvetica, sans-serif;
    }
    :global(body){
        color: white;
        background-color: black;
        background-image: url(../lib/assets/background.jpg);
        background-size: cover;

        @media (max-width: 1400px){
        background-repeat: no-repeat;
        height: 100svh;

        }
    }
</style>

