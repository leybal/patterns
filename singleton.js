class Singleton {
    constructor () {
        if (Singleton.instance instanceof Singleton){
            return Singleton.instance;
        }

        this.random = Math.random();
        Singleton.instance = this;
    }
}
  
let first = new Singleton();
let second = new Singleton();

console.log(first == second);
console.log(first.random);
console.log(second.random);


const counterSingleton = (function () {
  let instance;
  let counter = 0;

  const getCounter = () => counter;

  const add = (num = 1) => {
    counter += num;
    return instance
  };

  const createInstance = () => (
    {
      getCounter: getCounter,
      add: add
    }
  )

  return function constructSingleton () {
		if (instance) {
			return instance;
		}
    
    instance = createInstance(); 
    return instance;
	}
})();

const counter1 = counterSingleton();
const counter2 = counterSingleton();
console.log(counter1 === counter2);

counter1.add(1)
console.log(counter1.getCounter());
counter2.add(1)
console.log(counter2.getCounter());
console.log(counter1.add(1).add(10).getCounter());
