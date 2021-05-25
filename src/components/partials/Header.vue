<template>
    <div>
        <nav>
            <ul>
                <li>
                    <router-link to="/"><i class="fas fa-home"></i></router-link>
                </li>
                <li>
                    <router-link to="/about"><i class="fas fa-info-circle"></i></router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
    ul, li{
        padding: 0px;
        margin: 0px;
        list-style-type: none;
    }
    ul{
        margin-left: auto;
        width: fit-content;
    }
    li{
        display: inline-block;
        margin: 5px 10px;
    }
    a{
        color: black;
    }
    svg{
        font-size: 25px;
    }
</style>