{{\#eimage:<http://imgur.com/dIoJPcTl.jpg%7Calt=>\"!!TITLE!!\"\|480x320px\|thumb\|link=<http://i.imgur.com/dIoJPcT.jpg%7Cinline%7CEsempio>
di realizzazione}} \_\_TOC\_\_ Quando capita di dover inscatolare un
nostro progetto, per posizionare internamente le parti elettroniche o
per sostenere un\'eventuale interfaccia utente, può essere utile
servirsi di profilati a T o a L come quelli comunemente in vendita nei
grandi magazzini del bricolage.\
\
Essendo fabbricati in materiale plastico o alluminio tenero, su questi
profili è possibile effettuare tagli praticare dei fori per le nostre
viti di fissaggio, usando un trapano o un seghetto. Volendo, tuttavia,
si possono prevedere già da progetto fori e tagli e fresare quindi i
profilati in CNC, in modo che poi sia sufficiente serrare le varie viti
e avere tutti i pezzi perfettamente posizionati e allineati. \
\
Fare un lavoro simile, però, è tutt\'altro che semplice, sia perchè le
materie plastiche e l\'alluminio venduto nei magazzini del bricolage
hanno un punto di fusione molto più basso rispetto a quelli normalmente
usati sulle fresatrici, sia perchè questi profilati sono già pezzi
finiti e hanno sempre una \"faccia\" esposta sul piano verticale che
rappresenta un ostacolo fisico al movimento della fresatrice. Per questo
motivo\...\
\

Requisiti
---------

-   fresa a forare, di diametro uguale ai fori per le viti;\
-   fresa monotagliente da 3mm per le profilature;\
-   file dxf come da progetto;\
-   calibro, metro, **esperienza** e TANTA pazienza.\

\
== Quali sono le difficoltà di questo particolare lavoro? ==

<div style="text-align: justify;">

`   Ricapitoliamo:`\
`    `

1.  I profilati sono lunghi e stretti, lo spazio utile per la
    lavorazione della faccia esposta, quindi, è solo di pochi
    millimetri.\
2.  Avremo sempre almeno un elemento verticale che sarà di pericoloso
    ingombro nei movimenti del mandrino.\
3.  L\'utensile dovrà avere una lunghezza sufficiente a consentire il
    taglio del materiale senza che il colletto del mandrino vada a
    collidere con l\'elemento perpendicolare del profilato.\
4.  Data la lunghezza lineare della lavorazione, il poco spazio e il
    rischio di collisioni, il pezzo andrà orientato con attenzione e
    fissato con cura, perfettamente parallelo rispetto all\'asse X della
    cnc.\
5.  La forma dei profilati rende particolarmente difficile il fissaggio
    del pezzo. Le posizioni di ogni staffa o vite di fissaggio, inoltre,
    dovranno essere studiate in modo tale da non andare a occupare la
    zona di lavoro della fresa.\
6.  Visti i margini ridotti in larghezza, soprattutto nei profilati a
    \"T\" lo zero dell\'asse Y va fatto con la massima precisione
    possibile in modo da garantire la simmetricità della lavorazione
    rispetto all\'elemento centrale e una adeguata distanza dallo
    stesso.\
7.  Come accennato, l\'alluminio dei profilati in vendita nei brico è di
    scarsa qualità, con un basso punto di fusione, che tende a impastare
    la fresa. E\' importante tenere bassa la temperatura del pezzo. Se
    non si usano refrigeranti bisognerà quindi avere velocità di
    avanzamento piuttosto alte, e questo stresserà notevolmente le
    nostre frese.\

Per minimizzare il surriscaldamento dell\'alluminio, è consigliabile
utilizzare una punta apposita per le forature delle viti, riducendo così
l\'attrito con il materiale. Inoltre, è sempre bene misurare il nostro
profilato prima di iniziare il lavoro, in quanto non è raro che possano
essere venduti insieme profilati di produttori diversi o che le loro
misure abbiano tolleranze anche intorno al millimetro.

</div>

Il file di progetto
-------------------

<div style="text-align: justify;">

Come esempio per questa lavorazione, effettuiamo dei tagli e dei fori su
profilati in alluminio con sezione a T da 20x20 mm che poi dovranno
sostenere dei pannelli retroilluminabili contenenti strumentazione
elettronica, interruttori e display. Il file DXF è quindi derivato dal
progetto generale su CAD. Bisogna però prestare particolare attenzione
nel caso fosse necessario ribaltare a \"specchio\" il file DXF in quanto
quasi sicuramente i profilati andranno fresati dal lato basso verso
l\'alto, cioè in maniera opposta a come normalmente si orientano sul
progetto.

</div>

Parametri di lavorazione
------------------------

<div style="text-align: justify;">
I parametri di lavorazione, vanno verificati e corretti facendo delle
prove in proprio con le proprie frese e il materiale che si vuole usare.
Nel nostro caso abbiamo usato:

-   Piano Z di sicurezza: 22 mm (altezza profilato + 2 mm)
-   Lavorazione a secco

**Per i fori da 3 mm**

-   Fresa: da foro per metalli, diametro 3 mm
-   Passo in Z: 1,5 mm 
-   Velocità mandrino: 12.000 rpm
-   Velocità in affondo: 300 mm/min

**Per i tagli**

-   Fresa: monotagliente a candela da 3 mm
-   Passo in Z: 0,2 mm con affondi in rampa
-   Velocità mandrino: 15.000 rpm
-   Velocità avanzamento: 1200 mm/min
-   Velocità in affondo: 600 mm/min
    </div>

Messa in macchina
-----------------

<div style="text-align: justify;">

Ecco un paio di accorgimenti pratici che vi consigliamo di adottare:

+-----------------------------------+-----------------------------------+
| {{\#eimage:<http://i.imgur.com/k5 | {{\#eimage:<http://i.imgur.com/wX |
| Uo8D0l.jpg%7Ccenter%7Cthumb%7C300 | aLlZzl.jpg%7Ccenter%7Cthumb%7C480 |
| x480px%7Clink=http://i.imgur.com/ | x320px%7Clink=http://i.imgur.com/ |
| k5Uo8D0.jpg%7CPer>                | wXaLlZz.jpg%7CLo>                 |
| il fissaggio dei profilati ho     | \"zero\" va fatto misurando       |
| usato viti forma conica a coppie  | con precisione il pezzo su tutti  |
| contrapposte e del nastro         | gli assi.  Per prendere           |
| biadesivo.}}                      | riferimenti precisi ho usato la   |
|                                   | punta di un bulino.\              |
|                                   | \                                 |
|                                   | }}                                |
+-----------------------------------+-----------------------------------+

</div>

Video
-----

<div style="text-align: justify;">

Nel video che segue (anche se un po\' sfocato) potete farvi un\'idea
dell\'operazione di fresatura, dei movimenti coinvolti e delle
vibrazioni e risonanze che si sviluppano.\
<youtube><http://www.youtube.com/embed/6z8AR6ZWHIs>\"</youtube>

</div>

[Category:Tutorial](Category:Tutorial "wikilink") [Category:Fresatura
CNC](Category:Fresatura_CNC "wikilink")
[Category:Alluminio](Category:Alluminio "wikilink")
