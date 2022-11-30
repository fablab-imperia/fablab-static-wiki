+++
title="Regolatore tensione LM317T"
+++
I facili guasti dei regolatori di tensione (a 3 piedi x intenderci) sono
dovute alla presenza di tensioni inverse che rovinano l\'integrato. Nel
caso della serratura nfc, ogni qualvolta avessimo provveduto
all\'alimentazione da usb x la verifica dello sketch abbiamo alimentato
il regolatore all\'inverso!

L\'errore + banale da me fatto nel tentativo di far funzionare il motore
con non + di 12 V posticipando il condensatore dopo raddrizzatore e
regolatore (e non solo dopo il primo) idem ha creato la sua fusione (per
la corrente inversa creata dal condensatore allo spegnimento del
dispositivo)!

La giuda eccessivamente dettagliata che da ragguagli in merito al
funzionamento del particolare regolatore di tensione variabile LM317T
è http://www.adrirobot.it/elettronica/lm317/lm\_317.htm e suggerisce il
DS1 e DS2 per evitare danneggiamenti rispettivamente x correnti inverse
o cortocircuiti accidentali (per l\'eventuale aggiunta del condensatore
C3 per il particolare regolatore LM317T). Da far attenzione ad un errore
di rappresentazione del diodo a fine pagina e fissato R1 a 225
dimensionamento R2 ottenuto per tentativi con i seguenti dati rilevati:

18.9 - 7.7=     18.9 - 6.8= Delta

11.2     12.1 -0.9

1165     1005 647

m=-178

q=3160

Per ottenere i 5V partendo dai 18.9:

18.9 - 5.00 = 13.9

(-178 \* 13.9) + 3160 =

685Hom

by Valerio 