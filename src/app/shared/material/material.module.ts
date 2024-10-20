import { NgModule } from "@angular/core";
import { MATERIAL_MODULES } from "./material-imports";

@NgModule({
    imports:[MATERIAL_MODULES],
    exports:[MATERIAL_MODULES]
})
export class MaterialModule {
}
