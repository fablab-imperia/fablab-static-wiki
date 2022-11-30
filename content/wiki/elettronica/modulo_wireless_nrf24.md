+++
title="Modulo wireless NRF24"
extra.anteprima="modulo_wireless_nrf24.jpg"
+++
ATTENZIONE: questi moduli lavorano a 3.3V, con i 5v si possono
danneggiare.

La scocciatura di queste schede è che i pin sono disposti su due file
adiacenti e quindi non posso essere inserite in una breadboard senza
cortocircuitarne qualcuno. Vanno usati fili volanti. Ne esistono diverse
versioni, la cui differenza principale sta nella disposizione dei pin
per la comunicazione con arduino. I pin da collegare variano anche in
funzione della libreria che si vuole usare, visto che non ce n\'è una
ufficiale. La scheda con 10 pin ha il nome dei pin stampati direttamente
sopra (cliccare immagine a fianco), mentre altre, come quelle a 8 pin
che ho acquistato, non hanno indicazioni e quindi va seguito questo
schema.

### Tutorial

-   <https://arduino-info.wikispaces.com/Nrf24L01-2.4GHz-HowTo>

### Connessione seriale

Il pin MISO significa Master In Slave Out mentre MOSI viceversa
significa Master Out Slave In e vanno collegati credo obbligatoriamente
ai corrispondenti su arduino (non si tratta di TX e RX). MISO e MOSI
possono essere abbreviati MI e MO. La libreria MIRF, forse la migliore,
è [disponibile
qui](http://playground.arduino.cc/InterfacingWithHardware/Nrf24L01) e
con la libreria vengono forniti gli sketch di prova.

### Wiring dei pin

{{\#eimage:<http://imgur.com/vmZDOVol.jpg%7Calt=>\"!!TITLE!!\"\|320x280px\|thumb\|link=<http://imgur.com/vmZDOVo.jpg%7Cleft%7CEsempio>
di realizzazione}}

-   MISO -\> 12
-   MOSI -\> 11
-   SCK -\> 13
-   CE -\> 8
-   CSN -\> 7

i pin CE e CSN credo si possano configurare a piacimento. Gli sketch di
esempio li ho provati e funzionano. Trasferire dati sembra una cosa
piu\' complessa, sicuramente molto piu complessa rispetto alle XBee.

\
=== Links utili ===

-   [Prova di comunicazione tra due
    schede.](http://www.bajdi.com/playing-with-nrf24l01-modules/)

<!-- -->

-   [Qui una spiegazione per effettuare una comunicazione tipo-seriale
    tra due
    nrf24](http://arduino-for-beginners.blogspot.it/2013/06/arduino-serial-over-nrf24l01.html)

<!-- -->

-   [Altro esempio un po\' incasinato di
    comunicazione](http://arduino-info.wikispaces.com/nRF24L01-Mirf-Examples)

<!-- -->

-   [Con questa libreria invece si possono creare reti peer to peer con
    queste schede](http://maniacbug.github.io/RF24Network/) (non ho
    capito come)

### Altra libreria

<http://airspayce.com/mikem/arduino/NRF24/>
[Categoria:Appunti](Categoria:Appunti "wikilink")
