# EpicBook

GET: <https://striveschool-api.herokuapp.com/api/books/:ASIN/comments/>
POST: <https://striveschool-api.herokuapp.com/api/comments/>
    {
        "comment": string, //testo della recensione
        "rate": string, // valore compreso tra 1 e 5
        "elementId": string // l'identificativo ASIN del libro
    }
PUT e DELETE: <https://striveschool-api.herokuapp.com/api/comments/:id>

## Consegne

### Iniziali

1. Utilizza il template di create-react-app per creare una nuova applicazione - FATTO
2. Installa e importa bootstrap + react-bootstrap nell'applicazione - FATTO
3. Crea un componente MyNav che renderizza una navbar di bootstrap con i seguenti link: Home, About, Browser - FATTO
4. Crea un componente di nome MyFooter, che renderizzerà un footer per l'applicazione - FATTO
5. Crea un componente di nome Welcome, che renderizzerà un Alert e un titolo per l'applicazione - FATTO
6. Crea un componente di nome AllTheBooks: questo componente leggerà uno dei file json forniti e renderizzerà una griglia contenente le copertine dei libri - FATTO

### SingleBooks

1. Crea un componente di nome SingleBook, riceverà un libro come prop, e renderizzerà la sua copertina e il suo titolo. Utilizza la card di react-bootstrap - FATTO
2. Modifica il componente AllTheBooks  in modo che il .map() renderizzi una lista di componenti SingleBook - FATTO
3. Crea un input controllato all'interno di AllTheBooks, deve utilizzare il valore di questo input come filtro per mostrare solamente i libri che contengono il testo della ricerca -> Vedi Context-1.
4. Crea lo stato interno al SingleBook e inserisci il Selected, se true la card deve avere bordo rosso - FATTO

### Fetches

1. GET e POST per leggere e creare recensioni sui libri - FATTO 
2. Crea un componente CommentArea e incorporalo al componente SingleBook, quando si clicca su questo viene renderizzata l'area commenti (&& e selected) - FATTO
3. CommentsList riceverà la lista di recensioni da CommentArea con una prop, e renderizzerà la lista usando il componente SingleComment - FATTO
4. AddComment conterrà un form per raccogliere il testo della recensione e la valutazione da 1 a 5; una volta raccolti i dati tramite pulsante (onClick) verrà effettuata una chiamata POST - FATTO
5. Inserisci DELETE e PUT
6. Inserisci spinner e messaggi di errore

### Context

1. Spostare il campo di ricerca all'interno della navbar
2. la logica deve trovarsi in App, per poter passare lo stato ai componenti inferiori (bisognerà passare delle props da App a MyNav), da App a AllTheBooks per la ricerca
3. questa prop servirà per fare il filter in AllTheBooks
4. Usa ReactContext per condividere con l'intera applicazione un tema light o dark, tramite un button

### Modifica del Layout

1. due colonne: sinistra che mostrerà le copertine dei libri, destra che mostrerà sempre CommentArea, rimuovi l'istanza di CommentArea all'interno di SingleBook.
2. al caricamento dell'app, CommentArea non riceverà immediatamente un libro per effettuare la fetch delle recensioni, fai in modo che CommentArea mandi in crash tutto quando non possiede dati da mostrare (valore iniziale dello state)
3. Cambia il modo in cui viene salvato il "selected", non in SingleBook ma in LatestRelease, non conterrà un booleano ma l'ASIN del libro cliccato
4. implementa lo state lifting e modifica SingleBook di conseguenza
5. passa il valore di selected sia a SingleBook che a CommentArea, quando cambia il valore CommentArea deve eseguire una nuova fetch (utilizza componentIdUpdate e sfrutta le prop)
6. assicurati che l'ASIN del libro in "selected" arrivi anche a AddComment, in modo da mantenere aggiornata la sua proprietà elementId

### Routing

1. installa npm react-router-dom
2. Crea una rotta per l'homepage: dovrebbe puntare a "/" e caricare AllTheBooks
3. Crea un componente NotFound, dovrebbe venire renderizzato ogni volta che l'utente naviga su una rotta non gestita
4. Crea una rotta per un nuovo componente BookDetails, questa rotta deve passare un parametro ASIN tramite useParams
5. Aggiungi un pulsante su ogni SingleBook per poter navigare verso BookDetails
6. Crea il componente BookDetails, tramite l'ASIN preso dal url caricherà i dettagli e le recensioni del libro. Importa il file .json in BookDetails e trova il libro corretto.

### Tests

1. Verifica che il componente Welcome venga montato correttamente
2. Verifica che vengano effettivamente renderizzate tante bootstrap card quanti sono i libri nel .json utilizzato
3. Verifica che il componente CommentArea venga renderizzato correttamente
4. Verifica, magari con più tests, che il filtraggio dei libri tramite navbar si comporti come previsto
5. Verifica che, cliccando su un libro, il suo bordo cambi colore
6. Verifica che, cliccando su di un secondo libro dopo il primo, il bordo del primo libro ritorni normale
7. Verifica che all'avvio della pagina, senza aver ancora cliccato nessun libro, non ci siano istanze del componente SingleComment all'interno del DOM
8. Verifica che, cliccando su di un libro con recensioni, esse vengano caricate correttamente all'interno del DOM

## Componenti

MyNav
MyFooter
Welcome
AllTheBooks
    SingleBook
        BookDetails
    CommentArea
        CommentsList
        SingleComment
