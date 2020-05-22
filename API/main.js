new Vue({
    el: '#app',
    data() {
        return {
            films: null,
            loading: true
        }
    },
    mounted () {
        axios
            .get('https://swapi.dev/api/films/')
                .then(response => (this.films = response.data.results))
                .then(response => (this.year = response.data.results))
                .catch(error => {console.log(error)})
                .finally(() => this.loading = false)
    }
})