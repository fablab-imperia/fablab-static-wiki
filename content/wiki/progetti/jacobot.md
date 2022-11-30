+++
title="Jacobot"
+++
### Descrizione

Jacobot è un prototipo di smart-car autonoma programmata tramite una
scheda Arduino. A questa smart-car possono essere aggiunti sensori e
dispositivi di output che possono essere utili per visualizzarne lo
stato.

### Componenti

La Smart-Car Jacobot, nella sua composizione iniziale, è composta da:

-   Un telaio metallico e 4 ruote con copertura in gomma
-   4 Motori DC da 5V
-   Una scheda Arduino UNO
-   Un Motor-shield (clone Adafruit)
-   Una batteria Nh-MH da 2000 mA
-   Un sensore di prossimità a ultrasuoni
-   Un display a matrice di led 8x8

### Programmazione e alimentazione

Per alimentare la smart-car è necessario fornire al motor-shield una
tensione sufficiente ad alimentare tutti i componenti installati. La
scheda arduino può essere alimentata in modo \"parassita\" dal
motorshield, ma questo è poco consigliabile in quanto gli sbalzi di
tensione provocati dall\'attivazione dei motori possono provocare dei
reset del microchip che controlla l\'arduino. Per questa ragione abbiamo
provveduto a implementare un by-pass che alimenta direttamente la scheda
arduino sull\'apposito connettore DC.

La programmazione dello shield può avvenire collegando il classico cavo
USB all\'apposito connettore sulla scheda arduino, che si fa carico di
tenere i diversi circuiti di alimentazione separati.

Per governare il motor-shield abbiamo scelto la libreria AFMotor, mentre
per il sensore di prossimità la libreria NewPing. Per la matrice di led
è disponibile la libreria LedControl, che tuttavia inizialmente non
abbiamo utilizzato.

### Fase di test

Abbiamo anzitutto cercato di capire come comandare il motor-shield
utilizzando la libreria AFMotor, e abbiamo creato alcune funzioni allo
scopo di testare i movimenti base, come l\'avanzamento, la retromarcia e
le rotazioni. Per questo abbiamo cercato di definire il valore di
tensione della batteria necessario ad alimentare i motori, che aumentano
la loro velocità di rotazione a seconda del valore di tensione (Volt)
che gli viene fornita dal motor shield.

Ci siamo poi accorti che non è molto semplice ottenere delle risposte
completamente affidabili dai motori utilizzando il motorshield a nostra
disposizione (è disponibile in commercio una versione migliorata), e
questo ci ha costretto a prolungare i test iniziali.

Il comportamento maggiormente affidabile lo abbiamo ottenuto impostando
un parametro di frequenza a 64KHz:

`AF_DCMotor motor1(1, MOTOR12_64KHZ);`

Inoltre abbiamo notato che per motivi non chiari, pur comandando allo
stesso modo tutti i motori, la smart-car aveva una tendenza a
\"sterzare\" verso destra anche durante la marcia rettilinea. Per tale
motivo, dopo alcuni test, abbiamo introdotto un parametro di correzione
aumentando di una piccola frazione la velocità sulle ruote del lato
destro:

`#define RIGHT_SIDE_SLOWNESS_COMPENSATION 1.14f `

Per poter comandare la smart-car a muoversi di una certa distanza,
abbiamo dovuto inserire i dati della circonferenza delle ruote e
correlarli con il tempo di avanzamento richiesto.

Allo stesso modo, per poter eseguire le rotazioni nel modo desiderato, è
stato necessario definire un tempo di avanzamento da mettere in
relazione con l\'angolo di rotazione che si vuole ottenere.

Alla fine dei test i parametri avanzamento e rotazione ottenuti sono
stati:

``` {.c++ .numberLines}
//Circa 1 giro/s a 100
//Circa 20 cm di circonferenza ruota
//Circa 20 cm/s a 200
//Circa 10 cm/s a 100
//Circa 10 cm raggio macchina

#define LINEAR_SPEED 25
#define DESIRED_POWER_TO_MOTORS 150

#define CAR_RADIUS 8.0f
```

