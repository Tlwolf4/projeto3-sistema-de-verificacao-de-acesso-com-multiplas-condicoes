let nome = prompt("Qual seu nome completo ?").toLowerCase()
let idade = parseInt(prompt("Qual sua idade ?"))

if(idade >= 18 && idade <= 1000){
    alert(`Olá ${nome}! Voce tem acesso completo. Boas vindas a plataforma!` )
} else if (nome == "admin") {
    alert(`Bem-vindo, Admin! Acesso total liberado. `)
} else if (nome == "moderador" && idade >= 16) {
    alert(`Olá, Moderador! Acesso liberado para a área de moderação.`) 
} else if (idade >= 13 && idade <= 17) {
    alert(`Acesso negado. Você pode participar do nosso programa Jovem Aprendiz!`)
} else {
    alert("Acesso negado. O conteúdo é exclusivo para maiores de 18 anos.")

} 
