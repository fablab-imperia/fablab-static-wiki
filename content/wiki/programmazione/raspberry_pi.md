+++
title="Raspberry Pi"
extra.anteprima="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Raspberry_Pi_4_Model_B_-_Side.jpg/320px-Raspberry_Pi_4_Model_B_-_Side.jpg"
+++
### Info Varie

Una buona distro per fare hacking hardware:

<http://learn.adafruit.com/adafruit-raspberry-pi-educational-linux-distro/occidentalis-v0-dot-2>

Scaricare lo zip ed estrarlo

Bisogna prima formattare adeguatamente una SD da almeno 4Gb

(leggere punto 3: format the disk)

<http://elinux.org/RPi_Easy_SD_Card_Setup#Using_NOOBS>

Quindi bisogna scrivere l\'immagine estratta dallo zip con il software
che si trova qui:

<http://elinux.org/RPi_Easy_SD_Card_Setup#Flashing_the_SD_Card_using_Windows>

Una volta fatto, la scheda può già girare nella Raspberry. Mettiamola e
diamo corrente. All\'avvio, se non parte da solo, lanciare:

    sudo raspi-config

E prima di tutto estendere la partizione a tutta la SD disponibile
(expand rootfs), quindi impostare password, localizzazione tastiera, ed
eventualmente abilitare il server ssh.

Se serve accedere al desktop usare il comando

    startx

### ABILITARE LA PORTA SERIALE GPIO

Se si vuole usare la porta seriale per scambiare dati con altri
dispositivi (arduino, xbee, ecc..) bisogna disabilitare getty che di
default apre la schermata di login anche sulla porta seriale. Per fare
questo bisogna andare editare un paio di files. Per modificare i files
usare il tool di editing \"nano\" es:

    sudo nano /percorso/nomefile

da http://blog.oscarliang.net/raspberry-pi-and-arduino-connected-serial-gpio/

### MINICOM - COMUNICAZIONE via seriale

ATTENZIONE: NON collegare direttamente un Arduino, che va a 5v e
danneggerebbe la R-pi!

Una volta collegati i pin 3.3v - GND - Rx - Tx secondo lo schema, ed
avere impostato correttamente l\'altro dispositivo con una certa
velocità di baud di trasferimento dati (9600 baud in questo caso),
lanciare minicom (o un altro programma apposito) con il seguente
comando:

    sudo minicom -b 9600 -D /dev/ttyAMA0

Se necessario, abilitare le opzioni A e E dentro minicom accedendo alle
opzioni con Ctrl+A

### Altre info sull\'interfaccia GPIO

<http://learn.adafruit.com/adafruits-raspberry-pi-lesson-4-gpio-setup>

### PORTA SERIALE AGGIUNTIVA

In realtà la raspberry è fornita di due porte seriali con diverse
prestazioni.

Per tutti i dettagli vedere qui

<http://lavalink.com/2012/04/more-on-raspberry-pi-serial-ports/>

### IMPOSTARE IL WIFI

Per usare il wifi è necessario avere una scheda WIFI su chiave USB
compatibile (molte non lo sono per problemi di eccessivo assorbimento di
corrente dalla Raspberry!).

La distro di cui sopra (occidentalis di adafruit) è predisposta per il
wifi ma va impostato manualmente all\'inizio.

Seguire le istruzioni su questa pagina:

<http://learn.adafruit.com/adafruits-raspberry-pi-lesson-3-network-setup/setting-up-wifi-with-occidentalis>

### Inviare dati a thingspeak

<http://www.desert-home.com/2013/09/raspberry-pi-and-thingspeak.html>
