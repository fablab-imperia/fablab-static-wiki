+++
title="display 7 segmenti"
+++
{{\#eimage:<http://i.imgur.com/pvhoGPgl.jpg%7Calt=>\"!!TITLE!!\"\|320x280px\|thumb\|link=<http://i.imgur.com/pvhoGPg.jpg%7Cinline%7CTest>
di display a 7 segmenti)}} \_\_TOC\_\_ Quando in un nostro progetto
abbiamo bisogno di visualizzare dei valori alfanumerici, al posto di
utlizzare un grosso display LCD possiamo ricorrere ai semplici e sempre
giovani display a 7 segmenti.\
Tramite l\'accensione di una combinazione di LED, disposti e ordinati in
un unico display secondo lo standard indicato in figura, è possibile
mostrare cifre numeriche e anche alcune lettere, oltre al punto
decimale. Esistono sul mercato display con colori e dimensioni molto
diverse, singoli o appaiati, a catodo comune o ad anodo comune. A
seconda dell\'uso che se ne vuole fare, è opportuno scegliere quelli più
adatti al proprio progetto.\
{\| style=\"margin-left: auto; margin-right: auto;\" \|- \|
{{\#eimage:<http://upload.wikimedia.org/wikipedia/commons/2/2b/Seven_segment_display-animated.gif%7Calt=>\"!!TITLE!!\"\|150x178px\|frame\|left\|Esempio
dei caratteri che si possono mostrare (wikimedia.org)}} \|\|
{{\#eimage:<http://i.imgur.com/LqowBFC.png%7Calt=>\"!!TITLE!!\"\|170x178px\|frame\|left\|Schema
della denominazione dei segmenti}} \|}

Descrizione
-----------

La relativa semplicità di funzionamento di questi display può
consentirci di utilizzarli anche i progetti dove non sono presenti
microcontrollori programmabili. D\'altro canto, però, per gestire ogni
singola cifra alfanumerica vanno pilotati ben 7 LED (+1 per il punto
decimale) e questo può creare dei problemi, perchè con le usuali schede
di prototipazione in uso nei Fablab (tipo Arduino o Raspberry) si
farebbe molto presto a esaurire i pin disponibili per la loro
accensione.\
Per fortuna, esistono \"microchip\" appositamente creati per risolvere
questo problema, che utilizzano la tecnica cosiddetta del
[multiplexing](https://it.wikipedia.org/wiki/Multiplazione)\",
e  abbinati a un microcontrollore esterno (ad esempio un Arduino),
invece di accendere simultaneamente tutti i led necessari per
visualizzare le cifre sui display, attivano solo 1 LED per volta, ma a
una velocità talmente rapida da ingannare l\'occhio umano e dare la
percezione di una accensione simultanea (sfruttando in pratica lo stesso
principio dei fotogrammi nel cinema).\
\
{{\#eimage:<http://i.imgur.com/OM6qTuxm.jpg%7Calt=>\"!!TITLE!!\"\|250x250px\|thumb\|link=<http://i.imgur.com/OM6qTuxm.jpg%7CMax72>\*\*}}
Usando questo stratagemma, un integrato della serie 
[MAX7219/7221](http://playground.arduino.cc/Main/MAX72XXHardware) (o
equivalente) può controllare 8 cifre a display (quindi ben 64 LED)
occupando solo 3 pin digitali. Se questo vi sembrasse ancora poco, è
possibile collegare in cascata fino a 8 di questi MAX7219 / MAX7221, con
il risultato di riuscire a governare ben 64 cifre a display (512 LED!)
sfruttanto sempre i soli 3 pin.  Naturalmente, se governare un numero di
led così elevato è tecnicamente possibile, aumentando considerevolmente
il numero di display da gestire con soli 3 pin, il periodo di refresh
dei display potrebbe apparire visibile. In genere quindi la regola è che
meno display numerici vengono gestiti, migliore è il risultato.\
\
\
== Collegamenti == Abbiamo 3 dispositivi in gioco:\
1) La nostra schedina di prototipazione (Arduino o simile)\
2) L\'integrato MAX7219 o MAX7221\
3) Il display o un array di display a 7 segmenti\
\
I collegamenti tra Arduino (o simile) e MAX 7219 dovranno essere:\
{{\#eimage:<http://i.imgur.com/V8fSRya.jpg%7Calt=>\"!!TITLE!!\"\|link=<http://tronixstuff.com/2013/10/11/tutorial-arduino-max7219-led-display-driver-ic%7C480x320px%7Ccenter%7Cframe>\|[source
tronixstuff.com - (CC - BY NC SA
v4](http://tronixstuff.com/2013/10/11/tutorial-arduino-max7219-led-display-driver-ic))}}
mentre i collegamenti tra un MAX72xx e display sono i seguenti:\
\
{{\#eimage:<http://i.imgur.com/xSMqceC.jpg%7Calt=>\"!!TITLE!!\"\|link=\"<http://playground.arduino.cc/Main/MAX72XXHardware>\"\|480x320px\|center\|frame\|[source
Arduino Playground](http://playground.arduino.cc/Main/MAX72XXHardware)}}

Come potete vedere, nonostante i miracoli offerti dalla modalità del
multiplexing, specialmente se abbiamo diversi display numerici separati,
il numero di connessioni da effettuare per collegare all\'integrato ogni
singolo display  è notevole. Se poi avete scelto di utilizzare dei
display di dimensioni ridotte, vi ritroverete a dover effettuare un gran
numero di saldature molto ravvicinate. \
Anche qua, per fortuna esistono in commercio delle soluzioni già pronte
con diversi display numerici già appaiati al cui interno le connessioni
sono già state predisposte e che consentono di collegare facilmente i
display. Alcune schedine, includono addirittura l\'integrato MAX7219 (o
equivalente), che permettono quindi di collegare il tutto molto
facilmente alla nostra schedina di prototipazione.\
\
Se scegliete di utilizzare un integrato MAX7219 \"nudo\", dovrete
leggere con attenzione il datasheet con le specifiche tecniche per
stabilire il valore della resistenza da interporre tra i 5V e il pin 18
e non dovrete dimenticarvi di utilizzare i condensatori a \"protezione\"
del circuito. In questo caso, inoltre, vi consigliamo di ricorrere ad
apposite schedine di \"breakout\" (anche autocostruibili) pensate
appositamente per rendere più agevoli i collegamenti tra l\'integrato,
il vostro Arduino (o simile) e i display. Ad esempio, noi abbiamo
fresato alcune schedine di breakout trovate sul sito fritzing.com, che
potete vedere in figura.

  ------------------------------------------------------ ------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------- ------- --------------------------------------------------------------------------------------------------------------------------------------------------------
  {{\#eimage:<http://i.imgur.com/isAXs8h.jpg%7Calt=>\"   TITLE   \"\|link=\"<http://fritzing.org/projects/max7219-breakout-board>\"\|480x320px\|center\|frame\|[Il progetto originale stampabile tramite Fritzing](http://fritzing.org/projects/max7219-breakout-board)}}   {{\#eimage:<http://i.imgur.com/DkCxZOhm.jpg%7Calt=>\"   TITLE   \"\|link=\"<http://i.imgur.com/DkCxZOhm.jpg>\"\|480x320px\|center\|thumb\|[La schedina di breakout ricreata da noi](http://i.imgur.com/DkCxZOhm.jpg)}}
  ------------------------------------------------------ ------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- ------------------------------------------------------- ------- --------------------------------------------------------------------------------------------------------------------------------------------------------

Pilotare l\'integrato MAX7219 con Arduino
-----------------------------------------

`   Dando per scontato che abbiate a disposizione un prototipo con tutti i collegamenti effettuati correttamente, con la giusta resistenza e condensatori al loro posto, dovremo ora collegare i 3 pin necessari per il collegamento tra Arduino e l'integrato.`

Per questa operazione è possibile scegliere semplicemente 3 pin
digitali, ad esempio come segue:

  Arduino Uno   MAX72xx
  ------------- ---------------
  Pin 12        Pin 1
  Pin 11        Pin 13 (CLK)
  Pin 10        Pin 12( LOAD)

\
Fatto questo, dobbiamo pensare alla programmazione, ma anche questa
operazione è piuttosto semplice, in quanto ci viene in soccorso
l\'apposita libreria LedControl (non è l\'unica\...).\
Nel codice di esempio che segue, viene inizializzato un MAX7219, quindi
vengono accesi in sequenza una fila di trattini su tutti i display
numerici collegati e viene visualizzato un numero progressivo, il tutto
ciclicamente. Nel video più sotto potete osservare il risultato di
questo test su un array di 6 piccoli display numerici collegato a una
scheda Teensy (tipo Arduino).\

``` {.cpp .numberLines}
#include "LedControl.h" //  need the library
LedControl lc=LedControl(12,11,10,1); // 
 
// pin 12 is connected to the MAX7219 pin 1
// pin 11 is connected to the CLK pin 13
// pin 10 is connected to LOAD pin 12
// 1 as we are only using 1 MAX7219
 
void setup()
{
  // the zero refers to the MAX7219 number, it is zero for 1 chip
  lc.shutdown(0,false);// turn off power saving, enables display
  lc.setIntensity(0,8);// sets brightness (0~15 possible values)
  lc.clearDisplay(0);// clear screen
}
void loop()
{
  for (int row=0; row<8; row++)
  {
    for (int col=0; col<8; col++)
    {
      lc.setLed(0,col,row,true); // turns on LED at col, row
      delay(25);
    }
  }
 
  for (int row=0; row<8; row++)
  {
    for (int col=0; col<8; col++)
    {
      lc.setLed(0,col,row,false); // turns off LED at col, row
      delay(25);
    }
  }
}
```

<small>source: [tronixstuff.com (CC) BY-NC-SA
v.4.0](http://tronixstuff.com/2013/10/11/tutorial-arduino-max7219-led-display-driver-ic/)</small>\
\
E questo è il risultato della nostra prova:

<div style="text-align: center;">

<youtube><http://www.youtube.com/embed/Wdm4Pzc5E4o>\"</youtube>

</div>

Assorbimento di corrente
------------------------

Come già anticipato, ogni MAX7219 deve essere corredato di una
resistenza adeguata al tipo di display a LED che intendete utilizzare,
che è possibile stabilire studiando i datasheet dell\'integrato e quelli
del vostro display. Una volta stabilito il valore corretto della
resistenza, quando sull\'IDE di arduino si inizializzano i display, è
possibile impostare l\'intensità di illuminazione dei LED tramite il
comando.\

``` {.cpp .numberLines}
lc.setIntensity(0,8);// sets brightness (0~15 possible values)
```

questo valore è quello che ha il peso maggiore nel determinare gli
assorbimenti totali dei vostri display a 7 segmenti.\
Dai nostri test, effettuati collegando in cascata 4 MAX7219 equipaggiati
ognuno con 6 display numerici (tot 24 display) completamente accesi
simultaneamente (per un totale di 192 LED) e corredati da resistenze da
47K Ohm, pilotati con una schedina Teensy2++, gli assorbimenti sono
stati i seguenti:\
{\| style=\"margin-left: auto; margin-right: auto; width:30%\"
class=\"wikitable\" \|- \| Assorbimento a vuoto della Teensy2++ \|\| 11
mA \|- \| Valore di intensità 13 \|\| 193 mA (totali) \|- \| Valore di
intensità 0 \|\| 19,6 mA (totali) \|}

Altri usi del MAX72xx
---------------------

Vale la pena di citare che con lo stesso tipo di integrato è possibile
utilizzare anche delle matrici di LED per visualizzare testo o grafica
anche di grosse dimensioni. Per maggiori informazioni vedere il
[tutorial su
tronixstuff.com](http://tronixstuff.com/2013/10/11/tutorial-arduino-max7219-led-display-driver-ic/)
