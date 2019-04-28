import { NgModule, Optional, SkipSelf } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { throwIfAlreadyLoaded } from '@cloudtime/utils';
import { CtmCoreModule } from '@cloudtime/web';

@NgModule({
  imports: [CtmCoreModule, IonicModule.forRoot()]
})
export class CtmIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CtmIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CtmIonicCoreModule');
  }
}
