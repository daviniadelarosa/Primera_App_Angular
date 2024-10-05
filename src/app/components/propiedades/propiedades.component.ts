import { Component } from '@angular/core';

@Component({
  selector: 'propiedades',
  standalone: true,
  imports: [],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PropiedadesComponent {

  idParrafo: string = 'parrafoPpal';
  inputType: string = 'password';
  imagenes: string[] = [
    'https://occ-0-114-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABRI_reWj27KITozYjsJAMlO_OJdbysADBH1KAbHdRFYx2J2kt6VxQjXn26wd0qhbuzyvfiovU86ILMvH45-_A8qDjzW9_71IewchOGppzIioyaKDqXmAbOBV.jpg',
    'https://occ-0-114-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABZM08nLJLM-ZXEQH-p_4DzUC584qVuuRfrE8RYVpt_3iIdDjDoLtIsBa15ZV2Ds9-k6zUUDQZGSpvvj6u_7Sfe54qv-0k396soCthHGS2bUqXdZqSnXp4_P5.jpg',
    'https://occ-0-114-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABSz0jGjjv1fL7X-pYfIur_pgoEvjbJq9Slp-igXcbt5bWNNIlF2GeV0ENFBjlavnD5gQNq2VvqbARRErHCqxnjJwNy6oN0RtBhyVqc99YgFoC9ECDBXCm_Cb.jpg',
    'https://occ-0-114-116.1.nflxso.net/dnm/api/v6/9pS1daC2n6UGc3dUogvWIPMR_OU/AAAABfXwNOyCg05kOdAumJl9vWo46fhryiOXfqJEQDTYfNV81atlW360_cH85bTbzONg-v9yHl_PN76WYYNicz0tLdSy6rPIbXwF33hp62AZKC1NFiAPmjUO_JWdew.jpg'
  ];
  cont: number = 0;

  ngOnInit() {
    // Se ejecuta en la inicialización del componente
    setTimeout(() => this.idParrafo = 'otroIdentificador', 3000);

    setInterval(() => {
      this.inputType = this.inputType === 'password' ? 'text' : 'password';
    }, 3000);

    setInterval(() => {
      this.cont++;
      if (this.cont === this.imagenes.length) {
        this.cont = 0;
      }
    }, 2000);
  }

}
