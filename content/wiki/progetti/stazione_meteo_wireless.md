+++
title="Stazione meteo wireless"
extra.anteprima="stazione_meteo_wireless.jpg"
+++
In breve\...
------------

La
Stazione Meteo Wireless permette la registrazione di dati meteorologici
raccolti da sensori e la loro analisi tramite la creazione di grafici su
internet ed è composta da un\'unità esterna e una interna.

L\'unità esterna, calibrata per un basso consumo di corrente, viene
alimentata da una batteria si carica durante il giorno tramite un
piccolo pannello fotovoltaico, mentre l\'alimentazione del Raspberry
dell\'unità interna è fornita dalla rete elettrica.

La comunicazione in wireless tra le due unità è affidata alle due
schedine XBee Serie 1 che, appositamente programmate, permettono di
ottenere in modo trasparente una connessione seriale in remoto, come se
fossero cablate insieme, e l\'unità interna è collegata via WiFi
permette l\'invio dei dati su internet.

Le schede di prototipazione alla base di questo progetto sono state
scelte tra quelle più adatte agli scopi e disponibili al Fablab. In
particolare la scheda Arduino Fio è predisposta per l\'alloggiamento di
schede di tipo XBee, e inoltre include un circuito di regolazione di
carica, con ingresso per la batteria e per alimentazioni di ricarica,
che è molto comodo per poter utilizzare batterie ricaricabili e creare
progetti autonomi.

Per l\'unità interna abbiamo scelto un Raspberry Pi perchè era la
possibiltà più rapida per poter inoltrare i dati dei sensori su Wi-Fi,
ma è evidentemente un componente sovradimensionato rispetto al lavoro
richiesto, e pertanto può essere efficacemente sostituito con
dispositivi più semplici.

I Componenti
------------

### L\'unità esterna

-   Un\'unità esterna autonoma basata su Arduino Fio è composta da:
    -   Arduino Fio
    -   Scheda Wireless XBee (Serie 1)
    -   Batteria Li-Ion da 1400 mAh
    -   Pannello solare da 6W
    -   Scatola stagna di derivazione elettrica
    -   Sensore Temperatura (DS18S20)
    -   Sensore Umidità (DHT22)
    -   Sensore Pressione atmosferica (BMP085)
    -   Anemometro (Velocità vento)
    -   Pluviometro (Precipitazione)
    -   Sensore Illuminazione (via Led con funzionamento inverso)
    -   Modulo Scheda SD
    -   Orologio (Real Time Clock DS1307)

### L\'unità interna

-   Un\'unità interna basata su Raspberry è composta da:
    -   Raspberry Pi (Model B)
    -   Scheda SD da 4Gb
    -   Chiavetta Wi-Fi
    -   Scheda Wireless XBee (Serie 1)
    -   Box standard per Raspberry Pi B

### Connessioni

Per il cablaggio dei vari componenti e dei moduli sensori, è necessario
rifarsi alla documentazione rilasciata dai produttori o disponibile su
internet. Nel nostro caso, abbiamo ricavato informazioni da diverse
fonti, e indichiamo di seguito i link utilizzati.

Ogni singolo componente va quindi collegato seguendo le relative
istruzioni. Vi consigliamo comunque di procedere passo passo aggiungendo
allo sketch del vostro Arduino Fio un sensore alla volta e verificandone
il funzionamento

-   BMP085 Pressure
    sensor <http://bildr.org/2011/06/bmp085-arduino/>, <http://www.sparkfun.com/tutorials/253>
-   RTC
    Clock <http://learn.adafruit.com/ds1307-real-time-clock-breakout-board-kit/understanding-the-code>
-   SD Card <http://arduino.cc/en/Tutorial/Datalogger>
-   Arduino Fio
    Programming <http://arduino.cc/en/Main/ArduinoBoardFioProgramming>
-   Temperature DS18S20 sensor <http://bildr.org/2011/07/ds18b20-arduino/>
-   DHT22 Humidity sensor <http://gist.github.com/dmccreary/7503212>
-   LED as Light
    sensor <http://www.instructables.com/id/LED-as-lightsensor-on-the-arduino/>
-   Vcc internal
    sensor <http://code.google.com/p/tinkerit/wiki/SecretVoltmeter>, <http://www.semifluid.com/2012/09/09/arduino-fio-internal-voltmeter-and-thermometer/>
-   Wind sensor / Vane / Rain
    gauge <http://kesslerarduino.wordpress.com/2012/06/21/sparkfun-weather-station/>
-   Barometric Pressure sensor <http://bildr.org/2011/06/bmp085-arduino/>
-   Arduino Sleep
    Mode <http://playground.arduino.cc/Learning/arduinoSleepCode>
-   Arduino Fio and XBee Sleep
    Modes <http://www.semifluid.com/2012/09/07/arduino-fio-low-power-setup/>
-   XBee <http://www.johnhenryshammer.com/WOW2/pagesHowTo/xbeeSeries1.php>,  <http://www.desert-home.com/p/the-world-of-xbee.html>
-   Raspberry Pi and ThingSpeak (Python
    script) <http://www.desert-home.com/2013/09/raspberry-pi-and-thingspeak.html>, <http://pyserial.sourceforge.net/>

La programmazione
-----------------

### Impostare le schede XBee Serie 1

\...

### Sketch per l\'Arduino Fi

Anzitutto va precisato che l\'Arduino Fio non consente il caricamento
via USB degli sketch, ma come alcune altre schede arduino di ridotte
dimensioni, è necessario utilizzare un piccolo programmatore FTDI e
collegarlo correttamente agli appositi Pin indicati sulla scehda.
