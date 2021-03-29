import Alligator from "./models/a.js";
import Badger from "./models/b.js";
import Cat from './models/c.js';
import Dolphin from './models/d.js';
import Elephant from './models/e.js';
import Flamingo from './models/f.js';
import Gaboon from './models/g.js';
import Hippo from './models/h.js';
import Impala from './models/i.js';
import Jaguar from './models/j.js';
import KingCobra from './models/k.js';
import Lion from './models/l.js';
import Monkey from './models/m.js';
import Newt from './models/n.js';
import Orca from './models/o.js';
import Penguin from './models/p.js';
import Quail from './models/q.js';
import RedFox from './models/r.js';
import Shark from './models/s.js';
import Tiger from './models/t.js';
import Unicorn from './models/u.js';
import Vulture from './models/v.js';
import Whale from './models/w.js';
import Xerus from './models/x.js';
import Yak from './models/y.js'
import Zebra from './models/z.js';

// zoo groups
let dangerousAnimals = [];
let aquaticAnimals = [];
let smallAnimals = [];


// instances of classes
let ann = new Alligator("Ann", 200, "female", "people", true);
let buddy = new Badger("Buddy", 50, "male", "honey", false);
let candy = new Cat('Candy', 3, 'female', 'catnip')
let dambi = new Dolphin('Dambi', 250, 'female', 'fish', false);
let eli = new Elephant('Eli', 2500, 'male', 'bamboo', true);
let finky = new Flamingo('Finky', 5, 'female', 'minoes', false);
let george = new Gaboon('George', 8, 'male', 'bananas', false);
let helen = new Hippo('Hirtha', 4234, 'female', 'watermelons', true);
let gambi = new Impala('Gambi', 35, 'female', 'hay', false);
let slick = new Jaguar('Slick', 179, 'male', 'gazelle', true);
let kelly = new KingCobra('Kelly', 9, 'female', 'rodents', true);
let leon = new Lion('Leon', 350, 'male', 'gazelle', true, true);
let marvin = new Monkey('Marvin', 22, 'male', 'bananas', false)
let newt = new Newt('Newton', 1, 'male', 'insects', false);
let orell = new Orca('Orell', 7643, 'male', 'seals', true);
let percy = new Penguin('Percy', 19,  'male', 'sardines', false);
let que = new Quail('Que', 3, 'female', 'seeds', false)
let roy = new RedFox('Roy', 11, 'male', 'mice', false);
let sally = new Shark('Sally', 2509, 'female', 'people', true);
let tim = new Tiger('Tim', 900, 'male', 'people', true);
let utica = new Unicorn('Utica', 1890, 'female', 'glitter', false);
let vinny = new Vulture('Vinny', 12, 'male', 'dead animals');
let wanda = new Whale('Wanda', 23503, 'female', 'plankton', false);
let xina = new Xerus('Xina', 2, 'female', 'bugs', false);
let yubie = new Yak('Yubie', 1423, 'male', 'hay', true);
let zed = new Zebra('Zed', 974, 'male', 'grass', false);

dangerousAnimals.push(ann, eli, helen, slick, leon, orell, sally, tim, yubie);
aquaticAnimals.push(dambi, helen, orell, percy, sally, wanda);
smallAnimals.push(candy, finky, george, gambi, kelly, marvin, newt, percy, roy, vinny, xina, zed);
