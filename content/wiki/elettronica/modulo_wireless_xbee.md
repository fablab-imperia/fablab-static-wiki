+++
title="Modulo wireless Xbee"
extra.anteprima="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/XBee_Series_2_with_Whip_Antenna%2C_with_US_Quarter.jpg/1024px-XBee_Series_2_with_Whip_Antenna%2C_with_US_Quarter.jpg"
+++

### Link utili

-   Guida alla scelta e alla comprensione dei moduli XBee:

<http://www.robot-italy.com/download/xbee/easy_bee.pdf>

-   Tabella di comparazione tra le prestazioni delle varie XBee:

<http://www.parallax.com/go/xbee>

-   Pagina con moltissime info utili:

<http://www.desert-home.com/p/the-world-of-xbee.html>

#### Arduino Fio + XBee

-   Low power consumption

<http://www.semifluid.com/2012/09/07/arduino-fio-low-power-setup/>

<http://www.semifluid.com/2012/09/09/arduino-fio-internal-voltmeter-and-thermometer/>

-   Varie impostazioni per XBee

<http://www.johnhenryshammer.com/WOW2/pagesHowTo/xbeeSeries1.php#index>

<http://www.ladyada.net/make/xbee/ref.html>

#### Errori comuni con le XBEE

<http://www.faludi.com/projects/common-xbee-mistakes/>

#### USB to XBEE card pinout

<http://www.robot-italy.com/it/xbee-usb-board.html>

#### Raspberry PI e Xbee

<http://tinajalabs.wordpress.com/2012/09/02/raspberry-pi-as-an-xbee-wireless-sensor-network-gateway/>

<http://www.raspberrypi.org/phpBB3/viewtopic.php?t=43915&p=413364>

<http://www.desert-home.com/2013/09/raspberry-pi-and-xbee.html>

<http://www.cooking-hacks.com/documentation/tutorials/raspberry-pi-xbee>

### Sketch

uno è un blink leggermente modificato che manda \"H\" e \"L\" in seriale
quando si accende e si spegne il link:
[download](/files/Blink_serial.txt)

l\' altro sketch legge solo la seriale e accende e spegne il led quando
riceve H e L sulla sua seriale:
[download](/files/Blink_remote.txt)

Sono comodi per verificare funzionamento base.

### Alcuni comandi AT

    ATBD 3 = 9600 baud
    ATBD 6 = 57600 baud
    ATWR = scrivi sul firmware
    ATRE = ritorna alle impostazioni di fabbrica
    ATSM = Sleep modes (vedi link sopra)
