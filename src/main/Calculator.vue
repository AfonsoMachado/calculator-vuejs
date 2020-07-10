<template>
    <div class="calculator">
        <Display value="1000"/>
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
    // Registrando os componentes importados
    components: { Button, Display },
    methods: {
        clearMemory() {
            console.log('limpar')
        },
        setOperation(operation) {
            console.log('Operacao' + operation)
        },
        addDigit(n) {
            console.log('Digito' + n)
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