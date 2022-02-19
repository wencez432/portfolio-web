import { v4 as uuidv4 } from 'uuid';
import Siminsa from '../images/siminsa.png';
import TutoriasUNI from '../images/tutoriasuni.png';
import MatematicaFC from '../images/matematicafc.png';

const projects = [
  {
    id: uuidv4(),
    name: 'SIMINSA',
    desc:
      'Sistema integral para el MINSA que permite registrar datos de pacientes e inmunizaciones, monitorear pacientes contagiados o vulnerables.',
    img: Siminsa,
  },
  {
    id: uuidv4(),
    name: 'TutoríasUNI',
    desc:
      'Sistema que permite la creación y uso de tutorías, cuenta con un Chatbot que ayuda a encontrar los cursos.',
    img: TutoriasUNI,
  },
  {
    id: uuidv4(),
    name: 'Matemática FC',
    desc:
      'Propuesta de diseño de una nueva pagina web para la escuela de matemática de la FC-UNI.',
    img: MatematicaFC,
  },
  /* {
    id: uuidv4(),
    name: 'U Tracker',
    desc:
      'An application to track your all data from one place. I developed the website and the mobile app',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Green CTG',
    desc:
      'An app to help people to get an overview of how they can make the city beautiful.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
  }, */
];

export default projects;
