+++
title="Modulo NFC rfid PN532"
extra.anteprima="PN532_NFC_Module.jpg"
+++

### Links utili

-   [Sito
    produttore](http://www.elechouse.com/elechouse/index.php?main_page=product_info&cPath=90_93&products_id=2205)

<!-- -->

-   [Guida
    utente](http://www.fablabimperia.wiki/w/images/2/21/PN532_NFC_RFID_Module_Manual.pdf) (copia-incolla
    dal pdf non consentito):

<!-- -->

-   [Sketch di prova](Nfc_test.ino "wikilink") (copiato a mano)

l modulo può funzionare con 3 interfacce: I2C (default), SPI (seriale),
HSI. Per modificare il parametro di default bisogna invertire due
ponticelli SMD saldati sulla scheda.

La connessione quindi avviene su bus I2C, ma praticamente non bisogna
fare nulla per impostarla perchè se ne fa carico completamente la
libreria dell\'NFC. A differenza della connessione seriale che ha i pin
RX e TX, la connessione I2C prevede i pin SDA e SCL. Questi due pin,
però non possono essere semplicemente collegati direttamente ai
corrispondenti sulla scheda arduino ma bisogna mettere due resistenze di
pull-up in parallelo tra questi due pin e il 5V. A questo, per fortuna,
pensa la sensor shield comprata da Stefano, che integra queste due
resistenze di pull-up direttamente a fianco del connettore per i
collegamenti I2C.

Ma\... ATTENZIONE! Il connettore della sensor shield, ha i pin invertiti
rispetto a quelli del modulo, e quindi non abbiamo potuto usare il
cavetto fornito con il modulo ma abbiamo dovuto collegare singolarmente
i vari pin.

Lo sketch di prova fornito nel cosidetto user guide, è in un pdf che non
consente il copia incolla. Così ci siamo dovuti mettere e l\'abbiamo
interamente ricopiato a mano. Per la compilazione, come detto, è
necessaria la libreria fornita sul sito del produttore. Nella cartella
fornita, però, è presente anche la libreria Wire, che noi abbiamo già
nella suite di arduino, e quindi i duplicati della libreria wire vanno
eliminati a mano uno per uno.

Compilato con successo lo sketch l\'abbiamo caricato. All\'avvio sul
monitor seriale compare subito un messaggio che indica se il modulo è
rilevato correttamente o meno. In caso negativo, bisogna verificare che
i collegamenti siano corretti e che le resistenze di pull-up siano al
loro posto. Se invece va tutto bene lo sketch è impostato per mostrare i
dati delle tag passate nelle vicinanze del modulo, che compaiono
direttamente nel monitor seriale. Questi dati includono un ID univoco
della tag, e altri dati che sono presumibilmente il contenuto delle
pagine di memoria e la loro quantità, ma questo è da verificare.
