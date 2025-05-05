document.getElementById('compareButton').addEventListener('click', function() {
    const person1 = parseFloat(document.getElementById('person1').value);
    const person2 = parseFloat(document.getElementById('person2').value);
    const result = document.getElementById('result');

    if (isNaN(person1) || isNaN(person2)) {
        result.textContent = 'Por favor, insira valores válidos para ambas as alturas.';
        return;
    }

    if (person1 > person2) {
        result.textContent = `A Pessoa 1 é mais alta (${person1} cm) que a Pessoa 2 (${person2} cm).`;
    } else if (person1 < person2) {
        result.textContent = `A Pessoa 2 é mais alta (${person2} cm) que a Pessoa 1 (${person1} cm).`;
    } else {
        result.textContent = 'Ambas as pessoas têm a mesma altura.';
    }
});
