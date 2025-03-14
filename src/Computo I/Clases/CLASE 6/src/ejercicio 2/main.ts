import Dog from './dog'
import Eagle from './eagle'
import Fish from './fish'
import Cuadrado from './cuadrado'
import Circulo from './circulo'

const dog = new Dog(`Pitujo`);
dog.run();
dog.swin();

const eagle = new Eagle(`ChicaLino`);
eagle.fly();

const fish = new Fish('Turco');
fish.swin();

const cuadrado = new Cuadrado(5, 5);
cuadrado.AreaCuadrado();

const circulo = new Circulo(5);
circulo.AreaCirculo();
circulo.CircunferenciaCirculo();
