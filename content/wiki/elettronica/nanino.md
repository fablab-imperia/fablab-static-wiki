+++
title="Nanino"
description="L'arduino fresabile"
extra.anteprima="nanino.jpg"
extra.didascalia_anteprima="Nanino in funzione"
+++

Descrizione
-----------

![miniatura\|600x600px\|Nanino PCB
Layout](Nanino_PCB_Layout.png "fig:miniatura|600x600px|Nanino PCB Layout")
Disponendo dei componenti elettronici necessari, è possibile ricreare un
Arduino semplificato, ma perfettamente funzionante, su una breadboard o
su una basetta millefori. Vista la spaziatura non standard dei pin,
però, ricostruendo così un Arduino non ci si potrà mai realmente
\"agganciare\" uno shield sopra, e questo è un grosso limite per lo
sviluppo di progetti fai da te.

Qualcuno però si è posto il problema di creare un progetto di PCB
\"monofaccia\" riproducibile facilmente e l\'ha chiamato
[Nanino](http://vonkonow.com/wordpress/2012/10/nanino-the-diy-friendly-arduino/).
Qualcun altro si è preso la briga di convertire il layout di questo
progetto su Eagle, e noi del Fablab ci siamo presi la briga ottimizzarlo
per la produzione con la fresatrice e apportare alcune modifiche e farne
una versione piccola e una più grossa con possibilità di saldarci sopra
altri componenti.

Il risultato è che se ci serve un Arduino con il \"footprint\" classico
dell\'arduino UNO per far girare un progetto o uno shield, non siamo più
costretti a comprare un \"vero\" Arudino, ma basta comprare il
processore (spesso lo vendono con il bootloader già caricato) e
pochissimi componenti, il tutto per una [manciata di
euro](http://www.ebay.it/itm/Kit-Arduino-Atmel-Atmega328p-pu-con-componenti-/121642279074?hash=item1c5271e0a2).
Si fresa la basetta, si fanno due saldature ed ecco pronto l\'arduino
per il nostro progetto. ![miniatura\|600x600px\|Nanino Mini PCB
Layout](Nanino_Mini_PCB_Layout.png "fig:miniatura|600x600px|Nanino Mini PCB Layout")

Caricamento sketch
------------------

L\'unica grossa differenza rispetto a un Arduino \"vero\" è che, per
semplicità, il Nanino non include l\'intefaccia USB, quindi per caricare
il nostro codice sul Nanino o per sfruttare la connessione seriale
tramite PC è necessario utilizzare un piccolissimo programmatore FTDI,
che si trova a circa 5€ su ebay, ma che è riutilizzabile all\'infinito
per tutti i nostri progetti, e dovrete anche saldare un condensatore
aggiuntivo tra DTR e Pin1, come mostrato [in questo
video](https://www.youtube.com/watch?v=hCl6oRFiVZo). Il programmatore
FTDI è ovviamente presente al Fablab, per chi volesse utilizzarlo.

Limiti
------

Bisogna comunque precisare che il Nanino è un bell\'esercizio per
mettersi alla prova e imparare qualcosa di nuovo, ma non è la soluzione
più economica né quella più rapida. Su internet si trovano cloni di
arduino a prezzi irrisori, già belli pronti e prodotti con tecniche di
qualtà industriali: niente di paragonabile a questo progetto un po\'
artigianale!

Realizzazione
-------------

Per realizzare il vostro Nanino potete scaricare i relativi [files per
Eagle dal nostro canale
GitHub](https://github.com/fablabimperia/Nanino_clone-for-EagleCad).

{{
    immagine(
        url="http://i.imgur.com/g8bpD72l.jpg",
        didascalia="PCB del Nanino v. 0.8"
    )
}}


Video in funzione
-----------------
{{
    youtube(
        id="hCl6oRFiVZo"
    )
}}
