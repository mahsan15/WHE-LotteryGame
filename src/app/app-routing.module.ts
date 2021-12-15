import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [{path: '', component: GameComponent},
                        {path: 'ticket', component: TicketComponent },
                        {path: 'game', component: GameComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TicketComponent, GameComponent]
