# Containers
**O que são containers:** Um container é uma unidade padronizada de software que empacota o código e todas as suas dependências para que um software seja executadi de forma rápida e consistente em qualquer ambiente.
**Principais características:** 
* Imutabilidade: Deve execultar rapido e caso suba novamente o mesmo deve permanecer igual ao outro.
* Isolamento de processos e recursos computacionais: Rede, Memoria, Cpu etc.
* Leve: É executado como um **processo** no sistema operacional.
 * Utilizam os recursos do kernel do SO: Não possui a necessidade de instalar um novo SO.
    * O conteiner é "enganado" pensando que ele tem um SO própio.
 * Rápido de iniciar de deve ser removido ou parado: Não há necessidade de "Boot"
 * Utilizam "imagens" (imutaveis) para serem execultados: Algo similar a um snapshot
 * Linux é rei

 # Containers vs Maquinas Virtuais
 * Maquinas Virtuais (VMs):
   * Cada VM executa um sistema operacional, incluindo kernel, e utiliza um hypervisor para gerenciar várias VMs no mesmo hardware. Isso resulta em maior consumo de recursos, maior tempo de inicialização e menor eficiência em termos de uso de memoria e CPU.
* Containers
   * Compartilhamento de kernel do sistema operacional host, isolando apenas o aplicativo e suas dependências. Isso os torna significativamente mais leves, permitindo um uso mais eficiente de recursos e uma inicialização quase instantânea. Containers são ideias para cenários que exigem rápida escabilidade e alta desnsidade de aplicativos em um único host.
   
![dockerVsVms](./img/docekrvsvms.png)