+++
title="Modulo SD reader/writer"
extra.anteprima="SdReaderWriter.jpg"
description="Modulo per lettura-scrittura su schede SD per immagazzinamento dati"
+++
### Collegamenti

(come da esempi da IDE arduino):

-   MOSI - pin 11
-   MISO - pin 12
-   CLK - pin 13
-   CS - pin 4

+GND +5 / 3.3V

### Sketch

Si possono usare tranquillamente gli sketch di esempio sotto la
categoria SD. Basta solo ricordarsi di impostare il pin CS corretto nel
codice, nel nostro caso con arduino UNO è 4 ma cambia a seconda della
scheda e possono esserci differenze negli sketch di esempio. es.:

    // change this to match your SD shield or module;
    // Arduino Ethernet shield: pin 4
    // Adafruit SD shields and modules: pin 10
    // Sparkfun SD shield: pin 8
    // Teensy 2.0: pin 0
    // Teensy++ 2.0: pin 20
