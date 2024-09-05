<script>
    import {fullname} from "../lib/data/personalInfo";
</script>

<slot></slot>
<footer>© 2024 {fullname}. All rights reserved.</footer>

<style>
    :global(a){
        color: gold;
        transition: 0.3s;
    }
    :global(a:hover)
    {
        color: black;
        background-color: gold;
        border-radius: 0.2em;
        text-decoration: none;
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

