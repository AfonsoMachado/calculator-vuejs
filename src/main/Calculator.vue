<template>
    <div class="calculator">
        <Display :value="displayValue"/>
        <!-- lembrando que triple, operation e double são parametros booleanos -->
        <Button label="AC" triple @onCalcButtonClick="clearMemory" />
        <!-- @ está chamando o evento -->
        <Button label="/" operation @onCalcButtonClick="setOperation" />
        <Button label="7" @onCalcButtonClick="addDigit" />
        <Button label="8" @onCalcButtonClick="addDigit" />
        <Button label="9" @onCalcButtonClick="addDigit" />
        <Button label="*" operation @onCalcButtonClick="setOperation"/>
        <Button label="4" @onCalcButtonClick="addDigit" />
        <Button label="5" @onCalcButtonClick="addDigit" />
        <Button label="6" @onCalcButtonClick="addDigit" />
        <Button label="-" operation @onCalcButtonClick="setOperation"/>
        <Button label="1" @onCalcButtonClick="addDigit" />
        <Button label="2" @onCalcButtonClick="addDigit" />
        <Button label="3" @onCalcButtonClick="addDigit" />
        <Button label="+" operation @onCalcButtonClick="setOperation"/>
        <Button label="0" double @onCalcButtonClick="addDigit" />
        <Button label="." @onCalcButtonClick="addDigit"/>
        <Button label="=" operation @onCalcButtonClick="setOperation"/>

    </div>
</template>

<script>
import Display from '../components/Display'
import Button from '../components/Button'

export default {
    // Estado inicia da calculadora
    data: function () {
        return {
            displayValue: "0",
            clearDisplay: false,
            operation: null,
            // valores para operação na calculadora
            values: [0, 0],
            // Valor sendo trabalhado agora
            current: 0
        }
    },
    // Registrando os componentes importados
    components: { Button, Display },
    methods: {
        clearMemory() {
            // Atribuindo no this.data o estado inicial do objeto
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation) {
            console.log(operation)
        },
        addDigit(n) {
            // Validação de um unico ponto
            if (n === '.' && this.displayValue.includes(".")) {
                return
            }

            // Casos em que há limpeza no display
            const clearDisplay = this.displayValue === "0"
                || this.clearDisplay

            const currentValue = clearDisplay ? "" : this.displayValue
            const displayValue = currentValue + n

            // Alterando os dados do componente
            this.displayValue = displayValue
            this.clearDisplay = false

            //Inserindo no array de valores
            if (n !== ".") {
                const i = this.current
                // Convertendo as string para float
                const newValue = parseFloat(displayValue)
                this.values[i] = newValue
            }

        }
    }
}
</script>

<style>

.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;

}

</style>