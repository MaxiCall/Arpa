import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'; // Importar ActivatedRoute para leer parámetros de la URL
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonImg, IonButton,// Asegúrate de importar IonImg si la vas a usar
  NavController, IonIcon
} from '@ionic/angular/standalone';


// Define la misma interfaz Semilla para consistencia
interface Semilla {
  id: string;
  name: string;
  type: string;
  shortDescription: string;
  longDescription: string; // ¡Nueva propiedad para más detalles!
  origin: string; // ¡Otra nueva propiedad de ejemplo!
  imageUrl: string;
  lat: number;
  lng: number;
  rating?: number;
  reviews?: number;
  sowingTime?: string;
  popular?: boolean;
}

@Component({
  selector: 'app-dettagli-semi',
  templateUrl: './dettagli-semi.page.html',
  styleUrls: ['./dettagli-semi.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonImg, IonButton, IonIcon
  ],
})
export class DettagliSemiPage implements OnInit {
  /**
   * Cambia el tema y activa la animación de transición en el body.
   * Llama a este método cuando el usuario cambie entre modo claro/oscuro.
   * @param isDark true para modo oscuro, false para modo claro
   */
  setTheme(isDark: boolean) {
    const body = document.body;
    body.classList.remove('dark-transition', 'light-transition');
    // Fuerza reflow para reiniciar la animación si se cambia rápido
    void body.offsetWidth;
    if (isDark) {
      body.classList.add('dark');
      body.classList.add('dark-transition');
      body.classList.remove('light');
    } else {
      body.classList.add('light');
      body.classList.add('light-transition');
      body.classList.remove('dark');
    }
    // Elimina la clase de transición después de la animación
    setTimeout(() => {
      body.classList.remove('dark-transition', 'light-transition');
    }, 700); // Debe ser mayor que la duración de tu animación (0.6s)
  }
  semilla: Semilla | undefined; // La semilla que se mostrará en esta página

  // Misma lista de variedades que ya tienes, pero con "longDescription" y "origin"
  // ¡IMPORTANTE! Asegúrate de que las descripciones largas y los orígenes sean realistas.
  private variedades: Semilla[] = [
    { id: 'aglione', name: 'Aglione', type: 'Aglione', shortDescription: 'Aglione di Città della Pieve.', longDescription: 'L’Aglione di Città della Pieve è una varietà di aglio gigante, dal sapore delicato e poco pungente, ideale per sughi e piatti tipici umbri.', origin: 'Città della Pieve, Umbria', imageUrl: 'assets/aglione.jpg', lat: 42.950, lng: 12.004 },
    { id: 'cicerchia', name: 'Cicerchia', type: 'Legume', shortDescription: 'Legume antico umbro.', longDescription: 'La Cicerchia è un legume tradizionale dell’Umbria, riscoperto per il suo sapore unico e la sua resistenza alla siccità. Ottima in zuppe e minestre rustiche.', origin: 'Norcia, Umbria', imageUrl: 'assets/cicerchia.jpg', lat: 42.793, lng: 13.095 },
    { id: 'pomodoro-di-giuliano', name: 'Pomodoro di Giuliano', type: 'Ortaggio', shortDescription: 'Pomodoro tipico di Narni.', longDescription: 'Il Pomodoro di Giuliano è una varietà locale di Narni, apprezzata per la sua polpa soda e il sapore intenso, ideale per conserve e sughi.', origin: 'Narni, Umbria', imageUrl: 'assets/pomodoro-di-giuliano.jpg', lat: 42.516, lng: 12.515 },
    { id: 'peperoni-nostralini', name: 'Peperoni nostralini', type: 'Ortaggio', shortDescription: 'Peperoni locali piccoli.', longDescription: 'I Peperoni Nostralini sono una varietà tradizionale di Magione, piccoli e saporiti, perfetti per essere conservati sott’olio o utilizzati freschi.', origin: 'Magione, Umbria', imageUrl: 'assets/peperoni.jpg', lat: 43.140, lng: 12.220 },
    { id: 'peperoni-gialli', name: 'Peperoni gialli (de qui)', type: 'Ortaggio', shortDescription: 'Peperoni gialli tipici di Corciano.', longDescription: 'I Peperoni Gialli di Corciano sono apprezzati per la loro dolcezza e il colore vivace, ideali per insalate e piatti estivi.', origin: 'Corciano, Umbria', imageUrl: 'assets/peperoni.jpg', lat: 43.112, lng: 12.292 },
    { id: 'melone-della-piana', name: 'Melone della Piana', type: 'Frutto', shortDescription: 'Melone dolce della Piana di Castelluccio.', longDescription: 'Il Melone della Piana di Castelluccio è noto per la sua dolcezza e la polpa succosa, coltivato nelle fertili pianure umbre.', origin: 'Piana di Castelluccio, Umbria', imageUrl: 'assets/melone-della-piana.jpg', lat: 42.826, lng: 13.080 },
    // Lista sincronizada y enriquecida con descripciones y orígenes realistas de Umbría
    {
      id: 'cavolo-di-costacciaro',
      name: 'Cavolo di Costacciaro',
      type: 'Cavolo',
      shortDescription: 'Il Cavolo di Costacciaro è una varietà antica e rustica, coltivata da pochi agricoltori nelle zone montuose dell’Umbria. Si distingue per la sua resistenza al freddo, le foglie carnose e rugose, e il sapore intenso. Tradizionalmente si consuma dopo la prima gelata, spesso cotto con "crescia" o patate. La coltivazione richiede rotazioni, terreno profondo e concimazioni organiche. La moltiplicazione del seme necessita di isolamento per evitare incroci. La raccolta avviene in autunno o inverno, intera o scalare, secondo la varietà.',
      longDescription: `
    <strong>Nome botanico:</strong> <em>Brassica oleracea L.</em><br><br>
    <strong>Origini:</strong> Varietà molto antica, coltivata tradizionalmente a Costacciaro (Umbria). Le sue origini risalgono probabilmente all'Asia Minore. Diffusa oggi principalmente nel centro-nord Italia. Coltivata da pochi agricoltori, è apprezzata per la rusticità e il sapore intenso, e si consuma preferibilmente dopo la prima gelata.<br><br>
    <strong>Caratteristiche:</strong> Pianta vigorosa, con foglie carnose, rugose, molto adatta ai climi freddi. Non tutti gli esemplari formano la classica palla compatta.<br><br>
    <strong>Usi in cucina:</strong> Nella tradizione locale, è consumata cotta, spesso accompagnata a "crescia" o patate.<br><br>
    <strong>Coltivazione:</strong> Si trapianta tra luglio e settembre, dopo semina in vasetto da maggio a luglio. Preferisce rotazioni colturali con un intervallo di almeno 2-3 anni. Il terreno va lavorato in profondità e arricchito con compost o letame. È utile la pacciamatura.<br><br>
    <strong>Cure:</strong> Richiede rincalzatura periodica e irrigazione costante. Concimazioni di copertura azotate da evitare negli ultimi 30 giorni prima della raccolta.<br><br>
    <strong>Moltiplicazione del seme:</strong> Essendo specie allogama, richiede distanze minime di isolamento (600–1500 m) per evitare incroci. Raccolta dei semi da almeno 4–6 piante, essiccazione in luogo ombreggiato e separazione dei semi a maturazione.<br><br>
    <strong>Raccolta:</strong> In autunno o inverno, dopo la prima gelata. Si raccoglie intera o scalare, in base alla varietà.
  `,
      origin: 'Costacciaro, Umbria',
      imageUrl: 'assets/cavolo-di-costacciaro.jpg',
      lat: 43.374,
      lng: 12.713,
      rating: 4.7,
      reviews: 54,
      sowingTime: 'Estate (trapianto da luglio a settembre)',
      popular: true
    },
    { id: 'cima-di-rapa', name: 'Cima di rapa', type: 'Cima di rapa', shortDescription: 'Ortaggio tipico umbro.', longDescription: 'La Cima di rapa è un ortaggio tipico della cucina umbra, utilizzato in molte ricette tradizionali per il suo gusto leggermente amarognolo.', origin: 'Terni, Umbria', imageUrl: 'assets/cima-di-rapa.jpg', lat: 42.563, lng: 12.642 },
    { id: 'cocomero-nero', name: 'Cocomero nero', type: 'Cocomero', shortDescription: 'Varietà di anguria locale.', longDescription: 'Il Cocomero Nero è una varietà di anguria coltivata in Umbria, nota per la buccia scura e la polpa dolce e succosa.', origin: 'Marsciano, Umbria', imageUrl: 'assets/cocomero-nero.jpg', lat: 42.913, lng: 12.340 },
    { id: 'fagiolina-del-trasimeno', name: 'Fagiolina del Trasimeno', type: 'Legume', shortDescription: 'Legume antico e pregiato.', longDescription: 'La Fagiolina del Trasimeno è un legume antico e pregiato, coltivato sulle rive del lago Trasimeno. Piccola, tenera e saporita, è presidio Slow Food.', origin: 'Lago Trasimeno, Umbria', imageUrl: 'assets/fagiolina-del-trasimeno.jpg', lat: 43.128, lng: 12.127 },
    { id: 'fagiolino-verde-nano', name: 'Fagiolino verde nano', type: 'Legume', shortDescription: 'Varietà di fagiolino umbro.', longDescription: 'Il Fagiolino verde nano è una varietà tipica degli orti umbri, apprezzata per la sua produttività e il sapore delicato.', origin: 'Foligno, Umbria', imageUrl: 'assets/fagiolino-verde-nano.jpg', lat: 42.954, lng: 12.701 },
    { id: 'cipolla-gialla', name: 'Cipolla gialla', type: 'Ortaggio', shortDescription: 'Cipolla tipica di Cannara.', longDescription: 'La Cipolla Gialla di Cannara è famosa in tutta l’Umbria per la sua dolcezza e viene celebrata ogni anno con una sagra dedicata.', origin: 'Cannara, Umbria', imageUrl: 'assets/cipolla-gialla.jpg', lat: 43.022, lng: 12.553 },
    { id: 'erba-medica', name: 'Erba medica', type: 'Foraggera', shortDescription: 'Pianta foraggera diffusa in Valnerina.', longDescription: 'L’Erba Medica è una pianta foraggera fondamentale per l’allevamento umbro, nota anche per le sue proprietà migliorative del suolo.', origin: 'Valnerina, Umbria', imageUrl: 'assets/erba-medica.jpg', lat: 42.721, lng: 12.888 },
    { id: 'insalata-spadona-rossa', name: 'Insalata spadona rossa', type: 'Ortaggio', shortDescription: 'Varietà di lattuga umbra.', longDescription: 'L’Insalata Spadona Rossa è una lattuga croccante e colorata, tipica degli orti di Perugia.', origin: 'Perugia, Umbria', imageUrl: 'assets/insalata-spadona-rossa.jpg', lat: 43.112, lng: 12.388 },
    { id: 'lupinella', name: 'Lupinella', type: 'Foraggera', shortDescription: 'Pianta foraggera di Montefalco.', longDescription: 'La Lupinella è una foraggera rustica, coltivata nei terreni collinari di Montefalco, utile per il pascolo e il miglioramento del suolo.', origin: 'Montefalco, Umbria', imageUrl: 'assets/lupinella.jpg', lat: 42.892, lng: 12.646 },
    { id: 'quarantino-giallo', name: 'Quarantino giallo', type: 'Cereale', shortDescription: 'Mais autoctono di Gubbio.', longDescription: 'Il Quarantino Giallo è un mais tradizionale di Gubbio, a ciclo breve, usato per polenta e farine.', origin: 'Gubbio, Umbria', imageUrl: 'assets/quarantino-giallo.jpg', lat: 43.351, lng: 12.573 },
    { id: 'quarantino-rosso', name: 'Quarantino rosso', type: 'Cereale', shortDescription: 'Mais rosso di Spoleto.', longDescription: 'Il Quarantino Rosso è una varietà di mais a chicco rosso, tipica delle campagne di Spoleto.', origin: 'Spoleto, Umbria', imageUrl: 'assets/quarantino-rosso.jpg', lat: 42.740, lng: 12.738 },
    { id: 'rapi-del-trasimeno', name: 'Rapi del Trasimeno', type: 'Ortaggio', shortDescription: 'Broccoletti tipici del Trasimeno.', longDescription: 'I Rapi del Trasimeno sono broccoletti dal sapore intenso, coltivati sulle colline che circondano il lago.', origin: 'Passignano sul Trasimeno, Umbria', imageUrl: 'assets/rapi-del-trasimeno.jpg', lat: 43.188, lng: 12.140 },
    { id: 'sedano-sellerino', name: 'Sedano sellerino', type: 'Ortaggio', shortDescription: 'Sedano di Trevi.', longDescription: 'Il Sedano Sellerino di Trevi è una varietà pregiata, dal sapore delicato, protagonista di una storica sagra locale.', origin: 'Trevi, Umbria', imageUrl: 'assets/sedano-sellerino.jpg', lat: 42.879, lng: 12.743 },
    { id: 'fagiolo-grigio', name: 'Fagiolo grigio', type: 'Legume', shortDescription: 'Fagiolo tipico di Bevagna.', longDescription: 'Il Fagiolo Grigio è una varietà locale di Bevagna, apprezzata per la sua consistenza e il sapore deciso.', origin: 'Bevagna, Umbria', imageUrl: 'assets/fagiolo-grigio.jpg', lat: 42.936, lng: 12.606 },
    { id: 'fagiolo-mezza-rama', name: 'Fagiolo mezza rama', type: 'Legume', shortDescription: 'Fagiolo di Deruta.', longDescription: 'Il Fagiolo Mezza Rama è tipico di Deruta, ideale per zuppe e minestre tradizionali.', origin: 'Deruta, Umbria', imageUrl: 'assets/fagiolo-mezza-rama.jpg', lat: 42.987, lng: 12.418 },
    { id: 'fagiolo-s-pietro', name: 'Fagiolo S.Pietro', type: 'Legume', shortDescription: 'Fagiolo di San Pietro.', longDescription: 'Il Fagiolo S. Pietro è una varietà coltivata nella zona di Perugia, nota per la sua resistenza e il sapore ricco.', origin: 'San Pietro, Perugia', imageUrl: 'assets/fagiolo-s-pietro.jpg', lat: 43.104, lng: 12.389 },
    { id: 'fave', name: 'Fave', type: 'Legume', shortDescription: 'Fave di Orvieto.', longDescription: 'Le Fave di Orvieto sono un legume antico, base di molte ricette umbre primaverili.', origin: 'Orvieto, Umbria', imageUrl: 'assets/fave.jpg', lat: 42.718, lng: 12.111 },
    { id: 'favino', name: 'Favino', type: 'Foraggera', shortDescription: 'Favino di Amelia.', longDescription: 'Il Favino è una pianta foraggera coltivata ad Amelia, importante per la rotazione dei terreni.', origin: 'Amelia, Umbria', imageUrl: 'assets/favino.jpg', lat: 42.557, lng: 12.415 },
    { id: 'melanzana', name: 'Melanzana', type: 'Ortaggio', shortDescription: 'Melanzana di Bastia Umbra.', longDescription: 'La Melanzana di Bastia Umbra è apprezzata per la sua versatilità in cucina e la polpa compatta.', origin: 'Bastia Umbra, Umbria', imageUrl: 'assets/melanzana.jpg', lat: 43.065, lng: 12.543 },
    { id: 'pomodoro-a-grappolo', name: 'Pomodoro a grappolo', type: 'Ortaggio', shortDescription: 'Pomodoro di Assisi.', longDescription: 'Il Pomodoro a Grappolo di Assisi è ideale per insalate e conserve, grazie alla sua dolcezza.', origin: 'Assisi, Umbria', imageUrl: 'assets/pomodoro-a-grappolo.jpg', lat: 43.070, lng: 12.617 },
    { id: 'pomodoro-da-appendere', name: 'Pomodoro da appendere', type: 'Ortaggio', shortDescription: 'Pomodoro di Spello.', longDescription: 'Il Pomodoro da Appendere di Spello si conserva a lungo e viene usato durante l’inverno per sughi e salse.', origin: 'Spello, Umbria', imageUrl: 'assets/pomodoro-da-appendere.jpg', lat: 42.989, lng: 12.670 },
    { id: 'pomodoro-da-conserva', name: 'Pomodoro da conserva', type: 'Ortaggio', shortDescription: 'Pomodoro di Montefalco.', longDescription: 'Il Pomodoro da Conserva di Montefalco è perfetto per la preparazione di passate e conserve fatte in casa.', origin: 'Montefalco, Umbria', imageUrl: 'assets/pomodoro-da-conserva.jpg', lat: 42.894, lng: 12.651 },
    { id: 'pomodoro-francescano', name: 'Pomodoro francescano', type: 'Ortaggio', shortDescription: 'Pomodoro di Assisi.', longDescription: 'Il Pomodoro Francescano è una varietà tipica di Assisi, dal sapore intenso e dalla buccia sottile.', origin: 'Assisi, Umbria', imageUrl: 'assets/pomodoro-francescano.jpg', lat: 43.070, lng: 12.617 },
    { id: 'pomodoro-san-marzano', name: 'Pomodoro San Marzano', type: 'Ortaggio', shortDescription: 'Pomodoro di Spoleto.', longDescription: 'Il Pomodoro San Marzano di Spoleto è apprezzato per la sua polpa soda, ideale per sughi e conserve.', origin: 'Spoleto, Umbria', imageUrl: 'assets/pomodoro-san-marzano.jpg', lat: 42.740, lng: 12.738 },
    { id: 'pomodoro-tondo-grande', name: 'Pomodoro tondo grande', type: 'Ortaggio', shortDescription: 'Pomodoro di Todi.', longDescription: 'Il Pomodoro Tondo Grande di Todi è noto per la sua dimensione e il sapore equilibrato, ottimo sia fresco che cotto.', origin: 'Todi, Umbria', imageUrl: 'assets/pomodoro-tondo-grande.jpg', lat: 42.780, lng: 12.409 },
    { id: 'zucca-a-fiasco', name: 'Zucca a fiasco', type: 'Ortaggio', shortDescription: 'Zucca di Castiglione del Lago.', longDescription: 'La Zucca a Fiasco è una varietà tradizionale di Castiglione del Lago, dalla forma allungata e dalla polpa dolce.', origin: 'Castiglione del Lago, Umbria', imageUrl: 'assets/zucca-a-fiasco.jpg', lat: 43.126, lng: 12.045 },
    { id: 'zucca-da-maiali', name: 'Zucca da maiali', type: 'Ortaggio', shortDescription: 'Zucca di Città di Castello.', longDescription: 'La Zucca da Maiali è coltivata a Città di Castello, utilizzata sia per l’alimentazione animale che per piatti rustici.', origin: 'Città di Castello, Umbria', imageUrl: 'assets/zucca-da-maiali.jpg', lat: 43.465, lng: 12.241 },
    { id: 'zucca-dolce', name: 'Zucca dolce', type: 'Ortaggio', shortDescription: 'Zucca di Gualdo Tadino.', longDescription: 'La Zucca Dolce di Gualdo Tadino è apprezzata per la sua dolcezza e viene usata in zuppe e dolci tradizionali.', origin: 'Gualdo Tadino, Umbria', imageUrl: 'assets/zucca-dolce.jpg', lat: 43.233, lng: 12.782 },
  ];

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  goBack() {
    this.navCtrl.back();
  }
  ngOnInit() {
    {
      const id = this.route.snapshot.paramMap.get('id');
      this.semilla = this.variedades.find(s => s.id === id);
    }
    // Suscribirse a los parámetros de la URL para obtener el ID de la semilla
    this.route.paramMap.subscribe(params => {
      const semillaId = params.get('id'); // Obtener el ID de la URL
      if (semillaId) {
        // Buscar la semilla en el array de todas las variedades
        this.semilla = this.variedades.find(s => s.id === semillaId);
        if (!this.semilla) {
          console.warn(`Semilla con ID '${semillaId}' no encontrada.`);
          // Opcional: redirigir a una página de error o mostrar un mensaje
        }
      } else {
        console.warn('ID de semilla no proporcionado en la URL.');
      }
    });
  }
}