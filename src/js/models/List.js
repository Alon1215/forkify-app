import uniqid from 'uniqid';

export default class List {
    constructor() {
        this.items = [];
    }

    addItem (count, unit, ingredient){
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        }
        this.items.push(item);

        // Persist data in localStorage
        this.persistData();
        return item;
    } 

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index,1);

        // Persist data in localStorage
        this.persistData();
    }
    updateCount(id, newCount) {
        this.items.find (el => el.id === id).count = newCount;
    }

    persistData () {
        localStorage.setItem('items', JSON.stringify(this.items));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('items'));
        
        // Restoring likes from our localStorage
        if (storage) this.items = storage;
    }
}