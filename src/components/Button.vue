<template>
                    <!-- Aplicando classes conforme o parametro passado sendo true -->
                    <!-- $emit chama um evento passando o label por parametro, no click-->
  <button class="button" @click="$emit('onCalcButtonClick', label)" :class="{ double, triple, operation }">
      {{ label }}
  </button>
</template>

<script>
export default {
    // Parâmetros para passar pra o botão
    props: {
        // Label do botão
        label: {},
        // Botão do tipo operação
        operation: { type: Boolean },
        // Botão que ocupa um espaço
        double: { type: Boolean },
        // Botão que ocupa 3 espaços
        triple: { type: Boolean }
    }
}
</script>

<style>

/* Definindo variaveis */
:root {
    --bg-button: #f0f0f0;
    --border-button: solid 1px #888; 
}

.button {
    font-size: 1.4em;
    background-color: var(--bg-button);
    border: none;
    border-right: var(--border-button);
    border-bottom: var(--border-button);
    outline: none;
}

.button:active {
    background-color: #ccc;
}

.button.double {
    grid-column: span 2;
}

.button.triple {
    grid-column: span 3;
}

.button.operation {
    background-color: #FA8231;
    color: #FFF;
}

.button.operation:active {
    background-color: #FA8231cc;
}

</style>