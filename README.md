# fablab-static-wiki
Riedizione della Wiki fablab come sito statico in Zola.

Usa minicss per lo stile e [Forkawesome](https://forkaweso.me/Fork-Awesome/) per le icone

## Problemi noti
Le immagini da imgur non vengono visualizzate, ricordarsi di scaricarle

alcuni link immmagini sono da correggere con notazione markdown
```![testo alternativo](url_immagine "titolo")```

## Scaricare
```
git clone https://github.com/fablab-imperia/fablab-static-wiki.git
git submodule init
git submodule update
```

## Build

### Sviluppo
`zola serve`

### Pubblicazione
`zola build`