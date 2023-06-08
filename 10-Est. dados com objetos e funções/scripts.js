/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

// Definindo a lista de pacientes com suas informações
const patients = [
    {
        name: "Luiz",
        age: 20,
        weight: 100,
        height: 190,
    },
    {
        name: "Inácio",
        age: 45,
        weight: 70,
        height: 170,
    },
    {
        name: "Lula",
        age: 55,
        weight: 80,
        height: 200,
    },
]

// Função para calcular o IMC de um paciente
function calculateIMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
}

// Função para imprimir o IMC de um paciente
function printPatientIMC(patient) {
    return `
        O paciente ${patient.name} possui o IMC de: 
        ${calculateIMC(patient.weight, patient.height)}
    `;
}

// Percorrendo a lista de pacientes
for (let patient of patients) {
    // Chamando a função para imprimir o IMC de cada paciente
    let IMCmessage = printPatientIMC(patient);
    // Exibindo a mensagem do IMC do paciente
    alert(IMCmessage);
}
