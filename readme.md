# Desafio Backend

## Requisitos
1° simule o recebimento de uma transação
  
2° ao encontrar a transação é necessário encontrar uma cobrança (billing) através do `billingId`. Pode ser feito através de um mock

3° Dentro do `billing` existem os `participantes`, com o valor da trasação faça um cálculo para saber quanto cada participante deve receber em relação a comissão

4° (Bônus) Calcule quanto de taxa cada um deverá arcar, o custo que o participante deve arcar é proporcional a sua comissão

5° (Bônus) O participante pode arcar com todas as taxas ou apenas a taxa de antecipação, veja o campo `feeConfig`

7° Faça exibir o nome de cada participante e quanto ele deveria receber (Pode ser console ou uma API REST)

8° (Bônus) Escreva testes automatizados

## Transação
A transação é uma estrutura de dados que contém os dados de um pagamento. O valor que foi pago e as taxas que devem ser aplicadas em cima do valor que foi pago.

## Billing
O billing, também chamado de cobrança, ele contém todos os pagamentos e quem deve recebê-los (participantes). Como um billing pode ser pago parcialmente, existe um array de pagamentos parciais com os seus devido valores e participantes.

## Participant
O participante recebe o valor da transação, para saber quanto ele deve receber é necessário calcular 
