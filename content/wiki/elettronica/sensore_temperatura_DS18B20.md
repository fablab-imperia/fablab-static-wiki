+++
title="Sensore temperatura DS18B20"
extra.anteprima="sensore_temperatura.png"
+++

### Descrizione

Il sensore DS18B20 è una una sonda in grado di rilevare una temperatura
compresa nel campo -55°C÷125°C con un'accuratezza di ±0.5°C nel campo
-10°C÷85°C. Il campionamento della temperatura è effettuato su 12 bit in
virgola fissa con 4 cifre decimali.

Il trasferimento dei dati avviene tramite il protocollo proprietario
\"1-wire\" che consente di collegarne tanti incascata perchè a ognuno è
associato un ID univoco ed è possibile farlo funzionare anche solo con 2
collegamenti in \"modalità parassita\". Ecco lo spiegone (da qui):

Dallas Semiconductor (now Maxim) produces a family of devices that are
controlled through a proprietary 1-wire protocol. There are no fees for
programmers using the Dallas 1-Wire (trademark) drivers. On a 1-Wire
network, which Dallas has dubbed a \"MicroLan\" (trademark), a single
\"master\" device communicates with one or more 1-Wire \"slave\" devices
over a single data line, which can also be used to provide power to the
slave devices.

Il costo è circa di 3 euro l\'uno. (1,5 euro dalla cina qui su ebay)

### Wiring

<imgur>mjDvvBJ.png</imgur>

### Caratteristiche

-   Unique 1-Wire® interface requires only one port pin for
    communication
-   Each device has a unique 64-bit serial code stored in an onboard ROM
-   Multidrop capability simplifies distributed temperature sensing
    applications
-   Requires no external components
-   Can be powered from data line. Power supply range is 3.0V to 5.5V
-   Measures temperatures from --55°C to +125°C (--67°F to +257°F)
-   ±0.5°C accuracy from --10°C to +85°C
-   Thermometer resolution is user-selectable from 9 to 12 bits
-   Converts temperature to 12-bit digital word in 750ms (max.)
-   User-definable nonvolatile (NV) alarm settings
-   Alarm search command identifies and addresses devices whose
    temperature is outside of programmed limits (temperature alarm
    condition)
-   Applications include thermostatic controls, industrial systems,
    consumer products, thermometers, or any thermally sensitive system

(da sparkfun.com)

### Links utili

Per ogni altra info bel tutorial in inglese

-   <http://bildr.org/2011/07/ds18b20-arduino/>

Qui un tutorial in italiano

-   <http://www.adrirobot.it/sensori/DS18B20/sensore_ds18b20_Arduino.htm>

Altro tutorial in inglese

-   <http://www.hobbytronics.co.uk/ds18b20-arduino>

Qui tutorial per la lettura di diverse sonde su un unico pin dati.

-   <http://arduino-info.wikispaces.com/Brick-Temperature-DS18B20>

Qua la libreria

-   <http://www.pjrc.com/teensy/arduino_libraries/OneWire.zip>

[Qui il
datasheet](http://www.fablabimperia.wiki/w/images/4/40/DS18B20.pdf)

Esiste anche una libreria per questo sensore appositamente realizzata da
un altro sviluppatore che forse semplifica qualcosa.

-   <http://milesburton.com/Dallas_Temperature_Control_Library>


