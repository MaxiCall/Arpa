import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'temi/acqua',
    loadComponent: () => import('./temi/acqua/acqua.page').then(m => m.AcquaPage),
    data: { title: 'Acqua' }
  },
  {
    path: 'temi/aia',
    loadComponent: () => import('./temi/aia/aia.page').then(m => m.AiaPage),
    data: { title: 'AIA' }
  },
  {
    path: 'temi/aria',
    loadComponent: () => import('./temi/aria/aria.page').then(m => m.AriaPage),
    data: { title: 'Aria' }
  },
  {
    path: 'temi/biodiversita',
    loadComponent: () => import('./temi/biodiversita/biodiversita.page').then(m => m.BiodiversitaPage),
    data: { title: 'Biodiversita' }
  },
  {
    path: 'temi/bonifica',
    loadComponent: () => import('./temi/bonifica/bonifica.page').then(m => m.BonificaPage),
    data: { title: 'Bonifica dei siti contaminati' }
  },
  {
    path: 'temi/campi-elettromagnetici',
    loadComponent: () => import('./temi/campi-elettromagnetici/campi-elettromagnetici.page').then(m => m.CampiElettromagneticiPage),
    data: { title: 'Campi elettromagnetici' }
  },
  {
    path: 'temi/certificazioni',
    loadComponent: () => import('./temi/certificazioni/certificazioni.page').then(m => m.CertificazioniPage),
    data: { title: 'Certificazioni ambientali' }
  },
  {
    path: 'temi/educazione',
    loadComponent: () => import('./temi/educazione/educazione.page').then(m => m.EducazionePage),
    data: { title: 'Educazione Ambientale' }
  },
  {
    path: 'temi/energia',
    loadComponent: () => import('./temi/energia/energia.page').then(m => m.EnergiaPage),
    data: { title: 'Energia' }
  },
  {
    path: 'temi/radioattivita',
    loadComponent: () => import('./temi/radioattivita/radioattivita.page').then(m => m.RadioattivitaPage),
    data: { title: 'Radioattività' }
  },
  {
    path: 'temi/rifiuti',
    loadComponent: () => import('./temi/rifiuti/rifiuti.page').then(m => m.RifiutiPage),
    data: { title: 'Rifiuti ed Economia Circolare' }
  },
  {
    path: 'temi/rischio-tecnologico',
    loadComponent: () => import('./temi/rischio-tecnologico/rischio-tecnologico.page').then(m => m.RischioTecnologicoPage),
    data: { title: 'Rischio Tecnologico' }
  },
  {
    path: 'temi/rumore',
    loadComponent: () => import('./temi/rumore/rumore.page').then(m => m.RumorePage),
    data: { title: 'Rumore' }

  },
  {
    path: 'temi/suolo',
    loadComponent: () => import('./temi/suolo/suolo.page').then(m => m.SuoloPage),
    data: { title: 'Suolo' }
  },
  {
    path: 'temi/sviluppo-sostenibile',
    loadComponent: () => import('./temi/sviluppo-sostenibile/sviluppo-sostenibile.page').then(m => m.SviluppoSostenibilePage),
    data: { title: 'Sviluppo sostenibile' }
  },
  {
    path: 'temi/vas',
    loadComponent: () => import('./temi/vas/vas.page').then(m => m.VasPage),
    data: { title: 'VAS - Valutazione ambientale strategica' }
  },
  {
    path: 'temi/via',
    loadComponent: () => import('./temi/via/via.page').then(m => m.ViaPage),
    data: { title: 'VIA' }
  },
  {
    path: 'rivista-micron',
    loadComponent: () => import('./pubblicazioni/rivista-micron/rivista-micron.page').then(m => m.RivistaMicronPage),
    data: { title: 'Rivista micron' }
  },
  {
    path: 'acqua',
    loadComponent: () => import('./pubblicazioni/acqua/acqua.page').then(m => m.AcquaPage),
    data: { title: 'Aqua' }
  },
  {
    path: 'aria',
    loadComponent: () => import('./pubblicazioni/aria/aria.page').then(m => m.AriaPage),
    data: { title: 'Aria' }
  },
  {
    path: 'campi-elettromagnetici',
    loadComponent: () => import('./pubblicazioni/campi-elettromagnetici/campi-elettromagnetici.page').then(m => m.CampiElettromagneticiPage),
    data: { title: 'Campi elettromagnetici' }
  },
  {
    path: 'radioattivita',
    loadComponent: () => import('./pubblicazioni/radioattivita/radioattivita.page').then(m => m.RadioattivitaPage),
    data: { title: 'Radioattività' }
  },
  {
    path: 'rifiuti',
    loadComponent: () => import('./pubblicazioni/rifiuti/rifiuti.page').then(m => m.RifiutiPage),
    data: { title: 'Rifiuti' }
  },
  {
    path: 'rischio-tecnologico',
    loadComponent: () => import('./pubblicazioni/rischio-tecnologico/rischio-tecnologico.page').then(m => m.RischioTecnologicoPage),
    data: { title: 'Rischio tecnologico' }
  },
  {
    path: 'rumore',
    loadComponent: () => import('./pubblicazioni/rumore/rumore.page').then(m => m.RumorePage),
    data: { title: 'Rumore' }
  },
  {
    path: 'suolo',
    loadComponent: () => import('./pubblicazioni/suolo/suolo.page').then(m => m.SuoloPage),
    data: { title: 'Suolo' }
  },
  {
    path: 'biodiversita',
    loadComponent: () => import('./pubblicazioni/biodiversita/biodiversita.page').then(m => m.BiodiversitaPage),
    data: { title: 'Biodiversità' }
  },
  {
    path: 'su-piu-temi',
    loadComponent: () => import('./pubblicazioni/su-piu-temi/su-piu-temi.page').then(m => m.SuPiuTemiPage),
    data: { title: 'Su più temi' }
  },
  {
    path: 'newsletter',
    loadComponent: () => import('./pubblicazioni/newsletter/newsletter.page').then(m => m.NewsletterPage),
    data: { title: 'Newsletter' }
  },


  {
    path: 'lista-semi', // Ruta de nivel superior para la página de la lista
    loadComponent: () => import('./semi/lista-semi/lista-semi.page').then(m => m.ListaSemiPage),
    data: { title: 'Banca del germoplasma' }
  },
  {
    path: 'mappa-semi', // Ruta de nivel superior para la página del mapa
    loadComponent: () => import('./semi/mappa-semi/mappa-semi.page').then(m => m.MappaSemiPage),
    data: { title: 'Banca del germoplasma' }
  },
  {
    path: 'dettagli-semi/:id', // Ruta de nivel superior para la página de detalles
    loadComponent: () => import('./semi/dettagli-semi/dettagli-semi.page').then(m => m.DettagliSemiPage),
    data: { title: 'Banca del germoplasma' }
  },
 
  {
    path: 'ricette',
    loadComponent: () => import('./ricette/ricette.page').then( m => m.RicettePage)
  },
  {
    path: 'profilo',
    loadComponent: () => import('./profilo/profilo.page').then( m => m.ProfiloPage)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }