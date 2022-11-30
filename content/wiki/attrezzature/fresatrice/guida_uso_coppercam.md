+++
title= "Guida all'uso di Coppercam"
extra.anteprima="coppercam_1.png"
+++
[CopperCam](http://www.galaad.net/coppercam-ita.html) è un software
molto utile e piuttosto facile da usare, che permette generare i
percorsi utensile partendo da file Gerber/Excellon di un circuito, ed
eventualmente apportarvi modifiche, per poi passarli al software di
comando di una fresatrice.Questo tutorial non è pensato per essere una
guida completa all\'utilizzo di questo programma, ma solo per illustrare
i passi fondamentali per elaborare i file esportati del vostro circuito.
Inoltre, di seguito si presuppone che abbiate letto il post \"Guida alla
creazione di PCB con una fresatrice\", dove vengono spiegate le diverse
fasi necessarie per produrre un PCB, partendo da zero.Questo tutorial si
articola nelle seguenti fasi

Installazione
-------------

può essere adoperato anche in versione Demo, con qualche limitazione
solo nella fase di esportazione del G-Code. Potete quindi scaricarlo da
casa per fare pratica e per preparare il vostro lavoro da casa inserendo
tutti i parametri, e poi usare quello con licenza originale disponibile
al fablab (gentilmente donata dal produttore) per l\'esportazione e la
lavorazione del G-Code. È consigliabile installare questo programma su
un PC abbastanza performante, in quanto le piste e gli svuotamenti
vengono elaborati riga per riga e possono impiegare molto tempo a essere
calcolati (specialmente con l\'aumentare della complessità del
circuito).Durante l\'installazione è anche possibile scegliere la lingua
italiana. In genere è preferibile usare la lingua inglese ma in questo
caso, nonostante alcuni termini tradotti in maniera poco intuitiva (le
piazzole vengono nominate \"punti\", e i livelli \"strati\" e qualche
altro errore minore) la traduzione italiana può essere un buon aiuto, in
particolare per chi è agli inizi.

Impostare i parametri iniziali
------------------------------

Come prima cosa, dal menù Parametri, accertatevi che come <u>unità di
misura</u> sia selezionato \"millimetri\" e come unità di <u>misura
della velocità</u> sia selezionato \"mm/min\". Quindi, sempre dal menù
Parametri, potete aprire lo strumento \"Magazzino utensili\", mostrato
in figura. Qui vanno inserite le caratteristiche e i parametri di
lavorazione di tutte le frese a nostra disposizione. Cliccando sui
pulsanti indicati in rosso, a fianco al numero identificativo
dell\'utensile, è possibile impostare gli utensili successivi. 

{{
  immagine(
    url="coppercam_2.png",
    didascalia="In questa finestra impostiamo i parametri per ogni utensile"
  )
}}

Per sapere quali parametri di lavorazione utilizzare, vi rimandiamo alla
\"Fase 2\" della [Guida alla creazione di
PCB](Realizzare_PCB_con_una_fresatrice_CNC "wikilink").

Importazione dei file Gerber/Excellon
-------------------------------------

Il caricamento di un circuito all\'interno di CopperCam avviene per
livelli, pre-assegnati per ciasuna fase della lavorazione:

| Livello | Lavorazione |
|------------------|-------------|
|   Livelli da 1 a 4|  **Segnali**|
|     Livello 5    |  **Fori**|
|    Livello 6    |  **Taglio**|

Ogni volta che si apre un file Gerber (o Excellon, per i fori), il
programma cercherà di assegnare automaticamente il livello corretto a
seconda del contenuto. Cliccate quindi su \"File/Nuovo Circuito\" (o sul
primo pulsante da sinistra) e aprite prima di tutto il file Gerber del
livello dei segnali. Se CopperCam dovesse avvertirci che mancano delle
definizioni all\'interno del file Gerber, cliccate OK. Per il momento
potete chiudere anche la successiva piccola finestra in cui ci vengono
chieste le informazioni mancanti. Provvederemo infatti a definire i dati
corretti quando avremo caricato anche le informazioni di tutti i fori.

{{
  immagine(
    url="coppercam_3.png"
  )
}}
{{
  immagine(
    url="coppercam_4.png"
  )
}}
{{
  immagine(
    url="coppercam_5.png"
  )
}}

A questo punto, se dovesse comparire la richiesta di confermare se la
rete di tracce definisce un profilo di taglio, cliccate \"Sì\" SOLO se
siete certi che il contorno evidenziato corrisponda effettivamente a un
profilo di taglio, altrimenti cliccate \"No\".Bene, a questo punto
dovreste vedere davanti a voi il disegno delle piste del vostro
circuito. Verificate che il disegno del circuito appaia orientato
correttamente. Se infatti, come è consuetudine, sul vostro CAD avete
impostato le tracce sul lato inferiore del circuito (dove vanno
effettuate cioè tutte le saldature), è possibile che ora su CopperCAM il
circuito sia visualizzato \"specchiato\" rispetto al CAD. Generalmente
questo è normale, perchè state osservando direttamente la parte
inferiore della PCB ma non datelo per scontato. Come riferimento, se
avete inserito del testo da fresare sul rame, nell\'anteprima di
CopperCam dovrebbe essere correttamente leggibile.Ora, prima di fare
qualsiasi altra cosa, cliccate il pulsante \"Riquadrare\" in alto, in
modo da riportare a zero l\'origine del circuito e facilitare
l\'allineamento dei livelli successivi.

{{
  immagine(
    url="coppercam_6.png"
  )
}}

Quindi potete procedere con il file di definizione delle forature (file
Excellon), se disponibile, procedendo con l\'allineamento come mostrato
di seguito. Altrimenti passate direttamente al caricamento del profilo
di taglio.Anzitutto tenete premuto il primo pulsante sulla sinistra per
far comparire il pulsante \"Aprire forature\", e cliccatelo.

{{
  immagine(
    url="coppercam_7.png"
  )
}}

Selezionate quindi il vostro file Excellon (di solito con estensione
.txt o .drl) e confermate. CopperCam farà comparire quindi i punti
relativi a ciascun foro della PCB, ma non potendo stabilire se i fori
sono allineati correttamente, chiederà se l\'importazione è valida.Per
capire se possiamo confermare la validità, dobbiamo verificare che il
livello dei fori appena caricato sia compatibile con le tracce già
presenti. Non importa se i fori appaiono disallineati rispetto alle
piazzole, l\'importante è che lo spostamento sia uniforme, come indicato
nella prossima figura.

{{
  immagine(
    url="coppercam_8.png",
    didascalia="Le frecce di uguale colore indicano i le piazzole e i relativi fori che dovrebbero coincidere. I tratti blu mostrano però che lo scostamento è costante, e quindi è possibile confermare la validità dell'importazione"
  )
}}

Se viceversa i fori avessero spostamenti disomogenei rispetto alle
piazzole, apparissero raggruppati tutti in una zona, o ancora fossero
\"specchiati\" rispetto alle tracce, dovrete cliccare \"No\", e
modificare i parametri di importazione nell\'apposita finestra.\
Quando sarete sicuri che i fori presentano tutti lo stesso scostamento,
potrete quindi confermare e procedere con l\'allineamento automatico
delle forature.

Allineamento dei fori
---------------------

Per allineare i fori, prima cosa va selezionato il livello dei segnali
(di solito il primo), e va cliccato il pulsante indicato in figura con
la freccia nera, e subito dopo una piazzola di riferimento, che si
colorerà di fucsia. A questo punto <u>va prima selezionato il livello 5
(fori)</u>, quindi dovrete cliccare sul pulsante indicato con la freccia
rossa, e infine selezionare il foro che desiderate sia allineato con la
piazzola appena evidenziata.

{{
  immagine(
    url="coppercam_9.png"
  )
}}

Così facendo, tutti i fori saranno spostati della misura necessaria a
farli coincidere perfettamente con le piazzole.Volendo, nel programma
sono presenti tutti gli strumenti necessari per effettuare
l\'allineamento manualmente.A questo punto manca soltanto il livello del
profilo di taglio, se presente. Per caricarlo dovrete cliccare su
\"Aggiungi strato\", e aprire il file Gerber relativo.

{{
  immagine(
    url="coppercam_10.png"
  )
}}

Se tutto va bene, CopperCam vi chiederà conferma che la traccia
evidenziata corrisponda a un profilo di taglio, quindi potrete
confermare, e il profilo sarà caricato direttamente nel livello 6
(taglio).Anche in questo caso, dovrete prestare attenzione che il
profilo segua esattamente il contorno previsto, e non sia disallineato
rispetto al resto del circuito. Nel caso, potrete spostarlo con gli
appositi strumenti a disposizione nel programma.Cliccando ora in alto
sul pulsante \"Taglio\" potete confermare le modalità di esecuzione del
taglio perimetrale. Evitate invece di utilizzare l\'opzione \"ponti\",
perchè sono inutili se si usa un biadesivo di fissaggio e
costringerebbero a rimozioni manuali di vetronite con dispersione di
polveri pericolose per la salute.

Definizione delle dimensioni di fori e piazzole
-----------------------------------------------

Ogni componente che abbiamo caricato nel nostro file di progetto del
circuito ha delle dimensioni dei piedini diverse da tutti gli altri.
Quindi, a meno che non si sia provveduto ad uniformarli su CAD, i
diametri dei relativi fori nel file importato possono variare anche di
molto. Realizzare fori di diametri tutti diversi, obbligherebbe però a
continui fermo-macchina, cambi utensile e ridefinizione della quota Z0,
con notevoli perdite di tempo. Per questo motivo si cerca di ridurre al
massimo i cambi utensile, utilizzando la fresa che consente di fresare i
fori di diametro maggiore richiesti dal circuito anche per i fori più
piccoli, o al massimo due misure.Il prossimo passo è quindi quello di
redefinire le dimensioni delle piazzole di rame in modo tale che possano
ospitare dei fori di diametro maggiore. Ciò è fattibile attraverso lo
strumento \"Modifica punti\" (ricordate, punti=piazzole) nel menù
Modifica.

{{
  immagine(
    url="coppercam_11.png"
  )
}}

Da questa finestra potrete impostare la forma e la dimensione (taglia)
delle piazzole, e anche dei relativi fori. E\' consigliabile far sì che
la striscia di rame circolare della piazzola risultante dopo
l\'esecuzione del foro abbia almeno una larghezza di 0,4 mm.Per esempio,
se nel nostro circuito i fori variassero da 0,6 mm a 1,0 mm, sarà
conveniente impostare la dimensione di tutti i fori a 1,0 mm, e la
dimensione delle piazzole almeno a 1,8 mm.

Le piazzole elencate da questa finestra sono solo quelle che CopperCam
riconosce come tali, ma è possibile che vi siano piazzole di forma ovale
(tipicamente quelle allungate), che vengono riconosciute solo come parti
di rame e non compaiano quindi nella finestra di cui sopra. In genere
questo non è un problema perchè si tratta di piazzole già di grandi
dimensioni che quindi non è necessario ingrandire ulteriormente. Quello
che resta da fare, però è verificare che i loro fori siano eseguiti
sempre con l\'utensile del diametro che abbiamo scelto.Per fare questo
conviene aprire direttamente la finestra \"Utensili selezionati\" dal
menù \"Parametri\"\...

{{
  immagine(
    url="coppercam_12.png"
  )
}}

\... e nella parte destra \"Utensili di foratura, andare a eliminare
tutti gli utensili di foratura con diametri che non intendiamo
utilizzare, specificando nelle opzioni presenti con che criterio
vogliamo che siano realizzati i fori. (In questa stessa finestra vanno
stabiliti anche i parametri delle altre fasi della lavorazione.)A questo
punto, come ulteriore conferma, possiamo aprire lo strumento \"Lista
forature\" con l\'apposito pulsante nella barra in alto. Qui vengono
intuitivamente associati i diversi fori e la loro quantità all\'utensile
designato per la loro foratura secondo le impostazioni attuali, con la
possibilità di evidenziarli sul disegno selezionandoli dalla lista. Se
tutto va bene, dovreste avere conferma che tutti i fori per i piedini
dei vostri componenti sono eseguiti con la fresa che avete scelto. Va
notato che qualora fossero presenti fori per le viti come nell\'esempio
mostrato in figura, questi potranno essere eseguiti con una fresa
leggermente più grande usando l\'opzione di alesatura circolare.

{{
  immagine(
    url="coppercam_13.png"
  )
}}

(Non pensate di allargare manualmente i fori dopo la fresatura! Oltre ad
essere un\'operazione pericolosa perchè implica la dispersione di
polveri di vetronite molto dannose per la salute, rischiate di rovinare
irreparabilmente la PCB!)Terminata questa fase potete finalmente
dedicarci al calcolo dei percorsi utensile.

Calcolo dei percorsi utensile
-----------------------------

Per prima cosa <u>selezionate il livello 1</u>, quindi, per calcolare i
percorsi per le tracce, selezionate il pulsante \"Calcolare contorni\"
presente sulla barra in alto. Ci verrà presentata una finestra di
conferma dei valori, dove se tutto va bene dovremo solo dare \"Ok\" per
procedere.

{{
  immagine(
    url="coppercam_14.png"
  )
}}

Una volta terminato il calcolo, vi verrà mostrata l\'anteprima dove
dovrete controllare che a occhio i contorni risultino tutti ben definiti
e tracciati correttamente, senza interruzioni. Noterete inoltre che però
i solchi visibili nel rame saranno solo quelli relativi alle tracce,
mentre resteranno diverse parti con residui di rame. Per eliminare anche
questi e far apparire la PCB esattamente come l\'avete progettata, è
necessario procedere allo svuotamento (nella traduzione \"tratteggio\")
delle restanti parti di rame, tramite lo strumento \"Calcolare
tratteggi\".

Nella finestra di conferma, assicuratevi che siano spuntate le opzioni
\"contorno della scheda (disegno)\", per far sì che lo svuotamento
avvenga solo nei contorni definiti dal circuito, e \"Collegare tutte le
linee\", che evita inutili sollevamenti in Z durante l\'operazione.

{{
  immagine(
    url="coppercam_15.png"
  )
}}

Purtroppo, CopperCam non è in grado di effettuare svuotamenti con
movimenti che seguano i contorni delle tracce, quindi eseguirà la
lavorazione per righe orizzontali o verticali. Se indicherete nella
finestra Direzione \"ottimale\", il programma calcolerà i percorsi per
entrambe le direzioni, scegliendo quello più conveniente. Di contro,
questa operazione di calcolo impiegherà più tempo per essere
completata.Ora, se il risultato dell\'anteprima vi soddisfa, passiamo
alla fase finale.**7 - Impostazione e salvataggio del G-Code**Anzitutto,
la prima volta che volete esportare il g-code dovrete settare i
parametri relativi adatti per renderlo compatibile con il vostro
programma di controllo (es. Mach3, CNC USB Controller\...) selezionando
il postprocessore corretto, e i giusti parametri relativi alla vostra
macchina. Tutto ciò va fatto selezionando \"Formato di uscita\", dal
menù \"Parametri\".

{{
  immagine(
    url="coppercam_16.png"
  )
}}

Se volete utilizzare la fresatrice Aero in dotazione al nostro Fablab,
potete ricopiare le impostazioni dall\'immagine qua sopra.Quindi, per
effettuare il salvataggio definitivo del g-code, dovrete cliccare sullo
strumento \"Fresatura\", nella barra in alto.

{{
  immagine(
    url="coppercam_17.png"
  )
}}


In questa finestra, dovrete assicurarvi che nella \"Sequenza\" siano
presenti le sezioni: 1- Incisione 2- Forature (una o più sequenze) 3-
Taglio e che siano associate agli utensili giusti e <u>nell\'ordine
giusto</u>.

Attenzione all\'opzione \"inversione X\", da utilizzare solo se siete
sicuri di quello che fate. Nel g-code risultante, add ogni \"Sequenza\"
viene associato un utensile diverso, e quindi un cambio utensile. Se il
programma di controllo è impostato correttamente, quindi, la macchina si
fermerà alla fine di ogni fase, per consentirvi di sostituire la fresa e
prendere una nuova quota Z0, prima di continuare.Quindi selezionate
ancora il \"Punto zero XY\" come preferite, e come \"Punto zero Z\"
impostate \"Superficie del circuito\"Cliccate quindi Ok, e salvate il
vostro g-code.Complimenti, avete terminato!Ora, se volete sapere come
andare avanti, tornate alla [Guida alla creazione di
PCB](@/wiki/attrezzature/fresatrice/creare_pcb_con_fresatrice.md), ricominciando
dalla Fase3.
