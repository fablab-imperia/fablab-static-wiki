+++
title= "Guida all'uso di Coppercam"
+++
{{\#eimage:<http://imgur.com/1ntpEaUl.jpg%7Calt=>\"!!TITLE!!\"\|640x480px\|thumb\|link=<http://i.imgur.com/1ntpEaU.jpg%7Cinline%7CEsempio>
di realizzazione}} \_\_TOC\_\_

Vediamo come è possibile effettuare un semplice lavoro di fresatura, e
quali sono le diverse fasi e le accortezze a cui dovremo prestare
attenzione.\
Per questa guida, partiamo da un progetto già pronto di un labirinto di
biglie, scaricabile online, che ho scelto tra i moltissimi disponibili
su [GrabCad](https://grabcad.com/library/marble-maze-1).\

Descrizione
-----------

Si tratta di un un giochino un po\' retrò ma che può diventare un
simpatico regalo per bambini e bambini adulti, che ho scelto di
realizzare su una tavola da 20mm in faggio listellare (dello stesso tipo
che si usa per i ripiani delle cucine) e con una copertura di protezione
in acrilato trasparente da fresare su una lastra da 3mm di spessore.\
\
La lavorazione è in teoria abbastanza semplice: dovremo scavare nel
legno i percorsi per le biglie a una data profondità, ritagliare un
profilo interno e uno esterno rispettivamente per le maniglie laterali e
il taglio del contorno, ed opzionalmente segnare le posizioni delle viti
che andranno a fissare la protezione. Naturalmente le stesse posizioni
dovranno coincidere con i fori passanti per le viti sull\'acrilato di
protezione.\
Nella pratica, però, questo progetto presenta alcune difficoltà tipiche
di molti lavori da fresare, e quindi può essere preso come buon esempio
per chi si avvicina alla fresatura CNC.

### Requisiti

-   Anzitutto dovete avere già un po\' di dimestichezza con la macchina,
    quindi dovete aver seguito il relativo corso presso il Fablab e
    conoscere le basi della tecnica di fresatura illustrate nel [manuale
    della fresatrice Aero
    CNC](https://docs.google.com/document/d/1i_5C_7IlP1owYVlmUpaZQ8BZScjpKpAXED3aAMoBzDc/edit?usp=sharing)
    che abbiamo preparato.\
-   Poi un file di progetto DXF (sostanzialmente un disegno vettoriale)
    che contenga le geometrie del lavoro che desiderate realizzare. In
    questo caso, come accennato, lo abbiamo scaricato da internet.\
-   Il materiale grezzo da lavorare. Per le vostre prove potete usare
    quello che trovate al fablab, ma se volete fare un lavoro
    particolare vi conviene acquistarlo. Chiedete allo staff i materiali
    adatti per la fresatura, molti materiali in vendita nei brico-center
    sono delle \"sole\".\
-   Gli utensili (le frese) adatte per la vostra lavorazione. Chiedete
    allo staff cosa c\'è di disponibile, e nel caso procuratevene di
    particolari.\
-   Delle buone cuffie fonoassorbenti (non sono opzionali).\
-   **Pazienza** (sul serio, andare di corsa o prendere scorciatoie non
    conviene e può essere pericoloso). Alcune lavorazioni possono
    richiedere anche molto tempo e la macchina va sempre tenuta sotto
    controllo!\

{{\#eimage:<http://i.imgur.com/5sEGTAGl.jpg%7Calt=>\"!!TITLE!!\"\|320x280px\|frame\|link=<https://grabcad.com/library/marble-maze-1%7Cleft>\|[Source](https://grabcad.com/library/marble-maze-1)}}

Il progetto
-----------

I file condivisi su Grabcad, e in particolare quello rilasciato
dall\'autore di questo progetto, sono in genere rilasciati in un formato
compatibile con Solidworks (disponibile con licenza originale al
Fablab). Per i lavori di fresatura come questo (detti 2.5D) conviene
però partire dal classico formato vettoriale DXF, quindi, tramite gli
strumenti di Solidworks, per prima cosa dovremo esportare i DXF del
piano che contiene le geometrie. Per questo lavoro ho scelto di
esportare 2 file DXF separati, uno per la parte in legno e uno per la
copertura in acrilato trasparente. L\'unica geometria in comune tra le
due lavorazioni è quella per la marcatura e l\'esecuzione dei fori di
fissaggio della protezione sul labirinto in legno.

#### Dimensionare il lavoro

Ora, partendo dalla parte in legno del labirinto, andiamo ad aprire il
file DXF nel nostro software CAM preferito (al Fablab Imperia adoperiamo
CamBam, gentilmente concesso dalla casa produttrice), dove converrà
anzitutto posizionarlo nei pressi dell\'origine degli assi,
preferibilmente nel quadrante con XY positive. Quindi è importante
stabilire le dimensioni finali del nostro gioco. Infatti, non è detto
che il materiale che abbiamo a disposizione sia sufficientemente grande
per contenere il progetto così come è stato disegnato in origine,
<span style="text-decoration: underline;">considerando
anche </span><span style="text-decoration: underline;">gli spazi
necessari per fissarlo sul piano martire</span>. Nel nostro caso,
quindi, ho scelto di ridurre di circa il 50% la dimensione del
labirinto, in modo da contenerlo interamente e lasciare circa mezzo
centimetro di materiale intorno al contorno per consentire il
posizionamento delle staffe di fissaggio.\
\
Non sempre però il ridimensionamento è un\'operazione senza \"effetti
collaterali\", bisogna prestare attenzione. Le nostre biglie da usare
nel labirinto potrebbero infatti avere una dimensione troppo grande per
i percorsi che andiamo a fresare dopo il ridimensionamento, o ancora,
potremmo ritrovarci con geometrie o dettagli essenziali che non riescono
ad essere lavorati dalle frese con i diametri che abbiamo a disposizione
(vedi figura più avanti)\... o spazi troppo ridotti per le nostre viti ,
ecc\... Visto che in questo caso dovremo lavorare sia una parte in legno
che una in acrilato trasparente, dovremo anche assicurarci che entrambi
i file di progetto siano ridimensionati precisamente della stessa
misura, altrimenti ovviamente non coincideranno.\
\
Inoltre, a seconda del tipo di materiale grezzo e del suo spessore,
ridurre eccessivamente gli spessori di parti sagomate (come le maniglie
del nostro labirinto), significa ridurrne la resistenza meccanica e
renderle più fragili. Tutte queste valutazioni vanno possibilmente fatte
prima di trovarsi in mano un oggetto inutilizzabile e aver perso ore di
lavoro.\
\
Stabilito con certezza che le dimensioni del nostro lavoro sono
compatibili con tutti i vincoli materiali che abbiamo, possiamo
cominciare a pensare come vogliamo che sia eseguita la lavorazione.

#### La scelta degli utensili

{{\#eimage:<http://imgur.com/zRU9Z1hl.png%7Calt=>\"!!TITLE!!\"\|480x320px\|thumb\|link=<http://imgur.com/zRU9Z1h.png%7Cinline%7CIl>
file DXF importato}} Anche qua vanno fatte alcune considerazioni
preliminari: anzitutto, per ridurre il più possibile i tempi di
lavorazione, ci converrà utilizzare utensili con il diametro maggiore
possibile. Così facendo, infatti, avendo una fresa più grossa e
resistente, potremo usare parametri di lavorazione più \"spinti\"
rispetto a una fresa piccola: per ogni passata potremo scavare più
materiale negli svuotamenti, e nei tagli potremo affondare di più nel
materiale. \
Naturalmente, però, una fresa più grossa non potrà passare all\'interno
di geometrie di larghezza inferiore al suo diametro, e potrà offrire un
livello di dettaglio inferiore. Quindi è necessario trovare una
soluzione di compromesso, tenendo conto di tutti i fattori.\
Inoltre, va tenuto conto anche dello spessore del nostro materiale: la
lunghezza totale della fresa dovrà essere sempre maggiore dello spessore
massimo da tagliare.\
\
A seconda delle limitazioni tecniche (o di tempo) del nostro lavoro e
delle nostre preferenze, potremmo anche scegliere di utilizzare più di
un utensile: ad esempio una fresa più grande per la sgrossatura e una di
diametro inferiore per la rifinitura dei dettagli più piccoli. L\'unico
inconveniente in questo caso è la necessità di effettuare un
fermo-macchina per il cambio utensile e reimpostare il corretto \"0
pezzo\" in Z. (Questa operazione implica un errore in Z intorno al
decimo, rimediabile ricorrendo al cosiddetto \"sovrametallo\", un ultimo
livello Z di pochi decimi da far fresare durante la rifinitura.)\
\
Nel nostro caso, considerato tutto quanto sopra,

-   <span style="font-weight: bold;">per la parte in legno</span>
    possiamo fresare tutto labirinto con un unico utensile. Scegliamo
    quindi quello di dimensioni maggiori più adatto alla lavorazione,
    che utilizzeremo per tutte le diverse fasi: una fresa a candela
    (cilindrica) da
    <span style="font-weight: bold;">3.2 </span><span style="font-weight: bold;">mm
    </span>di diametro.\
-   <span style="font-weight: bold;">per la parte in acrilato</span>
    trasparente, visto che abbiamo dei fori da meno di 3mm di diametro,
    useremo un\'unica fresa a candela da
    <span style="font-weight: bold;">2.5</span><span style="font-weight: bold;">mm
    </span>di diametro, sia per i fori che per il taglio.\

Parte 1: il labirinto in legno
------------------------------

#### I percorsi utensile

A questo punto, dovremo stabilire l\'ordine con cui si avvicendano le
fasi della lavorazione e quindi anche la sequenza degli eventuali cambi
utensile. In questa valuazione
<span style="text-decoration: underline;">svolge un ruolo chiave il modo
di ancoraggio del materiale</span> grezzo al piano martire.\
Infatti se, come si fa di solito, fissiamo il pezzo solo con delle
staffe laterali, verso la fine del taglio perimetrale il nostro pezzo si
libererà dal materiale di contorno spostandosi e causando quindi la
perdita di tutti i riferimenti spaziali, impedendo così ogni lavorazione
successiva su di esso. Inoltre, restando completamente libero di
muoversi, il pezzo rischierà di incastrarsi pericolosamente durante i
movimenti della fresa e provocare dei seri danni alla macchina. Quindi,
la regola generale è che
l\'<span style="text-decoration: underline;">eventuale taglio
perimetrale di contorno del nostro pezzo deve essere eseguito dopo tutte
le altre lavorazioni al suo interno</span>, ma dobbiamo anche trovare un
modo per tenere fisso il nostro pezzo dopo il taglio.\
\
Questo discorso vale sia per il pezzo finito che per le eventuali parti
di scarto interne, come le asole risultanti dalla sagomatura delle
maniglie del nostro labirinto: se non ancorate in qualche modo, queste
potrebbero spostarsi in maniera imprevedibile, causando danni alla
macchina o al nostro pezzo lavorato.\
\
{{\#eimage:<http://imgur.com/rOCcbFg.png%7Calt=>\"!!TITLE!!\"\|480x320px\|thumb\|link=<http://imgur.com/rOCcbFg.png%7Cinline%7CLe>
posizioni dei fori per le viti di fissaggio}}
{{\#eimage:<http://imgur.com/atQXBd7l.jpg%7Calt=>\"!!TITLE!!\"\|480x320px\|thumb\|link=<http://imgur.com/atQXBd7.jpg%7Cinline%7CGli>
stessi fori sulle asole, a lavoro finito}} Esistono diverse possibilità
per tenere ferme le parti da ritagliare: la soluzione migliore sarebbe
utilizzare un piano aspirato, ma attualmente al fablab non ne siamo
provvisti; in certi casi si può usare del biadesivo, ma in questo caso
non conviene perchè difficilmente potrebbe resistere alle trazioni della
lavorazione e se i pezzi iniziassero a muoversi dovremmo buttare tutto
il lavoro; si possono ancora lasciare i cosiddetti \"fermi\" (o
ponticelli), cioè piccole rimanenze di materiale non fresato sui
perimetri (da rimuovere poi a mano) che tengono tutti i pezzi solidali
tra loro, ma spesso durante la rimozione manuale di queste parti si
rischia di rovinare il pezzo o rendere la finitura poco \"pulita\".\
La soluzione a nostro giudizio più pratica (se fattibile) è quella di
prevedere uno staffaggio a fasi successive, anche tramite fori ausiliari
per viti di fissaggio sul piano martire in tutte le parti di scarto che
si prevede possano liberarsi e vagare impazzite durante la lavorazione.\
\
Per la parte in legno del nostro labirinto, al fine di ancorare le due
asole di scarto interne delle maniglie, dovremo quindi aggiungere
tramite il CAM o il software di progettazione un paio fori passanti
nelle rispettive parti di scarto dove fisseremo delle viti (vedi
immagine più avanti), dopodichè proseguiremo con la sagomatura. \
Per ancorare invece il labirinto stesso durante il taglio esterno di
contorno, sfrutteremo gli spazi vuoti venutisi a creare in mezzo alle
maniglie per staffare ulteriormente il pezzo ed evitare che possa
muoversi.\
Per la parte in acrilato, dovremo fresare sostanzialmente un cerchio con
dei fori passanti, per le viti di fissaggio, distribuiti in modo
equidistante lungo la sua circonferenza. Quindi per ancorare il cerchio
durante il taglio, sfrutteremo i fori passanti delle viti.

Perciò, l\'ordine con cui eseguire le diverse fasi della lavorazione
sarà:

##### Per la parte in legno:

1.  Incisione dei percorsi per le biglie\
2.  Esecuzione dei fori di fissaggio delle asole di scarto\
3.  Marcatura delle posizioni delle viti della protezione trasparente in
    acrilico (opzionale)\
    - FERMO MACCHINA per inserire le viti di fissaggio al piano martire\
4.   Taglio interno per sagomare le maniglie\
    - FERMO MACCHINA per rimuovere le asole di scarto e fissaggio nuove
    viti o nell\'interno degli spazi vuoti\
5.  Taglio finale di contorno del labirinto.\

(L\'ordine dei punti 1 e 3 non è critico)

##### Per la parte in acrilato trasparente:

1.  Esecuzione dei fori passanti per le viti di fissaggio\
    - FERMO MACCHINA per bloccare il materiale al piano martire
    sfruttando i fori appena creati\
2.  Taglio finale circolare\

E\' bene tenere presente che
<span style="text-decoration: underline;">tutte le viti o i sistemi di
staffaggio che utilizziamo nella nostra lavorazione rappresentano degli
ostacoli fisici molto pericolosi per movimenti in rapido della
fresa</span>. Sarà quindi necessario impostare una quota Z di sicurezza
abbastanza alta da consentire all\'utensile di \"sorvolare\" viti e
staffe nei suoi spostamenti rapidi.

Stabilito quindi come dovrà essere eseguita la lavorazione, passiamo
all\'impostazione dei relativi percorsi utensile in CamBam (Qua è
disponibile [il manuale per CamBam in
italiano](http://www.cambam.info/doc/it/Manuale%20Italiano%20CamBam.pdf)).\
Osserviamo anzuttto il nostro file DXF importato e controlliamo se sono
presenti tutte le geometrie di cui abbiamo bisogno. \
Seguendo le considerazioni del paragrafo precedente l\'unica geometria
che ancora manca nel nostro file dxf è quella di fori nelle asole di
scarto. Andremo quindi a inserire dei fori di diametro appropriato in
ciascuna delle due asole, usando lo strumento \"cerchio\" tra i pulsanti
verdi nella barra in alto, e definiamo le dimensioni nelle impostazioni
sulla sinistra.

#### Associare le lavorazioni

Ora, rispettando la sequenza stabilita nel paragrafo precedente,
abbineremo ciasuna geometria al tipo di lavorazione richiesta. La
procedura da ripetere è:\

1.  <span style="text-decoration: underline;">selezionare le
    geometrie</span> relative alla fase che ci interessa impostare, \
2.  <span style="text-decoration: underline;">associare il tipo di
    lavorazione</span> più appropriato cliccando uno dei pulsanti
    marroni nella barra in alto\

Se durante questa fase alcuni vettori delle nostre geometrie
risultassero come segmenti scollegati, vi consigliamo di selezionare
tutte le geometrie con \"Alt + A\" e premere \"Ctrl + J\", per attivare
lo strumento \"Unire tracciati\" impostando una tolleranza bassa (es.
0.01 mm). E\' necessario però prestare attenzione che questa modifica
non vada ad apportare modifiche impreviste. E quindi selezioniamo:\

1.  tutte le geometrie dei percorsi per le biglie, e scegliamo la
    lavorazione \"<span style="font-weight: bold;">Tasca</span>\" (o
    svuotamenti)\
2.  i cerchi per le viti sulle parti di scarto e scegliamo la
    lavorazione \"<span style="font-weight: bold;">Foratura</span>\"\
3.  i cerchi per la marcatura delle posizioni delle viti per la
    copertura e ancora
    \"<span style="font-weight: bold;">Foratura</span>\"\
4.  il contorno delle maniglie e scegliamo
    \"<span style="font-weight: bold;">Profilo</span>\"\
5.  il perimetro di contorno di tutto il labirinto e scegliamo
    \"<span style="font-weight: bold;">Profilo</span>\"\

(Volendo può usare la lavorazione \"Profilo\" anche per praticare i
fori, ma in questo caso il loro diametro dovrà essere maggiore rispetto
al diametro dell\'utensile in uso, altrimenti CamBam ignorerà la
geometria.) Dopodichè, nella parte sinistra della finestra, andremo a
stabilire per ogni lavorazione i parametri corretti, facendo però
attenzione in quanto l\'ordine con cui appaiono le lavorazioni nel
diagramma ad albero, sarà lo stesso con cui saranno eseguite. Se
necesasrio è possibile riordinarle tenendo premuto con il mouse tasto
sinistro del mouse. \
{{\#eimage:<http://i.imgur.com/S2UDDRLl.png%7Calt=>\"!!TITLE!!\"\|640x480px\|thumb\|link=<http://i.imgur.com/S2UDDRL.png%7Cinline%7CAnteprima>
dei percorsi utensile}} Nel caso della nostra lavorazione su legno,
utilizzando la fresa da 3.2mm citata sopra, i valori più importanti da
inserire sono:\

-   Velocità di rotazione comune a tutte le fasi: 20.000 rpm^1^
    (circa velocità 5 sul Kress) \
    \
-   <span style="font-weight: bold;">Svuotamenti </span>(o \"tasche\")
    -   Velocità avanzamento: 1000 mm/min\
    -   Velocità verticale: 500 mm/min\
    -   Incremento di profondità: 0.5 mm^1^\
    -   Profondità finale: -5 mm\
    -   Diametro utensile: 3.2 mm\
    -   Numero utensile: 1^3^\
-   <span style="font-weight: bold;">Forature</span>
    -   Velocità avanzamento taglio: 600 mm/min\
    -   Velocità verticale: 500 mm/min\
    -   Incremento di profondità: 2 mm\
    -   Profondità di taglio: -20.5 mm ^2^\
    -   Diametro utensile: 3.2 mm\
    -   Numero utensile: 1^3^\
-   <span style="font-weight: bold;">Marcatura posizioni delle
    viti</span> della protezione in acrilico
    -   Come sopra, uniche variazioni:\
    -   Incremento di profondità: 0.5 mm\
    -   Profondità di taglio: -0.5 mm\
-   <span style="font-weight: bold;">Profili </span>(tagli interni e
    esterni)
    -   Corretta impostazione di \"interno\" o \"esterno\"\
    -   Velocità avanzamento: 1000 mm/min\
    -   Velocità verticale: 500 mm/min\
    -   Incremento di profondità: 1 mm\
    -   Profondità di taglio: -20.5 mm ^2^\
    -   Diametro utensile: 3.2 mm\
    -   Numero utensile: 2 per il taglio interno, 3 per l\'esterno^3^\

<!-- -->

-   Per tutti gli altri parametri potete lasciare i valori di default\

^1^ Conservativo per ottenere una finitura migliore\
^2^ Lo spessore della tavola è 20mm, noi scenderemo a 20,5mm per
ottenere una lavorazione più precisa e ammortizzare eventuali
irregolarità di spessore della tavola.\
^3^ Impostando il valore del numero utensile, viene automaticamente
caricato il diametro corretto specificato per quell\'utensile presente
nella libreria di Cambam. Tuttavia, a noi viene comodo cambiare la
numerazione dell\'utensile anche se usiamo sempre lo stesso utensile, in
modo da forzare un fermo macchina nei punti in cui ci interessa
intervenire. Quindi, impostando una numerazione di utensile differente,
la macchina arresterà il programma. Vi ricordiamo che durante i fermi
macchina, prima di aprire il box di protezione della fresatrice per
intervenire sul piano è necessario scollegare l\'alimentazione al
mandrino e ricordarsi di riattivarla prima di ripartire.

{{\#eimage:<http://i.imgur.com/Ie58WEJl.png%7Calt=>\"!!TITLE!!\"\|320x280px\|thumb\|link=<http://i.imgur.com/Ie58WEJl.png%7Cleft%7CLa>
raggiatura degli angoli è in funzione del diametro della fresa}}
Possiamo ora cliccare con il tasto destro sulla cartella \"Lavorazione\"
nel diagramma ad albero a sinistra (o su ciascuna delle lavorazioni) e
selezionare \"Genera percorsi utensile\", in questo modo verranno
visualizzati tutti i passaggi calcolati per la nostra fresa. Tenendo
premuto il tasto Alt + tasto sinistro del mouse, spostandosi e usando la
rotellina si possono osservare tutti i percorsi in 3D (per tornare alla
vista dall\'alto Alt+doppio click)\
Se invece vogliamo renderci conto dei tracciati effettivi che disegnerà
la fresa (che variano a seconda del suo diametro) e confrontarli con la
geometria teorica, possiamo selezionare dal menù \"Vista\" - \"Larghezze
di taglio\"\
Così facendo, <span style="text-decoration: underline;">è possibile
rendersi conto della diminuzione nel livello di dettaglio provocata dala
diametro della fresa</span> rispetto alle geometrie del progetto. In
questo caso, trattandosi di un gioco che dovrà contenere biglie, la
\"raggiatura\" degli angoli retti non sarà un problema.

E\' bene tenere presente però che con una fresatrice questo problema non
può essere del tutto eliminato in quanto le frese hanno tutte un loro
diametro, grande o piccolo che sia. Il discorso cambia con le macchine
taglio laser, ma in questa guida ci concentriamo sulla fresatura CNC.

#### Generare il G-CODE

{{\#eimage:<http://imgur.com/WXxJ7Bjl.png%7Calt=>\"!!TITLE!!\"\|320x240px\|thumb\|link=<http://imgur.com/WXxJ7Bj.png%7Cinline%7CIl>
nuovo punto di origine della lavorazione}} Prima di terminare il lavoro
con CamBam, selezioniamo ancora con il tasto destro del mouse la
cartellina \"Lavorazione\" sul diagramma ad albero a sinistra, e (con i
percorsi utensile visibili) selezioniamo \"Imposta origine
lavorazione\". Ci verrà così chiesto di indicare con il mouse il punto 0
in XY desiderato, e noi cliccheremo su un angolo a nostra scelta, che
verrà poi riconosciuto dal programma di controllo della fresatrice come
punto di inizio della lavorazione. \
\
Questa operazione è comoda per spostare rapidamente il punto di origine
senza dover spostare tutto il file di progetto sul piano di
disegno. Saltando questo passaggio, il punto di inizio lavorazione
coinciderà con l\'origine degli assi in CamBam, a prescindere da dove
avrete collocato il vostro DXF al suo interno.

Una volta ottenuti i percorsi utensile che ci interessano, cliccando nel
diagramma ad albero \"Lavorazione\" è possibile scegliere \"Produrre
g-code\" che comprenda tutte le fasi, o in alternativa solo una fase
della lavorazione e salvare il file relativo. Va tenuto presente che
<span style="text-decoration: underline;">a seconda di cosa si seleziona
il file con il g-code risultante può avere nomi differenti</span>.

#### Il software di controllo della CNC

{{\#eimage:<http://imgur.com/pMmAUwLl.png%7Calt=>\"!!TITLE!!\"\|480x320px\|thumb\|link=<http://imgur.com/pMmAUwL.png%7Cleft%7CL'anteprima>
sul software di controllo}} Le fasi che seguono sono diverse per ogni
macchina e relativo software, e sono qui descritte in maniera sintetica,
ma è molto importante sapersi districare tra le varie funzioni del
programma di controllo e saper gestire la macchina. Quindi oltre alle
basi che avete appreso al corso seguito al Fablab, vi consigliamo
caldamente la lettura del manuale del software e della macchina.\

Nel nostro caso il software si chiama **CNC USB Controller** (scheda di
controllo Mk2/4 by PlanetCnC), e qui trovate il relativo
[manuale](http://www.planet-cnc.com/files/CNCUSBController.pdf).

Prima di tutto, dopo esserci accertati del corretto funzionamento dei
microswitch finecorsa, eseguiamo la procedura di homing e poi spostiamo
l\'utensile nel punto di origine della nostra lavorazione (di solito un
angolo).\
\
Quindi <span style="text-decoration: underline;">azzeriamo il
riferimento dell\'offset</span> sul nostro inizio di lavorazione 0 XY e
<span style="text-decoration: underline;">apriamo il G-code</span> della
nostra lavorazione. Questo sarà automaticamente posizionato a partire
dal punto di origine da noi impostato, che coinciderà con la posizione 0
XY della macchina, e sarà orientato così come visualizzato in precedenza
su CamBam. Se necessario, quindi, dovremo ruotare il programma con
l\'apposita funzione disponibile nei menù in alto. Qualora non fossimo
soddisfatti del punto di inizio della lavorazione, possiamo tornare su
CamBam e modificarlo come indicato nel paragrafo precedente (scelta
consigliata), o avvalerci degli strumenti messi a disposizione dal
software di controllo. Verifichiamo inoltre sul programma di controllo
della macchina che l\'estensione massima del nostro g-code ricada
interamente all\'interno del nostro materiale,
<span style="text-decoration: underline;">senza inteferenze con viti o
staffe</span>. \
\
Nella parte sinistra dello schermo, sotto la linguetta \"Programma\"
andiamo a controllare le escursioni massime sui piani X-Y-Z della nostra
lavorazione e verifichiamo nuovamente che siano coerenti con il nostro
lavoro (non si sa mai! meglio evitare danni). In questa stessa finestra
è possibile controllare la
<span style="text-decoration: underline;">durata totale della
lavorazione</span>. Se questa fosse esageratamente oltre le nostre
aspettative, dovremo modificare da capo i parametri della lavorazione,
senza eccedere però i limiti del materiale e degli utensili che vogliamo
usare.

#### Preparazione della macchina

{{\#eimage:<http://imgur.com/1s5mrUl.jpg%7Calt=>\"!!TITLE!!\"\|480x320px\|thumb\|link=<http://imgur.com/1s5mrU.jpg%7Cinline%7CLe>
staffe di fissaggio tengono la tavola ancorata al piano martire.}} Se
vogliamo lavorare una superficie molto ampia o molto irregolare, dovremo
considerare l\'ipotesi di spianare il piano martire o addirittura la
superficiale del nostro materiale prima di effettuare la lavorazione. In
questo caso però, il martire è stato spianato di recente e la tavola
appare regolare, quindi non c\'è bisogno di ulteriori spianature.

Se ancora non l\'abbiamo fatto, procediamo a posizionare la nostra
tavola sul piano martire il più possibile allineandola più possibile con
le direzioni degli assi XY e procediamo a fissarla attraverso staffe (o
altro metodo) verificando nuovamente che il percorso non preveda
collisioni con una di queste. Nel caso ce ne fosse bisogno, vi
ricordiamo che i materiali grezzi NON VANNO MAI ancorati sul piano di
legno della macchina, ma sempre su un piano martire che faccia da
\"cuscinetto\" tra il nostro grezzo e il piano della macchina. A questo
proposito vi rimandiamo alla lettura del [manuale della nostra
fresatrice
cnc](https://docs.google.com/document/d/1i_5C_7IlP1owYVlmUpaZQ8BZScjpKpAXED3aAMoBzDc/edit).

A questo punto, verificato che il mandrino non sia in tensione, montiamo
il primo utensile, ed effettiuamo l\'azzeramento dell\'asse Z con il
metodo più appropriato (la maggior parte delle volte è sufficiente
avvicinare un passo per volta, usando le apposite frecce di movimento
piccole sul software, l\'utensile al materiale con un foglio di carta e
impostare lo zero nel punto in cui l\'utensile inizia a graffiare la
carta).\
\
Infine, verifichiamo che la velocità di RPM sul mandrino (riportata più
in alto) sia corretta e che queto sia alimentato. Eventualmente possiamo
provare ad attivarlo un istante con l\'apposito pulsante
sull\'interfaccia del software.\
La macchina è pronta.

#### Avvio della lavorazione

{{\#eimage:<http://imgur.com/qUvRVkl.jpg%7Calt=>\"!!TITLE!!\"\|320x280px\|thumb\|link=<http://imgur.com/qUvRVkl.jpg%7Cleft%7CLe>
viti che tengono fermo il pezzo per il taglio finale}} Ora, confermato
che tutto quanto sopra è stato eseguito e controllato, è il momento di
lanciare il lavoro. Quindi diamo un\'ultima occhiata che i riferimenti
XYZ della posizione rispetto al pezzo siano corretti, montiamo il
dispositivo di aspirazione, chiudiamo il box, e diamo via al programma.
Se tutto va bene, poco dopo accendete anche l\'aspiratore (se non si
attiva automaticamente).

La macchina eseguirà tutta la prima sequenza di svuotamento dei percorsi
per le biglie, di foratura per il fissaggio e marcatura delle posizioni
delle viti,  e poi si fermerà. Se volete interrompere a metà la
lavorazione per controllarne l\'andamento, cliccate sul pulsante pausa
per fermare il movimento (evita la perdita di passi), quindi date stop e
segnatevi la riga raggiunta dal g-code. Spostate l\'utensile anzitutto
verso l\'alto in Z, quindi lateralmente per consentirvi di vedere come
procede il lavoro. Quando vorrete ripartire, chiudete il box,
selezionate una o due righe prima dell\'interruzione e fate ripartire
con l\'apposito comando per ripartire dalla riga selezionata.

Quando la macchina si sarà fermata diamo Stop, memorizziamo la riga
raggiunta e togliamo alimentazione al mandrino. Spostiamo quindi
l\'utensile anzitutto verso l\'alto in Z di un paio di centimetri e
quindi allontaniamolo dalla nostra lavorazione per poter intervenire sul
pezzo. Avvitiamo quindi delle viti appropriate nei 4 fori passanti che
abbiamo previsto per tenere ferme le asole di scarto risultanti dalla
sagomatua delle due maniglie. (Se necessario in questa fase dovremo
cambiare utensile, spostare la fresa in una posizione in cui si possa
prendere lo zero in Z alla stessa quota della lavorazione precedente e
impostare un nuovo 0 Z.)
{{\#eimage:<http://i.imgur.com/bNeGSXPl.jpg%7Calt=>\"!!TITLE!!\"\|480x320px\|thumb\|link=<http://i.imgur.com/bNeGSXP.jpg%7Cinline%7CLa>
parte in legno dopo la carteggiatura finale}} Teniamo sempre presente
che<span style="text-decoration: underline;"> la testa delle viti non
dovrà sporgere verso l\'alto di una misura superiore alla quota di
sicurezza in Z impostata</span> in CamBam! Dopodichè chiudiamo il box,
ridiamo alimentazione al mandrino, e diamo nuovamente il via con il
comando per la partenza dalla riga selezionata. Il mandrino si attiverà
automaticamente e proseguirà quindi con il taglio interno per sagomare
le due maniglie laterali. Quando la macchina si sarà fermata, ripetendo
la procedura descritta poco sopra, provvederemo a rimuovere le viti e le
parti di scarto, e sfrutteremo lo spazio vuoto rimasto per fissare con
viti o staffe che terranno fermo il pezzo durante il taglio finale.
Anche qua, a costo di sembra ripetitivi, ricordiamo che la testa delle
viti o l\'ingombro delle staffe non dovrà sporgere verso l\'alto di una
misura superiore alla quota di sicurezza in Z.\
(Come già detto, se usate un piano aspirato o vi trovate bene a usare i
ponticelli e siete in grado di rimuoverli senza rovinare il vostro pezzo
finito, potete evitarvi questa complicazione).\
\
A questo punto, una volta riavviata la macchina con le stesse accortezze
indicate sopra, il lavoro proseguirà fino al termine del programma,
quando potremo dare di nuovo stop, assicurarci che il mandrino non sia
alimentato, aprire il box e finalmente rimuovere il nostro pezzo
finito.\
Con tutta probabilità dovrete rifinire con carta vetro le zone fresate
in modo da rimuovere i \"peli\" di fibra di legno che in genere si
sollevano quasi sempre durante la fresatura. Questo procedimento, nel
caso del nostro labirinto pieno di insenature, può essere anche
piuttosto lungo se non utilizzate una macchina per carteggiare.

Parte 2: il disco in acrilato
-----------------------------

Non abbiamo ancora finito. Approfittiamone per ripassare i passaggi
fondamentali descritti sopra, ma più in breve.

#### Il progetto

{{\#eimage:<http://imgur.com/r0NjMIfl.png%7Calt=>\"!!TITLE!!\"\|480x320px\|thumb\|link=<http://imgur.com/r0NjMIf.png%7Cinline%7CL'anteprima>
del taglio della copertura trasparente}} Dopo aver lavorato la parte in
legno, ripartiamo da CamBam importando il file relativo alla copertura
trasparente, e tutte le eventuali modifiche di ridimensionamento
apportate al DXF della parte in legno. Nel caso dei lavori a sviluppo
circolare come questo, potrebbe essere comodo lasciarli posizionati sul
piano di disegno con il centro in coincidenza dell\'origine degli assi.
Così facendo, si velocizza anche il posizionamento dei riferimenti della
macchina rispetto al materiale grezzo.

#### I percorsi utensile

{{\#eimage:<http://i.imgur.com/Zs32yvgl.png%7Calt=>\"!!TITLE!!\"\|480x320px\|thumb\|link=<http://i.imgur.com/Zs32yvgl.png%7Cinline%7CAnteprima>
dei percorsi utensile}} Come descritto in precedenza, si dovranno
selezionare le geometrie e associare le relative lavorazioni.
Selezioniamo quindi tutti i fori della sequenza e clicchiamo il pulsante
marrone \"Foratura\" in alto, e dopodichè il cerchio perimetrale e
clicchiamo il pusante \"Profilo\" nelle lavorazioni. Anche in questo
caso, al fine di tenere il pezzo fermo durante il taglio ed evitare di
usare \"fermi\" (o ponticelli), sfrutteremo i fori passanti delle viti
per ancorare il pezzo prima del taglio finale circolare.

Pertanto, ripetiamo le lavorazioni da eseguire in sequenza, già citate
più in alto:\

1.  Esecuzione dei fori passanti per le viti di fissaggio\
    - FERMO MACCHINA per bloccare il materiale al piano martire
    sfruttando i fori appena creati\
2.  Taglio finale circolare\

Per i parametri di lavorazione, rispetto al legno, l\'acrilato tende a
fondere facilmente se il materiale si scalda troppo. Ogni tipo di
plexiglass ha le sue caratteristiche, noi consigliamo di usare sempre
PMMA colato (non estruso), ma
<span style="text-decoration: underline;">effettuate prima delle prove
su pezzi di scarto per verificare che i parametri siano corretti</span>
per il vostro materiale specifico. In ogni caso, EVITATE sempre i
\"plexiglass\" da baraccone in vendita nei brico-center, che non sono
affatto adatti per lavori di fresatura. Nel nostro caso, andremo quindi
a impostare

-   Velocità di rotazione comune a tutte le fasi: 18.000 rpm (velocità
    4-5 sul Kress).
-   <span style="font-weight: bold;">Forature</span>
    -   Velocità avanzamento taglio: 400 mm/min\
    -   Velocità verticale: 500 mm/min\
    -   Incremento di profondità: 0.5 mm\
    -   Profondità di taglio: -3.5 mm ^1^\
    -   Diametro utensile: 2.5 mm\
    -   Numero utensile: 1^3^\

<!-- -->

-   <span style="font-weight: bold;">Taglio </span>circolare
    -   Impostazione \"Taglio esterno\"\
    -   Velocità avanzamento: 1500 mm/min\
    -   Velocità verticale: 500 mm/min\
    -   Incremento di profondità: 0.3 mm ^2^\
    -   Profondità di taglio: -3.5 mm ^1^\
    -   Diametro utensile: 2.5 mm\
    -   Numero utensile: 2^3^\
-   Per tutti gli altri parametri potete lasciare i valori di default\

^1^ Lo spessore della tavola è 20mm, noi scenderemo a 20,5mm per
ottenere una lavorazione più precisa e ammortizzare eventuali
irregolarità di spessore della tavola.\
^2^ Conservativo per ottenere una finitura migliore\
^3^ Impostando il valore del numero utensile, viene automaticamente
caricato il diametro corretto specificato per quell\'utensile presente
nella libreria di Cambam. Tuttavia, a noi viene comodo cambiare la
numerazione dell\'utensile anche se usiamo sempre lo stesso utensile, in
modo da forzare un fermo macchina nei punti in cui ci interessa
intervenire. Quindi, impostando una numerazione di utensile differente,
la macchina arresterà il programma. Vi ricordiamo che durante i fermi
macchina, prima di aprire il box di protezione della fresatrice per
intervenire sul piano è necessario scollegare l\'alimentazione al
mandrino e ricordarsi di riattivarla prima di ripartire.\
\

#### Generazione e importazione del G-Code

Procediamo con gli stessi comandi di generazione del g-code indicati per
la parte in legno, con l\'unica eccezione che in questo caso potrebbe
essere comodo lasciare come punto di origina della lavorazione nel punto
di origine degli assi. Salviamo quindi il nostro g-code.

#### Preparazione della macchina

Dopo aver rimosso il resto del materiale grezzo e ripulito accuratamente
la macchina e il piano martire dalla polvere di segatura, montiamo la
nostra lastra di acrilato trasparente (che ovviamente dovrà essere di
dimensioni maggiori rispetto al cerchio da ritagliare, tenendo conto
delle staffe laterali) sul piano martire, allineandola rispetto agli
assi. Per il posizionamento dei riferimenti 0 XY, se come anticipato
abbiamo mantenuto il punto iniziale sull\'origine degli assi, possiamo
semplicemente segnare sulla lastra un punto centrale di un cerchio il
cui diametro sia identico a quello della lavorazione e ricada
interamente sulla nostra lastra, e azzerare gli assi XY. A questo punto,
analogamente a quanto fatto sopra, controlliamo che la linea del
mandrino non sia in tensione, montiamo la fresa stabilita, ed
effettiuamo l\'azzeramento dell\'asse Z con il metodo che preferiamo.
Possiamo quindi importare il nostro g-code, verificare che sia
posizionato correttamente sul software, e andare a verificare che le
estensioni spaziali del programma siano coerenti e i tempi di
lavorazione entro limiti accettabili. Infine, verifichiamo che la
velocità di RPM sul comando manuale del mandrino sia corretta, montiamo
il dispositivo di aspirazione, chiudiamo il box e verifichiamo e che
mandrino possa ricevere tensione.

#### Avvio della lavorazione

Dopo aver avviato la macchina e l\'aspiratore, questa eseguirà quindi
tutta la procedura dei fori e poi si fermerà (seguite i passaggi
descritti sopra nel caso voleste interrompere la lavorazione
manualmente). A quel punto, dopo aver scollegato il mandrino
dall\'alimentazione e messo in sicurezza la macchina, apriamo il box e
andiamo a intervenire aggiungendo le viti nei fori appena eseguiti.
Quindi richiudiamo il tutto e riavviamo il lavoro, per permettere alla
fresatrice di effettuare lil taglio finale.

Termine della lavorazione
-------------------------

Mettiamo in sicurezza la macchina come visto in precedenza, e rimuoviamo
il nostro pezzo finito. Non dimentichiamoci di dare una bella ripulita
alla macchina e al box e di riordinare tutto ciò che abbiamo usato!

Ora è finalmente il momento di goderci il vostro lavoro, o di riflettere
sugli eventuali errori per non ripeterli in futuro. Se avete consigli o
osservazioni non fateci mancare il vostro contributo qui di seguito.

PS: Come già detto, questa guida è stata preparata secondo le nostre
migliori conoscenze sulle tecniche di fresatura, ma non siamo
professionisti del settore. Verificate sempre che tutte le procedure e i
parametri di lavorazione siano conformi alla vostra macchina e al vostro
materiale. Se avete consigli, suggerimenti e modifiche da proporre
sono più che benvenuti!
