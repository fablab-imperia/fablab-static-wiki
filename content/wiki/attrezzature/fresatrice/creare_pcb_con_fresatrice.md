+++
title="Creare un PCB con la fresatrice"
extra.anteprima="pcb_fresatrice_1.jpg"
+++
Vediamo come è possibile **realizzare circuiti stampati** (PCB) a
singola faccia con una fresatrice CNC a 3 assi, e in particolare con la
fresatrice e il relativo software disponibile presso il nostro Fablab\

{{
  immagine(
    url="pcb_fresatrice_1.jpg"
  )
}}
{{
  immagine(
    url="pcb_fresatrice_2.jpg",
    didascalia="Esempi di PCB realizzati con la nostra fresatrice"
  )
}}


Descrizione
-----------

La tecnica consiste nella rimozione dello strato sottilissimo di rame
(in genere 35 micron) presente sulla basetta ramata, secondo geometrie
definite, tramite frese molto piccole e precise, isolando così alcune
parti della basetta per ricavare le tracce conduttive, i piani di
\"terra\" e le piazzole che formano il circuito.\
\
Rispetto ad altre procedure (etching\...) il metodo di realizzazione di
PCB tramite fresatura ha il vantaggio di produrre in tempi rapidi un
circuito direttamente saldabile, senza l\'impiego di liquidi corrosivi
che andrebbero trattati con attenzione e poi smaltiti. **E\' comunque
necessario assicurarsi di utilizzare un aspiratore con filtri adeguati
per non disperdere nell\'aria le polveri di vetronite che possono essere
pericolose per la salute.**\
\

Requisiti
---------

-   Anzitutto dovete avere già un po\' di dimestichezza con la macchina,
    quindi dovete aver seguito il relativo corso presso il Fablab e
    conoscere le basi della tecnica di fresatura illustrate nel [manuale
    della fresatrice Aero
    CNC](https://docs.google.com/document/d/1i_5C_7IlP1owYVlmUpaZQ8BZScjpKpAXED3aAMoBzDc/edit?usp=sharing)
    che abbiamo preparato.\
-   Poi, come dicevamo, vi serve un software CAD dedicato alla
    progettazione di circuiti elettronici. Esistono diverse soluzioni
    opensource, commerciali o freeware. Tra i più popolari e
    multipiattaforma (disponibili per Win/Mac/Linux) citiamo:
    -   [EagleCAD](http://www.cadsoftusa.com/download-eagle/freeware/) -
        sia in versione freeware per usi non commerciali (limitato a
        8x10cm e 2 facce) che a pagamento. E\' la soluzione più
        collaudata e affidabile, anche se poco intuitivo all\'inizio.\
    -   [KiCAD](http://kicad-pcb.org/) - buona alternativa opensource
        (da verificare i file di esportazione prodotti)\
    -   [Fritzing](http://fritzing.org/home/) - molto intuitivo e facile
        da usare per la progettazione, ma purtroppo produce file Gerber
        che generano alcuni problemi.\
    -   [123DCircuits](https://123d.circuits.io/) - applicazione
        \"cloud\" su web abbastanza intuitiva, per progettare e simulare
        il funzionamento dei circuiti (ma al momento non consente
        l\'esportazione di file Gerber)\
-   Quindi, un software CAM per trasformare il nostro circuito in
    movimenti della fresa. Al Fablab utilizziamo CopperCAM (vedere più
    avanti)\
-   Una basetta ramata monofaccia di dimensioni adeguate\
-   Frese per incisione, foratura e taglio adeguate per il nostro
    circuito.\
-   Nastro biadesivo retato\
-   **Pazienza** (sul serio, andare di corsa o prendere scorciatoie non
    conviene e può essere pericoloso)\

Lavorazione
-----------

La lavorazione nel suo complesso è piuttosto lunga, e si può suddividere
in 5 fasi, con le prime due fattibili tranquillamente sul proprio PC di
casa:\

1.  <span style="font-weight: bold;">Progettazione del circuito</span>.
    Va preparato un progetto su PC del nostro circuito usando un
    apposito sofware CAD (Computer-aided Design) in modo da esportare
    dei file facilmente lavorabili da un software CAM (preferibilmente
    usando file Gerber/Excellon).\
2.  <span style="font-weight: bold;">Impostazione dei percorsi
    utensile</span>. Un software CAM (Computer-aided manifacturing) sarà
    usato a sua volta per definire le modalità e i parametri di
    lavorazione della fresatrice. La lavorazione si suddivide
    normalmente in tre fasi: incisione delle tracce, forature e taglio
    finale del perimetro.\
3.  <span style="font-weight: bold;">Preparazione della macchina</span>.
    I file dei percorsi utensile esportati dal CAM come Gcode dovranno
    quindi essere caricati nel software che governa l\'elettronica della
    fresatrice dove andranno anche definiti i riferimenti spaziali.\
4.  <span style="font-weight: bold;">Procedura di autolivellamento del
    piano Z</span>. Se disponibile, tramite lo stesso programma dovrà
    essere effettuata la calibrazione fine dell\'intera superficie da
    lavorare tramite tastatore a contatto, in modo da addattare
    perfettamente il g-code alla superficie effettiva della basetta, che
    non è mai perfettamente planare.\
5.  <span style="font-weight: bold;">Avvio della lavorazione e cambi
    utensile</span>.\

\

FASE 1: Progettazione del circuito
----------------------------------

Se siete alle prime armi con l\'elettronica, il primo passo per
realizzare un circuito deve essere sempre la preparazione di un
prototipo su una [breadboard](breadboard "wikilink"), dove andranno
posizionati e collegati tutti i componenti e verificato che funzioni
tutto come previsto. Solo quando sarete sicuri che tutto sia collegato
correttamente sarà il momento di inziare a portare il circuito sul
software CAD di progettazione.\
\
Tra le varie soluzioni, il CAD che attualmente preferiamo usare, è
EagleCad in versione freeware. Nonostante la sua fama, una volta apprese
le basi, Eagle non è così difficile da usare, ma soprattutto è molto
collaudato ed affidabile, e conoscerlo può tornare utile perchè i
circuiti resi disponibili online vengono spesso distribuiti in questo
formato. Inoltre le più famose case produttrici di componenti
elettronici (come Sparkfun, Adafruit\...) rilasciano pubblicamente le
proprie librerie per Eagle (.LBR) che si possono importare e utilizzare
direttamente nei propri progetti. E\' anche presente una base molto
ampia di utenti e quindi di guide e tutorial disponibili in rete.\
\
In ogni caso potete usare il CAD che preferite, a patto che i file
esportati siano utilizzabili con i CAM in uso al Fablab, cioè Cambam o
ancora meglio CopperCam, specifico per i PCB.\
\
Per apprendere rapidamente le basi dell\'uso di uno dei programmi CAD
suggeriti sopra, potete trovare degli ottimi video tutorial su youtube.
In particolare segnaliamo.

-   Tutorial EagleCad (in Italiano) -
    [Video1](https://www.youtube.com/watch?v=rz-Fr4roZLc) -
    [Video2](https://www.youtube.com/watch?v=i__W3ZVxGBQ) + [Tutorial
    sull\'autorouting](https://www.youtube.com/watch?v=e9FMRPnDyZw) di
    Eagle (in inglese)\
-   Per KiCad (in Italiano) -
    [Video1](https://www.youtube.com/watch?v=7sM9sz2WrRw) -
    [Video2](https://www.youtube.com/watch?v=kaA5pS84EPQ)\

Inoltre è bene chiarire che **con la fresatrice non si può riprodurre
qualsiasi circuito progettato**, in quanto la tecnica di fresatura
implica altre limitazioni nella spaziatura minima tra le tracce.

Infatti, considerando le tolleranze e l\'usura degli utensili, di solito
il solco minimo fresabile sul rame si aggira intorno ai 0,2 mm, perciò,
se disegnate delle tracce troppo ravvicinate l\'una all\'altra,
rischiate di non riuscire a riprodurre correttamente il circuito con la
fresatrice.\
I valori da usare dipendono principalmente dalla dimensione e dalla
qualità dell\'utensile che volete utilizzare.\
\
Con Eagle, se non volete rischiare di progettare un circuito impossibile
da fresare, potete scaricare dal nostro profilo
[Github](https://github.com/fablabimperia/Eagle-DRC-CAM) i file di
configurazione che abbiamo preparato per utilizzare i corretti criteri
di spaziatura durante la progettazione del vostro circuito. Sarà
sufficiente aprire lo strumento \"DRC\", cliccare \"Load\" e selezionare
il file DRC che avete scaricato.\
Inoltre, sempre sullo stesso repository di Github trovate i file di
configurazione di Eagle per l\'esportazione di file Gerber/Excellon
adatti ad essere lavorati con CopperCAM. Per utilizzarli dovrete
selezionare lo strumento \"Cam Processor\", quindi, dal menù File
selezionate \"Open / Job\", e aprite il file .CAM che avete scaricato.
Quindi confermate cliccando \"Process Job\", e i file Gerber/Excellon da
aprire con CopperCamsaranno automaticamente creati nella stessa cartella
del vostro circuito.\
(aggiorniamo spesso questi file, assicuratevi di avere l\'ultima
versione!)\
\
Una volta terminata la progettazione del vostro PCB, vi consigliamo di
stampare su carta il vostro progetto in scala reale, per verificare che
i vari componenti a vostra disposizione si adattino perfettamente alle
piazzole e relativi fori indicati nel progetto.\
Quindi, confermato che è tutto a posto, a seconda del CAD che avete
utilizzato potrete esportare il circuito in diversi modi.
Preferibilmente vanno usati i formati Gerber/Excellon, ma in alternativa
è possibile esportare il circuito in file vettoriali puri o al limite
dei file immagine in bianco e nero ad alta definizione. Ogni soluzione
ha i suoi pro e i suoi contro.\

### Cosa sono i file Gerber/Excellon?

In breve, i file Gerber sono lo standard per l\'esportazione di tutte le
informazioni necessarie alla produzione di circuiti con tecniche
industriali. Le informazioni per la realizzazione dei fori possono anche
venire salvate a parte su un file in formato Excellon.\
A seconda del modo in cui vengono passate le informazioni tra CAD e CAM
possono essere utilizzati anche entrambi i formati, facendo però
attenzione nel caso i fori venissero ricavati dal file Excellon, perchè
questi andranno riallineati nel CAM per farli coincidere con le
posizioni delle piazzole (vedere il prossimo paragrafo).\

FASE 2: Impostazione dei percorsi utensile.
-------------------------------------------

-   Se avete esportato il vostro circuito con i file Gerber/Excellon,
    avrete bisogno di utilizzare un CAM specifico per PCB, tramite il
    quale potete non solo stabilire i percorsi utensile, ma anche
    intervenire ancora sulle caratteristiche del circuito apportando
    varie correzioni.\
    A questo proposito, qui trovate il [Tutorial su
    Coppercam](Tutorial_CopperCam "wikilink") (programma in uso al
    Fablab) che <span style="text-decoration: underline;">è necessario
    conoscere</span>.\
-   Se viceversa avete esportato il circuito in un file immagine in
    bianco e nero o un semplice vettoriale, potrete ricorrere al CAM
    tradizionale (es. CamBam). Da una parte semplificherete la
    realizzazione del circuito, ma dall\'altra perderete tutte le
    funzionalità di un CAM specifico.\

### Utensili

![Un bulino, una punta da foro e una da
taglio](MBqpzLm.jpg "fig:Un bulino, una punta da foro e una da taglio")
In genere la realizzazione di una PCB per fresatura implica tre diverse
lavorazioni, ciascuna eseguita con un utensile diverso, che vanno
eseguite in questo ordine:\

1.  Le tracce vengono incise con un
    \"<span style="font-weight: bold;">bulino</span>\", una fresa a
    punta conica con diametro in punta da intorno ai 0,2mm. Minore è il
    diametro in punta, più piccoli potranno essere i solchi di
    isolamento tra le tracce o la dimensione di testi incisi. Di contro,
    una punta molto piccola impiega tempi molto lunghi per svuotare
    ampie zone dal rame.\
    La larghezza minima delle singole tracce invece non è influenzata
    dal diametro del bulino, quindi se non servono spaziature piccole
    conviene usare un bulino con diametro maggiore.\
2.  I fori vengono eseguiti tramite
    <span style="font-weight: bold;">frese da foro</span> simili alle
    punte di un normale trapano ma di diametro tipicamente tra i 0,6mm e
    i 1,5mm.\
    Ogni componente o connettore caricato nel nostro progetto durante la
    preparazione del PCB presenta un diverso diametro dei piedini di
    collegamento (o reofori), ma sarebbe sconveniente utilizzare tante
    frese quanti sono i diametri dei piedini, perchè ciò obbligherebbe a
    molti fermo-macchina per il cambio utensile. Perciò in genere si
    sceglie di usare la punta con il diametro maggiore richiesto dal
    circuito, o un paio di misure, nel caso alcuni fori debbano
    obbligatoriamente essere più piccoli. Va invece assolutamente
    evitato di provare ad allargare a mano i fori dopo la lavorazione,
    in quanto così facendo si disperderebbero in aria le pericolose
    polveri di vetronite e si rischirebbe di danneggiare
    irreparabilmente le piazzole del circuito. \
3.  Il taglio perimetrale, quando necessario, si esegue con una
    <span style="font-weight: bold;">fresa a candela</span> da 1,5-2,0
    mm, in un due o tre passate. Anche in questo caso, sono da evitare i
    cosiddetti \"ponti\" per tenere fermo il pezzo perchè ciò
    obbligherebbe a spezzarli o tagliarli a mano, disperdendo nell\'aria
    la polvere di vetronite. In genere un buon biadesivo retato è
    sufficiente; al massimo si può ridurre la profondità di ogni passata
    passata per \"stressare\" meno il materiale.\

### Quanto sono precisi gli utensili?

Per contenere i costi, al Fablab utilizziamo prevalentemente utensili di
produzione cinese, per i quali le tolleranze non sono neppure
rilasciate. Ciò non significa che ci si debbano aspettare differenze
esagerate rispetto ai diametri nominali, ma è bene sapere che due frese
dello stesso tipo possono non essere identiche, tanto più se una è già
stata usata e quindi è usurata.\
Per ottenere i migliori risultati vi suggeriamo di misurare sempre il
diametro effettivo delle frese che intendete utillizzare con il
microscopio USB disponibile al fablab e di riportarlo sul CAM prima di
creare il gcode.\

### <span style="font-weight: bold;">Che parametri bisogna impostare? </span>

In linea generale, le frese e i parametri di lavorazione che usiamo
abitualmente per i PCB sono:

-   Per le <span style="font-weight: bold;">tracce </span>(o piste) e
    svuotamenti del rame
    -   Bulini da 0,2 mm - 1,00 mm con angolo in punta di 30°\
    -   Profondità di passata 0,05 mm\
    -   Velocità di rotazione: 18.000 rpm\
    -   Velocità di avanzamento XY (feed rate): 600 mm/min\
    -   Velocità di affondo in Z (plunge rate): 250 mm/min\
    -   Z di sicurezza: 1,00 mm\
    -   Sormonto del passaggio adiacente: 30% (per gli svuotamenti)\
-   Per la <span style="font-weight: bold;">foratura</span>
    -   Punte da foro da 0,8 - 0,9 - 1,0 - 1,2 - 1,5 mm di diametro\
    -   Velocità di rotazione: 18.000 rpm\
    -   Velocità di affondo: 250 mm/min (conservativa, per tutti i
        diametri citati)\
    -   Profondità in Z: 2,00 mm\
-   Per il <span style="font-weight: bold;">taglio </span>del perimetro
    e eventuali fori interni per viti
    -   Fresa cilindrica monotagliente da 2,00 mm di diametro\
    -   Velocità di rotaizone: 18.000 rpm\
    -   Velocità di avanzamento XY (feed rate): 500 mm/min\
    -   Velocità di affondo in Z (plunge rate): 250 mm/min\
    -   Profondità di passata: max 1,00 mm\
-   Per <span style="text-decoration: underline;">tutte le
    lavorazioni</span>:
    -   Quota Z di sicurezza: 1,00 mm\
    -   La basetta in genere è spessa 1,7 mm, ma i fori e il taglio
        scendono a 2,00 mm per evitare sbavature (quindi vanno a
        incidere il piano martire).\
    -   Aspiratore con filtro HEPA sempre acceso\
    -   Quota zero in Z va ricavata con il sensore dopo ogni cambio
        utensile\
    -   Va ricordato che la vetronite usura molto velocemente il
        materiale delle frese\

(Questi valori sono soggetti a continui aggiustamenti, sottoscrivete
questa pagina per ricevere notifica di ogni aggiornamento!)\
\

FASE3: Preparazione della macchina
----------------------------------

Mentre le parti precedenti possono essere (e conviene che siano)
completate comodamente da casa. Da qui in avanti è necessario operare
all\'interno del Fablab.

Anzitutto, se avete usato la versione Demo di CamCopper, sarà necessario
riaprire il proprio progetto sul PC del Fablab dedicato alla fresatrice,
fare gli opportuni aggiustamenti ai parametri del software e produrre il
gcode completo.\
\
Quindi dovrete scegliere o portarvi una basetta ramata mono-faccia di
dimensione sufficiente a contenere il nostro circuito.\
Conviene approfittare di questo momento anche per pulire la superficie
di rame con dell\'alcool, in modo da rimuovere l\'ossido che in seguito
può rendere piu\' difficili le saldature. Fatto questo dovrete fissare
in modo sicuro la basetta sul piano martire, in modo da contenere le
forti trazioni cui è sottoposta durante la fase di taglio del perimetro.
Il metodo piu\' rapido (e comodo anche per tenere fermo il pezzo durante
il taglio) è quello di utilizzare del nastro biadesivo scegliendo quello
di tipo retato, che rende agevole la sua rimozione alla fine,
eventualmente associato a delle viti per bloccare ulteriormente la
basetta.\
\
La posizione della basetta sul piano martire deve essere scelta tenendo
presente che dovrete collegare la parte in rame della basetta al
terminale a coccodrillo proveniente dall\'elettronica per poter usare la
procedura di autolivellamento del piano Z. Questo si può ottenere
\"pinzando\" con il terminale a coccodrillo un angolo della basetta
stessa o la testa di una delle viti che la tengono bloccata (è bene
assicurarsi anche che l\'altro morsetto sia ancorato correttamente al
telaio della macchina). La basetta va quindi fatta aderire bene sul
piano martire premendola in modo deciso e aggiungendo le eventuali
viti.\
\
A questo punto, se ancora non l\'avete fatto,
<span style="text-decoration: underline;">dopo aver tolto alimentazione
al mandrino,</span> dovrete montare il primo utensile previsto per la 
lavorazione, facendo <span style="font-weight: bold;">molta attenzione a
non tagliarvi</span> (e a non romperlo). Infatti i bulini e in genere le
frese per la realizzazione di PCB sono molto affilate, piccole e
fragili, ed è <span style="font-weight: bold;">molto facile farsi
male</span>. In particolare, le coperture di sicurezza in gomma dei
bulini vanno tolte solo prima di iniziare le calibrazioni in Z, facendo
sempre attenzione a non passarci vicino con le mani, e vanno rimesse
subito dopo aver terminato la lavorazione.\
\
Fatto questo, controlliamo che non vi siano ostacoli al movimento della
macchina o rischio che i cavi possano impigliarsi, e spostiamo
l\'utensile nel punto XY in cui andrà avviata la lavorazione tramite la
pulsantiera sulla scatola dell\'elettronica o il software di controllo
della vostra fresatrice (al Fablab Imperia, USB CNC Controller).\
\
E\' molto importante sapersi districare tra le varie funzioni del
programma di controllo della macchina, quindi oltre alle basi che avete
appreso al corso seguito al Fablab, vi consigliamo caldamente la lettura
del relativo
[manuale](http://www.planet-cnc.com/files/CNCUSBController.pdf).\
\

FASE 4: Procedura di autolivellamento del piano Z
-------------------------------------------------

Questa procedura è opzionale, e dipende dal software e dall\'elettronica
in dotazione con la vostra fresatrice. Consiste dapprima nella
registrazione automatica di una griglia di punti zero su tutta la
superficie da lavorare tramite un sensore a contatto, e quindi
nell\'adattameno del gcode del nostro circuito alla superficie effettiva
appena registrata. Ciò garantisce una lavorazione precisa e uniforme su
tutta la dimensione da fresare a prescindere dalla sua estensione e
dalla planarità della basetta e del piano martire, senza zone incise
troppo (o troppo poco) che renderebbero inutilizzabile il circuito.\
\

{{
  immagine(
    url="pcb_fresatrice_3.jpg",
    didascalia="Questo è ciò che vogliamo evitare"
  )
}}
\
Di seguito illustriamo in breve come eseguire questa procedura sulla
macchina in dotazione al nostro Fablab, utilizzando il software per la
scheda di controllo Mk2/4.\

-   Prima di procedere, come precauzione di sicurezza, è bene provare a
    chiudere il contatto tra utensile e piano di rame. Così facendo,
    nell\'angolo in basso a sinistra della finestra dovrebbe comparire
    la parola \"Sensor\" ogni volta che si chiude il contatto. Provate a
    portare anche l\'utensile verso il basso molto lentamente affinchè
    l\'utensile tocchi la basetta e controllate che compaia la stessa
    indicazione a monitor, così da assicurarvi che tutto funzioni come
    previsto.\

<!-- -->

-   Quindi rialzate l\'utensile a quota di sicurezza, portate la
    macchina sulla posizione XY di partenza della lavorazione, di solito
    nell\'angolo in basso a sinistra della basetta, e premete il
    pulsante \"Offset/Current XY\" (quello con le frecce gialle) per
    impostare lo 0 in X e Y. Questa sarà la posizione XY iniziale da cui
    far partire la procedura di registrazione automatica della matrice
    di punti Z. Non importa dove spostate la macchina o dove si troverà
    l\'utensile alla fine della procedura di registrazione, cliccando il
    pulsante "Go To -- Zero XY" (quello con le frecce verdi) potrete
    sempre tornare al punto XY di partenza.\

<!-- -->

-   Ora, selezionando dal menù \"Machine\" in alto "Capture & Measure
    Points/Measure/Measure Grid Z
    Offset" l\'asse Z si abbasserà
    lentamente fino a rilevare il contatto e registrare la posizione Z 0
    per la matrice dei punti.\

<!-- -->

-   Per far comparire la finestra di impostazione della dimensione della
    griglia da misurare e della densità di punti (vedi figura),
    selezionate sempre dallo stesso menù \"Capture & Measure
    Points/Measure/Set Grid \...\".\


{{
  immagine(
    url="pcb_fresatrice_4.png"
  )
}}

</div>

-   Nei campi \"Size XY\", vanno inserite le dimensioni XY del vostro
    g-code in millimetri, e a fianco potete indicare la distanza tra una
    misurazione e l\'altra. Per un risultato migliore, è consigliabile
    che la superficie sia misurata con una buona densità di punti, ma
    senza esagerare perchè all\'aumentare dei punti aumentano di molto i
    tempi necessari completare per la misurazione. In linea di massima,
    per una basetta in buone condizioni, un punto ogni 5 mm dovrebbe
    essere sufficiente.\
    Per gli altri valori:Height: Nel caso delle basette ramate questo
    parametro va lasciato a 0, perchè lo strato di rame è anche la
    superficie da fresare.Retract: Rappresenta la distanza a cui la
    macchina risale come altezza di sicurezza. Questo parametro può
    essere lasciato a 0 se il parametro \"Return Distance\" è già
    impostato con un valore adeguato.Size XY: Le dimensioni della
    superficie da misurare. Attenzione a non andare oltre limiti della
    basetta o l\'asse Z, non chiudendo alcun contatto, continuerà a
    scendere a oltranza!Length: La distanza desiderata tra due punti
    adiacenti.Count: In alternativa, potete impostare il numero di punti
    che desiderate registrare sulla dimensione indicata. Se cliccate il
    pulsante con la freccia il valore \"Lenght\" sarà calcolato
    automaticamente.Return distance:  Rappresenta la distanza a cui lo
    strumento si alza per riaprire il contatto.\

<!-- -->

-   Quando sarete sicuri che i valori inseriti siano quelli corretti
    (soprattutto le dimensioni X e Y), premete OK.\
-   Come ultima cosa verificate che la basetta sia pulita e che non vi
    sia nulla che impedisca la chiusura del contatto (come zone già
    fresate), quindi portate la macchina sulla posizione X=0, Y=0 con
    l\'apposito pulsante e cliccate \"Capture & Measure
    Points/Measure/Measure Grid Z\" per avviare la misurazione.\

<!-- -->

-   La procedura automatica si avvierà quindi nella posizione corrente
    e, dopo aver toccato il rame, l\'utensile risalirà e si muoverà in
    direzione X+ verso il prossimo punto della riga, conclusa la quale
    si sposterà in direzione Y+ e proseguirà al contrario, ecc\...\
    La velocità in Z con cui la macchina si avvicina al rame può essere
    impostata nel menu "Settings/Tool Senor/Speed".
    Alla fine, la macchina si fermerà nella posizione dell\'ultimo punto
    misurato. Se ora aprite il menu \"Measure\", potrete vedere i valori
    dei vostri punti tra virgolette. Questi punti possono essere salvati
    e riutilizzati se qualcosa andasse storto.\

-   Ora cliccate sul pulsante "Go To -- Zero XY" per spostare la
    macchina al punto di partenza in modo da essere già in posizione per
    avviare il programma.\

<span style="font-weight: bold;">Importazione del g-code</span>\
A questo punto potete aprire il vostro g-code, e assicurarvi che la sua
posizione coincida con la superficie del materiale misurata,
eventualmente ruotandolo. Controllate anche che la lavorazione non
avvenga \"a specchio\"; eventuali testi devono essere leggibili e
orientati correttamente.\
\
Cliccate quindi \"Program/Advanced/Warp\". Comparirà una finestra che
indica il numero di punti registrati, con l\'opzione di caricare punti
già salvati in precedenza.\
Cliccate Ok, in questo modo i valori delle coordinate Z del vostro
g-code saranno adattate alla superficie misurata, così facendo, durante
la fresatura, la macchina adatterà l\'asse Z in modo che la profondità
di incisione resti costante su tutta la superficie, azzerando qualsiasi
difformità.\
\

FASE 5: Avvio della lavorazione e cambi utensile<span style="font-size: medium;">
---------------------------------------------------------------------------------

A questo punto, confermato che tutto quanto sopra è stato eseguito e
controllato, è il momento di partire.\
Verificate che la velocità di RPM sul mandrino sia corretta (sul Kress,
per 18.000 RPM bisogna impostare manualmente la velocità tra i valori di
4 e 5) e che sia alimentato. Eventualmente provate ad attivarlo un
istante con l\'apposito pulsante sull\'interfaccia del software.\
\
Quindi date un\'ultima occhiata che i riferimenti XYZ della posizione
rispetto alla basetta siano corretti,
<span style="text-decoration: underline;">montate il dispositivo di
raccolta delle polveri con annesso tubo di aspirazione</span>, chiudete
il box, date il via al programma. Poco dopo, se tutto va bene, accendete
anche l\'aspiratore (se non si attiva automaticamente).\
\
La macchina eseguirà tutta la sequenza del primo utensile e poi si
fermerà. Se volete interrompere a metà la lavorazione per controllarne
l\'andamento, cliccate sul pulsante pausa per fermare il movimento
(evita la perdita di passi), quindi date stop e segnatevi la riga
raggiunta dal g-code. Spostate l\'utensile anzitutto verso l\'alto in Z,
quindi lateralmente per consentirvi di vedere come procede il lavoro.
Fate attenzione a non respirare eventuali residui di polveri di
vetronite!\
\
Quando vorrete ripartire, chiudete il box, selezionate una o due righe
prima dell\'interruzione e fate ripartire con l\'apposito comando per
ripartire dalla riga selezionata.\
\
Al cambio utensile la macchina si fermerà. Date Stop, memorizzate la
riga raggiunta e togliete alimentazione al mandrino, quindi alzate
l\'utensile in Z ed eventualmente spostate la macchina in posizione
comoda per sostiuire la fresa.\
Dopo aver montato il nuovo utensile, spostate la fresa in una posizione
in cui possa avvenire il contatto con la parte conduttiva del rame (al
di fuori da tracce o contorni!) e fate la procedura di rilevamento della
quota Z. Quindi ridate alimentazione al mandrino e ripartite con il
comando per la partenza da una riga selezionata.\
\
A fine lavorazione, aspirate a mano accuratamente eventuali residui di
polvere di vetronite, sia intorno al pezzo che all\'interno del box,
togliete alimentazione al mandrino spostandolo in una zona distante
dalla basetta e procedete alla rimozione del circuito. Se è presente il
biadesivo, aiutatevi con un cacciavite piatto per sollevare un lato, ma
procedete con molto lentamente per evitare di danneggiare o deformare la
pcb.\
\
Una volta rimossi tutti i residui di biadesivo, e ripulito del tutto il
circuito, potete spruzzare sul rame un prodotto antiossidante spray di
tipo saldabile e procedere con il posizionamento dei componenti e con le
saldature.\
\
Qui termina la guida.