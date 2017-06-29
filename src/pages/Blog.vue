<script>
/* eslint-disable */
export default {
    data: () => ({
        blogs: [],
        searchBlog: ''
    }),
    computed: {
        filterBlog () {
            return this.blogs.filter(blog => {
                return blog.title.match(this.searchBlog)
            })
        }
    },
    created () {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            console.log(res)
            let data = res.data
            this.blogs = data
        })
    }
}
</script>
<template>
    <div class="container">
        <div class="field">
            <p class="control">
                <input type="text" class="input is-large" v-model="searchBlog" placeholder="search">
            </p>
        </div>
        <div class="card" v-for="blog in filterBlog">
            <div class="card-content">
                <p class="title">{{blog.title}}</p>
                <p>{{blog.body}}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .card {
        margin-bottom: 20px;
    }
    .container {
        width: 50%;
    }
</style>
