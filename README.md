<h1 align="center"> Orçamento3DApp </h1>
<p align="center">
<img src="https://img.shields.io/badge/Expo-0.6.2-blue"/>
<img src="https://img.shields.io/badge/Status%3A-In%20Progress-green"/>
</p>

<h2>Aplicação desenvolvida usando React Native e Expo para auxiliar a realização de orçamentos de peças impressas em 3D.</h2>
<p>Conta com duas telas simples e campos a serem preenchidos antes de realizar o cálculo do orçamento.<br>
<p> Na tela ORÇAMENTO, temos dois campos:
 <ul>
   <li>Peso da Peça (peso da peça dado pelo fatiador)</li>  
   <li>Tempo de Impressão (tempo de impressão da peça (EM MINUTOS) dado pelo fatiador)</li>
 </ul>
 OBS: O cálculo só será realizado caso o usuário preencha e salve os dados na tela de DADOS.<br><br>
<p> Na tela DADOS, temos campos essenciais para realizar o cálculo de precificação das peças, como: 
<ul> 
  <li>Consumo de máquina (medida em watts).</li>
  <li>Energia (preço por Kw/H).</li>
  <li>Taxa de Erros(porcentagem de erros para cada impressão).</li>
  <li>Fixação de peças (preço por aditivo a cada impressão).</li> 
  <li>Valor do Filamento (preço total da compra, independe do tamanho do carretel).</li>
  <li>Quantidade Comprada (quantidade de filamento comprada).</li>
  <li>Lucro(porcentagem de lucro para cada peça).</li>
  <li>Depreciação(porcentagem de depreciação e desgaste de cada máquina a cada impressão)</li>
</ul>
<p> O botão "Salvar Dados" guarda com AsyncStorage os dados digitados pelo usuário para realizar o cálculo posteriormente.<br>

<div>
&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160
Tela de Orçamento 
&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160
Tela de Dados
</div>

<div align="center" >
<img src="https://user-images.githubusercontent.com/28853497/224380304-ecc6f5e3-0657-4328-ad02-4b6258a75c9c.jpeg" width="200" />
&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160&#160
<img src="https://user-images.githubusercontent.com/28853497/224381317-a5a7378e-d994-4ad4-ae4f-aafe06b2703b.jpeg" width="200"/>
</div><br>

