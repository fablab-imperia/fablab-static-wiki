+++
title = "Arduino - Genuino"
+++

### Info generiche

-   Links utili
    -   [Schemi Pinout di tutte le schede ufficiali Arduino e relativi
        microcontrollori](http://www.robot-italy.com/it/blog/progetti/450)
    -   [Tutorial di tutti i
        tipi!](http://tronixstuff.wordpress.com/tutorials/)
    -   [Cose che è meglio evitare negli sketch di
        arduino](http://miscsolutions.wordpress.com/2011/10/16/five-things-i-never-use-in-arduino-projects/)
    -   [Arduino ISP (In System Programming) and stand-alone
        circuits](http://www.open-electronics.org/arduino-isp-in-system-programming-and-stand-alone-circuits/)

#### Usare i pin LOW come GND?

### Arduino Fio + Xbee

-   Low power consumption
    [1](http://www.semifluid.com/2012/09/07/arduino-fio-low-power-setup/)
    [2](http://www.semifluid.com/2012/09/09/arduino-fio-internal-voltmeter-and-thermometer/)

### Arduino Leonardo

-   [Differenze rispetto a ArduinoUNO, e problemi di
    upload](https://sites.google.com/site/stevalenr/wiki/arduino-generico/arduino-leonardo/differenze-con-la-uno-e-problemi-di-upload)

### Tipi di variabili in Arduino

Tratto dal tutorial [Sparkfun: Introduction to data types in the
Arduino](https://learn.sparkfun.com/tutorials/data-types-in-arduino)

-   **boolean** (8 bit)- simple logical true/false.
-   **byte** (8 bit)- unsigned number from 0-255.
-   **char** (8 bit)- signed number from -128 to 127. The compiler will
    attempt to interpret this data type as a character in some
    circumstances, which may yield unexpected results.
-   **unsigned char** (8 bit)- same as 'byte'; if this is what you're
    after you should use 'byte' instead, for reasons of clarity.
-   **word** (16 bit)- unsigned number from 0-65535.
-   **unsigned int** (16 bit)- the same as 'word'. Use 'word' for
    clarity and brevity.
-   **int** (16 bit)- signed number from -32768 to 32767. This is most
    commonly what you see used for general purpose variables in Arduino
    example code provided with the IDE.
-   **unsigned long** (32 bit)- unsigned number from 0-4,294,967,295.
    The most common usage of this is to store the result of the millis()
    function, which returns the number of milliseconds the current code
    has been running.
-   **long** (32 bit)- signed number from -2,147,483,648 to
    2,147,483,647.
-   **float** (32 bit)- signed number from -3.4028235E38 to
    3.4028235E38. Floating point on the Arduino is not native; the
    compiler has to jump through hoops to make it work. If you can avoid
    it, you should. I'll touch on it later; a more thorough tutorial on
    the general use of decimal point math in the Arduino will follow at
    a later date.

### Le funzioni

<https://www.arduino.cc/en/Reference/FunctionDeclaration>

### Le Union

Le union sono utili per convertire variabili grosse in piu\' bytes o
ricavarle da dati seriali.

Tutorial: [1](http://forum.arduino.cc/index.php?PHPSESSID=qdqli9tdavp0mrv6s92kl8jka6&topic=43222.msg313148#msg313148), [2](http://www.utopiamechanicus.com/article/data-splitting-union-and-struct-c/)

Esempio:

``` {.cpp .numberLines}
float snelheid;

union u_tag {
    byte b[4];
    float fval;
} u;

u.b[0] = snelheidArray[0];
u.b[1] = snelheidArray[1];
u.b[2] = snelheidArray[2];
u.b[3] = snelheidArray[3];

snelheid = u.fval;
```

### Gli Interrupt

a volte capita di voler far stare arduino in \"ascolto\" di un evento
che può verificarsi casualmente, ma che è difficile captare perchè in
quel frangente potrebbero essere in esecuzione altre funzioni. E\'
possibile gestire agevolmente questi eventi servendosi degli interrupt,
ovvero delle \"interrupt service routine\". Si impostano cioè degli
eventi che se accadono su determinati pin (tipicamente un paio, il 2 e
il 3), interrompono quello che sta facendo arduino e mandano in
esecuzione immediatamente una certa funzione pre-impostata.

Mi sembra una funzione molto utile che che finora non era uscita. Io la
userò per \"acchiappare\" gli impulsi dei sensori di velocità del vento
e della pioggia per calcolarne le intensità. Le funzioni attaccate al
pin dell\'interrupt hanno alcune limitazioni, in particolare al loro
interno non funzionano i delay e i valori restituiti da millis() non
incrementano. Inoltre le variabili usate al loro interno vanno definite
come \"volatile\" il che se ho ben capito significa che vengono scritte
e lette direttamente dalla ram e non su altri registri (il motivo è che
durante l\'interrupt arduino esce dal loop).

-   [qui i dettagli](http://arduino.cc/en/Reference/attachInterrupt)

<!-- -->

-   [qui i dettagli delle variabili
    \"volatile\"](http://arduino.cc/en/Reference/Volatile)

<!-- -->

-   [qui un
    tutorial](http://www.maffucci.it/2012/06/11/appunti-su-arduino-interrupts/)

[Category:Prototipazione
rapida](Category:Prototipazione_rapida "wikilink")
[Category:Arduino](Category:Arduino "wikilink")
[Category:Appunti](Category:Appunti "wikilink")
