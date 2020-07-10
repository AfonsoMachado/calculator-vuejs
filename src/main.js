// Arquivo que o build vai buscar
import Vue from 'vue'
import App from './App'

new Vue({
    el: '#app',
    // Renderizando componente do Vue na pagina 
    render: h => h(App)
}).$mount("#app")