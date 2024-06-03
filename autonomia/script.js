/**
 * Calcudaora da autonomia de um carro
 * @author Professor José de Assis 
 */

let capacidade, consumo

function calcularAutonomia() {
    capacidade = document.getElementById("capacidade").value
    let consumo = document.getElementById("consumo").value
  
    //eliminar e usar required no html
    if (capacidade === "" || consumo === "") {
      alert("Por favor, preencha todos os campos.")
      return
    }
  
    let autonomia = (capacidade / consumo) * 100;
    document.getElementById('resultado').innerHTML = `A autonomia do carro é de aproximadamente ${autonomia.toFixed(2)} km por tanque.`

  }
  
  //eliminar usar reset no html
  function limparCampos() {
    document.getElementById("capacidade").value = "";
    document.getElementById("consumo").value = "";
    document.getElementById("resultado").innerHTML = "";
  }
  