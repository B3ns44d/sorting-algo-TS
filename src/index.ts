import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

console.log('App started...');

const numbersCollection = new NumbersCollection([3, 6, 1, 0, 33, -3]);
numbersCollection.sort();
console.log(numbersCollection)

const str = new CharactersCollection('XaBddiqzS');
str.sort();
console.log(str)

const linkedList = new LinkedList();
linkedList.add(3);
linkedList.add(6);
linkedList.add(1);
linkedList.add(0);
linkedList.add(33);
linkedList.add(-4);

linkedList.print();

linkedList.sort();

console.log('------------')
linkedList.print();