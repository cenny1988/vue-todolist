/*
- stampare in pagina un item per ogni elemento contenuto in un array
- ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
ATTENZIONE PERO’!!!!
il vostro array sarà un array di oggetti;
gli oggetti avranno questo formato:
{ text: 'Fare la spesa', done: true }, 
{ text: 'Fare il bucato', done: false }
etc. etc..
quindi nell’elenco di output ciò che sara “done” sarà barrato, il resto invece con testo normale.
Nella richiesta base mi limito al fatto che quel “done” nei task inseriti dall’utente sarà sempre false,
gli unici true saranno alcuni nei dati di partenza.
BONUS
Gesticso i done dall’interfaccia,
quindi il task potrà essere anche segnato come done e non per forza cancellato
poi se l’utente vuole potrà anche cancellarlo del tutto.
*/
var app = new Vue({
    el: '#myapp',
    data: {
        newTask: null,
        tasks: [
            {
                text: 'Fare la spesa',
                done: 'true'
            },
            {
                text: 'Fare la bucato',
                done: 'false'
            },
        ]
    },
    methods: {
        removeTask(index){
            this.tasks.splice(index,1);
        },
        addTask(){
            if(this.newTask.length >= 3 && this.newTask[0] !== ' '){
                this.tasks.push({
                    text: this.newTask,
                    done: false
                });
                this.newTask= "";
            }
        },
        taskDone(index){
            this.tasks[index].done === 'true' ? this.tasks[index].done = 'false' : this.tasks[index].done = 'true';
            console.log(this.tasks[index].done);
        }
    },
});