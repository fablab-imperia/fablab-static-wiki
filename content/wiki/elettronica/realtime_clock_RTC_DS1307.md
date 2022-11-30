+++
title="Realtime clock RTC DS1307"
+++
### Descrizione

Modulo per tenere traccia di data-ora indipendentemente dai reset di
arduino. Necessita di batteria 3V permanente altrimenti si resetta e
anche di cristallo da 32.768 Khz. E\' molto utile scaricare la libreria
dedicata che permette di settarlo la prima volta prendendo direttamente
l\'ora dal pc.

Una sola batteria a pastiglia CR2032 (vedi foto sotto) da 3V tiene
l\'orologio attivo per circa 5 anni!!

{{
    immagine(
        url="realtime_clock_1.png",
        didascalia="Collegamenti"
    )
}}
{{
    immagine(
        url="realtime_clock_2.jpg",
        didascalia="Esempio-prova di connessione (senza resistenze pull-up su bus I2C pare funzionare lo stesso)"
    )
}}
{{
    immagine(
        url="realtime_clock_3.gif",
        didascalia="Schema connessioni di cui sopra:"
    )
}}

### Links utili

Libreria da scaricare: <https://github.com/adafruit/RTClib> (è
necessario rinominare la cartella della libreria togliendo il trattino,
se no non la carica)

Sketch funzionante da
adafruit: http://learn.adafruit.com/ds1307-real-time-clock-breakout-board-kit/understanding-the-code

Tuorial in italiano:
<http://www.logicaprogrammabile.it/usare-modulo-rtc-ds1307-arduino/>
