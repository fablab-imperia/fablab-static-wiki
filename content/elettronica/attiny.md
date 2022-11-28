+++
title = "ATtiny25/45/85"
+++

Programmazione Attiny85 tramite Arduino
=======================================

Programmazione tramite breadboard
---------------------------------

Perché acquistare un programmatore per la Attiny quando si può sfruttare
Arduino al suo posto?

### Strumentazione necessaria

-   Arduino UNO con cavo di collegamento al PC
-   PC con Arduino IDE
-   una basetta di prototipazione (breadboard)
-   Sei cavi jumper maschio-maschio

### Preparazione IDE

1.  Andare su File \> Impostazioni
2.  Copiare [questo
    link](https://raw.githubusercontent.com/damellis/attiny/ide-1.6.x-boards-manager/package_damellis_attiny_index.json)
    in \"Url aggiuntive per il gestore schede\"
3.  Andare in Strumenti \> Scheda \> Gestore schede e scaricare \"attiny
    by Davis A. Mellis\"

### Far funzionare Arduino come un programmatore

Sempre dall\'ambiente di sviluppo Arduino:

1.  File \> Esempi \> ArduinoISP \> ArduinoISP
2.  Connettere Arduino al PC
3.  Verificare che sia selezionata Arduino UNO nella schermata
    Strumenti\>Scheda
4.  Caricare l\'esempio appena aperto su Arduino

### Collegamenti da mettere a punto

Per non sbagliare, fa\' riferimento ai fogli plastificati con la
piedinatura che trovi al Fablab.

| Piedino Arduino |  Piedino Attiny85
-----------------|------------------
5 Volt            |Vcc
Massa             |GND
13                |2
12                |1
11                |0
10                |Reset

### Completamento impostazione IDE e scrittura bootloader

1.  Strumenti \> Scheda \> Attiny
2.  Strumenti \> Clock \> 8Mhz (internal)
3.  Strumenti \> Programmatore \> Arduino as ISP
4.  Strumenti \> Scrivi il bootloader

### Caricare i proprî programmi

Ora si potranno caricare i propri programmi sulla Attiny lasciando
indicato \"Programmatore: Arduino as ISP\", ossia diciamo all\'ambiente
Arduino di non caricare i programmi nella Arduino, ma di sfruttare la
Arduino come semplice programmatore \"ponte\".

Programmazione tramite shield al Fablab
---------------------------------------

Si può semplificare il processo usando lo shield presente al Fablab nel
cassettino \"shield vari\" del banco elettronica. Dopo aver incastrato
lo shield, è necessario inserire correttamente la Attiny sul supporto.
Per farlo, è sufficiente disporre il piedino RESET della attiny
all\'angolo dell\'adesivo R. ![miniatura\|Shield per Attiny85 del
Fablab](Shield_presente_al_Fablab.jpg "fig:miniatura|Shield per Attiny85 del Fablab")
