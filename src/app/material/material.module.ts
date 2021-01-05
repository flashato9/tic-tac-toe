import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents = [
  MatGridListModule,
  MatButtonModule,
  MatCardModule
]
@NgModule({
  declarations: [],
  imports: [MaterialComponents ],
  exports:[MaterialComponents ] 
})
export class MaterialModule { }
