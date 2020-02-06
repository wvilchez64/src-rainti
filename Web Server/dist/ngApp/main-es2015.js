(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"padding: 80px 0px 0px 0px; padding-block-end: 80px; background-image:url('../assets/images/blue-circuit.jpg');\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-white shadow fixed-top\" *ngIf=\"_authService.loggedIn()\">\r\n    \r\n    <a class=\"navbar-brand\" routerLink=\"/principal\" routerLinkActive=\"active\"><img src=\"../assets/images/logo.png\" class=\"img-reponsive\"></a>\r\n      \r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    \r\n    <div class=\"collapse navbar-collapse\"  id=\"navbarSupportedContent\">\r\n      <ul class=\"nav navbar-nav mr-auto\" >\r\n        <div class= \"row justify-content-lg align-items-center\" *ngIf=\"_authService.loggedIn()\">       \r\n          <li class=\"dropdown px-3\"  >\r\n            <a class=\"nav-link\" class=\"dropdown-toggle\" style=\"cursor:pointer\" data-toggle=\"dropdown\" routerLinkActive=\"active\"> Registro de Contratos\r\n            <span class=\"caret\"></span></a>\r\n              <ul class=\"dropdown-menu\"  >\r\n                <li >\r\n                  <a class=\"nav-link px-2 text-dark\" routerLink=\"/contratos\" routerLinkActive=\"active\">Consultar</a>\r\n                  <a class=\"nav-link px-2 text-dark\" routerLink=\"/registrar-contrato\" routerLinkActive=\"active\">Adicionar</a>\r\n                </li>\r\n                <!-- <li *ngFor=\"let entityType of entityTypes\"> \r\n                  <a class=\"nav-link px-2 text-dark\" routerLink=\"/{{entityType.name.toLocaleLowerCase()}}\" routerLinkActive=\"active\" >{{entityType.name}}</a>\r\n                </li> -->\r\n              </ul>\r\n          </li>     \r\n          \r\n          <li class=\"px-3\">\r\n            <div class=\"dropdown\">\r\n              <a class=\"dropdown-toggle\" style=\"cursor:pointer\" data-toggle=\"dropdown\" routerLinkActive=\"active\"> Instituições\r\n                <span class=\"caret\"></span></a>\r\n                <ul class=\"dropdown-menu multi-level\" role=\"menu\" aria-labelledby=\"dropdownMenu\">\r\n                    <li class=\"dropdown-submenu\">\r\n                      <a  class=\"dropdown-item\" tabindex=\"-1\">Detrans</a>\r\n                      <ul class=\"dropdown-menu\">\r\n                        <a class=\"nav-link px-2 text-dark\" routerLink=\"/detran\" routerLinkActive=\"active\">Consultar</a>\r\n                        <a class=\"nav-link px-2 text-dark\" style=\"cursor:pointer\" (click)=\"checkDetranAvaiability(content)\">Adicionar</a>                         \r\n                      </ul>\r\n                    </li>\r\n                    <li class=\"dropdown-submenu\">\r\n                      <a  class=\"dropdown-item\" tabindex=\"-1\">Credoras</a>\r\n                      <ul class=\"dropdown-menu\">\r\n                        <a class=\"nav-link px-2 text-dark\" routerLink=\"/credora\" routerLinkActive=\"active\">Consultar</a>\r\n                        <a class=\"nav-link px-2 text-dark\" routerLink=\"/credor-adicionar\" routerLinkActive=\"active\">Adicionar</a>\r\n                      </ul>\r\n                    </li>                     \r\n                    <li class=\"dropdown-submenu\">\r\n                      <a  class=\"dropdown-item\" tabindex=\"-1\">Gestoras</a>\r\n                      <ul class=\"dropdown-menu\">\r\n                        <a class=\"nav-link px-2 text-dark\" routerLink=\"/gestora\" routerLinkActive=\"active\">Consultar</a>\r\n                        <a class=\"nav-link px-2 text-dark\" routerLink=\"/gestor-adicionar\" routerLinkActive=\"active\">Adicionar</a>                      \r\n                      </ul>\r\n                    </li>  \r\n                  </ul>\r\n            </div>\r\n          </li>\r\n          <li class=\"px-3\">\r\n            <div class=\"dropdown\">\r\n              <a class=\"dropdown-toggle\" style=\"cursor:pointer\" data-toggle=\"dropdown\" routerLinkActive=\"active\"> Administração\r\n                <span class=\"caret\"></span></a>\r\n                <ul class=\"dropdown-menu multi-level\" role=\"menu\" aria-labelledby=\"dropdownMenu\">\r\n                    <li class=\"dropdown-submenu\">\r\n                      <a  class=\"dropdown-item\" tabindex=\"-1\">Usuários</a>\r\n                      <ul class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item\" routerLink=\"/usuarios\" routerLinkActive=\"active\" >Consultar</a>\r\n                        <a class=\"dropdown-item\" routerLink=\"/usuarios-adicionar\" routerLinkActive=\"active\" >Adcionar</a>                         \r\n                      </ul>\r\n                    </li>\r\n                    <li class=\"dropdown-submenu\">\r\n                      <a  class=\"dropdown-item\" tabindex=\"-1\">Grupos</a>\r\n                      <ul class=\"dropdown-menu\">\r\n                        <a class=\"dropdown-item\" routerLink=\"/grupos\" routerLinkActive=\"active\" >Consultar</a>\r\n                        <a class=\"dropdown-item\" routerLink=\"/grupos-adicionar\" routerLinkActive=\"active\" >Adicionar</a>                          \r\n                      </ul>\r\n                    </li>                     \r\n                  </ul>\r\n            </div>\r\n          </li>\r\n          <li class=\"dropdown px-3\">\r\n            <a class=\"dropdown-toggle\" style=\"cursor:pointer\" data-toggle=\"dropdown\" routerLinkActive=\"active\"> Relatórios\r\n            <span class=\"caret\"></span></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li>\r\n                  <a class=\"nav-link px-2 text-dark\" routerLink=\"/bilhetagem-transacoes\" routerLinkActive=\"active\" >Bilhetagem de transações</a>\r\n                  <a class=\"nav-link px-2 text-dark\" routerLink=\"/transacoes-financeiras\" routerLinkActive=\"active\" >Transações financeira</a>\r\n                </li>\r\n              </ul>\r\n          </li>  \r\n          <li class=\"dropdown px-3\">\r\n            <a class=\"dropdown-toggle\" style=\"cursor:pointer\" data-toggle=\"dropdown\" routerLinkActive=\"active\"> Auditoria\r\n            <span class=\"caret\"></span></a>\r\n              <ul class=\"dropdown-menu\">\r\n                <li>\r\n                    <a class=\"nav-link px-2 text-dark\" routerLink=\"/historico-transacao\" routerLinkActive=\"active\" >Histórico de auditoria</a>\r\n                    <a class=\"nav-link px-2 text-dark\" routerLink=\"\" routerLinkActive=\"active\" >Consulta de Acesso</a>\r\n                </li>\r\n              </ul>\r\n            </li>\r\n      </div>   \r\n    </ul> \r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n          <a class=\"nav-link\" style=\"cursor:pointer\" *ngIf=\"_authService.loggedIn()\" >Perfil</a>\r\n          <a class=\"nav-link\" style=\"cursor:pointer\" *ngIf=\"_authService.loggedIn()\" (click)=\"_authService.logoutUser()\">Sair</a>\r\n      </ul> \r\n    </div>\r\n  </nav>  \r\n  \r\n  <ng-template  #content let-modal>\r\n    \r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"modal-basic-title\">Aviso</h4>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n          <div class=\"form-group\">\r\n            <label for=\"dateOfBirth\">Todos os Detrans já foram cadastrados.</label>\r\n          </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-rainti\" (click)=\"modal.close()\">OK</button>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n  \r\n  <nav class=\"navbar-sm fixed-bottom \" >\r\n      <div class=\"col\" style=\"padding-top: 5px;\" >\r\n        \r\n        <h6  class=\"text-center text-light font-weight-lighter\" >© 2019 - RainTI Tecnologia e Sistemas de Informação LTDA <br> Rua Paulino Corado, 20, Jardim Santa Teresa - Jundiaí/SP - Todos os direitos reservados.</h6>\r\n      </div> \r\n  </nav>\r\n  \r\n  <div class=\"container\" style=\"height: 820px; white-space: nowrap;\">\r\n    \r\n    <router-outlet ></router-outlet>  \r\n             \r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract/contract-add/contract-add.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contract/contract-add/contract-add.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <div class=\"col-md-8 mx-auto\">\r\n        <span class=\"anchor\" id=\"formLogin\"></span>\r\n        <div class=\"card shadow\" >\r\n            <div class=\"card-body \" >\r\n                <h4 class=\"card-title mb-4 mt-1\">Registro de contrato</h4>\r\n                <hr/>                    \r\n                <nav>\r\n                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                        <a class=\"nav-item nav-link active\" id=\"nav-credor-tab\" data-toggle=\"tab\" href=\"#nav-credor\" [ngClass]=\"{'active':_activeTab==='nav-credor'}\" (click)=\"nextTab('nav-credor')\" role=\"tab\" aria-controls=\"nav-credor\" aria-selected=\"true\">Credor</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-veiculo-tab\" data-toggle=\"tab\" href=\"#nav-veiculo\" [ngClass]=\"{'active':_activeTab==='nav-veiculo'}\" (click)=\"nextTab('nav-veiculo')\" role=\"tab\" aria-controls=\"nav-veiculo\" aria-selected=\"false\">Veículo</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-devedor-tab\" data-toggle=\"tab\" href=\"#nav-devedor\" [ngClass]=\"{'active':_activeTab==='nav-devedor'}\" (click)=\"nextTab('nav-devedor')\" role=\"tab\" aria-controls=\"nav-devedor\" aria-selected=\"false\">Devedor</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-garantidor-tab\" data-toggle=\"tab\" href=\"#nav-garantidor\" [ngClass]=\"{'active':_activeTab==='nav-garantidor'}\" (click)=\"nextTab('nav-garantidor')\" role=\"tab\" aria-controls=\"nav-garantidor\" aria-selected=\"false\">Garantidor</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-contrato-tab\" data-toggle=\"tab\" href=\"#nav-contrato\" [ngClass]=\"{'active':_activeTab==='nav-contrato'}\" (click)=\"nextTab('nav-contrato')\" role=\"tab\" aria-controls=\"nav-contrato\" aria-selected=\"false\">Contrato </a>\r\n                    </div>\r\n                </nav>\r\n                \r\n                <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                    <div [ngClass]=\"{'show active':_activeTab==='nav-credor'}\" class=\"tab-pane fade\" id=\"nav-credor\" role=\"tabpanel\" aria-labelledby=\"nav-credor-tab\"> <br>\r\n                        <form class=\"form\" #entitiesForm=\"ngForm\">\r\n                            <div class=\"form-group\">                                        \r\n                                <div class=\"col\">\r\n                                    <label for=\"uname1\">Detran</label>\r\n                                </div>                                    \r\n                                <div class=\"col\" *ngIf=\"!_detransLoad\">                                        \r\n                                    <select class=\"custom-select\" #detran=\"ngModel\" [class.is-invalid]=\"detransHasError && detran.touched\"\r\n                                    name=\"detran\" [(ngModel)]=\"contractData.detran\" (change)=\"validateDetrans(detran.value)\" (blur)=\"validateDetrans(detran.value)\">                            \r\n                                        <option value=\"default\">--Escolha um Detran</option>\r\n                                        <option *ngFor=\"let detran of _detrans\">{{ detran.description}}</option>\r\n                                    </select>\r\n                                    <small class=\"text-danger\" [class.d-none]=\"!detransHasError || detran.untouched\">Escolha um Detran</small>\r\n                                </div>                                    \r\n                                    <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_detransLoad\">\r\n                                    <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                </div>   \r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                    <div class=\"col\">\r\n                                        <label for=\"uname1\">Credora</label>\r\n                                    </div>\r\n                                    <div class=\"col\" *ngIf=\"!_creditorsLoad\">\r\n                                        <select class=\"custom-select\" #creditor=\"ngModel\" [class.is-invalid]=\"creditorsHasError && creditor.touched\"\r\n                                        name=\"creditor\" [(ngModel)]=\"contractData.creditor\" (change)=\"validateCreditors(creditor.value)\" (blur)=\"validateCreditors(creditor.value)\">                            \r\n                                            <option value=\"default\">--Escolha uma credora</option>\r\n                                            <option *ngFor=\"let creditor of _creditors\">{{ creditor.description }}</option>\r\n                                        </select>\r\n                                        <small class=\"text-danger\" [class.d-none]=\"!creditorsHasError || creditor.untouched\">Escolha uma credora</small>\r\n                                    </div>           \r\n                                    \r\n                                    <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_creditorsLoad\">\r\n                                        <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                    </div>      \r\n                            </div>\r\n                            <hr/>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6\"> \r\n                                        <button class=\"btn btn-info btn-block\" routerLink=\"/contratos\">Cancelar</button>\r\n                                    </div>\r\n                                    <div class=\"col-sm-6\">      \r\n                                        <button type=\"submit\" [ngClass]=\"{'active':_activeTab==='nav-contrato'}\" (click)=\"nextTab('nav-veiculo')\" class=\"btn btn-rainti btn-block\"> Próximo </button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <div [ngClass]=\"{'show active':_activeTab==='nav-veiculo'}\" class=\"tab-pane fade\" id=\"nav-veiculo\" role=\"tabpanel\" aria-labelledby=\"nav-veiculo-tab\"><br>\r\n                        <form class=\"form\" #vehicleForm=\"ngForm\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Chassi</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.chassi\" name=\"chassi\"  class=\"form-control rounded-0\" \r\n                                    pattern=\"^([A-HJ-NPR-Za-hj-npr-z\\d]{13})\\d{4}$\" \r\n                                    [class.is-invalid]=\"chassi.invalid && chassi.touched\" #chassi=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"chassi.valid || chassi.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"chassi.errors && chassi.errors.required\">\r\n                                            Chassi obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"chassi.errors && chassi.errors.pattern\">\r\n                                            Chassi inválido (Formato: AAAAAAAAAAAAANNNN)\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"uname1\">Confirme o chassi</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.chassiConfirmation\" name=\"chassiConfirmation\" class=\"form-control rounded-0\" \r\n                                    pattern=\"^([A-HJ-NPR-Za-hj-npr-z\\d]{13})\\d{4}$\" \r\n                                    [class.is-invalid]=\"chassiConfirmation.invalid && chassiConfirmation.touched\" #chassiConfirmation=\"ngModel\" \r\n                                    appConfirmEqualValidator=\"chassi\"required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"chassiConfirmation.valid || chassiConfirmation.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"chassiConfirmation.errors && chassiConfirmation.errors.required\">\r\n                                            confirmação de chassi obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"chassiConfirmation.errors && chassiConfirmation.errors.pattern\">\r\n                                            Chassi inválido (Formato: AAAAAAAAAAAAANNNN)\r\n                                        </small>\r\n                                    </div>\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"chassiConfirmation.valid || chassiConfirmation.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"chassiConfirmation.errors && chassiConfirmation.errors?.notEqual\">\r\n                                            confirmação de chassi incorreto\r\n                                        </small>\r\n                                    </div>\r\n                                </div>  \r\n                            </div>                            \r\n                            <div class=\"row\">   \r\n                                <div class=\"form-group col-sm-6\" > \r\n                                    <label for=\"uname1 \">Chassi Remarcado</label> <br>                                                                               \r\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\r\n                                        <input type=\"radio\" id=\"customRadioInlinechassi1\" name=\"customRadioInlinechassi\" class=\"custom-control-input\" (click)=\"chassiSelect('NÃO')\" checked>\r\n                                        <label class=\"custom-control-label\" for=\"customRadioInlinechassi1\">Não</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\r\n                                        <input type=\"radio\" id=\"customRadioInlinechassi2\" name=\"customRadioInlinechassi\" class=\"custom-control-input\" (click)=\"chassiSelect('SIM')\">\r\n                                        <label class=\"custom-control-label\" for=\"customRadioInlinechassi2\">Sim</label>\r\n                                    </div>   \r\n                                </div>                               \r\n                                <div class=\"form-group col-sm-3\">\r\n                                    <label for=\"uname1\">Placa </label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.plate\" name=\"plate\"  class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"plate.invalid && plate.touched\" #plate=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"plate.valid || plate.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"plate.errors && plate.errors.required\">\r\n                                            Placa obrigatória\r\n                                        </small>\r\n                                    </div>   \r\n                                </div>\r\n                                <div class=\"form-group col-sm-3\">\r\n                                    <label for=\"uname1\">UF da placa</label><br>\r\n                                    <div *ngIf=\"_statesLoad\">\r\n                                        <span  role=\"status\" aria-hidden=\"true\"></span>\r\n                                    </div>\r\n                                    <select class=\"custom-select\" #plateState=\"ngModel\" [class.is-invalid]=\"plateStatesHasError && plateState.touched\"\r\n                                        name=\"plateState\" [(ngModel)]=\"contractData.plateState\" (change)=\"validatePlateStates(plateState.value)\" (blur)=\"validatePlateStates(plateState.value, plateState)\">                            \r\n                                        <option value=\"default\">--Escolha uma UF</option>\r\n                                        <option *ngFor=\"let state of _plateStates\">{{ state.description }}</option>\r\n                                    </select>\r\n                                    <small class=\"text-danger\" [class.d-none]=\"!plateStatesHasError || plateState.untouched\">Escolha uma UF</small>\r\n                                </div>    \r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Renavan</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.renavam\" name=\"renavam\"  class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"renavam.invalid && renavam.touched\" #renavam=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"renavam.valid || renavam.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"renavam.errors && renavam.errors.required\">\r\n                                            Renavan obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"uname1\">UF Licenciamento</label><br>\r\n                                    <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_statesLoad\">\r\n                                        <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                    </div>\r\n                                    <select class=\"custom-select\" #licensingState=\"ngModel\" [class.is-invalid]=\"licensingStatesHasError && licensingState.touched\"\r\n                                        name=\"licensingState\" [(ngModel)]=\"contractData.licensingState\" (change)=\"validateLicensingStates(licensingState.value)\" (blur)=\"validateLicensingStates(licensingState.value, licensingState)\">                            \r\n                                        <option value=\"default\">--Escolha uma UF</option>\r\n                                        <option *ngFor=\"let state of _licensingStates\">{{ state.description }}</option>\r\n                                    </select>\r\n                                    <small class=\"text-danger\" [class.d-none]=\"!licensingStatesHasError || licensingState.untouched\">Escolha uma UF</small>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Espécie</label><br>\r\n                                    <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_speciesLoad\">\r\n                                        <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                    </div>\r\n                                    <select class=\"custom-select\" #specie=\"ngModel\" [class.is-invalid]=\"speciesHasError && specie.touched\"\r\n                                        name=\"specie\" [(ngModel)]=\"contractData.specie\" (change)=\"validateSpecies(specie.value)\" (blur)=\"validateSpecies(specie.value)\">                            \r\n                                        <option value=\"default\">--Escolha uma espécie</option>\r\n                                        <option *ngFor=\"let specie of _species\">{{ specie.description }}</option>\r\n                                    </select>\r\n                                    <small class=\"text-danger\" [class.d-none]=\"!speciesHasError || specie.untouched\">Escolha uma espécie</small>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"uname1\">Ano de Fabricação</label> <br>\r\n                                    <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_yearsLoad\">\r\n                                        <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                    </div>\r\n                                    <select class=\"custom-select\" #fabricationYear=\"ngModel\" [class.is-invalid]=\"fabricationYearsHasError && fabricationYear.touched\"\r\n                                        name=\"fabricationYear\" [(ngModel)]=\"contractData.fabricationYear\" (change)=\"validateFabricationYears(fabricationYear.value)\" (blur)=\"validateFabricationYears(fabricationYear.value)\">                            \r\n                                        <option value=\"default\">--Escolha um Ano</option>\r\n                                        <option *ngFor=\"let year of _fabricationYears\">{{ year.description }}</option>\r\n                                    </select>\r\n                                    <small class=\"text-danger\" [class.d-none]=\"!fabricationYearsHasError || fabricationYear.untouched\">Escolha um Ano</small>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Marca </label><br>\r\n                                    <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_brandsLoad\">\r\n                                        <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                    </div>\r\n                                    <select class=\"custom-select\" #brand=\"ngModel\" [class.is-invalid]=\"brandsHasError && brand.touched\"\r\n                                        name=\"brand\" [(ngModel)]=\"contractData.brand\" (change)=\"validateBrands($event, brand.value)\" (blur)=\"validateBrands($event, brand.value)\">                            \r\n                                        <option value=\"default\">--Escolha uma marca  </option>\r\n                                        <option *ngFor=\"let brand of _brands\" >{{ brand.description }}</option>\r\n                                    </select>\r\n                                    <small class=\"text-danger\" [class.d-none]=\"!brandsHasError || brand.untouched\">Escolha uma marca </small>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"uname1\">Modelo  </label><br>\r\n                                    <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_modelsLoad\">\r\n                                        <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                    </div>\r\n                                        <select class=\"custom-select\" #model=\"ngModel\" [class.is-invalid]=\"modelsHasError && model.touched\"\r\n                                        name=\"model\" [(ngModel)]=\"contractData.model\" (change)=\"validateModels($event, model.value)\" (blur)=\"validateModels($event, model.value)\">                            \r\n                                        <option value=\"default\">--Escolha um modelo  </option>\r\n                                        <option *ngFor=\"let model of _models\">{{ model.description}}</option>\r\n                                    </select>\r\n                                    <small class=\"text-danger\" [class.d-none]=\"!modelsHasError || model.untouched\">Escolha um modelo </small>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Ano do modelo</label><br>\r\n                                    <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_modelYearsLoad\">\r\n                                        <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                    </div>\r\n                                    <select class=\"custom-select\" #modelYear=\"ngModel\" [class.is-invalid]=\"modelYearsHasError && modelYear.touched\"\r\n                                        name=\"modelYear\" [(ngModel)]=\"contractData.modelYear\" (change)=\"validateModelYears(modelYear.value, $event)\" (blur)=\"validateModelYears(modelYear.value, modelYear)\">                            \r\n                                        <option value=\"default\">--Escolha um Ano</option>\r\n                                        <option *ngFor=\"let year of _modelYears\">{{ year.description }}</option>\r\n                                    </select>\r\n                                    <small class=\"text-danger\" [class.d-none]=\"!modelYearsHasError || modelYear.untouched\">Escolha um Ano</small>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"uname1\">Cor</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.color\" name=\"color\"  class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"color.invalid && color.touched\" #color=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"color.valid || color.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"color.errors && color.errors.required\">\r\n                                            Cor obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <button type=\"submit\" [ngClass]=\"{'active':_activeTab==='nav-veiculo'}\" (click)=\"nextTab('nav-credor')\" class=\"btn btn-info btn-block\" >Anterior</button>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">      \r\n                                    <button type=\"submit\" [ngClass]=\"{'active':_activeTab==='nav-veiculo'}\" (click)=\"nextTab('nav-devedor')\" class=\"btn btn-rainti btn-block\" >Próximo </button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <div [ngClass]=\"{'show active':_activeTab==='nav-devedor'}\" class=\"tab-pane fade\" id=\"nav-devedor\" role=\"tabpanel\" aria-labelledby=\"nav-devedor-tab\"><br>\r\n                        <form class=\"form\" #buyerForm=\"ngForm\">\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-xl\">\r\n                                    <label for=\"uname1\">Nome completo</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.buyerName\" name=\"buyerName\"  class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"buyerName.invalid && buyerName.touched\" #buyerName=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"buyerName.valid || buyerName.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerName.errors && buyerName.errors.required\">\r\n                                            Nome completo obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                            </div> \r\n                            <div class=\"row\">       \r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">E-mail</label>\r\n                                    <input #buyerEmail=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                                    [(ngModel)]=\"contractData.buyerEmail\" name=\"buyerEmail\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"buyerEmail.invalid && buyerEmail.touched\" required>\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"buyerEmail.valid || buyerEmail.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerEmail.errors && buyerEmail.errors.required\">\r\n                                            e-mail obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"buyerEmail.errors && buyerEmail.errors.pattern\">\r\n                                            e-mail inválido\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-sm-6 d-inline-block\"> \r\n                                    <div class=\" p-1 text-center\">                                \r\n                                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                                            <input type=\"radio\" id=\"customRadioInlinebuyer1\" name=\"customRadioInlinebuyer\" class=\"custom-control-input\" (click)=\"cpfCnpjSelect('buyer', 'cpf')\" checked>\r\n                                            <label class=\"custom-control-label\" for=\"customRadioInlinebuyer1\">CPF</label>\r\n                                        </div>\r\n                                        <div class=\"custom-control custom-radio custom-control-inline\">\r\n                                            <input type=\"radio\" id=\"customRadioInlinebuyer2\" name=\"customRadioInlinebuyer\" class=\"custom-control-input\" (click)=\"cpfCnpjSelect('buyer', 'cnpj')\">\r\n                                            <label class=\"custom-control-label\" for=\"customRadioInlinebuyer2\">CNPJ</label>\r\n                                        </div>                        \r\n                                    </div>     \r\n                                    <div *ngIf=\"_buyerType=='cpf'\" >\r\n                                        <input Value=\"text\" [(ngModel)]=\"contractData.buyerValue\" name=\"buyerValue\" class=\"form-control rounded-0\" \r\n                                        pattern=\"^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$\" placeHolder=\"123.123.123-12\"\r\n                                        [class.is-invalid]=\"buyerValue.invalid && buyerValue.touched\" #buyerValue=\"ngModel\" required >\r\n                                        <div class=\"md-errors-spacer\" [hidden]=\"buyerValue.valid || buyerValue.untouched\">\r\n                                            <small  class=\"text-danger\"*ngIf=\"buyerValue.errors && buyerValue.errors.required\">\r\n                                                CPF obrigatório \r\n                                            </small>\r\n                                            <small  class=\"text-danger\" *ngIf=\"buyerValue.errors && buyerValue.errors.pattern\">\r\n                                                CPF inválido (Ex.: 123.123.123-12)\r\n                                            </small>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"_buyerType=='cnpj'\" >\r\n                                        <input type=\"text\" [(ngModel)]=\"contractData.buyerValue\" name=\"buyerValue\" class=\"form-control rounded-0\" \r\n                                        pattern=\"^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}(-\\d{2})$\" placeHolder=\"12.123.123/0001-12\"\r\n                                        [class.is-invalid]=\"buyerValue.invalid && buyerValue.touched\" #buyerValue=\"ngModel\" required >\r\n                                        <div class=\"md-errors-spacer\" [hidden]=\"buyerValue.valid || buyerValue.untouched\">\r\n                                            <small  class=\"text-danger\"*ngIf=\"buyerValue.errors && buyerValue.errors.required\">\r\n                                                CNPJ obrigatório \r\n                                            </small>\r\n                                            <small  class=\"text-danger\" *ngIf=\"buyerValue.errors && buyerValue.errors.pattern\">\r\n                                                CNPJ inválido (Ex.: 12.123.123/0001-12)\r\n                                            </small>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-2\">\r\n                                    <label for=\"uname1\">DDD</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                    placeHolder=\"11\"\r\n                                    [(ngModel)]=\"contractData.buyerDddPhone\" name=\"buyerDddPhone\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"buyerDddPhone.invalid && buyerDddPhone.touched\" #buyerDddPhone=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"buyerDddPhone.valid || buyerDddPhone.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerDddPhone.errors && buyerDddPhone.errors.required\">\r\n                                            DDD obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"(buyerDddPhone.errors && buyerDddPhone.errors.pattern) || ddHasError\">\r\n                                            DDD inválido\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-sm-4\">\r\n                                    <label for=\"uname1\">Telefone</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                    placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                    [(ngModel)]=\"contractData.buyerPhone\" name=\"buyerPhone\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"buyerPhone.invalid && buyerPhone.touched\" #buyerPhone=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"buyerPhone.valid || buyerPhone.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerPhone.errors && buyerPhone.errors.required\">\r\n                                            Telefone obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerPhone.errors && buyerPhone.errors.pattern\">\r\n                                            Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-sm-2\">\r\n                                    <label for=\"uname1\">DDD</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                    placeHolder=\"11\"\r\n                                    [(ngModel)]=\"contractData.buyerDddMobile\" name=\"buyerDddMobile\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"buyerDddMobile.invalid && buyerDddMobile.touched\" #buyerDddMobile=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"buyerDddMobile.valid || buyerDddMobile.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerDddMobile.errors && buyerDddMobile.errors.required\">\r\n                                            DDD obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"(buyerDddMobile.errors && buyerDddMobile.errors.pattern) || ddHasError\">\r\n                                            DDD inválido\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-sm-4\">   \r\n                                    <label for=\"uname1\">Celular</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                    placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                    [(ngModel)]=\"contractData.buyerMobile\" name=\"buyerMobile\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"buyerMobile.invalid && buyerMobile.touched\" #buyerMobile=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"buyerMobile.valid || buyerMobile.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerMobile.errors && buyerMobile.errors.required\">\r\n                                            Celular obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerMobile.errors && buyerMobile.errors.pattern\">\r\n                                            Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Cep</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.buyerZipCode\" name=\"buyerZipCode\"  class=\"form-control rounded-0\" \r\n                                    pattern=\"^([0-9]{5})(-)([0-9]{3})$\" placeHolder=\"12345-678\"\r\n                                    [class.is-invalid]=\"buyerZipCode.invalid && buyerZipCode.touched\" #buyerZipCode=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"buyerZipCode.valid || buyerZipCode.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerZipCode.errors && buyerZipCode.errors.required\">\r\n                                            Cep obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"buyerZipCode.errors && buyerZipCode.errors.pattern\">\r\n                                            Cep inválido (Ex.: 12345-678)\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Estado</label><br>\r\n                                    <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_statesLoad\">\r\n                                        <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                    </div>\r\n                                    <select class=\"custom-select\" #buyerState=\"ngModel\" [class.is-invalid]=\"buyerStatesHasError && buyerState.touched\" \r\n                                    name=\"buyerState\" [(ngModel)]=\"contractData.buyerState\" (change)=\"validateBuyerStates(buyerState.value)\" (blur)=\"validateBuyerStates(buyerState.value)\">                            \r\n                                        <option value=\"default\">--Escolha um Estado</option>\r\n                                        <option *ngFor=\"let state of _buyerStates\">{{ state.description }}</option>\r\n                                    </select>\r\n                                    <small class=\"text-danger\" [class.d-none]=\"!buyerStatesHasError || buyerState.untouched\">Escolha um Estado</small>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Município</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.buyerCounty\" name=\"buyerCounty\"  class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"buyerCounty.invalid && buyerCounty.touched\" #buyerCounty=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"buyerCounty.valid || buyerCounty.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerCounty.errors && buyerCounty.errors.required\">\r\n                                            Município obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"uname1\">Bairro</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.buyerDistrict\" name=\"buyerDistrict\"  class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"buyerDistrict.invalid && buyerDistrict.touched\" #buyerDistrict=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"buyerDistrict.valid || buyerDistrict.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerDistrict.errors && buyerDistrict.errors.required\">\r\n                                            Bairro obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\"> \r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Logradouro</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.buyerAddress\" name=\"buyerAddress\"  class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"buyerAddress.invalid && buyerAddress.touched\" #buyerAddress=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"buyerAddress.valid || buyerAddress.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerAddress.errors && buyerAddress.errors.required\">\r\n                                            Logradouro obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-sm-2\">\r\n                                    <label for=\"uname1\">Número</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.buyerStreetnumber\" name=\"buyerStreetnumber\"  class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"buyerStreetnumber.invalid && buyerStreetnumber.touched\" #buyerStreetnumber=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"buyerStreetnumber.valid || buyerStreetnumber.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerStreetnumber.errors && buyerStreetnumber.errors.required\">\r\n                                            Número da residência obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <label for=\"uname1\">Complemento</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.buyerAddresscomplement\" name=\"buyerAddresscomplement\"  class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"buyerAddresscomplement.invalid && buyerAddresscomplement.touched\" #buyerAddresscomplement=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"buyerAddresscomplement.valid || buyerAddresscomplement.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"buyerAddresscomplement.errors && buyerAddresscomplement.errors.required\">\r\n                                            Complemento obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div> \r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <button type=\"submit\" [ngClass]=\"{'active':_activeTab==='nav-devedor'}\" (click)=\"nextTab('nav-veiculo')\" class=\"btn btn-info btn-block\" >Anterior</button>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">      \r\n                                    <button type=\"submit\" [ngClass]=\"{'active':_activeTab==='nav-devedor'}\" (click)=\"nextTab('nav-garantidor')\" class=\"btn btn-rainti btn-block\" >Próximo </button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n\r\n                    <div [ngClass]=\"{'show active':_activeTab==='nav-garantidor'}\" class=\"tab-pane fade \" id=\"nav-garantidor\" role=\"tabpanel\" aria-labelledby=\"nav-garantidor-tab\"><br>\r\n                        <form class=\"form\" #guarantorForm=\"ngForm\">\r\n                            <div class=\"form-group col-xl\">\r\n                                <div class=\"row\">\r\n                                    <label for=\"uname1\">Nome do Garantidor</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.guarantor\" name=\"guarantor\"  class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"guarantor.invalid && guarantor.touched\" #guarantor=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"guarantor.valid || guarantor.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"guarantor.errors && guarantor.errors.required\">\r\n                                            Nome do garantidor obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>         \r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\" >                                                                                  \r\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\r\n                                        <input type=\"radio\" id=\"customRadioInlineguarantor1\" name=\"customRadioInlineguarantor\" class=\"custom-control-input\" (click)=\"cpfCnpjSelect('guarantor', 'cpf')\" checked>\r\n                                        <label class=\"custom-control-label\" for=\"customRadioInlineguarantor1\">CPF</label>\r\n                                    </div>\r\n                                    <div class=\"custom-control custom-radio custom-control-inline\">\r\n                                        <input type=\"radio\" id=\"customRadioInlineguarantor2\" name=\"customRadioInlineguarantor\" class=\"custom-control-input\" (click)=\"cpfCnpjSelect('guarantor', 'cnpj')\">\r\n                                        <label class=\"custom-control-label\" for=\"customRadioInlineguarantor2\">CNPJ</label>\r\n                                    </div>                                        \r\n                                </div>\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <div *ngIf=\"_guarantorType=='cpf'\" >\r\n                                        <input type=\"text\" [(ngModel)]=\"contractData.guarantorValue\" name=\"cpf\" class=\"form-control rounded-0\" \r\n                                        pattern=\"^\\d{3}\\.\\d{3}\\.\\d{3}\\-\\d{2}$\" placeHolder=\"123.123.123-12\"\r\n                                        [class.is-invalid]=\"guarantorValue.invalid && guarantorValue.touched\" #guarantorValue=\"ngModel\" required >\r\n                                        <div class=\"md-errors-spacer\" [hidden]=\"guarantorValue.valid || guarantorValue.untouched\">\r\n                                            <small  class=\"text-danger\"*ngIf=\"guarantorValue.errors && guarantorValue.errors.required\">\r\n                                                CPF obrigatório \r\n                                            </small>\r\n                                            <small  class=\"text-danger\" *ngIf=\"guarantorValue.errors && guarantorValue.errors.pattern\">\r\n                                                CPF inválido (Ex.: 123.123.123-12)\r\n                                            </small>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"_guarantorType=='cnpj'\" >\r\n                                        <input type=\"text\" [(ngModel)]=\"contractData.guarantorValue\" name=\"guarantorValue\" class=\"form-control rounded-0\" \r\n                                        pattern=\"^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}(-\\d{2})$\" placeHolder=\"12.123.123/0001-12\"\r\n                                        [class.is-invalid]=\"guarantorValue.invalid && guarantorValue.touched\" #guarantorValue=\"ngModel\" required >\r\n                                        <div class=\"md-errors-spacer\" [hidden]=\"guarantorValue.valid || guarantorValue.untouched\">\r\n                                            <small  class=\"text-danger\"*ngIf=\"guarantorValue.errors && guarantorValue.errors.required\">\r\n                                                CNPJ obrigatório \r\n                                            </small>\r\n                                            <small  class=\"text-danger\" *ngIf=\"guarantorValue.errors && guarantorValue.errors.pattern\">\r\n                                                CNPJ inválido (Ex.: 12.123.123/0001-12)\r\n                                            </small>\r\n                                        </div>\r\n                                    </div>\r\n                                </div> \r\n                            </div> \r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\"> \r\n                                    <button type=\"submit\" [ngClass]=\"{'active':_activeTab==='nav-garantidor'}\" (click)=\"nextTab('nav-devedor')\" class=\"btn btn-info btn-block\" >Anterior</button>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">      \r\n                                    <button type=\"submit\" [ngClass]=\"{'active':_activeTab==='nav-garantidor'}\" (click)=\"nextTab('nav-contrato')\" class=\"btn btn-rainti btn-block\" >Próximo </button>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                    <div [ngClass]=\"{'show active':_activeTab==='nav-contrato'}\" class=\"tab-pane fade\" id=\"nav-contrato\" role=\"tabpanel\" aria-labelledby=\"nav-contrato-tab\" style=\"padding: 0px 20px 0px 20px; height: 650px; overflow-y: scroll;\"><br>\r\n                        <form class=\"form\" #contractForm=\"ngForm\">\r\n                            <div class=\"row\" >               \r\n                                <div class=\"form-group col-6\">\r\n                                    <label for=\"uname1\">Contrato</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.contract\" name=\"contract\" class=\"form-control rounded-0\" \r\n                                    pattern=\"^.{6,}$\" \r\n                                    [class.is-invalid]=\"contract.invalid && contract.touched\" #contract=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"contract.valid || contract.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"contract.errors && contract.errors.required\">\r\n                                            Contrato obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"contract.errors && contract.errors.pattern\">\r\n                                            Contrato deve ter minimo 6 posições alfanumericas\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"uname1\">Data do Contrato</label>\r\n                                    <input type=\"date\" [(ngModel)]=\"contractData.contractDate\" name=\"contractDate\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"contractDate.invalid && contractDate.touched\" #contractDate=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"contractDate.valid || contractDate.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"contractDate.errors && contractDate.errors.required\">\r\n                                            Data do Contrato inválida \r\n                                        </small>\r\n                                    </div>  \r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">               \r\n                                <div class=\"form-group col-sm-4\">\r\n                                    <label for=\"uname1\">Tipo de Gravame</label><br>\r\n                                    <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_alieTypesLoad\">\r\n                                        <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                    </div>\r\n                                    <select class=\"custom-select\" #alienType=\"ngModel\" [class.is-invalid]=\"alienTypesHasError && alienType.touched\" \r\n                                    name=\"alienType\" [(ngModel)]=\"contractData.alienType\" (change)=\"validateAlienTypes(alienType.value)\" (blur)=\"validateAlienTypes(alienType.value)\">                            \r\n                                        <option value=\"default\">--Escolha um Gravame</option>\r\n                                        <option *ngFor=\"let alien of _alienTypes\">{{ alien.description }}</option>\r\n                                    </select>\r\n                                    <small class=\"text-danger\" [class.d-none]=\"!alienTypesHasError || alienType.untouched\">Escolha um Tipo de Gravame</small>\r\n                                </div>\r\n                                <div class=\"col-sm-2\">\r\n                                    <label for=\"uname1\">Nº restrição</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.restrictionNumber\" name=\"restrictionNumber\" class=\"form-control rounded-0\" \r\n                                    pattern=\"^\\d{6,}$\" \r\n                                    [class.is-invalid]=\"restrictionNumber.invalid && restrictionNumber.touched\" #restrictionNumber=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"restrictionNumber.valid || restrictionNumber.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"restrictionNumber.errors && restrictionNumber.errors.required\">\r\n                                            Número da restrição inválida\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"restrictionNumber.errors && restrictionNumber.errors.pattern\">\r\n                                            Restrição deve ter minimo 6 posições numericas\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Valor financiamento</label>\r\n                                        <input type=\"text\" [(ngModel)]=\"contractData.totalDebitAmount\" name=\"totalDebitAmount\"  class=\"form-control rounded-0\"  \r\n                                        pattern=\"^[0-9]+(\\.[0-9]{1,2})?$\"\r\n                                        [class.is-invalid]=\"totalDebitAmount.invalid && totalDebitAmount.touched\" #totalDebitAmount=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"totalDebitAmount.valid || totalDebitAmount.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"totalDebitAmount.errors && totalDebitAmount.errors.required\">\r\n                                            Valor total da divida obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"restrictionNumber.errors && restrictionNumber.errors.pattern\">\r\n                                            Valor total da divida obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>   \r\n                            </div> \r\n                            <div class=\"row\">            \r\n                                <div class=\"col-sm-2\">\r\n                                    <label for=\"uname1\">Parcelas</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.numberOfInstallments\" name=\"numberOfInstallments\" class=\"form-control rounded-0\" \r\n                                        pattern=\"^[0-9]+(\\.[0-9]{1,2})?$\"\r\n                                        [class.is-invalid]=\"numberOfInstallments.invalid && numberOfInstallments.touched\" #numberOfInstallments=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"numberOfInstallments.valid || numberOfInstallments.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"numberOfInstallments.errors && numberOfInstallments.errors.required\">\r\n                                            Quantidade de parcelas obrigatória\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"numberOfInstallments.errors && numberOfInstallments.errors.pattern\">\r\n                                            Parcelas deve ter ate 2 posições numericas\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-sm-4\">\r\n                                    <label for=\"uname1\">Valor da Parcela</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.installmentValue\" name=\"installmentValue\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^[0-9]+(\\.[0-9]{1,2})?$\"\r\n                                        [class.is-invalid]=\"installmentValue.invalid && installmentValue.touched\" #installmentValue=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"installmentValue.valid || installmentValue.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"installmentValue.errors && installmentValue.errors.required\">\r\n                                            Valor da parcelas obrigatória\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"installmentValue.errors && installmentValue.errors.pattern\">\r\n                                            Valor da parcelas obrigatória\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Valor do Registro de Contrato</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.contractRegistrationAmount\" name=\"contractRegistrationAmount\"  class=\"form-control rounded-0\" \r\n                                    pattern=\"^[0-9]+(\\.[0-9]{1,2})?$\"\r\n                                    [class.is-invalid]=\"contractRegistrationAmount.invalid && contractRegistrationAmount.touched\" #contractRegistrationAmount=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"contractRegistrationAmount.valid || contractRegistrationAmount.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"contractRegistrationAmount.errors && contractRegistrationAmount.errors.required\">\r\n                                            Valor do Registro de Contrato obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"contractRegistrationAmount.errors && contractRegistrationAmount.errors.pattern\">\r\n                                            Valor do Registro de Contrato obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\"> \r\n                                <div class=\"col-sm-3\">\r\n                                    <label for=\"uname1\">Taxa Juros de Multa</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.interestRate\" name=\"interestRate\"  class=\"form-control rounded-0\" \r\n                                    pattern=\"^[0-9]+(\\.[0-9]{1,3})?$\"\r\n                                    [class.is-invalid]=\"interestRate.invalid && interestRate.touched\" #interestRate=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"interestRate.valid || interestRate.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"interestRate.errors && interestRate.errors.required\">\r\n                                            Taxa de Juros de multa obrigatória\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"interestRate.errors && interestRate.errors.pattern\">\r\n                                            Juros multa deve ter um valor ate 3 decimais\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group col-sm-3\">\r\n                                    <label for=\"uname1\">Taxa Juros ao ano</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.interestRatePerYear\" name=\"interestRatePerYear\"  class=\"form-control rounded-0\" \r\n                                    pattern=\"^[0-9]+(\\.[0-9]{1,3})?$\"\r\n                                    [class.is-invalid]=\"interestRatePerYear.invalid && interestRatePerYear.touched\" #interestRatePerYear=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"interestRatePerYear.valid || interestRatePerYear.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"interestRatePerYear.errors && interestRatePerYear.errors.required\">\r\n                                            Taxa de Juros ao ano obrigatória\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"interestRatePerYear.errors && interestRatePerYear.errors.pattern\">\r\n                                            Juros ano deve ter um valor ate 3 decimais\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"uname1\">Valor do IOF</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.iofAmount\" name=\"iofAmount\"  class=\"form-control rounded-0\" \r\n                                    pattern=\"^[0-9]+(\\.[0-9]{1,3})?$\"\r\n                                    [class.is-invalid]=\"iofAmount.invalid && iofAmount.touched\" #iofAmount=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"iofAmount.valid || iofAmount.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"iofAmount.errors && iofAmount.errors.required\">\r\n                                            Valor do IOF obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"iofAmount.errors && iofAmount.errors.pattern\">\r\n                                            IOF deve ter um valor ate 3 decimais\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-3\">\r\n                                    <label for=\"uname1\">Taxa de mora ao dia</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.dailyInterestRate\" name=\"dailyInterestRate\"  class=\"form-control rounded-0\" \r\n                                    pattern=\"^[0-9]+(\\.[0-9]{1,3})?$\"\r\n                                    [class.is-invalid]=\"dailyInterestRate.invalid && dailyInterestRate.touched\" #dailyInterestRate=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"dailyInterestRate.valid || dailyInterestRate.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"dailyInterestRate.errors && dailyInterestRate.errors.required\">\r\n                                            Taxa de mora ao dia obrigatória\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"dailyInterestRate.errors && dailyInterestRate.errors.pattern\">\r\n                                            Mora deve ter um valor ate 3 decimais\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <label for=\"uname1\">Taxa Juros ao mês</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.interestRatePerMonth\" name=\"interestRatePerMonth\"  class=\"form-control rounded-0\" \r\n                                    pattern=\"^[0-9]+(\\.[0-9]{1,3})?$\"\r\n                                    [class.is-invalid]=\"interestRatePerMonth.invalid && interestRatePerMonth.touched\" #interestRatePerMonth=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"interestRatePerMonth.valid || interestRatePerMonth.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"interestRatePerMonth.errors && interestRatePerMonth.errors.required\">\r\n                                            Taxa de Juros ao mês obrigatória\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"interestRatePerMonth.errors && interestRatePerMonth.errors.pattern\">\r\n                                            Juros mês deve ter um valor ate 3 decimais\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                    <label for=\"uname1\">Indice</label><br>\r\n                                    <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_indexesLoad\">\r\n                                        <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                    </div>\r\n                                    <select class=\"custom-select\" #index=\"ngModel\" [class.is-invalid]=\"indexesesHasError && index.touched\" \r\n                                    name=\"index\" [(ngModel)]=\"contractData.index\" (change)=\"validateIndexes(index.value)\" (blur)=\"validateIndexes(index.value)\">                            \r\n                                        <option value=\"default\">--Escolha um Indice</option>\r\n                                        <option *ngFor=\"let index of _indexes\">{{ index.description }}</option>\r\n                                    </select>\r\n                                    <small class=\"text-danger\" [class.d-none]=\"!indexesHasError || index.untouched\">Escolha um Indice</small>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Data do primeiro pagamento</label>\r\n                                    <input type=\"date\" [(ngModel)]=\"contractData.paymentStartDate\" name=\"paymentStartDate\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"paymentStartDate.invalid && paymentStartDate.touched\" #paymentStartDate=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"paymentStartDate.valid || paymentStartDate.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"paymentStartDate.errors && paymentStartDate.errors.required\">\r\n                                            Data do primeiro pagamento inválida \r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"uname1\">Data último pagamento</label>\r\n                                    <input type=\"date\" [(ngModel)]=\"contractData.paymentEndDate\" name=\"paymentEndDate\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"paymentEndDate.invalid && paymentEndDate.touched\" #paymentEndDate=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"paymentEndDate.valid || paymentEndDate.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"paymentEndDate.errors && paymentEndDate.errors.required\">\r\n                                            Data último pagamento inválida \r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Data da liberação</label>\r\n                                    <input type=\"date\" [(ngModel)]=\"contractData.releaseDate\" name=\"releaseDate\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"releaseDate.invalid && releaseDate.touched\" #releaseDate=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"releaseDate.valid || releaseDate.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"releaseDate.errors && releaseDate.errors.required\">\r\n                                            Data da liberação inválida \r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3\">\r\n                                    <label for=\"uname1\">UF da liberação</label><br>\r\n                                    <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_statesLoad\">\r\n                                        <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                    </div>\r\n                                    <select class=\"custom-select\" #releaseState=\"ngModel\" [class.is-invalid]=\"releaseStatesHasError && releaseState.touched\" \r\n                                    name=\"releaseState\" [(ngModel)]=\"contractData.releaseState\" (change)=\"validateReleaseStates(releaseState.value)\" (blur)=\"validateReleaseStates(releaseState.value)\">                            \r\n                                        <option value=\"default\">--Escolha uma UF</option>\r\n                                        <option *ngFor=\"let state of _releaseStates\">{{ state.description }}</option>\r\n                                    </select>\r\n                                    <small class=\"text-danger\" [class.d-none]=\"!releaseStatesHasError || releaseState.untouched\">Escolha uma UF</small>\r\n                                </div>\r\n                                <div class=\"form-group col-sm-3\">\r\n                                    <label for=\"uname1\">Cidade da liberação</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.releaseCity\" name=\"releaseCity\" class=\"form-control rounded-0\" \r\n                                    pattern=\"^.{4,}$\" \r\n                                    [class.is-invalid]=\"releaseCity.invalid && releaseCity.touched\" #releaseCity=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"releaseCity.valid || releaseCity.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"releaseCity.errors && releaseCity.errors.required\">\r\n                                            Cidade inválida\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"releaseCity.errors && releaseCity.errors.pattern\">\r\n                                            Cidade inválida minimo 4 posições alfanumericas\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-sm-6\">\r\n                                    <label for=\"uname1\">Número grupo do consórcio</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.consortiumGroupNumber\" name=\"consortiumGroupNumber\" class=\"form-control rounded-0\" \r\n                                    pattern=\"^.{4,}$\" \r\n                                    [class.is-invalid]=\"consortiumGroupNumber.invalid && consortiumGroupNumber.touched\" #consortiumGroupNumber=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"consortiumGroupNumber.valid || consortiumGroupNumber.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"consortiumGroupNumber.errors && consortiumGroupNumber.errors.required\">\r\n                                            Número do grupo inválido\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"consortiumGroupNumber.errors && consortiumGroupNumber.errors.pattern\">\r\n                                            Número do grupo minimo 4 posições alfanumericas\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"uname1\">Número cota do consórcio</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"contractData.consortiumQuotaNumber\" name=\"consortiumQuotaNumber\" class=\"form-control rounded-0\" \r\n                                    pattern=\"^.{4,}$\" \r\n                                    [class.is-invalid]=\"consortiumQuotaNumber.invalid && consortiumQuotaNumber.touched\" #consortiumQuotaNumber=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"consortiumQuotaNumber.valid || consortiumQuotaNumber.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"consortiumQuotaNumber.errors && consortiumQuotaNumber.errors.required\">\r\n                                            Número da cota do consórcio inválida\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"consortiumQuotaNumber.errors && consortiumQuotaNumber.errors.pattern\">\r\n                                            Número da cota minimo 4 posições alfanumericas\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\"> \r\n                                    <button type=\"submit\" [ngClass]=\"{'active':_activeTab==='nav-contrato'}\" (click)=\"nextTab('nav-garantidor')\" class=\"btn btn-info btn-block\" >Anterior</button>                                        </div>\r\n                                <div class=\"col-sm-6\">      \r\n                                    <button type=\"button\" data-toggle=\"modal\" class=\"btn btn-rainti btn-block \" (click)=\"createSummary()\" data-target=\"#staticBackdrop\">Confirmar</button>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"modal fade\" id=\"staticBackdrop\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"staticBackdropLabel\" aria-hidden=\"true\">\r\n                                <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_summaryLoad\">\r\n                                    <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                </div>\r\n                                <div class=\"modal-dialog\" role=\"document\">\r\n                                    <div class=\"modal-content\">\r\n                                        <div class=\"modal-header\">\r\n                                        <h5 class=\"modal-title\" id=\"staticBackdropLabel\">Resumo do Contrato</h5>\r\n                                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                                                <span aria-hidden=\"true\">&times;</span>\r\n                                        </button>\r\n                                        </div>\r\n                                        <div class=\"modal-body list-group\">\r\n                                            <a href=\"#\" class=\"list-group-item list-group-item-action flex-column align-items-start active\">\r\n                                                <p>Credor:</p>\r\n                                                <div class=\"d-flex w-100 justify-content-between\">\r\n                                                    <ul>\r\n                                                        <li *ngFor=\"let credor of _credor\">\r\n                                                            {{ credor.description }} {{ credor.value }}\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                                <p>Veículo:</p>\r\n                                                <div class=\"d-flex w-100 justify-content-between\">\r\n                                                    <ul>\r\n                                                        <li *ngFor=\"let veiculo of _veiculo\">\r\n                                                            {{ veiculo.description }} {{ veiculo.value }}\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                                <p>Devedor:</p>\r\n                                                <div class=\"d-flex w-100 justify-content-between\">\r\n                                                    <ul>\r\n                                                        <li *ngFor=\"let devedor of _devedor\">\r\n                                                            {{ devedor.description }} {{ devedor.value }}\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                                <p>Garantidor:</p>\r\n                                                <div class=\"d-flex w-100 justify-content-between\">\r\n                                                    <ul>\r\n                                                        <li *ngFor=\"let garantidor of _garantidor\">\r\n                                                            {{ garantidor.description }} {{ garantidor.value }}\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                                <p>Contrato:</p>\r\n                                                <div class=\"d-flex w-100 justify-content-between\">\r\n                                                    <ul>\r\n                                                        <li *ngFor=\"let contrato of _contrato\">\r\n                                                            {{ contrato.description }} {{ contrato.value }}\r\n                                                        </li>\r\n                                                    </ul>\r\n                                                </div>\r\n                                            </a>\r\n                                        </div>\r\n                                        <div class=\"modal-footer\">\r\n                                            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Voltar</button>\r\n                                            <button type=\"button\" class=\"btn btn-primary\" (click)=\"createContract()\">Finalizar</button>\r\n                                            <div class=\"col border text-center btn-outline-secondary\" *ngIf=\"_contractLoad\">\r\n                                                <span class=\"spinner-border spinner-border\" role=\"status\" aria-hidden=\"true\"></span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                    </div>\r\n                </div>\r\n\r\n            </div> \r\n        </div>\r\n    </div>                \r\n    <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_errorMessage\">\r\n        {{_errorMessage}}\r\n    </div> \r\n    <div class=\"alert alert-primary text-center text-primary\" *ngIf=\"_createdMessage\">\r\n        {{_createdMessage}}\r\n    </div>    \r\n\r\n\t\r\n\t");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract/contract-main/contract-main.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contract/contract-main/contract-main.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card shadow rounded\" style=\"padding: 30px\">\r\n  <div class=\"row justify-content-lg align-items-center\">\r\n    <div class=\"col\">\r\n      <h1>Contratos</h1>  \r\n    </div>  \r\n    <div class=\"col-md-auto\">    \r\n      <form class=\"form-inline \">\r\n        <div class=\"row align-items-center mb-1\">    \r\n          <div class=\"col\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary btn-md btn-block\" routerLink=\"/registrar-contrato\">Adicionar</button>\r\n          </div>        \r\n          <div class=\"col\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n          </div>            \r\n        </div>   \r\n      </form> \r\n    </div>\r\n  </div>\r\n  <hr/>\r\n  <div class=\"row mt-2\">    \r\n      <div class=\"col-md-4 mb-4\" *ngFor=\"let contract of _contracts | filter: name : searchText\"> \r\n        <div class=\"card text-center shadow rounded\">\r\n          <div class=\"card-body \">\r\n            <h5 class=\"card-title \">{{contract.name}}</h5>\r\n            <hr/>\r\n            <p class=\"card-text\"><b>detran:</b> {{contract.detran}}</p>\r\n            <p class=\"card-text\"><b>contrato:</b> {{contract.contract}}</p>\r\n            <p class=\"card-text\"><b>registro:</b> {{contract.contractregisterid}}</p>          \r\n          </div>\r\n          <div class=\"card-footer text-muted\">\r\n            <div class=\"row align-items-center mb-1\">    \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-md btn-block\" routerLink=\"/contratos/\" routerLinkActive=\"active\" >Editar</button>\r\n              </div>        \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-info btn-md btn-block\" routerLink=\"/contratos/\" routerLinkActive=\"active\">Desativar</button>\r\n              </div>            \r\n            </div>         \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-add/creditor-group-add.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-add/creditor-group-add.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n            <span class=\"anchor\" id=\"creditorGroupAdd\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Editar da Gestora</h4>\r\n                    <hr/>\r\n                    <nav>\r\n                        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                        <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" [ngClass]=\"{'active':activeTab==='nav-home'}\" (click)=\"nextTab('nav-home')\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Geral</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-address-tab\" data-toggle=\"tab\" href=\"#nav-address\" [ngClass]=\"{'active':activeTab==='nav-address'}\" (click)=\"nextTab('nav-address')\" role=\"tab\" aria-controls=\"nav-address\" aria-selected=\"false\">Endereço</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-contract-tab\" data-toggle=\"tab\" href=\"#nav-contract\" [ngClass]=\"{'active':activeTab==='nav-contract'}\" (click)=\"nextTab('nav-contract')\" role=\"tab\" aria-controls=\"nav-contract\" aria-selected=\"false\">Contrato</a>\r\n\r\n                        </div>\r\n                    </nav>\r\n                    <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                        <div [ngClass]=\"{'show active':activeTab==='nav-home'}\" class=\"tab-pane fade\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">    \r\n                            <form class=\"form\" #registerForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Razão Social</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorGroupData.businessname\" name=\"businessName\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"businessName.invalid && businessName.touched\" #businessName=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"businessName.valid || businessName.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"businessName.errors && businessName.errors.required\">\r\n                                            Razão Social obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Nome Fantasia</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorGroupData.fantasyname\" name=\"fantasyName\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"fantasyName.invalid && fantasyName.touched\" #fantasyName=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"fantasyName.valid || fantasyName.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"fantasyName.errors && fantasyName.errors.required\">\r\n                                            Nome Fantasia obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">CNPJ</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorGroupData.cnpj\" name=\"cnpj\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}(-\\d{2})$\" placeHolder=\"12.123.123/0001-12\"\r\n                                            [class.is-invalid]=\"cnpj.invalid && cnpj.touched\" #cnpj=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"cnpj.valid || cnpj.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"cnpj.errors && cnpj.errors.required\">\r\n                                                    CNPJ obrigatório \r\n                                                </small>\r\n                                                <small  class=\"text-danger\" *ngIf=\"cnpj.errors && cnpj.errors.pattern\">\r\n                                                    CNPJ inválido (Ex.: 12.123.123/0001-12)\r\n                                                </small>\r\n                                            </div>      \r\n                                        </div>   \r\n                                    </div>\r\n                                </div>     \r\n                                <div class=\"form-group\">                            \r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-2\">\r\n                                            <label for=\"uname1\">DDD</label>\r\n                                            <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                            placeHolder=\"11\"\r\n                                            [(ngModel)]=\"creditorGroupData.dddmodel\" name=\"dddModel\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"dddModel.invalid && dddModel.touched\" #dddModel=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"dddModel.valid || dddModel.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"dddModel.errors && dddModel.errors.required\">\r\n                                                    DDD obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\"*ngIf=\"(dddModel.errors && dddModel.errors.pattern) || ddHasError\">\r\n                                                    DDD inválido\r\n                                                </small>\r\n                                            </div>                                         \r\n                                        </div>\r\n                                        <div class=\"col-7\">\r\n                                            <label for=\"uname1\">Telefone</label>\r\n                                            <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                            placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                            [(ngModel)]=\"creditorGroupData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                                    Telefone obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                                    Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>                          \r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">E-mail</label>\r\n                                    <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                                    placeHolder=\"example@example.com\"\r\n                                    [(ngModel)]=\"creditorGroupData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                            e-mail obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                            e-mail inválido (Ex.: example@example.com)\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\t\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" [ngClass]=\"{'active':activeTab==='nav-home'}\" (click)=\"nextTab('nav-address')\" class=\"btn btn-rainti btn-block \">Próximo</button>                \r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" (click)=\"backToCreditorGroup()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div>                                         \r\n                            </form>                \r\n                        </div>\r\n                        <div [ngClass]=\"{'show active':activeTab==='nav-address'}\" class=\"tab-pane fade\" id=\"nav-address\" role=\"tabpanel\" aria-labelledby=\"nav-address-tab\">\r\n                            <form class=\"form\" #addressForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Logradouro</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorGroupData.address\" name=\"address\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"address.invalid && address.touched\" #address=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"address.valid || address.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"address.errors && address.errors.required\">\r\n                                            Logradouro obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-4\">\r\n                                            <label for=\"uname1\">Número</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorGroupData.streetnumber\" name=\"streetNumber\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"streetNumber.invalid && streetNumber.touched\" #streetNumber=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"streetNumber.valid || streetNumber.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"streetNumber.errors && streetNumber.errors.required\">\r\n                                                    Número do Logradouro obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Complemento Endereço</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorGroupData.addresscomplement\" name=\"addressComplement\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"addressComplement.invalid && addressComplement.touched\" #addressComplement=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"addressComplement.valid || addressComplement.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"addressComplement.errors && addressComplement.errors.required\">\r\n                                                    Complemento Endereço obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Bairro</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorGroupData.district\" name=\"district\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"district.invalid && district.touched\" #district=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"district.valid || district.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"district.errors && district.errors.required\">\r\n                                                    Bairro obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>    \r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Municipio</label>\r\n                                             <input type=\"text\" [(ngModel)]=\"creditorGroupData.county\" name=\"county\" class=\"form-control rounded-0\" \r\n                                             [class.is-invalid]=\"county.invalid && county.touched\" #county=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"county.valid || county.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"county.errors && county.errors.required\">\r\n                                                    Municipio obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>                                                   \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-7\">\r\n                                            <label for=\"uname1\">Estado</label>\r\n                                            <div class=\"dropup\">\r\n                                                <a class=\"nav-link \" class=\"dropdown-toggle\" style=\"cursor:pointer\" data-toggle=\"dropdown\" routerLinkActive=\"active\"> Gestora\r\n                                                    <span class=\"caret\"></span></a>\r\n                                                      <ul class=\"dropdown-menu\" style=\"padding-top: 10px; height: 150px; overflow: auto; white-space: nowrap;\">  \r\n                                                        <li *ngFor=\"let state of _states\">\r\n                                                            <input type=\"checkbox\" name=\"groupOptions\" autocomplete=\"off\"> {{ state.description }}\r\n                                                        </li>\r\n                                                        <!-- <li *ngFor=\"let entityType of entityTypes\"> \r\n                                                          <a class=\"nav-link px-2 text-dark\" routerLink=\"/{{entityType.name.toLocaleLowerCase()}}\" routerLinkActive=\"active\" >{{entityType.name}}</a>\r\n                                                        </li> -->\r\n                                                      </ul>\r\n                                            </div>\r\n                                            <select class=\"custom-select\" \r\n                                            #topic=\"ngModel\" [class.is-invalid]=\"topicHasError && topic.touched\" name=\"topic\" \r\n                                            [(ngModel)]=\"creditorGroupData.topic\" (change)=\"validateTopic(topic.value)\" (blur)=\"validateTopic(topic.value)\">                            \r\n                                                <option value=\"default\">--Escolha um Estado</option>\r\n                                                <option *ngFor=\"let state of _states\">{{ state.description }}</option>\r\n                                            </select>\r\n                                            <small class=\"text-danger\" [class.d-none]=\"!topicHasError || topic.untouched\">Escolha um Estado</small>\r\n                                        </div> \r\n                                        <div class=\"col-5\">   \r\n                                            <label for=\"uname1\">Cep</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorGroupData.zipcode\" name=\"zipCode\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^([0-9]{5})(-)([0-9]{3})$\" placeHolder=\"12345-678\"\r\n                                            [class.is-invalid]=\"zipCode.invalid && zipCode.touched\" #zipCode=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"zipCode.valid || zipCode.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"zipCode.errors && zipCode.errors.required\">\r\n                                                    Cep obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\" *ngIf=\"zipCode.errors && zipCode.errors.pattern\">\r\n                                                    Cep inválido (Ex.: 12345-678)\r\n                                                </small>\r\n                                            </div>                                   \r\n                                        </div> \r\n                                    </div> \r\n                                </div>    \r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" [ngClass]=\"{'active':activeTab==='nav-address'}\" (click)=\"nextTab('nav-contract')\" class=\"btn btn-rainti btn-block \">Próximo</button>                \r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" (click)=\"backToCreditorGroup()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div>                              \r\n                            </form>                \r\n                        </div>\r\n                        <div [ngClass]=\"{'show active':activeTab==='nav-contract'}\" class=\"tab-pane fade\" id=\"nav-contract\" role=\"tabpanel\" aria-labelledby=\"nav-contract-tab\">\r\n                            <form class=\"form\" #contractForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Contrato</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorGroupData.contract\" name=\"contract\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^.{6,}$\" placeHolder=\"A1B23C\"\r\n                                            [class.is-invalid]=\"contract.invalid && contract.touched\" #contract=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"contract.valid || contract.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"contract.errors && contract.errors.required\">\r\n                                                    contrato inválido (Minimo 6 posições)\r\n                                                </small>\r\n                                                <small  class=\"text-danger\" *ngIf=\"contract.errors && contract.errors.pattern\">\r\n                                                    contrato inválido (Ex.: A1B23C minimo 6 posições)\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Data Inicio</label>\r\n                                            <input type=\"date\" [(ngModel)]=\"creditorGroupData.startdate\" name=\"startDate\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"startDate.invalid && startDate.touched\" #startDate=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"startDate.valid || startDate.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"startDate.errors && startDate.errors.required\">\r\n                                                    Data Inicio inválida \r\n                                                </small>\r\n                                            </div>\r\n                                        </div> \r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Data Final</label>\r\n                                            <input type=\"date\" [(ngModel)]=\"creditorGroupData.enddate\" name=\"endDate\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"endDate.invalid && endDate.touched\" #endDate=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"endDate.valid || endDate.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"endDate.errors && endDate.errors.required\">\r\n                                                    Data Final inválida \r\n                                                </small>\r\n                                            </div>\r\n                                        </div>    \r\n                                    </div>                                                   \r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" [disabled]=\"contractForm.form.invalid\" (click)=\"createCreditorGroup()\" class=\"btn btn-rainti btn-block \">Confirmar</button>                \r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" (click)=\"backToCreditorGroup()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div>                             \r\n                            </form> \r\n                        </div>\r\n                    </div>\r\n                    <hr/>\r\n                    <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_errorMessage\">\r\n                        {{_errorMessage}}\r\n                    </div> \r\n                    <div class=\"alert alert-primary text-center text-primary\" *ngIf=\"_createdMessage\">\r\n                        {{_createdMessage}}\r\n                    </div>                                \r\n                  </div>\r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component.html":
/*!****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component.html ***!
  \****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n            <span class=\"anchor\" id=\"formLogin\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Cadastrar Contato</h4>\r\n                    <hr/>\r\n                    <form class=\"form\" #registerForm=\"ngForm\">                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Nome</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.name\" name=\"name\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"name.invalid && name.touched\" #name=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"name.valid || name.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"name.errors && name.errors.required\">\r\n                                            Nome obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"form-group\">                            \r\n                            <div class=\"row\">\r\n                                <div class=\"col-3\">\r\n                                    <label for=\"uname1\">DDD</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                    placeHolder=\"11\"\r\n                                    [(ngModel)]=\"userData.dddModel\" name=\"dddModel\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"dddModel.invalid && dddModel.touched\" #dddModel=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"dddModel.valid || dddModel.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"dddModel.errors && dddModel.errors.required\">\r\n                                            DDD obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"(dddModel.errors && dddModel.errors.pattern) || ddHasError\">\r\n                                            DDD inválido\r\n                                        </small>\r\n                                   </div>\r\n                                  \r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <label for=\"uname1\">Telefone</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                    placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                    [(ngModel)]=\"userData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                            Telefone obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                            Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                        </small>\r\n                                   </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">E-mail</label>\r\n                            <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                            placeHolder=\"example@example.com\"\r\n                            [(ngModel)]=\"userData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                            <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                    e-mail obrigatório\r\n                                </small>\r\n                                <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                    e-mail inválido (Ex.: example@example.com)\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Informações adicionais</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.additionalInfo\" name=\"additionalInfo\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"additionalInfo.invalid && additionalInfo.touched\" #additionalInfo=\"ngModel\" >\r\n                        </div>\r\n                        <hr/>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" (click)=\"addCreditorGroupContact()\" class=\"btn btn-rainti btn-block \">Adicionar</button>                \r\n                                </div>  \r\n                                <div class=\"col-sm-6\">\r\n                                    <button type=\"submit\" (click)=\"backToCreditorGroupContacts()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                </div>  \r\n                            </div>                            \r\n                        </div>                             \r\n                        <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_errorMessage\">\r\n                            {{_errorMessage}}\r\n                        </div> \r\n                        <div class=\"alert alert-primary text-center text-primary\" *ngIf=\"_createdMessage\">\r\n                            {{_createdMessage}}\r\n                        </div>                                  \r\n                       \r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n            <span class=\"anchor\" id=\"formLogin\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Editar Contato</h4>\r\n                    <hr/>\r\n                    <form class=\"form\" #registerForm=\"ngForm\">                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Nome</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.name\" name=\"name\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"name.invalid && name.touched\" #name=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"name.valid || name.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"name.errors && name.errors.required\">\r\n                                            Nome obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"form-group\">                            \r\n                            <div class=\"row\">\r\n                                <div class=\"col-3\">\r\n                                    <label for=\"uname1\">DDD</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                    placeHolder=\"11\"\r\n                                    [(ngModel)]=\"userData.dddmodel\" name=\"dddmodel\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"dddmodel.invalid && dddmodel.touched\" #dddmodel=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"dddmodel.valid || dddmodel.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"dddmodel.errors && dddmodel.errors.required\">\r\n                                            DDD obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"(dddmodel.errors && dddmodel.errors.pattern) || ddHasError\">\r\n                                            DDD inválido\r\n                                        </small>\r\n                                   </div>\r\n                                  \r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <label for=\"uname1\">Telefone</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                    placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                    [(ngModel)]=\"userData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                            Telefone obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                            Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                        </small>\r\n                                   </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">E-mail</label>\r\n                            <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                            placeHolder=\"example@example.com\"\r\n                            [(ngModel)]=\"userData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                            <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                    e-mail obrigatório\r\n                                </small>\r\n                                <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                    e-mail inválido (Ex.: example@example.com)\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Informações adicionais</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.additionalinfo\" name=\"additionalinfo\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"additionalinfo.invalid && additionalinfo.touched\" #additionalinfo=\"ngModel\" >\r\n                        </div>\r\n                        <hr/>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" (click)=\"updateCreditorGroupContactById()\" class=\"btn btn-rainti btn-block \">Alterar</button>                \r\n                                </div> \r\n                                <div class=\"col-sm-4\">\r\n                                    <button type=\"submit\"  (click)=\"deleteCreditorGroupContactById()\" class=\"btn btn-danger btn-block \">Excluir</button>                \r\n                                </div>  \r\n                                <div class=\"col-sm-4\">\r\n                                    <button type=\"submit\" (click)=\"backToCreditorGroupContacts()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                </div>  \r\n                            </div>                            \r\n                        </div>                             \r\n                        <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_errorMessage\">\r\n                            {{_errorMessage}}\r\n                        </div>                                  \r\n                        <div class=\"alert alert-primary text-center text-primary\" *ngIf=\"_updatedMessage\">\r\n                            {{_updatedMessage}}\r\n                        </div>  \r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card shadow rounded\" style=\"padding: 30px\">\r\n  <div class=\"row justify-content-lg align-items-center\">\r\n    <div class=\"col\">\r\n      <h1>Contatos</h1>  \r\n    </div>  \r\n    <div class=\"col-md-auto\">\r\n      <div class=\"row align-items-center mb-1\">    \r\n        <div class=\"col\">\r\n          <button type=\"button\" class=\"btn btn-rainti btn-md btn-block\" (click)=\"addCreditorGroupContact()\">Adicionar</button>\r\n        </div>        \r\n        <div class=\"col\">\r\n          <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n        </div>            \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr/>\r\n  <div class=\"row mt-2\" style=\"padding-top: 10px; height: 650px; overflow-y: scroll; white-space: nowrap;\">    \r\n      <div class=\"col-md-4 mb-4\" *ngFor=\"let creditorGroupContact of creditorGroupContacts | filter: searchText\"> \r\n        <div class=\"card text shadow rounded\">\r\n          <div class=\"card-body \">\r\n            <h5 class=\"card-title \">{{creditorGroupContact.name}}</h5>\r\n            <hr/>\r\n            <p class=\"card-text\"><b>Tel.:</b> {{creditorGroupContact.tel}}</p>\r\n            <p class=\"card-text\"><b>e-mail:</b> {{creditorGroupContact.email}}</p>          \r\n            <p class=\"card-text\" *ngIf=\"creditorGroupContact.additionalinfo\"><b>Info. adicionais:</b> {{creditorGroupContact.additionalinfo}}</p>         \r\n          </div>\r\n          <div class=\"card-footer text-muted\">\r\n            <div class=\"row align-items-center mb-1\">    \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-rainti btn-md btn-block\" routerLink=\"/gestor-detalhe-contato/{{creditorGroupContact.id}}\" routerLinkActive=\"active\" >Editar</button>\r\n              </div>                    \r\n            </div>         \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-detail/creditor-group-detail.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-detail/creditor-group-detail.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n            <span class=\"anchor\" id=\"creditorGroupDetail\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Editar da Gestora</h4>\r\n                    <hr/>\r\n                    <nav>\r\n                        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                        <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Geral</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-address-tab\" data-toggle=\"tab\" href=\"#nav-address\" role=\"tab\" aria-controls=\"nav-address\" aria-selected=\"false\">Endereço</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-contract-tab\" data-toggle=\"tab\" href=\"#nav-contract\" role=\"tab\" aria-controls=\"nav-contract\" aria-selected=\"false\">Contracto</a>\r\n                        </div>\r\n                    </nav>\r\n                    <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                        <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n                            <form class=\"form\" #registerForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Razão Social</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorGroupData.businessname\" name=\"businessName\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"businessName.invalid && businessName.touched\" #businessName=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"businessName.valid || businessName.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"businessName.errors && businessName.errors.required\">\r\n                                            Razão Social obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Nome Fantasia</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorGroupData.fantasyname\" name=\"fantasyName\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"fantasyName.invalid && fantasyName.touched\" #fantasyName=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"fantasyName.valid || fantasyName.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"fantasyName.errors && fantasyName.errors.required\">\r\n                                            Nome Fantasia obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">CNPJ</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorGroupData.cnpj\" name=\"cnpj\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}(-\\d{2})$\" placeHolder=\"12.123.123/0001-12\"\r\n                                            [class.is-invalid]=\"cnpj.invalid && cnpj.touched\" #cnpj=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"cnpj.valid || cnpj.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"cnpj.errors && cnpj.errors.required\">\r\n                                                    CNPJ obrigatório \r\n                                                </small>\r\n                                                <small  class=\"text-danger\" *ngIf=\"cnpj.errors && cnpj.errors.pattern\">\r\n                                                    CNPJ inválido (Ex.: 12.123.123/0001-12)\r\n                                                </small>\r\n                                            </div>      \r\n                                        </div>   \r\n                                    </div>\r\n                                </div>     \r\n                                <div class=\"form-group\">                            \r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-2\">\r\n                                            <label for=\"uname1\">DDD</label>\r\n                                            <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                            placeHolder=\"11\"\r\n                                            [(ngModel)]=\"creditorGroupData.dddmodel\" name=\"dddModel\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"dddModel.invalid && dddModel.touched\" #dddModel=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"dddModel.valid || dddModel.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"dddModel.errors && dddModel.errors.required\">\r\n                                                    DDD obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\"*ngIf=\"(dddModel.errors && dddModel.errors.pattern) || ddHasError\">\r\n                                                    DDD inválido\r\n                                                </small>\r\n                                            </div>                                         \r\n                                        </div>\r\n                                        <div class=\"col-7\">\r\n                                            <label for=\"uname1\">Telefone</label>\r\n                                            <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                            placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                            [(ngModel)]=\"creditorGroupData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                                    Telefone obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                                    Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>                          \r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">E-mail</label>\r\n                                    <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                                    placeHolder=\"example@example.com\"\r\n                                    [(ngModel)]=\"creditorGroupData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                            e-mail obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                            e-mail inválido (Ex.: example@example.com)\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\t\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"updateCreditorGroup()\" class=\"btn btn-rainti btn-block\">Alterar</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"deleteCreditorGroup()\" class=\"btn btn-danger btn-block\">Excluir</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>  \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"backToCreditorGroup()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>  \r\n\t\t\t\t\t\t\t\t\t</div>                            \r\n\t\t\t\t\t\t\t\t</div>              \r\n                            </form>                \r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"nav-address\" role=\"tabpanel\" aria-labelledby=\"nav-address-tab\">\r\n                            <form class=\"form\" #addressForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Logradouro</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorGroupData.address\" name=\"address\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"address.invalid && address.touched\" #address=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"address.valid || address.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"address.errors && address.errors.required\">\r\n                                            Logradouro obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-4\">\r\n                                            <label for=\"uname1\">Número</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorGroupData.streetnumber\" name=\"streetNumber\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"streetNumber.invalid && streetNumber.touched\" #streetNumber=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"streetNumber.valid || streetNumber.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"streetNumber.errors && streetNumber.errors.required\">\r\n                                                    Número do Logradouro obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Complemento Endereço</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorGroupData.addresscomplement\" name=\"addressComplement\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"addressComplement.invalid && addressComplement.touched\" #addressComplement=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"addressComplement.valid || addressComplement.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"addressComplement.errors && addressComplement.errors.required\">\r\n                                                    Complemento Endereço obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Bairro</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorGroupData.district\" name=\"district\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"district.invalid && district.touched\" #district=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"district.valid || district.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"district.errors && district.errors.required\">\r\n                                                    Bairro obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>    \r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Municipio</label>\r\n                                             <input type=\"text\" [(ngModel)]=\"creditorGroupData.county\" name=\"county\" class=\"form-control rounded-0\" \r\n                                             [class.is-invalid]=\"county.invalid && county.touched\" #county=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"county.valid || county.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"county.errors && county.errors.required\">\r\n                                                    Municipio obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>                                                   \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-7\">\r\n                                            <label for=\"uname1\">Estado</label>\r\n                                            <select class=\"custom-select\" \r\n                                            #topic=\"ngModel\" [class.is-invalid]=\"topicHasError && topic.touched\" name=\"topic\" \r\n                                            [(ngModel)]=\"creditorGroupData.topic\" (change)=\"validateTopic(topic.value)\" (blur)=\"validateTopic(topic.value)\">                            \r\n                                                <option value=\"default\">{{creditorGroupData.topic }}</option>\r\n                                                <option *ngFor=\"let state of _states\">{{ state.description }}</option>\r\n                                            </select>\r\n                                            <small class=\"text-danger\" [class.d-none]=\"!topicHasError || topic.untouched\">Escolha um Estado</small>\r\n                                        </div> \r\n                                        <div class=\"col-5\">   \r\n                                            <label for=\"uname1\">Cep</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorGroupData.zipcode\" name=\"zipCode\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^([0-9]{5})(-)([0-9]{3})$\" placeHolder=\"12345-678\"\r\n                                            [class.is-invalid]=\"zipCode.invalid && zipCode.touched\" #zipCode=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"zipCode.valid || zipCode.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"zipCode.errors && zipCode.errors.required\">\r\n                                                    Cep obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\" *ngIf=\"zipCode.errors && zipCode.errors.pattern\">\r\n                                                    Cep inválido (Ex.: 12345-678)\r\n                                                </small>\r\n                                            </div>                                   \r\n                                        </div> \r\n                                    </div> \r\n                                </div>    \r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"updateCreditorGroup()\" class=\"btn btn-rainti btn-block\">Alterar</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"deleteCreditorGroup()\" class=\"btn btn-danger btn-block\">Excluir</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>  \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"backToCreditorGroup()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>  \r\n\t\t\t\t\t\t\t\t\t</div>                            \r\n\t\t\t\t\t\t\t\t</div>    \r\n                            </form>                \r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"nav-contract\" role=\"tabpanel\" aria-labelledby=\"nav-contract-tab\">\r\n                            <form class=\"form\" #contractForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Contrato</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorGroupData.contract\" name=\"contract\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^.{6,}$\" placeHolder=\"A1B23C\"\r\n                                            [class.is-invalid]=\"contract.invalid && contract.touched\" #contract=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"contract.valid || contract.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"contract.errors && contract.errors.required\">\r\n                                                    contrato inválido (Minimo 6 posições)\r\n                                                </small>\r\n                                                <small  class=\"text-danger\" *ngIf=\"contract.errors && contract.errors.pattern\">\r\n                                                    contrato inválido (Ex.: A1B23C minimo 6 posições)\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Data Inicio</label>\r\n                                            <input type=\"date\" [(ngModel)]=\"creditorGroupData.startdate\" name=\"startDate\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"startDate.invalid && startDate.touched\" #startDate=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"startDate.valid || startDate.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"startDate.errors && startDate.errors.required\">\r\n                                                    Data Inicio inválida \r\n                                                </small>\r\n                                            </div>\r\n                                        </div> \r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Data Final</label>\r\n                                            <input type=\"date\" [(ngModel)]=\"creditorGroupData.enddate\" name=\"endDate\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"endDate.invalid && endDate.touched\" #endDate=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"endDate.valid || endDate.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"endDate.errors && endDate.errors.required\">\r\n                                                    Data Final inválida \r\n                                                </small>\r\n                                            </div>\r\n                                        </div>    \r\n                                    </div>                                                   \r\n                                </div>\r\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"updateCreditorGroup()\" class=\"btn btn-rainti btn-block\">Alterar</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"deleteCreditorGroup()\" class=\"btn btn-danger btn-block\">Excluir</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>  \r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button type=\"submit\" (click)=\"backToCreditorGroup()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>  \r\n\t\t\t\t\t\t\t\t\t</div>                            \r\n\t\t\t\t\t\t\t\t</div>     \r\n                            </form> \r\n                        </div>\r\n                    </div>\r\n                    <hr/>\r\n                    <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_errorMessage\">\r\n                        {{_errorMessage}}\r\n                    </div> \r\n                    <div class=\"alert alert-primary text-center text-primary\" *ngIf=\"_registerUpdated\">\r\n                        {{_registerUpdated}}\r\n                    </div>                                    \r\n                  </div>\r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-main/creditor-group-main.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-main/creditor-group-main.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"card shadow rounded\" style=\"padding: 30px\">\r\n  <div class=\"row justify-content-lg align-items-center\">\r\n    <div class=\"col\">\r\n      <h1>Gestora</h1>  \r\n    </div>  \r\n    <div class=\"col-md-auto\">    \r\n      <form class=\"form-inline \">\r\n        <div class=\"row align-items-center mb-1\">          \r\n          <div class=\"col\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n          </div>            \r\n        </div>   \r\n      </form> \r\n    </div>\r\n  </div>\r\n  <hr/>\r\n  <div class=\"row mt-2\" style=\"padding-top: 10px; height: 650px; overflow-y: scroll; white-space: nowrap;\">    \r\n      <div class=\"col-md-4 mb-4\" *ngFor=\"let entity of entities | filter: searchText\"> \r\n        <div class=\"card text shadow rounded\">\r\n          <div class=\"card-body \">\r\n            <h5 class=\"card-title \">{{entity.businessname}}</h5>\r\n            <hr/>\r\n            <p class=\"card-text\"><b>CNPJ:</b> {{entity.cnpj}}</p>\r\n            <p class=\"card-text\"><b>tel.:</b> {{entity.phone}}</p>\r\n            <p class=\"card-text\"><b>e-mail:</b> {{entity.email}}</p>          \r\n          </div>\r\n          <div class=\"card-footer text-muted\">\r\n            <div class=\"row align-items-center mb-1\">    \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-md btn-block\" routerLink=\"/gestor-detalhe/{{entity.id}}\" routerLinkActive=\"active\" >Editar</button>\r\n              </div>        \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-info btn-md btn-block\" routerLink=\"/gestor-contatos/{{entity.id}}\" routerLinkActive=\"active\">Contatos</button>\r\n              </div>            \r\n            </div>         \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-add/creditor-add.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-add/creditor-add.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 mx-auto\">\r\n            <span class=\"anchor\" id=\"creditorAdd\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Cadastro de Credora</h4>\r\n                    <hr/>\r\n                    <nav>\r\n                        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                        <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" [ngClass]=\"{'active':activeTab==='nav-home'}\" (click)=\"nextTab('nav-home')\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Geral</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-address-tab\" data-toggle=\"tab\" href=\"#nav-address\" [ngClass]=\"{'active':activeTab==='nav-address'}\" (click)=\"nextTab('nav-address')\" role=\"tab\" aria-controls=\"nav-address\" aria-selected=\"false\">Endereço</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-contract-tab\" data-toggle=\"tab\" href=\"#nav-contract\" [ngClass]=\"{'active':activeTab==='nav-contract'}\" (click)=\"nextTab('nav-contract')\" role=\"tab\" aria-controls=\"nav-contract\" aria-selected=\"false\">Contrato</a>\r\n                        <a class=\"nav-item nav-link\" id=\"nav-entities-tab\" data-toggle=\"tab\" href=\"#nav-entities\" [ngClass]=\"{'active':activeTab==='nav-entities'}\" (click)=\"nextTab('nav-entities')\" role=\"tab\" aria-controls=\"nav-entities\" aria-selected=\"false\">Entidades</a>\r\n                        </div>\r\n                    </nav>\r\n                    <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                        <div [ngClass]=\"{'show active':activeTab==='nav-home'}\" class=\"tab-pane fade\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">    \r\n                            <form class=\"form\" #registerForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Razão Social</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorData.businessname\" name=\"businessName\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"businessName.invalid && businessName.touched\" #businessName=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"businessName.valid || businessName.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"businessName.errors && businessName.errors.required\">\r\n                                            Razão Social obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Nome Fantasia</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorData.fantasyname\" name=\"fantasyName\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"fantasyName.invalid && fantasyName.touched\" #fantasyName=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"fantasyName.valid || fantasyName.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"fantasyName.errors && fantasyName.errors.required\">\r\n                                            Nome Fantasia obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">CNPJ</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorData.cnpj\" name=\"cnpj\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}(-\\d{2})$\" placeHolder=\"12.123.123/0001-12\"\r\n                                            [class.is-invalid]=\"cnpj.invalid && cnpj.touched\" #cnpj=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"cnpj.valid || cnpj.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"cnpj.errors && cnpj.errors.required\">\r\n                                                    CNPJ obrigatório \r\n                                                </small>\r\n                                                <small  class=\"text-danger\" *ngIf=\"cnpj.errors && cnpj.errors.pattern\">\r\n                                                    CNPJ inválido (Ex.: 12.123.123/0001-12)\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>   \r\n                                    </div>\r\n                                </div>     \r\n                                <div class=\"form-group\">                            \r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-2\">\r\n                                            <label for=\"uname1\">DDD</label>\r\n                                            <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                            placeHolder=\"11\"\r\n                                            [(ngModel)]=\"creditorData.dddmodel\" name=\"dddModel\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"dddModel.invalid && dddModel.touched\" #dddModel=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"dddModel.valid || dddModel.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"dddModel.errors && dddModel.errors.required\">\r\n                                                    DDD obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\"*ngIf=\"(dddModel.errors && dddModel.errors.pattern) || ddHasError\">\r\n                                                    DDD inválido\r\n                                                </small>\r\n                                            </div>                                            \r\n                                        </div>\r\n                                        <div class=\"col-7\">\r\n                                            <label for=\"uname1\">Telefone</label>\r\n                                            <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                            placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                            [(ngModel)]=\"creditorData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                                    Telefone obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                                    Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>                          \r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">E-mail</label>\r\n                                    <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                                    placeHolder=\"example@example.com\"\r\n                                    [(ngModel)]=\"creditorData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                            e-mail obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                            e-mail inválido (Ex.: example@example.com)\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\t\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" [ngClass]=\"{'active':activeTab==='nav-home'}\" (click)=\"nextTab('nav-address')\" class=\"btn btn-rainti btn-block \">Próximo</button>                \r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" (click)=\"backToCreditor()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div>   \t\r\n                            </form>                \r\n                        </div>\r\n                        <div [ngClass]=\"{'show active':activeTab==='nav-address'}\" class=\"tab-pane fade\" id=\"nav-address\" role=\"tabpanel\" aria-labelledby=\"nav-address-tab\">\r\n                            <form class=\"form\" #addressForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Logradouro</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorData.address\" name=\"address\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"address.invalid && address.touched\" #address=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"address.valid || address.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"address.errors && address.errors.required\">\r\n                                            Logradouro obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-4\">\r\n                                            <label for=\"uname1\">Número</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorData.streetnumber\" name=\"streetNumber\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"streetNumber.invalid && streetNumber.touched\" #streetNumber=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"streetNumber.valid || streetNumber.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"streetNumber.errors && streetNumber.errors.required\">\r\n                                                    Número do Logradouro obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Complemento Endereço</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorData.addresscomplement\" name=\"addressComplement\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"addressComplement.invalid && addressComplement.touched\" #addressComplement=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"addressComplement.valid || addressComplement.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"addressComplement.errors && addressComplement.errors.required\">\r\n                                            Complemento Endereço obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Bairro</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorData.district\" name=\"district\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"district.invalid && district.touched\" #district=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"district.valid || district.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"district.errors && district.errors.required\">\r\n                                                    Bairro obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>                                       \r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Municipio</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorData.county\" name=\"county\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"county.invalid && county.touched\" #county=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"county.valid || county.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"county.errors && county.errors.required\">\r\n                                                    Municipio obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>                                                                                    \r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-7\">\r\n                                            <label for=\"uname1\">Estado</label>\r\n                                            <select class=\"custom-select\" \r\n                                            #topic=\"ngModel\" [class.is-invalid]=\"topicHasError && topic.touched\" name=\"topic\" \r\n                                            [(ngModel)]=\"creditorData.topic\" (change)=\"validateTopic(topic.value)\" (blur)=\"validateTopic(topic.value)\">                            \r\n                                                <option value=\"default\">--Escolha um Estado</option>\r\n                                                <option *ngFor=\"let state of _states\">{{ state.description }}</option>\r\n                                            </select>\r\n                                            <small class=\"text-danger\" [class.d-none]=\"!topicHasError || topic.untouched\">Escolha um Estado</small>\r\n                                        </div>\r\n                                    </div>     \r\n                                    <div class=\"col-5\"> \r\n                                        <label for=\"uname1\">Cep</label>\r\n                                        <input type=\"text\" [(ngModel)]=\"creditorData.zipcode\" name=\"zipCode\" class=\"form-control rounded-0\" \r\n                                        pattern=\"^([0-9]{5})(-)([0-9]{3})$\" placeHolder=\"12345-678\"\r\n                                        [class.is-invalid]=\"zipCode.invalid && zipCode.touched\" #zipCode=\"ngModel\" required >\r\n                                        <div class=\"md-errors-spacer\" [hidden]=\"zipCode.valid || zipCode.untouched\">\r\n                                            <small  class=\"text-danger\"*ngIf=\"zipCode.errors && zipCode.errors.required\">\r\n                                                Cep obrigatório\r\n                                            </small>\r\n                                            <small  class=\"text-danger\" *ngIf=\"zipCode.errors && zipCode.errors.pattern\">\r\n                                                Cep inválido (Ex.: 12345-678)\r\n                                            </small>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" [ngClass]=\"{'active':activeTab==='nav-address'}\" (click)=\"nextTab('nav-contract')\" class=\"btn btn-rainti btn-block \">Próximo</button>                \r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" (click)=\"backToCreditor()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div>  \r\n                            </form>                \r\n                        </div>\r\n                        <div [ngClass]=\"{'show active':activeTab==='nav-contract'}\" class=\"tab-pane fade\" id=\"nav-contract\" role=\"tabpanel\" aria-labelledby=\"nav-contract-tab\">\r\n                            <form class=\"form\" #contractForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Contrato</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorData.contract\" name=\"contract\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^.{6,}$\" placeHolder=\"A1B23C\"\r\n                                            [class.is-invalid]=\"contract.invalid && contract.touched\" #contract=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"contract.valid || contract.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"contract.errors && contract.errors.required\">\r\n                                                    contrato inválido (Minimo 6 posições)\r\n                                                </small>\r\n                                                <small  class=\"text-danger\" *ngIf=\"contract.errors && contract.errors.pattern\">\r\n                                                    contrato inválido (Ex.: A1B23C minimo 6 posições)\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Data Inicio</label>\r\n                                            <input type=\"date\" [(ngModel)]=\"creditorData.startdate\" name=\"startDate\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"startDate.invalid && startDate.touched\" #startDate=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"startDate.valid || startDate.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"startDate.errors && startDate.errors.required\">\r\n                                                    Data Inicio inválida \r\n                                                </small>\r\n                                            </div>  \r\n                                        </div>   \r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Data Final</label>\r\n                                            <input type=\"date\" [(ngModel)]=\"creditorData.enddate\" name=\"endDate\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"endDate.invalid && endDate.touched\" #endDate=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"endDate.valid || endDate.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"endDate.errors && endDate.errors.required\">\r\n                                                    Data Final inválida \r\n                                                </small>\r\n                                            </div>\t\r\n                                        </div>  \r\n                                    </div>  \r\n                                </div>\t\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" [ngClass]=\"{'active':activeTab==='nav-contract'}\" (click)=\"nextTab('nav-entities')\" class=\"btn btn-rainti btn-block \">Próximo</button>                \r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" (click)=\"backToCreditor()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div>  \r\n                            </form>                \r\n                        </div>\r\n                        <div [ngClass]=\"{'show active':activeTab==='nav-entities'}\" class=\"tab-pane fade\" id=\"nav-entities\" role=\"tabpanel\" aria-labelledby=\"nav-entities-tab\">\r\n                            <form class=\"form\" #entitiesForm=\"ngForm\"> \r\n                                <div class=\"form-group\" style=\"padding-top: 10px;\">                                                                                      \r\n                                    <div class=\"row\">         \r\n                                        <div class=\"col-md-6\">  \r\n                                            <div class=\"form border\" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                                <div class=\"col\">\r\n                                                    <label >Detran(s)</label>                                                     \r\n                                                </div>\r\n                                                <div class=\"col\">\r\n                                                    <div class=\"row\">\r\n                                                        <div clss=\"col-md-4\">\r\n                                                            <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTextDetran\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                                        </div>\r\n                                                        <div clss=\"col-md-2\" data-toggle=\"buttons\">\r\n                                                            <label class=\"btn btn-outline-rainti\" >\r\n                                                                <input type=\"checkbox\" (click)=\"checkAllOptions()\">Todos\r\n                                                            </label>\r\n                                                        </div >\r\n                                                        \r\n                                                    </div>                                                    \r\n                                                </div>\r\n                                                \r\n                                            </div>  \r\n                                            <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                                <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  required>    \r\n                                                    <div class=\"text-left\" *ngFor=\"let detran of _detrans | filterDescription : searchTextDetran\">\r\n                                                        <label class=\"btn btn-outline-rainti\" >\r\n                                                            <input type=\"checkbox\" [checked]=\"detran.checked\" name=\"detranOptions\" id=\"{{detran.id}}\" autocomplete=\"off\" (change)=\"checkDetransChange($event)\"> {{ detran.description }}\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div> \r\n                                        <div class=\"col-md-6\">  \r\n                                            <div class=\"form border\" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                                <div class=\"col\">\r\n                                                    <label >Gestora(s)</label>       \r\n                                                </div>\r\n                                                <div class=\"col\">\r\n                                                    <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchCreditorGroup\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                                </div>                                                    \r\n                                            </div>   \r\n                                            <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                                <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  required>                                                                                \r\n                                                    <div class=\"text-left\" *ngFor=\"let creditorgroup of _creditorsgroup | filterDescription : searchCreditorGroup\"> \r\n                                                        <label class=\"btn btn-outline-rainti\" >\r\n                                                            <input type=\"radio\" [checked]=\"creditorgroup.checked\" name=\"creditorgroupOptions\" id=\"{{creditorgroup.id}}\" autocomplete=\"off\" (change)=\"checkCreditorsGroupChange($event)\"> {{ creditorgroup.description }}\r\n                                                        </label>\r\n                                                    </div>                                                     \r\n                                                </div>  \r\n                                            </div>  \r\n                                        </div>         \r\n                                    </div>    \r\n                                            \r\n                                </div>\r\n                                      \r\n                                      \r\n                                                          \r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" [disabled]=\"entitiesForm.form.invalid\" (click)=\"createCreditor()\" class=\"btn btn-rainti btn-block \">Confirmar</button>                \r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" (click)=\"backToCreditor()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div>    \r\n                            </form>                \r\n                        </div>\r\n                    </div>\r\n                    <hr/>\r\n                    <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_errorMessage\">\r\n                        {{_errorMessage}}\r\n                    </div> \r\n                    <div class=\"alert alert-primary text-center text-primary\" *ngIf=\"_createdMessage\">\r\n                        {{_createdMessage}}\r\n                    </div>    \r\n                </div>                             \r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n\r\n    \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-contact-add/creditor-contact-add.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-contact-add/creditor-contact-add.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n            <span class=\"anchor\" id=\"formLogin\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Cadastrar Contato</h4>\r\n                    <hr/>\r\n                    <form class=\"form\" #registerForm=\"ngForm\">                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Nome</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.name\" name=\"name\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"name.invalid && name.touched\" #name=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"name.valid || name.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"name.errors && name.errors.required\">\r\n                                            Nome obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"form-group\">                            \r\n                            <div class=\"row\">\r\n                                <div class=\"col-3\">\r\n                                    <label for=\"uname1\">DDD</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                    placeHolder=\"11\"\r\n                                    [(ngModel)]=\"userData.dddModel\" name=\"dddModel\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"dddModel.invalid && dddModel.touched\" #dddModel=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"dddModel.valid || dddModel.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"dddModel.errors && dddModel.errors.required\">\r\n                                            DDD obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"(dddModel.errors && dddModel.errors.pattern) || ddHasError\">\r\n                                            DDD inválido\r\n                                        </small>\r\n                                   </div>\r\n                                  \r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <label for=\"uname1\">Telefone</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                    placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                    [(ngModel)]=\"userData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                            Telefone obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                            Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                        </small>\r\n                                   </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">E-mail</label>\r\n                            <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                            placeHolder=\"example@example.com\"\r\n                            [(ngModel)]=\"userData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                            <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                    e-mail obrigatório\r\n                                </small>\r\n                                <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                    e-mail inválido (Ex.: example@example.com)\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Informações adicionais</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.additionalInfo\" name=\"additionalInfo\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"additionalInfo.invalid && additionalInfo.touched\" #additionalInfo=\"ngModel\" >\r\n                        </div>\r\n                        <hr/>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" (click)=\"addCreditorContact()\" class=\"btn btn-rainti btn-block \">Adicionar</button>                \r\n                                </div>  \r\n                                <div class=\"col-sm-6\">\r\n                                    <button type=\"submit\" (click)=\"backToCreditorContacts()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                </div>  \r\n                            </div>                            \r\n                        </div>                             \r\n                        <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_errorMessage\">\r\n                            {{_errorMessage}}\r\n                        </div> \r\n                        <div class=\"alert alert-primary text-center text-primary\" *ngIf=\"_createdMessage\">\r\n                            {{_createdMessage}}\r\n                        </div>                                  \r\n                       \r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-contact-detail/creditor-contact-detail.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-contact-detail/creditor-contact-detail.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n            <span class=\"anchor\" id=\"formLogin\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Editar Contato</h4>\r\n                    <hr/>\r\n                    <form class=\"form\" #registerForm=\"ngForm\">                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Nome</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.name\" name=\"name\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"name.invalid && name.touched\" #name=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"name.valid || name.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"name.errors && name.errors.required\">\r\n                                            Nome obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"form-group\">                            \r\n                            <div class=\"row\">\r\n                                <div class=\"col-3\">\r\n                                    <label for=\"uname1\">DDD</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                    placeHolder=\"11\"\r\n                                    [(ngModel)]=\"userData.dddmodel\" name=\"dddmodel\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"dddmodel.invalid && dddmodel.touched\" #dddmodel=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"dddmodel.valid || dddmodel.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"dddmodel.errors && dddmodel.errors.required\">\r\n                                            DDD obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"(dddmodel.errors && dddmodel.errors.pattern) || ddHasError\">\r\n                                            DDD inválido\r\n                                        </small>\r\n                                   </div>\r\n                                  \r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <label for=\"uname1\">Telefone</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                    placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                    [(ngModel)]=\"userData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                            Telefone obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                            Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                        </small>\r\n                                   </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">E-mail</label>\r\n                            <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                            placeHolder=\"example@example.com\"\r\n                            [(ngModel)]=\"userData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                            <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                    e-mail obrigatório\r\n                                </small>\r\n                                <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                    e-mail inválido (Ex.: example@example.com)\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Informações adicionais</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.additionalinfo\" name=\"additionalinfo\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"additionalinfo.invalid && additionalinfo.touched\" #additionalinfo=\"ngModel\" >\r\n                        </div>\r\n                        <hr/>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" (click)=\"updateCreditorContactById()\" class=\"btn btn-rainti btn-block \">Alterar</button>                \r\n                                </div> \r\n                                <div class=\"col-sm-4\">\r\n                                    <button type=\"submit\"  (click)=\"deleteCreditorContactById()\" class=\"btn btn-danger btn-block \">Desativar</button>                \r\n                                </div>  \r\n                                <div class=\"col-sm-4\">\r\n                                    <button type=\"submit\" (click)=\"backToCreditorContacts()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                </div>  \r\n                            </div>                            \r\n                        </div>                             \r\n                        <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_errorMessage\">\r\n                            {{_errorMessage}}\r\n                        </div>                                  \r\n                        <div class=\"alert alert-primary text-center text-primary\" *ngIf=\"_updatedMessage\">\r\n                            {{_updatedMessage}}\r\n                        </div>  \r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-contacts/creditor-contacts.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-contacts/creditor-contacts.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card shadow rounded\" style=\"padding: 30px\">\r\n  <div class=\"row justify-content-lg align-items-center\">\r\n    <div class=\"col\">\r\n      <h1>Contatos</h1>  \r\n    </div>  \r\n    <div class=\"col-md-auto\">\r\n      <div class=\"row align-items-center mb-1\">    \r\n        <div class=\"col\">\r\n          <button type=\"button\" class=\"btn btn-rainti btn-md btn-block\" (click)=\"addCreditorContact()\">Adicionar</button>\r\n        </div>        \r\n        <div class=\"col\">\r\n          <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n        </div>            \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr/>\r\n  <div class=\"row mt-2\" style=\"padding-top: 10px; height: 650px; overflow-y: scroll; white-space: nowrap;\">    \r\n      <div class=\"col-md-4 mb-4\" *ngFor=\"let creditorContact of creditorContacts | filter: searchText\"> \r\n        <div class=\"card text shadow rounded\">\r\n          <div class=\"card-body \">\r\n            <h5 class=\"card-title \">{{creditorContact.name}}</h5>\r\n            <hr/>\r\n            <p class=\"card-text\"><b>Tel.:</b> {{creditorContact.tel}}</p>\r\n            <p class=\"card-text\"><b>e-mail:</b> {{creditorContact.email}}</p>          \r\n            <p class=\"card-text\" *ngIf=\"creditorContact.additionalinfo\"><b>Info. adicionais:</b> {{creditorContact.additionalinfo}}</p>         \r\n          </div>\r\n          <div class=\"card-footer text-muted\">\r\n            <div class=\"row align-items-center mb-1\">    \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-rainti btn-md btn-block\" routerLink=\"/credor-detalhe-contato/{{creditorContact.id}}\" routerLinkActive=\"active\" >Editar</button>\r\n              </div>                    \r\n            </div>         \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-detail/creditor-detail.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-detail/creditor-detail.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n            <span class=\"anchor\" id=\"creditorDetail\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Editar da Credora</h4>\r\n                    <hr/>\r\n                    <nav>\r\n                        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                            <a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#nav-home\" role=\"tab\" aria-controls=\"nav-home\" aria-selected=\"true\">Geral</a>\r\n                            <a class=\"nav-item nav-link\" id=\"nav-address-tab\" data-toggle=\"tab\" href=\"#nav-address\" role=\"tab\" aria-controls=\"nav-address\" aria-selected=\"false\">Endereço</a>\r\n                            <a class=\"nav-item nav-link\" id=\"nav-contract-tab\" data-toggle=\"tab\" href=\"#nav-contract\" role=\"tab\" aria-controls=\"nav-contract\" aria-selected=\"false\">Contrato</a>\r\n                            <a class=\"nav-item nav-link\" id=\"nav-entities-tab\" data-toggle=\"tab\" href=\"#nav-entities\" role=\"tab\" aria-controls=\"nav-entities\" aria-selected=\"false\">Entidades</a>\r\n                        </div>\r\n                    </nav>\r\n                    <div class=\"tab-content\" id=\"nav-tabContent\">\r\n                        <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\r\n                            <form class=\"form\" #registerForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Razão Social</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorData.businessname\" name=\"businessName\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"businessName.invalid && businessName.touched\" #businessName=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"businessName.valid || businessName.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"businessName.errors && businessName.errors.required\">\r\n                                            Razão Social obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Nome Fantasia</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorData.fantasyname\" name=\"fantasyName\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"fantasyName.invalid && fantasyName.touched\" #fantasyName=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"fantasyName.valid || fantasyName.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"fantasyName.errors && fantasyName.errors.required\">\r\n                                            Nome Fantasia obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">CNPJ</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorData.cnpj\" name=\"cnpj\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}(-\\d{2})$\" placeHolder=\"12.123.123/0001-12\"\r\n                                            [class.is-invalid]=\"cnpj.invalid && cnpj.touched\" #cnpj=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"cnpj.valid || cnpj.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"cnpj.errors && cnpj.errors.required\">\r\n                                                    CNPJ obrigatório \r\n                                                </small>\r\n                                                <small  class=\"text-danger\" *ngIf=\"cnpj.errors && cnpj.errors.pattern\">\r\n                                                    CNPJ inválido (Ex.: 12.123.123/0001-12)\r\n                                                </small>\r\n                                            </div>      \r\n                                        </div>   \r\n                                    </div>\r\n                                </div>     \r\n                                <div class=\"form-group\">                            \r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-2\">\r\n                                            <label for=\"uname1\">DDD</label>\r\n                                            <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                            placeHolder=\"11\"\r\n                                            [(ngModel)]=\"creditorData.dddmodel\" name=\"dddModel\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"dddModel.invalid && dddModel.touched\" #dddModel=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"dddModel.valid || dddModel.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"dddModel.errors && dddModel.errors.required\">\r\n                                                    DDD obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\"*ngIf=\"(dddModel.errors && dddModel.errors.pattern) || ddHasError\">\r\n                                                    DDD inválido\r\n                                                </small>\r\n                                            </div>                                         \r\n                                        </div>\r\n                                        <div class=\"col-7\">\r\n                                            <label for=\"uname1\">Telefone</label>\r\n                                            <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                            placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                            [(ngModel)]=\"creditorData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                                    Telefone obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                                    Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>                          \r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">E-mail</label>\r\n                                    <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                                    placeHolder=\"example@example.com\"\r\n                                    [(ngModel)]=\"creditorData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                            e-mail obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                            e-mail inválido (Ex.: example@example.com)\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\t\r\n\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"submit\" (click)=\"updateCreditor()\" class=\"btn btn-rainti btn-block\">Alterar</button>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"submit\" (click)=\"deleteCreditor()\" class=\"btn btn-danger btn-block\">Desativar</button>\r\n                                        </div>  \r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"submit\" (click)=\"backToCreditor()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div>     \r\n                            </form>                \r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"nav-address\" role=\"tabpanel\" aria-labelledby=\"nav-address-tab\">\r\n                            <form class=\"form\" #addressForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Logradouro</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorData.address\" name=\"address\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"address.invalid && address.touched\" #address=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"address.valid || address.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"address.errors && address.errors.required\">\r\n                                            Logradouro obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-4\">\r\n                                            <label for=\"uname1\">Número</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorData.streetnumber\" name=\"streetNumber\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"streetNumber.invalid && streetNumber.touched\" #streetNumber=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"streetNumber.valid || streetNumber.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"streetNumber.errors && streetNumber.errors.required\">\r\n                                                    Número do Logradouro obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Complemento Endereço</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"creditorData.addresscomplement\" name=\"addressComplement\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"addressComplement.invalid && addressComplement.touched\" #addressComplement=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"addressComplement.valid || addressComplement.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"addressComplement.errors && addressComplement.errors.required\">\r\n                                                    Complemento Endereço obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Bairro</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorData.district\" name=\"district\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"district.invalid && district.touched\" #district=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"district.valid || district.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"district.errors && district.errors.required\">\r\n                                                    Bairro obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>    \r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Municipio</label>\r\n                                             <input type=\"text\" [(ngModel)]=\"creditorData.county\" name=\"county\" class=\"form-control rounded-0\" \r\n                                             [class.is-invalid]=\"county.invalid && county.touched\" #county=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"county.valid || county.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"county.errors && county.errors.required\">\r\n                                                    Municipio obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>                                                   \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-7\">\r\n                                            <label for=\"uname1\">Estado</label>\r\n                                            <select class=\"custom-select\" \r\n                                            #topic=\"ngModel\" [class.is-invalid]=\"topicHasError && topic.touched\" name=\"topic\" \r\n                                            [(ngModel)]=\"creditorData.topic\" (change)=\"validateTopic(topic.value)\" (blur)=\"validateTopic(topic.value)\">                            \r\n                                                <option value=\"default\">{{creditorData.topic }}</option>\r\n                                                <option *ngFor=\"let state of _states\">{{ state.description }}</option>\r\n                                            </select>\r\n                                            <small class=\"text-danger\" [class.d-none]=\"!topicHasError || topic.untouched\">Escolha um Estado</small>\r\n                                        </div> \r\n                                        <div class=\"col-5\">   \r\n                                            <label for=\"uname1\">Cep</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorData.zipcode\" name=\"zipCode\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^([0-9]{5})(-)([0-9]{3})$\" placeHolder=\"12345-678\"\r\n                                            [class.is-invalid]=\"zipCode.invalid && zipCode.touched\" #zipCode=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"zipCode.valid || zipCode.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"zipCode.errors && zipCode.errors.required\">\r\n                                                    Cep obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\" *ngIf=\"zipCode.errors && zipCode.errors.pattern\">\r\n                                                    Cep inválido (Ex.: 12345-678)\r\n                                                </small>\r\n                                            </div>                                   \r\n                                        </div> \r\n                                    </div> \r\n                                </div>    \r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"submit\" (click)=\"updateCreditor()\" class=\"btn btn-rainti btn-block\">Alterar</button>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"submit\" (click)=\"deleteCreditor()\" class=\"btn btn-danger btn-block\">Desativar</button>\r\n                                        </div>  \r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"submit\" (click)=\"backToCreditor()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div>     \r\n                            </form>                \r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"nav-contract\" role=\"tabpanel\" aria-labelledby=\"nav-contract-tab\">\r\n                            <form class=\"form\" #contractForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Contrato</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"creditorData.contract\" name=\"contract\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^.{6,}$\" placeHolder=\"A1B23C\"\r\n                                            [class.is-invalid]=\"contract.invalid && contract.touched\" #contract=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"contract.valid || contract.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"contract.errors && contract.errors.required\">\r\n                                                    contrato inválido (Minimo 6 posições)\r\n                                                </small>\r\n                                                <small  class=\"text-danger\" *ngIf=\"contract.errors && contract.errors.pattern\">\r\n                                                    contrato inválido (Ex.: A1B23C minimo 6 posições)\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Data Inicio</label>\r\n                                            <input type=\"date\" [(ngModel)]=\"creditorData.startdate\" name=\"startDate\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"startDate.invalid && startDate.touched\" #startDate=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"startDate.valid || startDate.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"startDate.errors && startDate.errors.required\">\r\n                                                    Data Inicio inválida \r\n                                                </small>\r\n                                            </div>\r\n                                        </div> \r\n                                        <div class=\"col-6\">\r\n                                            <label for=\"uname1\">Data Final</label>\r\n                                            <input type=\"date\" [(ngModel)]=\"creditorData.enddate\" name=\"endDate\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"endDate.invalid && endDate.touched\" #endDate=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"endDate.valid || endDate.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"endDate.errors && endDate.errors.required\">\r\n                                                    Data Final inválida \r\n                                                </small>\r\n                                            </div>\r\n                                        </div>    \r\n                                    </div>                                                   \r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"submit\" (click)=\"updateCreditor()\" class=\"btn btn-rainti btn-block\">Alterar</button>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"submit\" (click)=\"deleteCreditor()\" class=\"btn btn-danger btn-block\">Desativar</button>\r\n                                        </div>  \r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"submit\" (click)=\"backToCreditor()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div>  \r\n                            </form> \r\n                        </div>\r\n                        <div class=\"tab-pane fade\" id=\"nav-entities\" role=\"tabpanel\" aria-labelledby=\"nav-entities-tab\">\r\n                            <form class=\"form\" #entitiesForm=\"ngForm\"> \r\n                                <nav>\r\n                                    <div class=\"nav nav-tabs2\" id=\"nav-tab2\" role=\"tablist2\">\r\n                                        <a class=\"nav-item2 nav-link active\" id=\"nav-detrans-tab\" data-toggle=\"tab\" href=\"#nav-detrans\" role=\"tab\" aria-controls=\"nav-detran\" aria-selected=\"true\">Detrans</a>\r\n                                        <a class=\"nav-item2 nav-link\" id=\"nav-creditorsgroup-tab\" data-toggle=\"tab\" href=\"#nav-creditorsgroup\" role=\"tab\" aria-controls=\"nav-creditorsgroup\" aria-selected=\"false\">Gestoras</a>\r\n                                    </div>\r\n                                </nav>      \r\n                                <div class=\"tab-content\" id=\"nav-tabContent2\">\r\n                                    <div class=\"tab-pane fade show active\" id=\"nav-detrans\" role=\"tabpanel\" aria-labelledby=\"nav-detrans-tab\">\r\n                                        <form class=\"form\" #detransForm=\"ngForm\">\r\n                                            <div class=\"form-group\">\r\n                                                <div>\r\n                                                    <h5>Selecione os Detrans</h5>                                                                 \r\n                                                </div>                                    \r\n                                                <label>Selecionar/Limpar Todos: <input type=\"checkbox\" (click)=\"checkAllOptions()\"></label><br/>   \r\n                                                <div class=\"container-rainti btn-group btn-group-toggle btn-group-vertical\" style=\"padding-top: 10px;\"required>                                            \r\n                                                    <div class=\"text-left\" *ngFor=\"let detran of _detrans \">\r\n                                                        <label class=\"custom-control custom-checkbox\" >\r\n                                                            <input type=\"checkbox\" [checked]=\"detran.checked\" name=\"detranOptions\" id=\"{{detran.id}}\" autocomplete=\"off\" (change)=\"checkDetransChange($event)\"> {{ detran.description }}\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div> \r\n                                            </div>\r\n                                        </form>\r\n                                    </div>    \r\n                                    <div class=\"tab-pane fade\" id=\"nav-creditorsgroup\" role=\"tabpanel\" aria-labelledby=\"nav-creditorsgroup-tab\">\r\n                                        <form class=\"form\" #creditorsgroupForm=\"ngForm\">\r\n                                            <div class=\"form-group\">\r\n                                                <div>\r\n                                                    <h5>Selecione a Gestora</h5>                                                                 \r\n                                                </div>                                    \r\n                                                <div>\r\n                                                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"button\" class=\"btn btn-primary btn-sm\" data-toggle=\"button\" aria-pressed=\"false\" autocomplete=\"off\" (click)=\"uncheckAllOptions()\">Limpar</button>\r\n                                                </div>                                    \r\n                                                <div class=\"container-rainti btn-group btn-group-toggle btn-group-vertical\" style=\"padding-top: 20px;\">                                            \r\n                                                    <div class=\"text-left\" *ngFor=\"let creditorgroup of _creditorsgroup\">\r\n                                                        <label class=\"custom-control custom-checkbox\" >\r\n                                                            <input type=\"checkbox\" [checked]=\"creditorgroup.checked\" name=\"creditorgroupOptions\" id=\"{{creditorgroup.id}}\" autocomplete=\"off\" (change)=\"checkCreditorsGroupChange($event)\"> {{ creditorgroup.description }}\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div> \t\r\n                                            </div>\r\n                                        </form>\r\n                                    </div>    \r\n                                </div>                          \r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"submit\" (click)=\"updateCreditor()\" class=\"btn btn-rainti btn-block\">Alterar</button>\r\n                                        </div>\r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"submit\" (click)=\"deleteCreditor()\" class=\"btn btn-danger btn-block\">Desativar</button>\r\n                                        </div>  \r\n                                        <div class=\"col-sm-4\">\r\n                                            <button type=\"submit\" (click)=\"backToCreditor()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div>     \r\n                            </form>                \r\n                        </div>\r\n                    </div>\r\n                    <hr/>\r\n                    <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_errorMessage\">\r\n                        {{_errorMessage}}\r\n                    </div> \r\n                    <div class=\"alert alert-primary text-center text-primary\" *ngIf=\"_registerUpdated\">\r\n                        {{_registerUpdated}}\r\n                    </div>                                    \r\n                </div>\r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-main/creditor-main.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-main/creditor-main.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"card shadow rounded\" style=\"padding: 30px\">\r\n  <div class=\"row justify-content-lg align-items-center\">\r\n    <div class=\"col\">\r\n      <h1>Credora</h1>  \r\n    </div>  \r\n    <div class=\"col-md-auto\">    \r\n      <form class=\"form-inline \">\r\n        <div class=\"row align-items-center mb-1\">      \r\n          <div class=\"col\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n          </div>            \r\n        </div>   \r\n      </form> \r\n    </div>\r\n  </div>\r\n  <hr/>\r\n  <div class=\"row mt-2\" style=\"padding-top: 10px; height: 650px; overflow-y: scroll; white-space: nowrap;\">    \r\n      <div class=\"col-md-4 mb-4\" *ngFor=\"let entity of entities | filter: searchText\"> \r\n        <div class=\"card text shadow rounded\">\r\n          <div class=\"card-body \">\r\n            <h5 class=\"card-title \">{{entity.businessname}}</h5>\r\n            <hr/>\r\n            <p class=\"card-text\"><b>CNPJ:</b> {{entity.cnpj}}</p>\r\n            <p class=\"card-text\"><b>tel.:</b> {{entity.phone}}</p>\r\n            <p class=\"card-text\"><b>e-mail:</b> {{entity.email}}</p>          \r\n          </div>\r\n          <div class=\"card-footer text-muted\">\r\n            <div class=\"row align-items-center mb-1\">    \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-primary btn-md btn-block\" routerLink=\"/credor-detalhe/{{entity.id}}\" routerLinkActive=\"active\" >Editar</button>\r\n              </div>        \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-info btn-md btn-block\" routerLink=\"/credor-contatos/{{entity.id}}\" routerLinkActive=\"active\">Contatos</button>\r\n              </div>            \r\n            </div>         \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-add/detran-add.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-add/detran-add.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n            <span class=\"anchor\" id=\"detranAdd\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Cadastrar de Detran</h4>\r\n                    <hr/>\r\n                    <form class=\"form\" #registerForm=\"ngForm\">\r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Estado</label>\r\n                            <select class=\"custom-select\" \r\n                            #topic=\"ngModel\" [class.is-invalid]=\"topicHasError && topic.touched\" name=\"topic\" \r\n                            [(ngModel)]=\"userData.topic\" (change)=\"validateTopic(topic.value)\" (blur)=\"validateTopic(topic.value)\">                            \r\n                                <option value=\"default\">--Escolha um Estado</option>\r\n                                <option *ngFor=\"let state of _states\">{{ state.description }}</option>\r\n                            </select>\r\n                            <small class=\"text-danger\" [class.d-none]=\"!topicHasError || topic.untouched\">Escolha um Estado</small>\r\n                        </div>    \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Nome</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.userName\" name=\"userName\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"userName.invalid && userName.touched\" #userName=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"userName.valid || userName.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"userName.errors && userName.errors.required\">\r\n                                            Nome obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">CNPJ</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.cnpj\" name=\"cnpj\" class=\"form-control rounded-0\" \r\n                            pattern=\"^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}(-\\d{2})$\" placeHolder=\"12.123.123/0001-12\"\r\n                            [class.is-invalid]=\"cnpj.invalid && cnpj.touched\" #cnpj=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"cnpj.valid || cnpj.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"cnpj.errors && cnpj.errors.required\">\r\n                                            CNPJ obrigatório \r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"cnpj.errors && cnpj.errors.pattern\">\r\n                                            CNPJ inválido (Ex.: 12.123.123/0001-12)\r\n                                        </small>\r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"form-group\">                            \r\n                            <div class=\"row\">\r\n                                <div class=\"col-3\">\r\n                                    <label for=\"uname1\">DDD</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                    placeHolder=\"11\"\r\n                                    [(ngModel)]=\"userData.dddModel\" name=\"dddModel\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"dddModel.invalid && dddModel.touched\" #dddModel=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"dddModel.valid || dddModel.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"dddModel.errors && dddModel.errors.required\">\r\n                                            DDD obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"(dddModel.errors && dddModel.errors.pattern) || ddHasError\">\r\n                                            DDD inválido\r\n                                        </small>\r\n                                   </div>\r\n                                  \r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <label for=\"uname1\">Telefone</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                    placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                    [(ngModel)]=\"userData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                            Telefone obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                            Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                        </small>\r\n                                   </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">E-mail</label>\r\n                            <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                            placeHolder=\"example@example.com\"\r\n                            [(ngModel)]=\"userData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                            <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                    e-mail obrigatório\r\n                                </small>\r\n                                <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                    e-mail inválido (Ex.: example@example.com)\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                        <hr/>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <button type=\"submit\" [disabled]=\"registerForm.form.invalid || topicHasError\" (click)=\"createDetran()\" class=\"btn btn-rainti btn-block \">Confirmar</button>                \r\n                                </div>  \r\n                                <div class=\"col-sm-6\">\r\n                                    <button type=\"submit\" (click)=\"backToDetran()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                </div>  \r\n                            </div>                            \r\n                        </div>                             \r\n                        <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_errorMessage\">\r\n                            {{_errorMessage}}\r\n                        </div> \r\n                        <div class=\"alert alert-primary text-center text-primary\" *ngIf=\"_createdMessage\">\r\n                            {{_createdMessage}}\r\n                        </div>                                 \r\n                       \r\n                    </form>\r\n                  </div>\r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-contact-add/detran-contact-add.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-contact-add/detran-contact-add.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n            <span class=\"anchor\" id=\"formLogin\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Cadastrar Contato</h4>\r\n                    <hr/>\r\n                    <form class=\"form\" #registerForm=\"ngForm\">                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Nome</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.name\" name=\"name\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"name.invalid && name.touched\" #name=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"name.valid || name.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"name.errors && name.errors.required\">\r\n                                            Nome obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"form-group\">                            \r\n                            <div class=\"row\">\r\n                                <div class=\"col-3\">\r\n                                    <label for=\"uname1\">DDD</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                    placeHolder=\"11\"\r\n                                    [(ngModel)]=\"userData.dddModel\" name=\"dddModel\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"dddModel.invalid && dddModel.touched\" #dddModel=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"dddModel.valid || dddModel.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"dddModel.errors && dddModel.errors.required\">\r\n                                            DDD obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"(dddModel.errors && dddModel.errors.pattern) || ddHasError\">\r\n                                            DDD inválido\r\n                                        </small>\r\n                                   </div>\r\n                                  \r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <label for=\"uname1\">Telefone</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                    placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                    [(ngModel)]=\"userData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                            Telefone obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                            Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                        </small>\r\n                                   </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">E-mail</label>\r\n                            <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                            placeHolder=\"example@example.com\"\r\n                            [(ngModel)]=\"userData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                            <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                    e-mail obrigatório\r\n                                </small>\r\n                                <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                    e-mail inválido (Ex.: example@example.com)\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Informações adicionais</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.additionalInfo\" name=\"additionalInfo\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"additionalInfo.invalid && additionalInfo.touched\" #additionalInfo=\"ngModel\" >\r\n                        </div>\r\n                        <hr/>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" (click)=\"addDetranContact()\" class=\"btn btn-rainti btn-block \">Adicionar</button>                \r\n                                </div>  \r\n                                <div class=\"col-sm-6\">\r\n                                    <button type=\"submit\" (click)=\"backToDetranContacts()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                </div>  \r\n                            </div>                            \r\n                        </div>                             \r\n                        <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_errorMessage\">\r\n                            {{_errorMessage}}\r\n                        </div> \r\n                        <div class=\"alert alert-primary text-center text-primary\" *ngIf=\"_createdMessage\">\r\n                            {{_createdMessage}}\r\n                        </div>                                  \r\n                       \r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-contact-detail/detran-contact-detail.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-contact-detail/detran-contact-detail.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n            <span class=\"anchor\" id=\"formLogin\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Editar Contato</h4>\r\n                    <hr/>\r\n                    <form class=\"form\" #registerForm=\"ngForm\">                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Nome</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.name\" name=\"name\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"name.invalid && name.touched\" #name=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"name.valid || name.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"name.errors && name.errors.required\">\r\n                                            Nome obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"form-group\">                            \r\n                            <div class=\"row\">\r\n                                <div class=\"col-3\">\r\n                                    <label for=\"uname1\">DDD</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                    placeHolder=\"11\"\r\n                                    [(ngModel)]=\"userData.dddmodel\" name=\"dddmodel\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"dddmodel.invalid && dddmodel.touched\" #dddmodel=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"dddmodel.valid || dddmodel.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"dddmodel.errors && dddmodel.errors.required\">\r\n                                            DDD obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"(dddmodel.errors && dddmodel.errors.pattern) || ddHasError\">\r\n                                            DDD inválido\r\n                                        </small>\r\n                                   </div>\r\n                                  \r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <label for=\"uname1\">Telefone</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                    placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                    [(ngModel)]=\"userData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                            Telefone obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                            Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                        </small>\r\n                                   </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">E-mail</label>\r\n                            <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                            placeHolder=\"example@example.com\"\r\n                            [(ngModel)]=\"userData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                            <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                    e-mail obrigatório\r\n                                </small>\r\n                                <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                    e-mail inválido (Ex.: example@example.com)\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Informações adicionais</label>\r\n                            <input type=\"text\" [(ngModel)]=\"userData.additionalinfo\" name=\"additionalinfo\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"additionalinfo.invalid && additionalinfo.touched\" #additionalinfo=\"ngModel\" >\r\n                        </div>\r\n                        <hr/>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" (click)=\"updateDetranContactById()\" class=\"btn btn-rainti btn-block \">Alterar</button>                \r\n                                </div> \r\n                                <div class=\"col-sm-4\">\r\n                                    <button type=\"submit\"  (click)=\"deleteDetranContactById()\" class=\"btn btn-danger btn-block \">Excluir</button>                \r\n                                </div>  \r\n                                <div class=\"col-sm-4\">\r\n                                    <button type=\"submit\" (click)=\"backToDetranContacts()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                </div>  \r\n                            </div>                            \r\n                        </div>                             \r\n                        <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_errorMessage\">\r\n                            {{_errorMessage}}\r\n                        </div>                                  \r\n                        <div class=\"alert alert-primary text-center text-primary\" *ngIf=\"_updatedMessage\">\r\n                            {{_updatedMessage}}\r\n                        </div>  \r\n                    </form>\r\n                </div>\r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-contacts/detran-contacts.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-contacts/detran-contacts.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card shadow rounded\" style=\"padding: 30px\">\r\n  <div class=\"row justify-content-lg align-items-center\">\r\n    <div class=\"col\">\r\n      <h1>Contatos</h1>  \r\n    </div>  \r\n    <div class=\"col-md-auto\">\r\n      <div class=\"row align-items-center mb-1\">    \r\n        <div class=\"col\">\r\n          <button type=\"button\" class=\"btn btn-rainti btn-md btn-block\" (click)=\"addDetranContact()\">Adicionar</button>\r\n        </div>        \r\n        <div class=\"col\">\r\n          <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n        </div>            \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr/>\r\n  <div class=\"row mt-2\" style=\"padding-top: 10px; height: 650px; overflow-y: scroll; white-space: nowrap;\">    \r\n      <div class=\"col-md-4 mb-4\" *ngFor=\"let detranContact of detranContacts | filter: name : searchText\"> \r\n        <div class=\"card text shadow rounded\">\r\n          <div class=\"card-body \">\r\n            <h5 class=\"card-title \">{{detranContact.name}}</h5>\r\n            <hr/>\r\n            <p class=\"card-text\"><b>Tel.:</b> {{detranContact.tel}}</p>\r\n            <p class=\"card-text\"><b>e-mail:</b> {{detranContact.email}}</p>          \r\n            <p class=\"card-text\" *ngIf=\"detranContact.additionalinfo\"><b>Info. adicionais:</b> {{detranContact.additionalinfo}}</p>         \r\n          </div>\r\n          <div class=\"card-footer text-muted\">\r\n            <div class=\"row align-items-center mb-1\">    \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-rainti btn-md btn-block\" routerLink=\"/detran-detalhe-contato/{{detranContact.id}}\" routerLinkActive=\"active\" >Editar</button>\r\n              </div>                    \r\n            </div>         \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-detail/detran-detail.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-detail/detran-detail.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n            <span class=\"anchor\" id=\"detranAdd\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Editar de Detran</h4>\r\n                    <hr/>\r\n                    <form class=\"form\" #registerForm=\"ngForm\">\r\n                        <div class=\"form-group\">\r\n                            <h5>Estado: {{detranData.state}}</h5>\r\n                        </div>    \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Nome</label>\r\n                            <input type=\"text\" [(ngModel)]=\"detranData.name\" name=\"userName\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"userName.invalid && userName.touched\" #userName=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"userName.valid || userName.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"userName.errors && userName.errors.required\">\r\n                                            Nome obrigatório\r\n                                        </small>\r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">CNPJ</label>\r\n                            <input type=\"text\" [(ngModel)]=\"detranData.cnpj\" name=\"cnpj\" class=\"form-control rounded-0\" \r\n                            pattern=\"^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}(-\\d{2})$\" placeHolder=\"12.123.123/0001-12\"\r\n                            [class.is-invalid]=\"cnpj.invalid && cnpj.touched\" #cnpj=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"cnpj.valid || cnpj.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"cnpj.errors && cnpj.errors.required\">\r\n                                            CNPJ obrigatório \r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"cnpj.errors && cnpj.errors.pattern\">\r\n                                            CNPJ inválido (Ex.: 12.123.123/0001-12)\r\n                                        </small>\r\n                                    </div>\r\n                        </div>\r\n                        <div class=\"form-group\">                            \r\n                            <div class=\"row\">\r\n                                <div class=\"col-3\">\r\n                                    <label for=\"uname1\">DDD</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                    placeHolder=\"11\"\r\n                                    [(ngModel)]=\"detranData.dddmodel\" name=\"dddModel\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"dddModel.invalid && dddModel.touched\" #dddModel=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"dddModel.valid || dddModel.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"dddModel.errors && dddModel.errors.required\">\r\n                                            DDD obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"(dddModel.errors && dddModel.errors.pattern) || ddHasError\">\r\n                                            DDD inválido\r\n                                        </small>\r\n                                   </div>\r\n                                  \r\n                                </div>\r\n                                <div class=\"col\">\r\n                                    <label for=\"uname1\">Telefone</label>\r\n                                    <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                    placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                    [(ngModel)]=\"detranData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                            Telefone obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                            Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                        </small>\r\n                                   </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>                          \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">E-mail</label>\r\n                            <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                            placeHolder=\"example@example.com\"\r\n                            [(ngModel)]=\"detranData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                            [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                            <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                    e-mail obrigatório\r\n                                </small>\r\n                                <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                    e-mail inválido (Ex.: example@example.com)\r\n                                </small>\r\n                            </div>\r\n                        </div>\r\n                        <hr/> \r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-4\">\r\n                                    <button type=\"submit\" (click)=\"updateDetran()\" class=\"btn btn-rainti btn-block\">Alterar</button>\r\n                                </div>\r\n                                <div class=\"col-sm-4\">\r\n                                    <button type=\"submit\" (click)=\"deleteDetran()\" class=\"btn btn-danger btn-block\">Excluir</button>\r\n                                </div>  \r\n                                <div class=\"col-sm-4\">\r\n                                    <button type=\"submit\" (click)=\"backToDetran()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                </div>  \r\n                            </div>                            \r\n                        </div>                               \r\n                        <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_errorMessage\">\r\n                            {{_errorMessage}}\r\n                        </div> \r\n                        <div class=\"alert alert-primary text-center text-primary\" *ngIf=\"_registerUpdated\">\r\n                            {{_registerUpdated}}\r\n                        </div>                                  \r\n                       \r\n                    </form>\r\n                  </div>\r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-main/detran-main.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-main/detran-main.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card shadow rounded\" style=\"padding: 30px\">\r\n  <div class=\"row justify-content-lg align-items-center\" >\r\n    <div class=\"col\">\r\n      <h1>Detran</h1>  \r\n    </div>  \r\n    <div class=\"col-md-auto\">    \r\n      <form class=\"form-inline \">\r\n        <div class=\"row align-items-center mb-1\">    \r\n          <!-- <div class=\"col\">\r\n            <button type=\"button\" class=\"btn btn-rainti btn-md btn-block\" (click)=\"addDetran()\">Adicionar</button>\r\n          </div>   -->      \r\n          <div class=\"col\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n          </div>            \r\n        </div>   \r\n      </form> \r\n    </div>\r\n  </div>\r\n  <hr/>\r\n  <div class=\"row mt-2\" style=\"padding-top: 10px; height: 650px; overflow-y: scroll; white-space: nowrap;\">     \r\n      <div class=\"col-md-4 mb-4\" *ngFor=\"let entity of entities | filter: searchText\"> \r\n        <div class=\"card text shadow rounded\">\r\n          <div class=\"card-body \">\r\n            <h5 class=\"card-title \">{{entity.name}}</h5>\r\n            <hr/>\r\n            <p class=\"card-text\"><b>CNPJ:</b> {{entity.cnpj}}</p>\r\n            <p class=\"card-text\"><b>tel.:</b> ({{entity.dddmodel}}) {{entity.tel}}</p>\r\n            <p class=\"card-text\"><b>e-mail:</b> {{entity.email}}</p>          \r\n          </div>\r\n          <div class=\"card-footer text-muted\">\r\n            <div class=\"row align-items-center mb-1\">    \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-rainti btn-md btn-block\" routerLink=\"/detran-detalhe/{{entity.id}}\" routerLinkActive=\"active\" >Editar</button>\r\n              </div>        \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-info btn-md btn-block\" routerLink=\"/detran-contatos/{{entity.id}}\" routerLinkActive=\"active\">Contatos</button>\r\n              </div>            \r\n            </div>         \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/registrar/registrar.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entities/registrar/registrar.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Em breve</h1>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Em breve Ajuda</h1>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Em breve Dashboard</h1>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registers/groups/group-add/group-add.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registers/groups/group-add/group-add.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 mx-auto\">\r\n            <span class=\"anchor\" id=\"formLogin\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Cadastrar grupo</h4>                    \r\n                    <hr/>\r\n                    <nav>\r\n                        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                          <a class=\"nav-item nav-link active\" id=\"group-detran-tab\" data-toggle=\"tab\" href=\"#group-detran\" role=\"tab\" aria-controls=\"group-detran\" aria-selected=\"true\"  >Detran</a>\r\n                          <a class=\"nav-item nav-link \" id=\"group-creditor-tab\" data-toggle=\"tab\" href=\"#group-creditor\" role=\"tab\" aria-controls=\"group-creditor\" aria-selected=\"false\" >Credora</a>\r\n                          <a class=\"nav-item nav-link \" id=\"group-creditor-group-tab\" data-toggle=\"tab\" href=\"#group-creditor-group\" role=\"tab\" aria-controls=\"group-creditor-group\" aria-selected=\"false\" >Gestora</a>\r\n                          <a class=\"nav-item nav-link \" id=\"group-admin-tab\" data-toggle=\"tab\" href=\"#group-admin\" role=\"tab\" aria-controls=\"group-admin\" aria-selected=\"false\" >Admin</a>\r\n                        </div>\r\n                    </nav>\r\n                      <!-- Detran TAB -->\r\n                    <div class=\"tab-content\" id=\"nav-tabContent\" style=\"padding-top: 10px;\">\r\n                        <div class=\"tab-pane fade show active \" id=\"group-detran\" role=\"tabpanel\" aria-labelledby=\"group-detran-tab\" >\r\n                            <form class=\"form\" #detranForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div  class=\"col\">\r\n                                            <label >Grupo</label>                                            \r\n                                            <input type=\"text\" [(ngModel)]=\"_detranData.planname\" name=\"detranPlanname\"  class=\"form-control rounded-0\" \r\n                                            placeholder=\"Digite o nome do plano\"\r\n                                            [class.is-invalid]=\"detranPlanname.invalid && detranPlanname.touched\" #detranPlanname=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"detranPlanname.valid || detranPlanname.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"detranPlanname.errors && detranPlanname.errors.required\">\r\n                                                    nome do grupo obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div >\r\n                                        <div class=\"col-md-2\">\r\n                                            <label >Status</label>\r\n                                            <div class=\"onoffswitch\">\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"_detranData.planstatus\" name=\"detranSwitch\" class=\"onoffswitch-checkbox\" id=\"detranSwitch\" checked>\r\n                                                <label class=\"onoffswitch-label\" for=\"detranSwitch\"></label>                                                \r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>                    \r\n                                <div class=\"form-group\">                                   \r\n                                    <div class=\"row\">         \r\n                                        <div class=\"col-md-6\">  \r\n                                            <div class=\"form border\" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                                <div class=\"col\">\r\n                                                    <label >Entidade(s)</label>       \r\n                                                </div>\r\n                                                <div class=\"col\">\r\n                                                    <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTextDetran\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                                </div>                                                    \r\n                                            </div>                                            \r\n                                            \r\n                                            <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                                <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >    \r\n                                                    <div class=\"col\" *ngFor=\"let entities of _detranData.entities | filterEntityName  : searchTextDetran\">\r\n                                                        <label class=\"btn btn-outline-rainti \" [ngClass]=\"entities.checked ? 'active' : 'default'\"  >\r\n                                                            <input type=\"checkbox\" [checked]=\"entities.checked\"  id=\"detran.{{entities.entityname}}\" autocomplete=\"off\" (change)=\"detranEntitiesControl($event)\"> {{ entities.entityname }}\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                        </div> \r\n                                                                                         \r\n                                        \r\n                                        <div class=\"col-md-6\">  \r\n                                            <div class=\"form border\" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                                <div class=\"col\">\r\n                                                    <label >Funcionalidade(s)</label>       \r\n                                                </div>\r\n                                                <div class=\"col\">\r\n                                                    <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTextDetranFunc\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                                </div>                                                    \r\n                                            </div>                                            \r\n                                            \r\n                                            <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                                <div class=\"btn-group btn-group-toggle btn-group-vertical\"   data-toggle=\"buttons\" >                                                                                \r\n                                                    <div class=\"col\"  *ngFor=\"let feature of _detranData.features | filterFeatureName : searchTextDetranFunc\">\r\n                                                        <label class=\"btn btn-outline-rainti \" [ngClass]=\"feature.checked ? 'active' : 'default'\"  >\r\n                                                            <input type=\"checkbox\"  [checked]=\"feature.checked\"  id=\"detran.{{feature.featurename }}\" autocomplete=\"off\"\r\n                                                            (change)=\"detranFeaturesControl($event)\"\r\n                                                            > {{feature.featurename }}\r\n                                                        </label>\r\n                                                    </div>  \r\n                                                </div>  \r\n                                            </div>    \r\n                                                \r\n                                              \r\n                                        </div>         \r\n                                    </div> \r\n                                </div>  \r\n                                <hr/>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">                   \r\n                                            <button type=\"submit\" (click)=\"backToGroups()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">                                        \r\n                                            <button type=\"submit\" *ngIf=\"!_detranSaving\"[disabled]=\"detranForm.form.invalid\" (click)=\"createDetranGroup()\" class=\"btn btn-rainti btn-block \">\r\n                                                Salvar                                                \r\n                                            </button>              \r\n                                             <button class=\"btn btn-outline-rainti btn-block\" type=\"button\" disabled *ngIf=\"_detranSaving\">\r\n                                                <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>                                               \r\n                                            </button>\r\n                                        </div>  \r\n                                        \r\n                                        \r\n                                    </div>                                                          \r\n                                </div> \r\n                                <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_detranErrorMessage\">\r\n                                    {{_detranErrorMessage}}\r\n                                </div>      \r\n                            </form>\r\n                        </div>\r\n                    \r\n                    <!--  Creditor Tab  -->\r\n                    \r\n                        <div class=\"tab-pane fade\" id=\"group-creditor\" role=\"tabpanel\" aria-labelledby=\"group-creditor-tab\" >\r\n                            <form class=\"form\" #creditorForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div  class=\"col\">\r\n                                            <label >Grupo</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"_creditorData.planname\" name=\"creditorPlanname\"  class=\"form-control rounded-0\" \r\n                                            placeholder=\"Digite o nome do plano\"\r\n                                            [class.is-invalid]=\"creditorPlanname.invalid && creditorPlanname.touched\" #creditorPlanname=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"creditorPlanname.valid || creditorPlanname.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"creditorPlanname.errors && creditorPlanname.errors.required\">\r\n                                                    nome do grupo obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div >\r\n                                        <div class=\"col-md-2 align-items-end\">\r\n                                            <label >Status</label>\r\n                                            <div class=\"onoffswitch\">\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"_creditorData.planstatus\" name=\"creditorSwitch\" class=\"onoffswitch-checkbox\" id=\"creditorSwitch\" checked>\r\n                                                <label class=\"onoffswitch-label\" for=\"creditorSwitch\"></label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>                      \r\n                                <div class=\"form-group\">                                   \r\n                                    <div class=\"row\">         \r\n                                        <div class=\"col-md-6\">  \r\n                                            <div class=\"form border \" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                                <div class=\"col\">\r\n                                                    <label >Entidade(s)</label>       \r\n                                                </div>\r\n                                                <div class=\"col\">\r\n                                                    <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTextCreditor\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                                </div>                                                    \r\n                                            </div>                                            \r\n                                            \r\n                                            <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                                <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >    \r\n                                                    <div class=\"col\" *ngFor=\"let entities of _creditorData.entities | filterEntityName : searchTextCreditor\">\r\n                                                        <label class=\"btn btn-outline-rainti \" [ngClass]=\"entities.checked ? 'active' : 'default'\"  >\r\n                                                            <input type=\"checkbox\" [checked]=\"entities.checked\"  id=\"creditor.{{entities.entityname}}\" autocomplete=\"off\" (change)=\"creditorEntitiesControl($event)\"> {{ entities.entityname }}\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                        </div> \r\n                                                                                         \r\n                                        \r\n                                        <div class=\"col-md-6\">  \r\n                                            <div class=\"form border\" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                                <div class=\"col\">\r\n                                                    <label >Funcionalidade(s)</label>       \r\n                                                </div>\r\n                                                <div class=\"col\">\r\n                                                    <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTextCreditorFunc\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                                </div>                                                    \r\n                                            </div>                                            \r\n                                            \r\n                                            <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                                <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >                                                                                \r\n                                                    <div class=\"col\"  *ngFor=\"let feature of _creditorData.features | filterFeatureName : searchTextCreditorFunc\">\r\n                                                        \r\n                                                        \r\n                                                        <label class=\"btn btn-outline-rainti \" [ngClass]=\"feature.checked ? 'active' : 'default'\"  >\r\n                                                            <input type=\"checkbox\"  [checked]=\"feature.checked\"  id=\"creditor.{{feature.featurename }}\" autocomplete=\"off\"\r\n                                                            (change)=\"creditorFeaturesControl($event)\"> {{feature.featurename }}\r\n                                                        </label>\r\n                                                    </div>  \r\n                                                </div>  \r\n                                            </div>    \r\n                                            \r\n                                        \r\n                                        </div>         \r\n                                    </div> \r\n                                </div>  \r\n                                <hr/>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">                   \r\n                                            <button type=\"submit\" (click)=\"backToGroups()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">                                        \r\n                                            <button type=\"submit\" *ngIf=\"!_creditorSaving\"[disabled]=\"creditorForm.form.invalid\" (click)=\"createCreditorGroup()\" class=\"btn btn-rainti btn-block \">\r\n                                                Salvar                                                \r\n                                            </button>              \r\n                                             <button class=\"btn btn-outline-rainti btn-block\" type=\"button\" disabled *ngIf=\"_creditorSaving\">\r\n                                                <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>                                               \r\n                                            </button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div> \r\n                                <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_creditorErrorMessage\">\r\n                                    {{_creditorErrorMessage}}\r\n                                </div> \r\n                            </form>\r\n                        </div>\r\n                    \r\n                    <!--  Creditor Group Tab  -->\r\n                    \r\n                        <div class=\"tab-pane fade\" id=\"group-creditor-group\" role=\"tabpanel\" aria-labelledby=\"group-creditor-group-tab\" >\r\n                            <form class=\"form\" #creditorGroupForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div  class=\"col\">\r\n                                            <label >Grupo</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"_creditorGroupData.planname\" name=\"creditorGroupPlanname\"  class=\"form-control rounded-0\" \r\n                                            placeholder=\"Digite o nome do plano\"\r\n                                            [class.is-invalid]=\"creditorGroupPlanname.invalid && creditorGroupPlanname.touched\" #creditorGroupPlanname=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"creditorGroupPlanname.valid || creditorGroupPlanname.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"creditorGroupPlanname.errors && creditorGroupPlanname.errors.required\">\r\n                                                    nome do grupo obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div >\r\n                                        <div class=\"col-md-2 align-items-end\">\r\n                                            <label >Status</label>\r\n                                            <div class=\"onoffswitch\">\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"_creditorGroupData.planstatus\" name=\"creditorGroupSwitch\" class=\"onoffswitch-checkbox\" id=\"creditorGroupSwitch\" checked>\r\n                                                <label class=\"onoffswitch-label\" for=\"creditorGroupSwitch\"></label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>                      \r\n                                <div class=\"form-group\">                                   \r\n                                    <div class=\"row\">         \r\n                                        <div class=\"col-md-6\">  \r\n                                            <div class=\"form border\" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                                <div class=\"col\">\r\n                                                    <label >Entidade(s)</label>       \r\n                                                </div>\r\n                                                <div class=\"col\">\r\n                                                    <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTextCreditorGroup\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                                </div>                                                    \r\n                                            </div>                                            \r\n                                            \r\n                                            <div class=\"col border-bottom border-left\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                                <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >    \r\n                                                    <div class=\"col\" *ngFor=\"let entities of _creditorGroupData.entities | filterEntityName : searchTextCreditorGroup\">\r\n                                                        <label class=\"btn btn-outline-rainti \" [ngClass]=\"entities.checked ? 'active' : 'default'\"  >\r\n                                                            <input type=\"checkbox\" [checked]=\"entities.checked\"  id=\"creditorGroup.{{entities.entityname}}\" autocomplete=\"off\" (change)=\"creditorGroupEntitiesControl($event)\"> {{ entities.entityname }}\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            \r\n                                        </div>                                                                                         \r\n                                        \r\n                                        <div class=\"col-md-6\" >  \r\n                                            <div class=\"form border\" style=\"padding-bottom: 10px; padding-top : 10px\">\r\n                                                <div class=\"col\">\r\n                                                    <label >Funcionalidade(s)</label>       \r\n                                                </div>\r\n                                                <div class=\"col\">\r\n                                                    <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTexCreditorGrouptFunc\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                                </div>                                                    \r\n                                            </div>                                            \r\n                                            \r\n                                            <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                                <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >                                                                                \r\n                                                    <div class=\"col\"  *ngFor=\"let feature of _creditorGroupData.features | filterFeatureName : searchTexCreditorGrouptFunc\">\r\n                                                        <label class=\"btn btn-outline-rainti \" [ngClass]=\"feature.checked ? 'active' : 'default'\"  >\r\n                                                            <input type=\"checkbox\"  [checked]=\"feature.checked\"  id=\"creditorGroup.{{feature.featurename }}\" autocomplete=\"off\"\r\n                                                            (change)=\"creditorGroupFeaturesControl($event)\"> {{feature.featurename }}\r\n                                                        </label>\r\n                                                    </div>  \r\n                                                </div>  \r\n                                            </div>    \r\n                                        </div>         \r\n                                    </div> \r\n                                </div>  \r\n                                <hr/>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">                   \r\n                                            <button type=\"submit\" (click)=\"backToGroups()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">                                        \r\n                                            <button type=\"submit\" *ngIf=\"!_creditorGroupSaving\"[disabled]=\"creditorGroupForm.form.invalid\" (click)=\"createCreditorGroupGroup()\" class=\"btn btn-rainti btn-block \">\r\n                                                Salvar                                                \r\n                                            </button>              \r\n                                             <button class=\"btn btn-outline-rainti btn-block\" type=\"button\" disabled *ngIf=\"_creditorGroupSaving\">\r\n                                                <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>                                               \r\n                                            </button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div> \r\n                                <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_creditorGroupErrorMessage\">\r\n                                    {{_creditorGroupErrorMessage}}\r\n                                </div> \r\n                            </form>\r\n                        </div>\r\n                    \r\n                    <!-- Admin TAB -->\r\n                    \r\n                        <div class=\"tab-pane fade\" id=\"group-admin\" role=\"tabpanel\" aria-labelledby=\"group-admin-tab\" >\r\n                            <form class=\"form\" #adminForm=\"ngForm\">\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div  class=\"col\">\r\n                                            <label >Grupo</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"_adminData.planname\" name=\"adminPlanname\"  class=\"form-control rounded-0\" \r\n                                            placeholder=\"Digite o nome do plano\"\r\n                                            [class.is-invalid]=\"adminPlanname.invalid && adminPlanname.touched\" #adminPlanname=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"adminPlanname.valid || adminPlanname.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"adminPlanname.errors && adminPlanname.errors.required\">\r\n                                                    nome do grupo obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div >\r\n                                        <div class=\"col-md-2 align-items-end\">\r\n                                            <label >Status</label>\r\n                                            <div class=\"onoffswitch\">\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"_adminData.planstatus\" name=\"adminSwitch\" class=\"onoffswitch-checkbox\" id=\"adminSwitch\" checked>\r\n                                                <label class=\"onoffswitch-label\" for=\"adminSwitch\"></label>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>                   \r\n                                \r\n                                <div class=\"form-group\">                                   \r\n                                    <div class=\"row\">         \r\n                                        <div class=\"col-md-6\" >  \r\n                                            <div class=\"form border \" style=\"padding-bottom: 10px; padding-top : 10px\">\r\n                                                <div class=\"col\">\r\n                                                    <label >Entidade(s)</label>       \r\n                                                </div>\r\n                                                <div class=\"col\">\r\n                                                    <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTextAdmin\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                                </div>                                                    \r\n                                            </div>                                            \r\n                                            \r\n                                            <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                                <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >    \r\n                                                    <div class=\"col\" *ngFor=\"let entities of _adminData.entities | filterEntityName : searchTextAdmin\">\r\n                                                        <label class=\"btn btn-outline-rainti \" [ngClass]=\"entities.checked ? 'active' : 'default'\"  >\r\n                                                            <input type=\"checkbox\" [checked]=\"entities.checked\"  id=\"admin.{{entities.entityname}}\" autocomplete=\"off\" (change)=\"adminEntitiesControl($event)\"> {{ entities.entityname }}\r\n                                                        </label>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>                                            \r\n                                        </div>                                                                                         \r\n                                        \r\n                                        <div class=\"col-md-6\">  \r\n                                            <div class=\"form border\" style=\"padding-bottom: 10px; padding-top : 10px\">\r\n                                                <div class=\"col\" >\r\n                                                    <label >Funcionalidade(s)</label>       \r\n                                                </div>\r\n                                                <div class=\"col\">\r\n                                                    <input class=\"form-control\" type=\"search\" [(ngModel)]=\"searchTextAdminFunc\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                                </div>                                                    \r\n                                            </div>                                            \r\n                                            \r\n                                            <div class=\"col border-left border-bottom\" style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                                <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >                                                                                \r\n                                                    <div class=\"col\"  *ngFor=\"let feature of _adminData.features | filterFeatureName : searchTextAdminFunc\">\r\n                                                        <label class=\"btn btn-outline-rainti \" [ngClass]=\"feature.checked ? 'active' : 'default'\"  >\r\n                                                            <input type=\"checkbox\"  [checked]=\"feature.checked\"  id=\"admin.{{feature.featurename }}\" autocomplete=\"off\"\r\n                                                            (change)=\"adminFeaturesControl($event)\"> {{feature.featurename }}\r\n                                                        </label>\r\n                                                    </div>  \r\n                                                </div>  \r\n                                            </div>    \r\n                                                \r\n                                                \r\n                                        </div>         \r\n                                    </div> \r\n                                </div>  \r\n                                <hr/>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">                   \r\n                                            <button type=\"submit\" (click)=\"backToGroups()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">                                        \r\n                                            <button type=\"submit\" *ngIf=\"!_adminSaving\"[disabled]=\"adminForm.form.invalid\" (click)=\"createAdminGroup()\" class=\"btn btn-rainti btn-block \">\r\n                                                Salvar                                                \r\n                                            </button>              \r\n                                             <button class=\"btn btn-outline-rainti btn-block\" type=\"button\" disabled *ngIf=\"_adminSaving\">\r\n                                                <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>                                               \r\n                                            </button>\r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div> \r\n                                <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_adminErrorMessage\">\r\n                                    {{_adminErrorMessage}}\r\n                                </div> \r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n    \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registers/groups/group-main/group-main.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registers/groups/group-main/group-main.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card shadow rounded\" style=\"padding: 30px\">\r\n  <div class=\"row justify-content-lg align-items-center\">\r\n    <div class=\"col\">\r\n      <h1>Grupos</h1>  \r\n    </div>  \r\n    <div class=\"col-md-auto\">    \r\n      <form class=\"form-inline \">\r\n        <div class=\"row align-items-center mb-1\">    \r\n          <div class=\"col\">\r\n            <select class=\"custom-select\" [(ngModel)]=\"_status\" name=\"_status\" >                            \r\n                <option >Todos</option>\r\n                <option >Ativo</option>\r\n                <option >Inativo</option>\r\n            </select>\r\n                              \r\n          </div>  \r\n          <div class=\"col\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"_searchText\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n          </div>            \r\n        </div>   \r\n      </form> \r\n    </div>\r\n  </div>\r\n  <hr/>\r\n  <div class=\"row\" style=\"padding-top: 10px; height: 650px; overflow-y: scroll; white-space: nowrap;\">    \r\n      <div class=\"col-md-4 mb-4\" *ngFor=\"let group of _groupMain | filter : _searchText | filterStatus : _status\"> \r\n        <div class=\"card text shadow rounded\">\r\n          <div class=\"card-body \">\r\n            <h5 class=\"card-title \">{{group.name}}</h5>\r\n            <hr/>\r\n            <p> <b>Status:</b> {{group.status}}</p>          \r\n                     \r\n          </div>\r\n          <div class=\"card-footer text-muted\">\r\n            <div class=\"row align-items-center mb-1\">    \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-rainti btn-md btn-block\" routerLink=\"/grupo-detalhe/{{group.id}}\" routerLinkActive=\"active\" >Editar</button>\r\n              </div>        \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-secondary btn-md btn-block\" (click)=\"disableGroup(group.id)\">Desativar</button>\r\n              </div>            \r\n            </div>         \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registers/groups/groups-detail/groups-detail.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registers/groups/groups-detail/groups-detail.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col-md-8 mx-auto\">\r\n        <span class=\"anchor\" id=\"formLogin\"></span>\r\n        <!-- form card login -->\r\n        <div class=\"card shadow\">\r\n              <div class=\"card-body\">\r\n                <h4 class=\"card-title mb-4 mt-1\">Editar grupo</h4>                    \r\n                <hr/>\r\n                <nav>\r\n                    \r\n                    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                        <a class=\"nav-item nav-link _userGroupEntityType == 'DETRAN' ? active\" id=\"group-detran-tab\" data-toggle=\"tab\" href=\"#group-detran\" role=\"tab\" aria-controls=\"group-detran\" aria-selected=\"true\"  *ngIf=\"_userGroupEntityType == 'DETRAN'\">Detran</a>\r\n                        <a class=\"nav-item nav-link _userGroupEntityType == 'CREDORA' ? active \" id=\"group-creditor-tab\" data-toggle=\"tab\" href=\"#group-creditor\" role=\"tab\" aria-controls=\"group-creditor\" aria-selected=\"false\" *ngIf=\"_userGroupEntityType == 'CREDORA'\">Credora</a>\r\n                        <a class=\"nav-item nav-link _userGroupEntityType == 'GESTORA' ? active \" id=\"group-creditor-group-tab\" data-toggle=\"tab\" href=\"#group-creditor-group\" role=\"tab\" aria-controls=\"group-creditor-group\" aria-selected=\"false\" *ngIf=\"_userGroupEntityType == 'GESTORA'\">Gestora</a>\r\n                        <a class=\"nav-item nav-link _userGroupEntityType == 'ADMIN' ? active \" id=\"group-admin-tab\" data-toggle=\"tab\" href=\"#group-admin\" role=\"tab\" aria-controls=\"group-admin\" aria-selected=\"false\" *ngIf=\"_userGroupEntityType == 'ADMIN'\">Admin</a>\r\n                    </div>\r\n                </nav>\r\n                  <!-- Detran TAB -->\r\n\r\n                <div class=\"tab-content\" id=\"nav-tabContent\" style=\"padding-top: 10px;\">\r\n                    \r\n                    <div class=\"tab-pane fade \" [ngClass]=\"{ active: _userGroupEntityType == 'DETRAN', show: _userGroupEntityType == 'DETRAN'}\" \r\n                     id=\"group-detran\" role=\"tabpanel\" aria-labelledby=\"group-detran-tab\" >\r\n                        <form class=\"form\" #detranForm=\"ngForm\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <div  class=\"col\">\r\n                                        <label >Grupo</label>                                            \r\n                                        <input type=\"text\" [(ngModel)]=\"_detranData.planname\" name=\"detranPlanname\"  class=\"form-control rounded-0\" \r\n                                        placeholder=\"Digite o nome do plano\"\r\n                                        [class.is-invalid]=\"detranPlanname.invalid && detranPlanname.touched\" #detranPlanname=\"ngModel\" required >\r\n                                        <div class=\"md-errors-spacer\" [hidden]=\"detranPlanname.valid || detranPlanname.untouched\">\r\n                                            <small  class=\"text-danger\"*ngIf=\"detranPlanname.errors && detranPlanname.errors.required\">\r\n                                                nome do grupo obrigatório\r\n                                            </small>\r\n                                        </div>\r\n                                    </div >\r\n                                    <div class=\"col-md-2\">\r\n                                        <label >Status</label>\r\n                                        <div class=\"onoffswitch\">\r\n                                            <input type=\"checkbox\" [(ngModel)]=\"_detranData.planstatus\" name=\"detranSwitch\" class=\"onoffswitch-checkbox\" id=\"detranSwitch\" checked>\r\n                                            <label class=\"onoffswitch-label\" for=\"detranSwitch\"></label>                                                \r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>                    \r\n                            <div class=\"form-group\">                                   \r\n                                <div class=\"row\">         \r\n                                    <div class=\"col-md-6\">  \r\n                                        <div class=\"form border\" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                            <div class=\"col\">\r\n                                                <label >Entidade(s)</label>       \r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTextDetran\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                            </div>                                                    \r\n                                        </div>                                            \r\n                                        \r\n                                        <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                            <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >    \r\n                                                <div class=\"col\" *ngFor=\"let entities of _detranData.entities | filterEntityName  : searchTextDetran\">\r\n                                                    <label class=\"btn btn-outline-rainti \" [ngClass]=\"entities.checked ? 'active' : 'default'\"  >\r\n                                                        <input type=\"checkbox\" [checked]=\"entities.checked\"  id=\"detran.{{entities.entityname}}\" autocomplete=\"off\" (change)=\"detranEntitiesControl($event)\"> {{ entities.entityname }}\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                    </div> \r\n                                                                                     \r\n                                    \r\n                                    <div class=\"col-md-6\">  \r\n                                        <div class=\"form border\" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                            <div class=\"col\">\r\n                                                <label >Funcionalidade(s)</label>       \r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTextDetranFunc\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                            </div>                                                    \r\n                                        </div>                                            \r\n                                        \r\n                                        <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                            <div class=\"btn-group btn-group-toggle btn-group-vertical\"   data-toggle=\"buttons\" >                                                                                \r\n                                                <div class=\"col\"  *ngFor=\"let feature of _detranData.features | filterFeatureName : searchTextDetranFunc\">\r\n                                                    <label class=\"btn btn-outline-rainti \" [ngClass]=\"feature.checked ? 'active' : 'default'\"  >\r\n                                                        <input type=\"checkbox\"  [checked]=\"feature.checked\"  id=\"detran.{{feature.featurename }}\" autocomplete=\"off\"\r\n                                                        (change)=\"detranFeaturesControl($event)\"\r\n                                                        > {{feature.featurename }}\r\n                                                    </label>\r\n                                                </div>  \r\n                                            </div>  \r\n                                        </div>    \r\n                                            \r\n                                          \r\n                                    </div>         \r\n                                </div> \r\n                            </div>  \r\n                            <hr/>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-4\">                   \r\n                                        <button type=\"submit\" (click)=\"backToGroups()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                    </div>  \r\n                                    <div class=\"col-sm-4\">                   \r\n                                        <button type=\"submit\" (click)=\"deleteGroup()\" class=\"btn btn-danger btn-block\">Excluir</button>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">                                        \r\n                                        <button type=\"submit\" *ngIf=\"!_detranSaving\"[disabled]=\"detranForm.form.invalid\" (click)=\"updateDetranGroup()\" class=\"btn btn-rainti btn-block \">\r\n                                            Salvar                                                \r\n                                        </button>              \r\n                                         <button class=\"btn btn-outline-rainti btn-block\" type=\"button\" disabled *ngIf=\"_detranSaving\">\r\n                                            <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>                                               \r\n                                        </button>\r\n                                    </div>  \r\n                                    \r\n                                    \r\n                                </div>                                                          \r\n                            </div> \r\n                            <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_detranErrorMessage\">\r\n                                {{_detranErrorMessage}}\r\n                            </div>      \r\n                        </form>\r\n                    </div>\r\n                \r\n                <!--  Creditor Tab  -->\r\n                    \r\n                    <div class=\"tab-pane fade \" [ngClass]=\"{ active: _userGroupEntityType == 'CREDORA',  show: _userGroupEntityType == 'CREDORA'}\"  \r\n                    id=\"group-creditor\" role=\"tabpanel\" aria-labelledby=\"group-creditor-tab\" >\r\n                        <form class=\"form\" #creditorForm=\"ngForm\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <div  class=\"col\">\r\n                                        <label >Grupo</label>\r\n                                        <input type=\"text\" [(ngModel)]=\"_creditorData.planname\" name=\"creditorPlanname\"  class=\"form-control rounded-0\" \r\n                                        placeholder=\"Digite o nome do plano\"\r\n                                        [class.is-invalid]=\"creditorPlanname.invalid && creditorPlanname.touched\" #creditorPlanname=\"ngModel\" required >\r\n                                        <div class=\"md-errors-spacer\" [hidden]=\"creditorPlanname.valid || creditorPlanname.untouched\">\r\n                                            <small  class=\"text-danger\"*ngIf=\"creditorPlanname.errors && creditorPlanname.errors.required\">\r\n                                                nome do grupo obrigatório\r\n                                            </small>\r\n                                        </div>\r\n                                    </div >\r\n                                    <div class=\"col-md-2 align-items-end\">\r\n                                        <label >Status</label>\r\n                                        <div class=\"onoffswitch\">\r\n                                            <input type=\"checkbox\" [(ngModel)]=\"_creditorData.planstatus\" name=\"creditorSwitch\" class=\"onoffswitch-checkbox\" id=\"creditorSwitch\" checked>\r\n                                            <label class=\"onoffswitch-label\" for=\"creditorSwitch\"></label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>                      \r\n                            <div class=\"form-group\">                                   \r\n                                <div class=\"row\">         \r\n                                    <div class=\"col-md-6\">  \r\n                                        <div class=\"form border \" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                            <div class=\"col\">\r\n                                                <label >Entidade(s)</label>       \r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTextCreditor\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                            </div>                                                    \r\n                                        </div>                                            \r\n                                        \r\n                                        <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                            <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >    \r\n                                                <div class=\"col\" *ngFor=\"let entities of _creditorData.entities | filterEntityName : searchTextCreditor\">\r\n                                                    <label class=\"btn btn-outline-rainti \" [ngClass]=\"entities.checked ? 'active' : 'default'\"  >\r\n                                                        <input type=\"checkbox\" [checked]=\"entities.checked\"  id=\"creditor.{{entities.entityname}}\" autocomplete=\"off\" (change)=\"creditorEntitiesControl($event)\"> {{ entities.entityname }}\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                    </div> \r\n                                                                                     \r\n                                    \r\n                                    <div class=\"col-md-6\">  \r\n                                        <div class=\"form border\" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                            <div class=\"col\">\r\n                                                <label >Funcionalidade(s)</label>       \r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTextCreditorFunc\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                            </div>                                                    \r\n                                        </div>                                            \r\n                                        \r\n                                        <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                            <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >                                                                                \r\n                                                <div class=\"col\"  *ngFor=\"let feature of _creditorData.features | filterFeatureName : searchTextCreditorFunc\">\r\n                                                    \r\n                                                    \r\n                                                    <label class=\"btn btn-outline-rainti \" [ngClass]=\"feature.checked ? 'active' : 'default'\"  >\r\n                                                        <input type=\"checkbox\"  [checked]=\"feature.checked\"  id=\"creditor.{{feature.featurename }}\" autocomplete=\"off\"\r\n                                                        (change)=\"creditorFeaturesControl($event)\"> {{feature.featurename }}\r\n                                                    </label>\r\n                                                </div>  \r\n                                            </div>  \r\n                                        </div>    \r\n                                        \r\n                                    \r\n                                    </div>         \r\n                                </div> \r\n                            </div>  \r\n                            <hr/>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-4\">                   \r\n                                        <button type=\"submit\" (click)=\"backToGroups()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                    </div>  \r\n                                    <div class=\"col-sm-4\">                   \r\n                                        <button type=\"submit\" (click)=\"deleteGroup()\" class=\"btn btn-danger btn-block\">Excluir</button>\r\n                                    </div>\r\n                                    <div class=\"col-sm-4\">                                        \r\n                                        <button type=\"submit\" *ngIf=\"!_creditorSaving\"[disabled]=\"creditorForm.form.invalid\" (click)=\"updateCreditorGroup()\" class=\"btn btn-rainti btn-block \">\r\n                                            Salvar                                                \r\n                                        </button>              \r\n                                         <button class=\"btn btn-outline-rainti btn-block\" type=\"button\" disabled *ngIf=\"_creditorSaving\">\r\n                                            <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>                                               \r\n                                        </button>\r\n                                    </div>  \r\n                                </div>                            \r\n                            </div> \r\n                            <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_creditorErrorMessage\">\r\n                                {{_creditorErrorMessage}}\r\n                            </div> \r\n                        </form>\r\n                    </div>\r\n                \r\n                <!--  Creditor Group Tab  -->\r\n                \r\n                    <div class=\"tab-pane fade \" [ngClass]=\"{ active: _userGroupEntityType == 'GESTORA',  show: _userGroupEntityType == 'GESTORA'}\"  \r\n                    id=\"group-creditor-group\" role=\"tabpanel\" aria-labelledby=\"group-creditor-group-tab\" >\r\n                        <form class=\"form\" #creditorGroupForm=\"ngForm\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <div  class=\"col\">\r\n                                        <label >Grupo</label>\r\n                                        <input type=\"text\" [(ngModel)]=\"_creditorGroupData.planname\" name=\"creditorGroupPlanname\"  class=\"form-control rounded-0\" \r\n                                        placeholder=\"Digite o nome do plano\"\r\n                                        [class.is-invalid]=\"creditorGroupPlanname.invalid && creditorGroupPlanname.touched\" #creditorGroupPlanname=\"ngModel\" required >\r\n                                        <div class=\"md-errors-spacer\" [hidden]=\"creditorGroupPlanname.valid || creditorGroupPlanname.untouched\">\r\n                                            <small  class=\"text-danger\"*ngIf=\"creditorGroupPlanname.errors && creditorGroupPlanname.errors.required\">\r\n                                                nome do grupo obrigatório\r\n                                            </small>\r\n                                        </div>\r\n                                    </div >\r\n                                    <div class=\"col-md-2 align-items-end\">\r\n                                        <label >Status</label>\r\n                                        <div class=\"onoffswitch\">\r\n                                            <input type=\"checkbox\" [(ngModel)]=\"_creditorGroupData.planstatus\" name=\"creditorGroupSwitch\" class=\"onoffswitch-checkbox\" id=\"creditorGroupSwitch\" checked>\r\n                                            <label class=\"onoffswitch-label\" for=\"creditorGroupSwitch\"></label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>                      \r\n                            <div class=\"form-group\">                                   \r\n                                <div class=\"row\">         \r\n                                    <div class=\"col-md-6\">  \r\n                                        <div class=\"form border\" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                            <div class=\"col\">\r\n                                                <label >Entidade(s)</label>       \r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTextCreditorGroup\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                            </div>                                                    \r\n                                        </div>                                            \r\n                                        \r\n                                        <div class=\"col border-bottom border-left\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                            <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >    \r\n                                                <div class=\"col\" *ngFor=\"let entities of _creditorGroupData.entities | filterEntityName : searchTextCreditorGroup\">\r\n                                                    <label class=\"btn btn-outline-rainti \" [ngClass]=\"entities.checked ? 'active' : 'default'\"  >\r\n                                                        <input type=\"checkbox\" [checked]=\"entities.checked\"  id=\"creditorGroup.{{entities.entityname}}\" autocomplete=\"off\" (change)=\"creditorGroupEntitiesControl($event)\"> {{ entities.entityname }}\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                    </div>                                                                                         \r\n                                    \r\n                                    <div class=\"col-md-6\" >  \r\n                                        <div class=\"form border\" style=\"padding-bottom: 10px; padding-top : 10px\">\r\n                                            <div class=\"col\">\r\n                                                <label >Funcionalidade(s)</label>       \r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTexCreditorGrouptFunc\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                            </div>                                                    \r\n                                        </div>                                            \r\n                                        \r\n                                        <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                            <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >                                                                                \r\n                                                <div class=\"col\"  *ngFor=\"let feature of _creditorGroupData.features | filterFeatureName : searchTexCreditorGrouptFunc\">\r\n                                                    <label class=\"btn btn-outline-rainti \" [ngClass]=\"feature.checked ? 'active' : 'default'\"  >\r\n                                                        <input type=\"checkbox\"  [checked]=\"feature.checked\"  id=\"creditorGroup.{{feature.featurename }}\" autocomplete=\"off\"\r\n                                                        (change)=\"creditorGroupFeaturesControl($event)\"> {{feature.featurename }}\r\n                                                    </label>\r\n                                                </div>  \r\n                                            </div>  \r\n                                        </div>    \r\n                                    </div>         \r\n                                </div> \r\n                            </div>  \r\n                            <hr/>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-4\">                   \r\n                                        <button type=\"submit\" (click)=\"backToGroups()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                    </div> \r\n                                    <div class=\"col-sm-4\">                   \r\n                                        <button type=\"submit\" (click)=\"deleteGroup()\" class=\"btn btn-danger btn-block\">Excluir</button>\r\n                                    </div> \r\n                                    <div class=\"col-sm-4\">                                        \r\n                                        <button type=\"submit\" *ngIf=\"!_creditorGroupSaving\"[disabled]=\"creditorGroupForm.form.invalid\" (click)=\"updateCreditorGroupGroup()\" class=\"btn btn-rainti btn-block \">\r\n                                            Salvar                                                \r\n                                        </button>              \r\n                                         <button class=\"btn btn-outline-rainti btn-block\" type=\"button\" disabled *ngIf=\"_creditorGroupSaving\">\r\n                                            <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>                                               \r\n                                        </button>\r\n                                    </div>  \r\n                                </div>                            \r\n                            </div> \r\n                            <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_creditorGroupErrorMessage\">\r\n                                {{_creditorGroupErrorMessage}}\r\n                            </div> \r\n                        </form>\r\n                    </div>\r\n                \r\n                <!-- Admin TAB -->\r\n                \r\n                    <div class=\"tab-pane fade \" [ngClass]=\"{ active: _userGroupEntityType == 'ADMIN',  show: _userGroupEntityType == 'ADMIN'}\"   \r\n                    id=\"group-admin\" role=\"tabpanel\" aria-labelledby=\"group-admin-tab\" >\r\n                        <form class=\"form\" #adminForm=\"ngForm\">\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <div  class=\"col\">\r\n                                        <label >Grupo</label>                                        \r\n                                        <input type=\"text\" [(ngModel)]=\"_adminData.planname\" name=\"adminPlanname\"  class=\"form-control rounded-0\" \r\n                                        placeholder=\"Digite o nome do plano\"\r\n                                        [class.is-invalid]=\"adminPlanname.invalid && adminPlanname.touched\" #adminPlanname=\"ngModel\" required >\r\n                                        <div class=\"md-errors-spacer\" [hidden]=\"adminPlanname.valid || adminPlanname.untouched\">\r\n                                            <small  class=\"text-danger\"*ngIf=\"adminPlanname.errors && adminPlanname.errors.required\">\r\n                                                nome do grupo obrigatório\r\n                                            </small>\r\n                                        </div>\r\n                                    </div >\r\n                                    <div class=\"col-md-2 align-items-end\">\r\n                                        <label >Status</label>\r\n                                        <div class=\"onoffswitch\">\r\n                                            <input type=\"checkbox\" [(ngModel)]=\"_adminData.planstatus\" name=\"adminSwitch\" class=\"onoffswitch-checkbox\" id=\"adminSwitch\" checked>\r\n                                            <label class=\"onoffswitch-label\" for=\"adminSwitch\"></label>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>                   \r\n                            \r\n                            <div class=\"form-group\">                                   \r\n                                <div class=\"row\">         \r\n                                    <div class=\"col-md-6\" >  \r\n                                        <div class=\"form border \" style=\"padding-bottom: 10px; padding-top : 10px\">\r\n                                            <div class=\"col\">\r\n                                                <label >Entidade(s)</label>       \r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchTextAdmin\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                            </div>                                                    \r\n                                        </div>                                            \r\n                                        \r\n                                        <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                            <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >    \r\n                                                <div class=\"col\" *ngFor=\"let entities of _adminData.entities | filterEntityName : searchTextAdmin\">\r\n                                                    <label class=\"btn btn-outline-rainti \" [ngClass]=\"entities.checked ? 'active' : 'default'\"  >\r\n                                                        <input type=\"checkbox\" [checked]=\"entities.checked\"  id=\"admin.{{entities.entityname}}\" autocomplete=\"off\" (change)=\"adminEntitiesControl($event)\"> {{ entities.entityname }}\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                    </div> \r\n                                                                                     \r\n                                    \r\n                                    <div class=\"col-md-6\">  \r\n                                        <div class=\"form border\" style=\"padding-bottom: 10px; padding-top : 10px\">\r\n                                            <div class=\"col\" >\r\n                                                <label >Funcionalidade(s)</label>       \r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <input class=\"form-control\" type=\"search\" [(ngModel)]=\"searchTextAdminFunc\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                            </div>                                                    \r\n                                        </div>                                            \r\n                                        \r\n                                        <div class=\"col border-left border-bottom\" style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                            <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >                                                                                \r\n                                                <div class=\"col\"  *ngFor=\"let feature of _adminData.features | filterFeatureName : searchTextAdminFunc\">\r\n                                                    <label class=\"btn btn-outline-rainti \" [ngClass]=\"feature.checked ? 'active' : 'default'\"  >\r\n                                                        <input type=\"checkbox\"  [checked]=\"feature.checked\"  id=\"admin.{{feature.featurename }}\" autocomplete=\"off\"\r\n                                                        (change)=\"adminFeaturesControl($event)\"> {{feature.featurename }}\r\n                                                    </label>\r\n                                                </div>  \r\n                                            </div>  \r\n                                        </div>    \r\n                                            \r\n                                            \r\n                                    </div>         \r\n                                </div> \r\n                            </div>  \r\n                            <hr/>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-4\">                   \r\n                                        <button type=\"submit\" (click)=\"backToGroups()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                                    </div>  \r\n                                    <div class=\"col-sm-4\">                   \r\n                                        <button type=\"submit\" (click)=\"deleteGroup()\" class=\"btn btn-danger btn-block\">Excluir</button>\r\n                                    </div>  \r\n                                    <div class=\"col-sm-4\">                                        \r\n                                        <button type=\"submit\" *ngIf=\"!_adminSaving\"[disabled]=\"adminForm.form.invalid\" (click)=\"updateAdminGroup()\" class=\"btn btn-rainti btn-block \">\r\n                                            Alterar                                                \r\n                                        </button>              \r\n                                         <button class=\"btn btn-outline-rainti btn-block\" type=\"button\" disabled *ngIf=\"_adminSaving\">\r\n                                            <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>                                               \r\n                                        </button>\r\n                                    </div>  \r\n                                </div>                            \r\n                            </div> \r\n                            <div class=\"alert alert-danger text-center text-danger\" *ngIf=\"_adminErrorMessage\">\r\n                                {{_adminErrorMessage}}\r\n                            </div> \r\n                        </form>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n        <!-- /form card login -->\r\n    </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registers/user/user-add/user-add.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registers/user/user-add/user-add.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 mx-auto\">\r\n            <span class=\"anchor\" id=\"formLogin\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Cadastro de usuário</h4>\r\n                    <hr/>\r\n                    <nav>\r\n                        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                          <a class=\"nav-item nav-link active\" id=\"user-data-tab\" data-toggle=\"tab\" href=\"#user-data\" role=\"tab\" aria-controls=\"user-data\" aria-selected=\"true\"  >Dados do Usuário</a>\r\n                          <a class=\"nav-item nav-link \" id=\"user-profile-tab\" data-toggle=\"tab\" href=\"#user-profile\" role=\"tab\" aria-controls=\"user-profile\" aria-selected=\"false\" >Perfil de Acesso</a>\r\n                        </div>\r\n                      </nav>\r\n                      <!-- User data TAB -->\r\n                      <div class=\"tab-content\" id=\"nav-tabContent\" style=\"padding-top: 10px;\">\r\n                        <div class=\"tab-pane fade show active \" id=\"user-data\" role=\"tabpanel\" aria-labelledby=\"user-data-tab\" >\r\n\r\n                            <form class=\"form\" #registerForm=\"ngForm\" >\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <label for=\"uname1\">Nome</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"registerUserData.firstName\" name=\"firstName\"  class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"name.invalid && name.touched\" #name=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"name.valid || name.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"name.errors && name.errors.required\">\r\n                                                    nome obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <label for=\"uname1\">Sobrenome</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"registerUserData.lastName\" name=\"lastName\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"lastName.invalid && lastName.touched\" #lastName=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"lastName.valid || lastName.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"lastName.errors && lastName.errors.required\">\r\n                                                    sobrenome obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>  \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col\">                                            \r\n                                            <label for=\"uname1\">CPF</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"registerUserData.cpf\" name=\"cpf\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^\\d{3}\\.\\d{3}\\.\\d{3}(-\\d{2})$\" placeHolder=\"123.123.123-12\"\r\n                                            [class.is-invalid]=\"cpf.invalid && cpf.touched\" #cpf=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"cpf.valid || cpf.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"cpf.errors && cpf.errors.required\">\r\n                                                    CPF obrigatório \r\n                                                </small>\r\n                                                <small  class=\"text-danger\" *ngIf=\"cpf.errors && cpf.errors.pattern\">\r\n                                                    CPF inválido (Ex.: 123.123.123-12)\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <label >Status</label>\r\n                                            <div class=\"onoffswitch\">\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"registerUserData.status\" name=\"statusSwitch\" class=\"onoffswitch-checkbox\" id=\"statusSwitch\" checked>\r\n                                                <label class=\"onoffswitch-label\" for=\"statusSwitch\"></label>                                                \r\n                                            </div>\r\n                                        </div> \r\n                                    </div>\r\n                                </div> \r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Nome de usuário</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"registerUserData.userName\" name=\"userName\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"userName.invalid && userName.touched\" #userName=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"userName.valid || userName.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"userName.errors && userName.errors.required\">\r\n                                                    Nome de usuário obrigatória\r\n                                                </small>\r\n                                            </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">E-mail</label>\r\n                                    <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                                    [(ngModel)]=\"registerUserData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                            e-mail obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                            e-mail inválido\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">                            \r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-3\">\r\n                                            <label for=\"uname1\">DDD</label>\r\n                                            <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                            placeHolder=\"11\"\r\n                                            [(ngModel)]=\"registerUserData.dddModel\" name=\"dddModel\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"dddModel.invalid && dddModel.touched\" #dddModel=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"dddModel.valid || dddModel.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"dddModel.errors && dddModel.errors.required\">\r\n                                                    DDD obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\"*ngIf=\"(dddModel.errors && dddModel.errors.pattern) || ddHasError\">\r\n                                                    DDD inválido\r\n                                                </small>\r\n                                           </div>\r\n                                          \r\n                                        </div>\r\n                                        <div class=\"col\">\r\n                                            <label for=\"uname1\">Telefone</label>\r\n                                            <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                            placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                            [(ngModel)]=\"registerUserData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                                    Telefone obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                                    Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                                </small>\r\n                                           </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>  \r\n                                                    \r\n                                <hr/>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">                   \r\n                                            <button type=\"submit\" (click)=\"backToUsers()\" class=\"btn btn-info btn-block\">Voltar</button>                                            \r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" (click)=\"nextTab('user-profile')\"  class=\"btn btn-rainti btn-block \">Próximo</button>                                                            \r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div> \r\n                          </form>\r\n                        </div>\r\n\r\n                        <!-- User Profile TAB -->\r\n                        <form\r\n                         class=\"tab-pane fade\" id=\"user-profile\" role=\"tabpanel\" aria-labelledby=\"user-profile-tab\" >\r\n                            <form class=\"form\" #profileForm=\"ngForm\" ></form>\r\n                                <div class=\"form-group\">\r\n                                    <div>\r\n                                        <h5>Selecione o Grupo de Acesso</h5>                                                                 \r\n                                    </div>                                        \r\n                                    <div class=\"col-md-6\">  \r\n                                        <div class=\"form border \" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                            <div class=\"col\">\r\n                                                <label >Grupo(s)</label>       \r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                            </div>                                                    \r\n                                        </div>                                            \r\n                                        \r\n                                        <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                            <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >    \r\n                                                <div class=\"col\" *ngFor=\"let group of _groupsData | filter : searchText\">\r\n                                                    <label class=\"btn btn-outline-rainti \"   >\r\n                                                        <input type=\"radio\" name=\"options\" id=\"{{group.id}}\" autocomplete=\"off\" \r\n                                                        (click)=\"featuresControl($event)\"> {{ group.name }}\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                    </div> \r\n                                    \r\n                                </div>  \r\n                                <hr/>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">                   \r\n                                            <button type=\"submit\" (click)=\"backToUsers()\" class=\"btn btn-info btn-block float-right\">Voltar</button>\r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">                                        \r\n                                            <button type=\"submit\" [disabled]=\"profileForm.form.invalid\" (click)=\"createUser()\" class=\"btn btn-rainti btn-block \">Finalizar</button>                \r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div> \r\n                            </form>\r\n                        </div>\r\n                        \r\n                      </div>\r\n                                       \r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n    \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registers/user/user-detail/user-detail.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registers/user/user-detail/user-detail.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"row\">\r\n        <div class=\"col-md-8 mx-auto\">\r\n            <span class=\"anchor\" id=\"formLogin\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Editar usuário</h4>\r\n                    <hr/>\r\n                    <nav>\r\n                        <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n                          <a class=\"nav-item nav-link active\" id=\"user-data-tab\" data-toggle=\"tab\" href=\"#user-data\" role=\"tab\" aria-controls=\"user-data\" aria-selected=\"true\"  >Dados do Usuário</a>\r\n                          <a class=\"nav-item nav-link \" id=\"user-profile-tab\" data-toggle=\"tab\" href=\"#user-profile\" role=\"tab\" aria-controls=\"user-profile\" aria-selected=\"false\" >Perfil de Acesso</a>\r\n                        </div>\r\n                      </nav>\r\n                      <!-- User data TAB -->\r\n                      <div class=\"tab-content\" id=\"nav-tabContent\" style=\"padding-top: 10px;\">\r\n                        <div class=\"tab-pane fade show active \" id=\"user-data\" role=\"tabpanel\" aria-labelledby=\"user-data-tab\" >\r\n\r\n                            <form class=\"form\" #registerForm=\"ngForm\" >\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <label for=\"uname1\">Nome</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"registerUserData.firstname\" name=\"firstName\"  class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"name.invalid && name.touched\" #name=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"name.valid || name.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"name.errors && name.errors.required\">\r\n                                                    nome obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <label for=\"uname1\">Sobrenome</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"registerUserData.lastname\" name=\"lastName\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"lastName.invalid && lastName.touched\" #lastName=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"lastName.valid || lastName.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"lastName.errors && lastName.errors.required\">\r\n                                                    sobrenome obrigatório\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>  \r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col\">                                            \r\n                                            <label for=\"uname1\">CPF</label>\r\n                                            <input type=\"text\" [(ngModel)]=\"registerUserData.cpf\" name=\"cpf\" class=\"form-control rounded-0\" \r\n                                            pattern=\"^\\d{3}\\.\\d{3}\\.\\d{3}(-\\d{2})$\" placeHolder=\"123.123.123-12\"\r\n                                            [class.is-invalid]=\"cpf.invalid && cpf.touched\" #cpf=\"ngModel\" required [disabled]=\"true\" >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"cpf.valid || cpf.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"cpf.errors && cpf.errors.required\">\r\n                                                    CPF obrigatório \r\n                                                </small>\r\n                                                <small  class=\"text-danger\" *ngIf=\"cpf.errors && cpf.errors.pattern\">\r\n                                                    CPF inválido (Ex.: 123.123.123-12)\r\n                                                </small>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-2\">\r\n                                            <label >Status</label>\r\n                                            <div class=\"onoffswitch\">\r\n                                                <input type=\"checkbox\" [(ngModel)]=\"registerUserData.status\" name=\"statusSwitch\" class=\"onoffswitch-checkbox\" id=\"statusSwitch\" checked>\r\n                                                <label class=\"onoffswitch-label\" for=\"statusSwitch\"></label>                                                \r\n                                            </div>\r\n                                        </div> \r\n                                    </div>\r\n                                </div> \r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">Nome de usuário</label>\r\n                                    <input type=\"text\" [(ngModel)]=\"registerUserData.username\" name=\"userName\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"userName.invalid && userName.touched\" #userName=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"userName.valid || userName.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"userName.errors && userName.errors.required\">\r\n                                                    Nome de usuário obrigatória\r\n                                                </small>\r\n                                            </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <label for=\"uname1\">E-mail</label>\r\n                                    <input #email=\"ngModel\" pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" type=\"text\" \r\n                                    [(ngModel)]=\"registerUserData.email\" name=\"email\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"email.invalid && email.touched\" required>\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"email.valid || email.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"email.errors && email.errors.required\">\r\n                                            e-mail obrigatório\r\n                                        </small>\r\n                                        <small  class=\"text-danger\" *ngIf=\"email.errors && email.errors.pattern\">\r\n                                            e-mail inválido\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">                            \r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-3\">\r\n                                            <label for=\"uname1\">DDD</label>\r\n                                            <input type=\"text\" pattern=\"^([1-9]{2})\"\r\n                                            placeHolder=\"11\"\r\n                                            [(ngModel)]=\"registerUserData.ddd\" name=\"dddModel\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"dddModel.invalid && dddModel.touched\" #dddModel=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"dddModel.valid || dddModel.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"dddModel.errors && dddModel.errors.required\">\r\n                                                    DDD obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\"*ngIf=\"(dddModel.errors && dddModel.errors.pattern) || ddHasError\">\r\n                                                    DDD inválido\r\n                                                </small>\r\n                                           </div>\r\n                                          \r\n                                        </div>\r\n                                        <div class=\"col\">\r\n                                            <label for=\"uname1\">Telefone</label>\r\n                                            <input type=\"text\" pattern=\"^([1-9]{1}[0-9]{3}|[1-9]{1}[0-9]{4})(-)([0-9]{4})\"\r\n                                            placeHolder=\"1234-5678 ou 12345-6789\"\r\n                                            [(ngModel)]=\"registerUserData.phone\" name=\"phone\" class=\"form-control rounded-0\" \r\n                                            [class.is-invalid]=\"phone.invalid && phone.touched\" #phone=\"ngModel\" required >\r\n                                            <div class=\"md-errors-spacer\" [hidden]=\"phone.valid || phone.untouched\">\r\n                                                <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.required\">\r\n                                                    Telefone obrigatório\r\n                                                </small>\r\n                                                <small  class=\"text-danger\"*ngIf=\"phone.errors && phone.errors.pattern\">\r\n                                                    Formato inválido (Ex.: 1234-5678 ou 12345-6789) \r\n                                                </small>\r\n                                           </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>  \r\n                                                    \r\n                                <hr/>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">                   \r\n                                            <button type=\"submit\" (click)=\"backToUsers()\" class=\"btn btn-info btn-block\">Voltar</button>                                            \r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">\r\n                                            <button type=\"submit\" [disabled]=\"registerForm.form.invalid\" (click)=\"nextTab('user-profile')\"  class=\"btn btn-rainti btn-block \">Próximo</button>                                                            \r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div> \r\n                          </form>\r\n                        </div>\r\n\r\n                        <!-- User Profile TAB -->\r\n                        <form\r\n                         class=\"tab-pane fade\" id=\"user-profile\" role=\"tabpanel\" aria-labelledby=\"user-profile-tab\" >\r\n                            <form class=\"form\" #profileForm=\"ngForm\" ></form>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"col\">\r\n                                        <h5>Selecione o Grupo de Acesso</h5>                                                                 \r\n                                    </div>                                        \r\n                                    <div class=\"col-md-6\">  \r\n                                        <div class=\"form border \" style=\"padding-bottom: 10px; padding-top: 10px;\">\r\n                                            <div class=\"col\">\r\n                                                <label >Grupo(s)</label>       \r\n                                            </div>\r\n                                            <div class=\"col\">\r\n                                                <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n                                            </div>                                                    \r\n                                        </div>                                            \r\n                                        \r\n                                        <div class=\"col border-left border-bottom\"style=\"padding-top: 10px; height: 350px; overflow-y: scroll; white-space: nowrap;\">\r\n                                            <div class=\"btn-group btn-group-toggle btn-group-vertical\" data-toggle=\"buttons\"  >    \r\n                                                <div class=\"col\" *ngFor=\"let group of _groupsData | filter : searchText\">\r\n                                                    <label class=\"btn btn-outline-rainti\" [ngClass]=\"group.checked ? 'active' : 'default'\"   >\r\n                                                        <input type=\"radio\" name=\"options\" [checked]=\"group.checked\" id=\"{{group.id}}\" autocomplete=\"off\" \r\n                                                        (click)=\"featuresControl($event)\"> {{ group.name }}\r\n                                                    </label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        \r\n                                    </div> \r\n                                    \r\n                                </div>  \r\n                                <hr/>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">                   \r\n                                            <button type=\"submit\" (click)=\"backToUsers()\" class=\"btn btn-info btn-block float-right\">Voltar</button>\r\n                                        </div>  \r\n                                        <div class=\"col-sm-6\">                                        \r\n                                            <button type=\"submit\" [disabled]=\"profileForm.form.invalid\" (click)=\"updateUser()\" class=\"btn btn-rainti btn-block \">Finalizar</button>                \r\n                                        </div>  \r\n                                    </div>                            \r\n                                </div> \r\n                            </form>\r\n                        </div>\r\n                        \r\n                      </div>\r\n                                       \r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n    \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registers/user/user-main/user-main.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registers/user/user-main/user-main.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card shadow rounded\" style=\"padding: 30px\">\r\n  <div class=\"row justify-content-lg align-items-center\">\r\n    <div class=\"col\">\r\n      <h1>Usuários</h1>  \r\n    </div>  \r\n    <div class=\"col-md-auto\">    \r\n      <form class=\"form-inline \">\r\n        <div class=\"row align-items-center mb-1\">    \r\n          <div class=\"col\">\r\n            <select class=\"custom-select\" [(ngModel)]=\"_status\" name=\"_status\" >                            \r\n                <option >Todos</option>\r\n                <option >Ativo</option>\r\n                <option >Inativo</option>\r\n            </select>\r\n                              \r\n          </div>  \r\n          <div class=\"col\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" [(ngModel)]=\"_searchText\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n          </div>             \r\n        </div>   \r\n      </form> \r\n    </div>\r\n  </div>\r\n  <hr/>\r\n  <div class=\"row\" style=\"padding-top: 10px; height: 650px; overflow-y: scroll; white-space: nowrap;\">    \r\n    <div class=\"col-md-4 mb-4\" *ngFor=\"let users of user | filterUser : _searchText | filterStatus : _status \"> \r\n      <div class=\"card text shadow rounded\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{users.name}} {{users.lastname}}</h5>\r\n          <hr/>\r\n          <p class=\"card-text\"><b>status: </b> {{users.status}}</p>\r\n          <p class=\"card-text\"><b>usuário: </b> {{users.username}} </p>\r\n          <p class=\"card-text\"><b>e-mail: </b> {{users.email}}</p> \r\n          <p class=\"card-text\"><b>CPF: </b> {{users.cpf}}</p>         \r\n                    \r\n        </div>\r\n        <div class=\"card-footer text-muted\">\r\n          <div class=\"row align-items-center mb-1\">    \r\n            <div class=\"col\">\r\n              <button type=\"button\" class=\"btn btn-rainti btn-md btn-block\" routerLink=\"/usuarios-detalhe/{{users.id}}\" routerLinkActive=\"active\" >Editar</button>\r\n            </div>        \r\n            <div class=\"col\">\r\n              <button type=\"button\" class=\"btn btn-secondary btn-md btn-block\" (click)=\"deleteUser()\">Desativar</button>\r\n            </div>            \r\n          </div>         \r\n        </div>\r\n      </div>\r\n    </div>\r\n      <!-- <div class=\"col-md-4 mb-4\" *ngFor=\"let users of user | filter: fristname : searchText\"> \r\n        <div class=\"card text-center shadow rounded\">\r\n          <div class=\"card-body \">\r\n            <h5 class=\"card-title \">{{users.name}} {{users.lastname}}</h5>\r\n            <hr/>\r\n            <p class=\"card-text\"><b>usuário: </b> {{users.username}}</p>\r\n            <p class=\"card-text\"><b>e-mail: </b> {{users.email}}</p>          \r\n          </div>\r\n          <div class=\"card-footer text-muted\">\r\n            <div class=\"row align-items-center mb-1\">    \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-rainti btn-md btn-block\" routerLink=\"/usuario-detalhe\" routerLinkActive=\"active\" >Editar</button>\r\n              </div>        \r\n              <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-info btn-md btn-block\" (click)=\"deleteUser()\">Contatos</button>\r\n              </div>            \r\n            </div>         \r\n          </div>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-contract-detail/audit-contract-detail.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-contract-detail/audit-contract-detail.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>audit-contract-detail works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-creditor-detail/audit-creditor-detail.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-creditor-detail/audit-creditor-detail.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>audit-creditor-detail works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-detran-detail/audit-detran-detail.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-detran-detail/audit-detran-detail.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>audit-detran-detail works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-group-detail/audit-group-detail.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-group-detail/audit-group-detail.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>audit-group-detail works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-user-detail/audit-user-detail.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-user-detail/audit-user-detail.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>audit-user-detail works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/financial-transaction/financial-transaction.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/financial-transaction/financial-transaction.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>financial-transaction works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/transaction-billing/transaction-billing.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reports/transaction-billing/transaction-billing.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card shadow rounded\" style=\"padding: 30px\">\r\n  <div class=\"row justify-content-lg align-items-center\">\r\n    <div class=\"col\">\r\n      <h1>Bilhetagem de transações</h1>\r\n    </div>\r\n  </div>\r\n  <hr />\r\n  <div style=\"padding-top: 10px; height: 650px; white-space: nowrap;\"> \r\n    <form #form=\"ngForm\"> \r\n\r\n        <div class=\"d-flex flex-row-reverse bd-highlight p-2 bd-highlight d-inline-block\">\r\n        <div class=\"ml-1\">\r\n          <button class=\"btn btn-sm  btn-rainti\"  (click)=\"exportAsXLSX()\"> Exportar XLS <fa-icon\r\n            [icon]=\"['fas', 'file-excel']\"></fa-icon></button>\r\n        </div>\r\n        <div>\r\n          <button class=\"btn btn-sm  btn-rainti\" (click)=\"CsvFile()\"> Exportar CSV <fa-icon\r\n            [icon]=\"['fas', 'file-excel']\"></fa-icon></button>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"row\"> \r\n        <div class=\"col-8 d-inline-block\">\r\n            <div class=\"form-group panel panel-primary filterable d-inline-block px-2\" *ngIf=\"filter=='comFiltros'\">\r\n              <strong>Detran</strong>\r\n              <input class=\"form-control form-control-sm\" type=\"search\" [(ngModel)]=\"detran\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n            </div>\r\n            <div class=\"form-group  panel panel-primary filterable d-inline-block\" *ngIf=\"filter=='comFiltros'\">\r\n              <strong>Credora</strong>\r\n              <input class=\"form-control form-control-sm\" type=\"search\" [(ngModel)]=\"creditor\" [ngModelOptions]=\"{standalone: true}\" placeHolder=\"Buscar\">\r\n            </div>\r\n            <div class=\"form-group d-inline-block  px-2\" *ngIf=\"filter=='comFiltros'\">\r\n              <strong>Data de</strong>\r\n              <input type=\"date\" [(ngModel)]=\"startDate\" name=\"startDate\" class=\"form-control form-control-sm\" \r\n              #start=\"ngModel\" [value]=\"startDate\" >\r\n            </div>\r\n            <div class=\"form-group d-inline-block\" *ngIf=\"filter=='comFiltros'\">\r\n              <strong>Data até</strong>\r\n              <input type=\"date\" [(ngModel)]=\"endDate\" name=\"endDate\" class=\"form-control form-control-sm\" \r\n              #end=\"ngModel\"  [value]=\"endDate\">\r\n            </div>\r\n          </div>\r\n        <div class=\"col-4 d-inline-block\">\r\n          <div *ngIf=\"filter=='semFiltros'\" class=\"d-flex flex-row-reverse bd-highlight bd-highlight d-inline-block\">\r\n            <button class=\"btn btn-sm  btn-rainti\" (click)=\"markAsActive('comFiltros')\"> Filtro <fa-icon\r\n                [icon]=\"['fas', 'filter']\"></fa-icon></button>\r\n          </div>\r\n          <div *ngIf=\"filter=='comFiltros'\" class=\"d-flex flex-row-reverse bd-highlight  bd-highlight d-inline-block\">\r\n            <button class=\"btn btn-sm  btn-rainti\" (click)=\"markAsActive('semFiltros')\"> Apagar filtro <fa-icon\r\n                [icon]=\"['fas', 'ban']\"></fa-icon></button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n        <table class=\"table table-hover\">\r\n          <thead class=\"bg-rainti text-light font-weight-lighter\">\r\n    \r\n            <th>Contrato</th>\r\n            <th>Gestora</th>\r\n            <th>Credora</th>\r\n            <th>Chassi</th>\r\n            <th>Detran</th>\r\n            <th>Taxa</th>\r\n            <th>Data</th>\r\n            <th>Status</th>\r\n            <br>\r\n          </thead>\r\n    \r\n          <tbody>\r\n            <tr\r\n              *ngFor=\"let dataTransactionBillings of getArray() | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\">\r\n    \r\n              <td>{{ dataTransactionBillings.Contrato }}</td>\r\n              <td>{{ dataTransactionBillings.Gestora }}</td>\r\n              <td>{{ dataTransactionBillings.Credora }}</td>\r\n              <td>{{ dataTransactionBillings.Chassi }}</td>\r\n              <td>{{ dataTransactionBillings.Detran }}</td>\r\n              <td>{{ dataTransactionBillings.Taxa | currency: 'BRL' }}</td>\r\n              <td>{{ dataTransactionBillings.Data | date: 'dd/MM/yyyy'}}</td>\r\n              <td>{{ dataTransactionBillings.Status }}</td>\r\n            </tr>\r\n    \r\n          </tbody>\r\n    \r\n        </table>\r\n        <div class=\"d-flex flex-row-reverse bd-highlight p-2 bd-highlight\">\r\n          <ngb-pagination [collectionSize]=\"getArray().length\" [(page)]=\"page\" [maxSize]=\"5\" [rotate]=\"true\"\r\n            [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n        </div>\r\n    </form>\r\n    <hr />\r\n    <div class=\"col\" class=\"text-right\">\r\n      <h4>Total: {{ getTotalCost() | currency:'BRL'}}</h4>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/login/login.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/login/login.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-5 mx-auto\" style=\"padding-top: 150px;\">\r\n    <div class=\"card shadow\">\r\n        <div class=\"card-body\">\r\n            <!-- <a routerLink=\"/register\" routerLinkActive=\"active\" class=\"float-right btn btn-outline-primary\">Cadastre-se</a> -->\r\n            <h3 class=\"card-title\">Bem-vindo</h3>\r\n            <hr />\r\n            <form #loginForm=\"ngForm\">\r\n                <div class=\"form-group\">\r\n                    <label>Usuário</label>\r\n                    <input type=\"text\" [(ngModel)]=\"loginUserData.userName\" name=\"userName\"\r\n                        class=\"form-control rounded-0\" #user=\"ngModel\" [class.is-invalid]=\"user.invalid && user.touched\"\r\n                        required>\r\n                    <div class=\"md-errors-spacer\" [hidden]=\"user.valid || user.untouched\">\r\n                        <small class=\"text-danger\" *ngIf=\"user.errors && user.errors.required\">\r\n                            Nome de usuário obrigatório\r\n                        </small>\r\n                    </div>\r\n                </div> <!-- form-group// -->\r\n                <div class=\"form-group\">\r\n\r\n                    <label>Senha</label>\r\n\r\n                    <input type=\"password\" [(ngModel)]=\"loginUserData.password\" name=\"password\"\r\n                        class=\"form-control rounded-0\" #password=\"ngModel\"\r\n                        [class.is-invalid]=\"password.invalid && password.touched\" required>\r\n\r\n                    <a class=\"text\" routerLink=\"/recuperar-senha\" routerLinkActive=\"active\">Esqueceu sua senha? Clique\r\n                        aqui</a>\r\n                    <div class=\"md-errors-spacer\" [hidden]=\"password.valid || password.untouched\">\r\n                        <small class=\"text-danger\" *ngIf=\"password.errors && password.errors.required\">\r\n                            Senha obrigatória\r\n                        </small>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"form-group\"> \r\n                            <div class=\"checkbox\">\r\n                                <label> <input type=\"checkbox\"> Salvar senha </label>\r\n                            </div>                         \r\n                         </div> -->\r\n                <hr />\r\n                <div class=\"form-group\">\r\n                    <button [disabled]=\"loginForm.form.invalid\" type=\"button\" (click)=\"loginUser()\"\r\n                        class=\"btn btn-rainti btn-block\">Entrar</button>\r\n                </div>\r\n\r\n            </form>\r\n            <div class=\"row\">\r\n                <div class=\"alert alert-danger text-center text-danger text-wrap\" *ngIf=\"_errorMessage\">\r\n                    {{_errorMessage}}\r\n                </div>\r\n                <img src=\"../assets/images/logo.png\" class=\"col-md-3 mx-auto\" >\r\n                \r\n            </div>\r\n            \r\n\r\n            \r\n\r\n\r\n\r\n        </div> <!-- card.// -->\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/password-recover-failed/password-recover-failed.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/password-recover-failed/password-recover-failed.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n        <span class=\"anchor\" id=\"formLogin\"></span>\r\n        <div class=\"card shadow\">\r\n            <article class=\"card-body\">\r\n                <h4 class=\"card-title mb-4 mt-1 text-center\">CPF inválido!</h4>\r\n                <h6 class=\"card-title mb-4 mt-1 text-center\">Verifique seu CPF e tente novamente.</h6>\r\n                <button type=\"button\" routerLink=\"/recuperar-senha\" class=\"btn btn-danger btn-block\">Voltar</button>\r\n            </article>\r\n            </div> \r\n    </div>\r\n    \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/password-recover-success/password-recover-success.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/password-recover-success/password-recover-success.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n        <span class=\"anchor\" id=\"formLogin\"></span>\r\n        <div class=\"card shadow\">\r\n            <article class=\"card-body\">\r\n                <h4 class=\"card-title mb-4 mt-1 text-center\">E-mail enviado com sucesso!</h4>\r\n                <h6 class=\"card-title mb-4 mt-1 text-center\">Acesse seu e-mail e cadastre sua senha novamente.</h6>\r\n                <button type=\"button\" routerLink=\"/login\" class=\"btn btn-rainti btn-block\">Voltar</button>\r\n            </article>\r\n            </div> \r\n    </div>\r\n    \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/password-recover/password-recover.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/password-recover/password-recover.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"col-md-6 mx-auto\">\r\n        <span class=\"anchor\" id=\"formLogin\"></span>\r\n        <div class=\"card shadow\">\r\n            <article class=\"card-body\">\r\n                <h4 class=\"card-title mb-4 mt-1 text-center\">Esqueceu sua senha?</h4>\r\n                <form class=\"form\" #recover=\"ngForm\"> \r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" [(ngModel)]=\"recoverPasswordData.cpf\" placeHolder=\"Digite seu CPF no formato 123.123.123-12\" name=\"cpf\" \r\n                        class=\"form-control rounded-0\"\r\n                        pattern=\"^\\d{3}\\.\\d{3}\\.\\d{3}(-\\d{2})$\" \r\n                        [class.is-invalid]=\"cpf.invalid && cpf.touched\" #cpf=\"ngModel\" required >\r\n                        <small  class=\"text-secondary\" >\r\n                            (Ex.: 123.123.123-12)\r\n                        </small>\r\n                        <div class=\"md-errors-spacer\" [hidden]=\"cpf.valid || cpf.untouched\">\r\n                            <small  class=\"text-danger\"*ngIf=\"cpf.errors && cpf.errors.required\">\r\n                                CPF obrigatório \r\n                            </small>\r\n                            <small  class=\"text-danger\" *ngIf=\"cpf.errors && cpf.errors.pattern\">\r\n                                CPF inválido (Ex.: 123.123.123-12)\r\n                            </small>\r\n                        </div>\r\n                    \r\n                    \r\n                    </div> <!-- form-group// -->   \r\n                             \r\n                    <div class=\"form-group\">\r\n                        <button type=\"button\" [disabled]=\"recover.form.invalid\" (click)=\"recoverPassword()\" class=\"btn btn-rainti btn-block\">Resetar senha</button>\r\n                    </div>                                                      \r\n                </form>\r\n            </article>\r\n            </div> \r\n    </div>\r\n    \r\n</div>\r\n    \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/password-reset/password-reset.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/password-reset/password-reset.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"py-5\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n            <span class=\"anchor\" id=\"formLogin\"></span>\r\n            <!-- form card login -->\r\n            <div class=\"card shadow\">\r\n                  <div class=\"card-body\">\r\n                    <h4 class=\"card-title mb-4 mt-1\">Verifique seu e-mail</h4>\r\n                    <hr/>\r\n                    <label for=\"uname1\">Um código de verificação foi enviado ao seu e-mail cadastrado.<br>Esse código tem validade de <b>15 minutos.</b></label>\r\n                    <hr/>\r\n                    <form  class=\"form\" #resetForm=\"ngForm\">                        \r\n                        <div class=\"form-group\">\r\n                            <label for=\"uname1\">Código de verificação</label>\r\n                            <div class=\"md-errors-spacer\" [hidden]=\"resetCode.valid || resetCode.untouched\">\r\n                                <small  class=\"text-danger\"*ngIf=\"resetCode.errors && resetCode.errors.required\">\r\n                                    Código Obrigatório\r\n                                </small>\r\n                            </div>\r\n                            \r\n                            <form #resetCode=\"ngForm\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-1\">\r\n                                        <input type=\"text\" style=\"text-align: center;\"  maxlength=\"1\" [(ngModel)]=\"resetUserData.resetCode1\" name=\"resetCode1\" class=\"form-control rounded-5 form-fixer\" \r\n                                        [class.is-invalid]=\"resetCode1.invalid && resetCode1.touched\" #resetCode1=\"ngModel\" required >\r\n                                    </div>\r\n                                    <div class=\"col-md-1\">\r\n                                        <input type=\"text\" (blur)=\"resetCode1.valid\" style=\"text-align: center;\"  maxlength=\"1\" [(ngModel)]=\"resetUserData.resetCode2\" name=\"resetCode2\" class=\"form-control rounded-5 form-fixer\" \r\n                                        [class.is-invalid]=\"resetCode2.invalid && resetCode2.touched\" #resetCode2=\"ngModel\" required >\r\n                                    </div>\r\n                                    <div class=\"col-md-1\">\r\n                                        <input type=\"text\" style=\"text-align: center;\"  maxlength=\"1\" [(ngModel)]=\"resetUserData.resetCode3\" name=\"resetCode3\" class=\"form-control rounded-5 form-fixer\" \r\n                                        [class.is-invalid]=\"resetCode3.invalid && resetCode3.touched\" #resetCode3=\"ngModel\" required >\r\n                                    </div>\r\n                                    <div class=\"col-md-1\">\r\n                                        <input type=\"text\" style=\"text-align: center;\"  maxlength=\"1\" [(ngModel)]=\"resetUserData.resetCode4\" name=\"resetCode4\" class=\"form-control rounded-5 form-fixer\" \r\n                                        [class.is-invalid]=\"resetCode4.invalid && resetCode4.touched\" #resetCode4=\"ngModel\" required >\r\n                                    </div>\r\n                                    <div class=\"col-md-1\">\r\n                                        <input type=\"text\" style=\"text-align: center;\"  maxlength=\"1\" [(ngModel)]=\"resetUserData.resetCode5\" name=\"resetCode5\" class=\"form-control rounded-5 form-fixer\" \r\n                                        [class.is-invalid]=\"resetCode5.invalid && resetCode5.touched\" #resetCode5=\"ngModel\" required >\r\n                                    </div>\r\n                                    <div class=\"col-md-1\">\r\n                                        <input type=\"text\" style=\"text-align: center;\"  maxlength=\"1\" [(ngModel)]=\"resetUserData.resetCode6\" name=\"resetCode6\" class=\"form-control rounded-5 form-fixer\" \r\n                                        [class.is-invalid]=\"resetCode6.invalid && resetCode6.touched\" #resetCode6=\"ngModel\" required >\r\n                                    </div>\r\n                                </div>\r\n                            </form> \r\n                            <!-- <small  class=\"text-primary\">\r\n                                <a class=\"text\" (click)=\"doSomething\" style=\"cursor:pointer\">Gerar novo código</a>\r\n                            </small> -->\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"uname1\">Nova Senha</label>\r\n                                    <input type=\"password\" [(ngModel)]=\"resetUserData.password\" name=\"password\"  class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"password.invalid && password.touched\" #password=\"ngModel\" required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"password.valid || password.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"password.errors && password.errors.required\">\r\n                                            senha obrigatória\r\n                                        </small>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6\">\r\n                                    <label for=\"uname1\">Confirme sua senha</label>\r\n                                    <input type=\"password\" [(ngModel)]=\"resetUserData.confirmedPassword\" name=\"confirmedPassword\" class=\"form-control rounded-0\" \r\n                                    [class.is-invalid]=\"confirmedPassword.invalid && confirmedPassword.touched\" #confirmedPassword=\"ngModel\" \r\n                                    pattern=\"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}\"\r\n                                    appConfirmEqualValidator=\"password\"required >\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"confirmedPassword.valid || confirmedPassword.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"confirmedPassword.errors && confirmedPassword.errors.required\">\r\n                                            confirmação de senha obrigatória\r\n                                        </small>\r\n                                    </div>\r\n                                    <div class=\"md-errors-spacer\" [hidden]=\"confirmedPassword.valid || confirmedPassword.untouched\">\r\n                                        <small  class=\"text-danger\"*ngIf=\"confirmedPassword.errors && confirmedPassword.errors?.notEqual\">\r\n                                            confirmação de senha incorreta\r\n                                        </small>\r\n                                    </div>\r\n                                </div>  \r\n                            </div>                            \r\n                        </div>              \r\n                        <hr/>                            \r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <button  type=\"submit\" (click)=\"backToEmailSender()\" class=\"btn btn-info btn-block\">Voltar</button>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <button [disabled]=\"resetForm.form.invalid\" type=\"submit\" (click)=\"resetUser()\" class=\"btn btn-rainti btn-block\">Confirmar</button>\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        \r\n                    </form>\r\n                  </div>\r\n            </div>\r\n            <!-- /form card login -->\r\n        </div>\r\n    </div>\r\n</div>\r\n    \r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _system_access_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-access/login/login.component */ "./src/app/system-access/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _entities_detran_detran_main_detran_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./entities/detran/detran-main/detran-main.component */ "./src/app/entities/detran/detran-main/detran-main.component.ts");
/* harmony import */ var _entities_registrar_registrar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./entities/registrar/registrar.component */ "./src/app/entities/registrar/registrar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _system_access_password_recover_password_recover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./system-access/password-recover/password-recover.component */ "./src/app/system-access/password-recover/password-recover.component.ts");
/* harmony import */ var _entities_detran_detran_detail_detran_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./entities/detran/detran-detail/detran-detail.component */ "./src/app/entities/detran/detran-detail/detran-detail.component.ts");
/* harmony import */ var _entities_detran_detran_contacts_detran_contacts_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./entities/detran/detran-contacts/detran-contacts.component */ "./src/app/entities/detran/detran-contacts/detran-contacts.component.ts");
/* harmony import */ var _system_access_password_recover_success_password_recover_success_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./system-access/password-recover-success/password-recover-success.component */ "./src/app/system-access/password-recover-success/password-recover-success.component.ts");
/* harmony import */ var _system_access_password_recover_failed_password_recover_failed_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./system-access/password-recover-failed/password-recover-failed.component */ "./src/app/system-access/password-recover-failed/password-recover-failed.component.ts");
/* harmony import */ var _system_access_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./system-access/password-reset/password-reset.component */ "./src/app/system-access/password-reset/password-reset.component.ts");
/* harmony import */ var _entities_detran_detran_add_detran_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./entities/detran/detran-add/detran-add.component */ "./src/app/entities/detran/detran-add/detran-add.component.ts");
/* harmony import */ var _entities_detran_detran_contact_add_detran_contact_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./entities/detran/detran-contact-add/detran-contact-add.component */ "./src/app/entities/detran/detran-contact-add/detran-contact-add.component.ts");
/* harmony import */ var _entities_creditor_creditor_main_creditor_main_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./entities/creditor/creditor-main/creditor-main.component */ "./src/app/entities/creditor/creditor-main/creditor-main.component.ts");
/* harmony import */ var _entities_creditor_creditor_detail_creditor_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./entities/creditor/creditor-detail/creditor-detail.component */ "./src/app/entities/creditor/creditor-detail/creditor-detail.component.ts");
/* harmony import */ var _entities_creditor_creditor_add_creditor_add_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./entities/creditor/creditor-add/creditor-add.component */ "./src/app/entities/creditor/creditor-add/creditor-add.component.ts");
/* harmony import */ var _entities_creditor_creditor_contacts_creditor_contacts_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./entities/creditor/creditor-contacts/creditor-contacts.component */ "./src/app/entities/creditor/creditor-contacts/creditor-contacts.component.ts");
/* harmony import */ var _entities_creditor_creditor_contact_detail_creditor_contact_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./entities/creditor/creditor-contact-detail/creditor-contact-detail.component */ "./src/app/entities/creditor/creditor-contact-detail/creditor-contact-detail.component.ts");
/* harmony import */ var _entities_creditor_creditor_contact_add_creditor_contact_add_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./entities/creditor/creditor-contact-add/creditor-contact-add.component */ "./src/app/entities/creditor/creditor-contact-add/creditor-contact-add.component.ts");
/* harmony import */ var _entities_creditor_group_creditor_group_main_creditor_group_main_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./entities/creditor-group/creditor-group-main/creditor-group-main.component */ "./src/app/entities/creditor-group/creditor-group-main/creditor-group-main.component.ts");
/* harmony import */ var _entities_creditor_group_creditor_group_detail_creditor_group_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./entities/creditor-group/creditor-group-detail/creditor-group-detail.component */ "./src/app/entities/creditor-group/creditor-group-detail/creditor-group-detail.component.ts");
/* harmony import */ var _entities_creditor_group_creditor_group_add_creditor_group_add_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./entities/creditor-group/creditor-group-add/creditor-group-add.component */ "./src/app/entities/creditor-group/creditor-group-add/creditor-group-add.component.ts");
/* harmony import */ var _entities_creditor_group_creditor_group_contacts_creditor_group_contacts_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component */ "./src/app/entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component.ts");
/* harmony import */ var _entities_creditor_group_creditor_group_contact_detail_creditor_group_contact_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component */ "./src/app/entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component.ts");
/* harmony import */ var _entities_creditor_group_creditor_group_contact_add_creditor_group_contact_add_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component */ "./src/app/entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component.ts");
/* harmony import */ var _entities_detran_detran_contact_detail_detran_contact_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./entities/detran/detran-contact-detail/detran-contact-detail.component */ "./src/app/entities/detran/detran-contact-detail/detran-contact-detail.component.ts");
/* harmony import */ var _registers_user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./registers/user/user-add/user-add.component */ "./src/app/registers/user/user-add/user-add.component.ts");
/* harmony import */ var _registers_user_user_main_user_main_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./registers/user/user-main/user-main.component */ "./src/app/registers/user/user-main/user-main.component.ts");
/* harmony import */ var _registers_groups_group_add_group_add_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./registers/groups/group-add/group-add.component */ "./src/app/registers/groups/group-add/group-add.component.ts");
/* harmony import */ var _registers_groups_group_main_group_main_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./registers/groups/group-main/group-main.component */ "./src/app/registers/groups/group-main/group-main.component.ts");
/* harmony import */ var _contract_contract_main_contract_main_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./contract/contract-main/contract-main.component */ "./src/app/contract/contract-main/contract-main.component.ts");
/* harmony import */ var _contract_contract_add_contract_add_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./contract/contract-add/contract-add.component */ "./src/app/contract/contract-add/contract-add.component.ts");
/* harmony import */ var _reports_transaction_billing_transaction_billing_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./reports/transaction-billing/transaction-billing.component */ "./src/app/reports/transaction-billing/transaction-billing.component.ts");
/* harmony import */ var _reports_financial_transaction_financial_transaction_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./reports/financial-transaction/financial-transaction.component */ "./src/app/reports/financial-transaction/financial-transaction.component.ts");
/* harmony import */ var _registers_groups_groups_detail_groups_detail_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./registers/groups/groups-detail/groups-detail.component */ "./src/app/registers/groups/groups-detail/groups-detail.component.ts");
/* harmony import */ var _registers_user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./registers/user/user-detail/user-detail.component */ "./src/app/registers/user/user-detail/user-detail.component.ts");








































const routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _system_access_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'usuarios-adicionar',
        component: _registers_user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_30__["UserAddComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'usuarios-detalhe/:id',
        component: _registers_user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_39__["UserDetailComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'usuarios',
        component: _registers_user_user_main_user_main_component__WEBPACK_IMPORTED_MODULE_31__["UserMainComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'grupos',
        component: _registers_groups_group_main_group_main_component__WEBPACK_IMPORTED_MODULE_33__["GroupMainComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'grupos-adicionar',
        component: _registers_groups_group_add_group_add_component__WEBPACK_IMPORTED_MODULE_32__["GroupAddComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'grupo-detalhe/:id',
        component: _registers_groups_groups_detail_groups_detail_component__WEBPACK_IMPORTED_MODULE_38__["GroupsDetailComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'recuperar-senha',
        component: _system_access_password_recover_password_recover_component__WEBPACK_IMPORTED_MODULE_9__["PasswordRecoverComponent"],
    },
    {
        path: 'recuperar-senha-enviado',
        component: _system_access_password_recover_success_password_recover_success_component__WEBPACK_IMPORTED_MODULE_12__["PasswordRecoverSuccessComponent"],
    },
    {
        path: 'recuperar-senha-falha',
        component: _system_access_password_recover_failed_password_recover_failed_component__WEBPACK_IMPORTED_MODULE_13__["PasswordRecoverFailedComponent"]
    },
    {
        path: 'recuperar-senha-reset/:id',
        component: _system_access_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_14__["PasswordResetComponent"]
    },
    {
        path: 'detran',
        component: _entities_detran_detran_main_detran_main_component__WEBPACK_IMPORTED_MODULE_5__["DetranMainComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
    },
    {
        path: 'detran-detalhe/:id',
        component: _entities_detran_detran_detail_detran_detail_component__WEBPACK_IMPORTED_MODULE_10__["DetranDetailComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'detran-contatos/:id',
        component: _entities_detran_detran_contacts_detran_contacts_component__WEBPACK_IMPORTED_MODULE_11__["DetranContactsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'detran-adicionar',
        component: _entities_detran_detran_add_detran_add_component__WEBPACK_IMPORTED_MODULE_15__["DetranAddComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'detran-adicionar-contato',
        component: _entities_detran_detran_contact_add_detran_contact_add_component__WEBPACK_IMPORTED_MODULE_16__["DetranContactAddComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'detran-detalhe-contato/:id',
        component: _entities_detran_detran_contact_detail_detran_contact_detail_component__WEBPACK_IMPORTED_MODULE_29__["DetranContactDetailComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'detran-adicionar',
        component: _entities_detran_detran_add_detran_add_component__WEBPACK_IMPORTED_MODULE_15__["DetranAddComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'credora',
        component: _entities_creditor_creditor_main_creditor_main_component__WEBPACK_IMPORTED_MODULE_17__["CreditorMainComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'credor-adicionar',
        component: _entities_creditor_creditor_add_creditor_add_component__WEBPACK_IMPORTED_MODULE_19__["CreditorAddComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'credor-detalhe/:id',
        component: _entities_creditor_creditor_detail_creditor_detail_component__WEBPACK_IMPORTED_MODULE_18__["CreditorDetailComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
    },
    {
        path: 'credor-contatos/:id',
        component: _entities_creditor_creditor_contacts_creditor_contacts_component__WEBPACK_IMPORTED_MODULE_20__["CreditorContactsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'credor-detalhe-contato/:id',
        component: _entities_creditor_creditor_contact_detail_creditor_contact_detail_component__WEBPACK_IMPORTED_MODULE_21__["CreditorContactDetailComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'credor-adicionar-contato/:id',
        component: _entities_creditor_creditor_contact_add_creditor_contact_add_component__WEBPACK_IMPORTED_MODULE_22__["CreditorContactAddComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'gestora',
        component: _entities_creditor_group_creditor_group_main_creditor_group_main_component__WEBPACK_IMPORTED_MODULE_23__["CreditorGroupMainComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'gestor-detalhe/:id',
        component: _entities_creditor_group_creditor_group_detail_creditor_group_detail_component__WEBPACK_IMPORTED_MODULE_24__["CreditorGroupDetailComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'gestor-contatos/:id',
        component: _entities_creditor_group_creditor_group_contacts_creditor_group_contacts_component__WEBPACK_IMPORTED_MODULE_26__["CreditorGroupContactsComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'gestor-detalhe-contato/:id',
        component: _entities_creditor_group_creditor_group_contact_detail_creditor_group_contact_detail_component__WEBPACK_IMPORTED_MODULE_27__["CreditorGroupContactDetailComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'gestor-adicionar',
        component: _entities_creditor_group_creditor_group_add_creditor_group_add_component__WEBPACK_IMPORTED_MODULE_25__["CreditorGroupAddComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'gestor-adicionar-contato/:id',
        component: _entities_creditor_group_creditor_group_contact_add_creditor_group_contact_add_component__WEBPACK_IMPORTED_MODULE_28__["CreditorGroupContactAddComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'detran-adicionar-contato/:id',
        component: _entities_detran_detran_contact_add_detran_contact_add_component__WEBPACK_IMPORTED_MODULE_16__["DetranContactAddComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'registradora',
        component: _entities_registrar_registrar_component__WEBPACK_IMPORTED_MODULE_6__["RegistrarComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'principal',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'ajuda',
        component: _help_help_component__WEBPACK_IMPORTED_MODULE_8__["HelpComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'contratos',
        component: _contract_contract_main_contract_main_component__WEBPACK_IMPORTED_MODULE_34__["ContractMainComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'registrar-contrato',
        component: _contract_contract_add_contract_add_component__WEBPACK_IMPORTED_MODULE_35__["ContractAddComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'bilhetagem-transacoes',
        component: _reports_transaction_billing_transaction_billing_component__WEBPACK_IMPORTED_MODULE_36__["TransactionBillingComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'transacoes-financeiras',
        component: _reports_financial_transaction_financial_transaction_component__WEBPACK_IMPORTED_MODULE_37__["FinancialTransactionComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities_entities_services_entities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities/entities-services/entities.service */ "./src/app/entities/entities-services/entities.service.ts");
/* harmony import */ var _system_access_system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-access/system-access-services/auth.service */ "./src/app/system-access/system-access-services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detran_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detran.service */ "./src/app/detran.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let AppComponent = class AppComponent {
    constructor(_entitiesService, _authService, _router, _detranService, _modalService, _config) {
        this._entitiesService = _entitiesService;
        this._authService = _authService;
        this._router = _router;
        this._detranService = _detranService;
        this._modalService = _modalService;
        this._config = _config;
        this.title = 'SRC - Sistema de Registro de Contrato';
        this.entityTypes = [];
        this.detranAllowed = '';
        _config.backdrop = 'static';
        _config.keyboard = false;
    }
    ngOnInit() {
        this._entitiesService.getEntitiesTypes()
            .subscribe(res => this.entityTypes = res, err => console.log(err));
    }
    /* ngAfterViewInit(){
      window.document.activeElement.ownerDocument.body.style.backgroundColor = '#F0F0F0';
   } */
    checkDetranAvaiability(content) {
        this._detranService.getStates()
            .subscribe(res => {
            if (res.length == 0) {
                this._modalService.open(content);
            }
            else {
                this._router.navigate(["/detran-adicionar"]);
            }
        }, err => {
            console.log(err);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _entities_entities_services_entities_service__WEBPACK_IMPORTED_MODULE_2__["EntitiesService"] },
    { type: _system_access_system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _detran_service__WEBPACK_IMPORTED_MODULE_5__["DetranService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModalConfig"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angular_user_idle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-user-idle */ "./node_modules/angular-user-idle/fesm2015/angular-user-idle.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _system_access_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./system-access/login/login.component */ "./src/app/system-access/login/login.component.ts");
/* harmony import */ var _system_access_system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./system-access/system-access-services/auth.service */ "./src/app/system-access/system-access-services/auth.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _pipes_filter_name_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pipes/filter-name.pipe */ "./src/app/pipes/filter-name.pipe.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _entities_registrar_registrar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./entities/registrar/registrar.component */ "./src/app/entities/registrar/registrar.component.ts");
/* harmony import */ var _entities_detran_detran_contacts_detran_contacts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./entities/detran/detran-contacts/detran-contacts.component */ "./src/app/entities/detran/detran-contacts/detran-contacts.component.ts");
/* harmony import */ var _system_access_password_recover_password_recover_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./system-access/password-recover/password-recover.component */ "./src/app/system-access/password-recover/password-recover.component.ts");
/* harmony import */ var _entities_detran_detran_detail_detran_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./entities/detran/detran-detail/detran-detail.component */ "./src/app/entities/detran/detran-detail/detran-detail.component.ts");
/* harmony import */ var _system_access_password_recover_success_password_recover_success_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./system-access/password-recover-success/password-recover-success.component */ "./src/app/system-access/password-recover-success/password-recover-success.component.ts");
/* harmony import */ var _system_access_password_recover_failed_password_recover_failed_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./system-access/password-recover-failed/password-recover-failed.component */ "./src/app/system-access/password-recover-failed/password-recover-failed.component.ts");
/* harmony import */ var _system_access_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./system-access/password-reset/password-reset.component */ "./src/app/system-access/password-reset/password-reset.component.ts");
/* harmony import */ var _custom_confirm_equal_validator__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../custom/confirm-equal-validator */ "./src/custom/confirm-equal-validator.ts");
/* harmony import */ var _entities_detran_detran_add_detran_add_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./entities/detran/detran-add/detran-add.component */ "./src/app/entities/detran/detran-add/detran-add.component.ts");
/* harmony import */ var _entities_detran_detran_contact_add_detran_contact_add_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./entities/detran/detran-contact-add/detran-contact-add.component */ "./src/app/entities/detran/detran-contact-add/detran-contact-add.component.ts");
/* harmony import */ var _entities_detran_detran_main_detran_main_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./entities/detran/detran-main/detran-main.component */ "./src/app/entities/detran/detran-main/detran-main.component.ts");
/* harmony import */ var _entities_creditor_creditor_main_creditor_main_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./entities/creditor/creditor-main/creditor-main.component */ "./src/app/entities/creditor/creditor-main/creditor-main.component.ts");
/* harmony import */ var _entities_creditor_creditor_detail_creditor_detail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./entities/creditor/creditor-detail/creditor-detail.component */ "./src/app/entities/creditor/creditor-detail/creditor-detail.component.ts");
/* harmony import */ var _entities_creditor_creditor_add_creditor_add_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./entities/creditor/creditor-add/creditor-add.component */ "./src/app/entities/creditor/creditor-add/creditor-add.component.ts");
/* harmony import */ var _entities_creditor_creditor_contacts_creditor_contacts_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./entities/creditor/creditor-contacts/creditor-contacts.component */ "./src/app/entities/creditor/creditor-contacts/creditor-contacts.component.ts");
/* harmony import */ var _entities_creditor_creditor_contact_add_creditor_contact_add_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./entities/creditor/creditor-contact-add/creditor-contact-add.component */ "./src/app/entities/creditor/creditor-contact-add/creditor-contact-add.component.ts");
/* harmony import */ var _entities_creditor_creditor_contact_detail_creditor_contact_detail_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./entities/creditor/creditor-contact-detail/creditor-contact-detail.component */ "./src/app/entities/creditor/creditor-contact-detail/creditor-contact-detail.component.ts");
/* harmony import */ var _entities_creditor_group_creditor_group_main_creditor_group_main_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./entities/creditor-group/creditor-group-main/creditor-group-main.component */ "./src/app/entities/creditor-group/creditor-group-main/creditor-group-main.component.ts");
/* harmony import */ var _entities_creditor_group_creditor_group_detail_creditor_group_detail_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./entities/creditor-group/creditor-group-detail/creditor-group-detail.component */ "./src/app/entities/creditor-group/creditor-group-detail/creditor-group-detail.component.ts");
/* harmony import */ var _entities_creditor_group_creditor_group_add_creditor_group_add_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./entities/creditor-group/creditor-group-add/creditor-group-add.component */ "./src/app/entities/creditor-group/creditor-group-add/creditor-group-add.component.ts");
/* harmony import */ var _entities_creditor_group_creditor_group_contacts_creditor_group_contacts_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component */ "./src/app/entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component.ts");
/* harmony import */ var _entities_creditor_group_creditor_group_contact_add_creditor_group_contact_add_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component */ "./src/app/entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component.ts");
/* harmony import */ var _entities_creditor_group_creditor_group_contact_detail_creditor_group_contact_detail_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component */ "./src/app/entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component.ts");
/* harmony import */ var _entities_detran_detran_contact_detail_detran_contact_detail_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./entities/detran/detran-contact-detail/detran-contact-detail.component */ "./src/app/entities/detran/detran-contact-detail/detran-contact-detail.component.ts");
/* harmony import */ var _registers_groups_group_add_group_add_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./registers/groups/group-add/group-add.component */ "./src/app/registers/groups/group-add/group-add.component.ts");
/* harmony import */ var _registers_groups_group_main_group_main_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./registers/groups/group-main/group-main.component */ "./src/app/registers/groups/group-main/group-main.component.ts");
/* harmony import */ var _registers_user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./registers/user/user-add/user-add.component */ "./src/app/registers/user/user-add/user-add.component.ts");
/* harmony import */ var _registers_user_user_main_user_main_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./registers/user/user-main/user-main.component */ "./src/app/registers/user/user-main/user-main.component.ts");
/* harmony import */ var _contract_contract_add_contract_add_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./contract/contract-add/contract-add.component */ "./src/app/contract/contract-add/contract-add.component.ts");
/* harmony import */ var _contract_contract_main_contract_main_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./contract/contract-main/contract-main.component */ "./src/app/contract/contract-main/contract-main.component.ts");
/* harmony import */ var ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ng2-cpf-cnpj */ "./node_modules/ng2-cpf-cnpj/ng2-cpf-cnpj.umd.js");
/* harmony import */ var ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ng2-currency-mask */ "./node_modules/ng2-currency-mask/index.js");
/* harmony import */ var ng2_currency_mask__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(ng2_currency_mask__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _reports_financial_transaction_financial_transaction_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./reports/financial-transaction/financial-transaction.component */ "./src/app/reports/financial-transaction/financial-transaction.component.ts");
/* harmony import */ var _reports_transaction_billing_transaction_billing_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./reports/transaction-billing/transaction-billing.component */ "./src/app/reports/transaction-billing/transaction-billing.component.ts");
/* harmony import */ var _reports_audit_history_audit_user_detail_audit_user_detail_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./reports/audit-history/audit-user-detail/audit-user-detail.component */ "./src/app/reports/audit-history/audit-user-detail/audit-user-detail.component.ts");
/* harmony import */ var _reports_audit_history_audit_group_detail_audit_group_detail_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./reports/audit-history/audit-group-detail/audit-group-detail.component */ "./src/app/reports/audit-history/audit-group-detail/audit-group-detail.component.ts");
/* harmony import */ var _reports_audit_history_audit_contract_detail_audit_contract_detail_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./reports/audit-history/audit-contract-detail/audit-contract-detail.component */ "./src/app/reports/audit-history/audit-contract-detail/audit-contract-detail.component.ts");
/* harmony import */ var _reports_audit_history_audit_detran_detail_audit_detran_detail_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./reports/audit-history/audit-detran-detail/audit-detran-detail.component */ "./src/app/reports/audit-history/audit-detran-detail/audit-detran-detail.component.ts");
/* harmony import */ var _reports_audit_history_audit_creditor_detail_audit_creditor_detail_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./reports/audit-history/audit-creditor-detail/audit-creditor-detail.component */ "./src/app/reports/audit-history/audit-creditor-detail/audit-creditor-detail.component.ts");
/* harmony import */ var _pipes_filter_entity_name_pipe__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./pipes/filter-entity-name.pipe */ "./src/app/pipes/filter-entity-name.pipe.ts");
/* harmony import */ var _pipes_filter_feature_name_pipe__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./pipes/filter-feature-name.pipe */ "./src/app/pipes/filter-feature-name.pipe.ts");
/* harmony import */ var _registers_groups_groups_detail_groups_detail_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./registers/groups/groups-detail/groups-detail.component */ "./src/app/registers/groups/groups-detail/groups-detail.component.ts");
/* harmony import */ var _pipes_filter_status_pipe__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pipes/filter-status.pipe */ "./src/app/pipes/filter-status.pipe.ts");
/* harmony import */ var _pipes_filter_description_pipe__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./pipes/filter-description.pipe */ "./src/app/pipes/filter-description.pipe.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _reports_transaction_billing_excel_service__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./reports/transaction-billing/excel.service */ "./src/app/reports/transaction-billing/excel.service.ts");
/* harmony import */ var _reports_transaction_billing_csv_service__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./reports/transaction-billing/csv.service */ "./src/app/reports/transaction-billing/csv.service.ts");
/* harmony import */ var _registers_user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ./registers/user/user-detail/user-detail.component */ "./src/app/registers/user/user-detail/user-detail.component.ts");
/* harmony import */ var _pipes_filter_user_pipe__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./pipes/filter-user.pipe */ "./src/app/pipes/filter-user.pipe.ts");





Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_4___default.a);
































































let AppModule = class AppModule {
    constructor() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_64__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_63__["faFilter"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_63__["faBan"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_63__["faFileExcel"]);
    }
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _system_access_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _pipes_filter_name_pipe__WEBPACK_IMPORTED_MODULE_14__["FilterPipe"],
            _help_help_component__WEBPACK_IMPORTED_MODULE_15__["HelpComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
            _entities_registrar_registrar_component__WEBPACK_IMPORTED_MODULE_17__["RegistrarComponent"],
            _entities_detran_detran_contacts_detran_contacts_component__WEBPACK_IMPORTED_MODULE_18__["DetranContactsComponent"],
            _system_access_password_recover_password_recover_component__WEBPACK_IMPORTED_MODULE_19__["PasswordRecoverComponent"],
            _entities_detran_detran_detail_detran_detail_component__WEBPACK_IMPORTED_MODULE_20__["DetranDetailComponent"],
            _system_access_password_recover_success_password_recover_success_component__WEBPACK_IMPORTED_MODULE_21__["PasswordRecoverSuccessComponent"],
            _system_access_password_recover_failed_password_recover_failed_component__WEBPACK_IMPORTED_MODULE_22__["PasswordRecoverFailedComponent"],
            _system_access_password_reset_password_reset_component__WEBPACK_IMPORTED_MODULE_23__["PasswordResetComponent"],
            _custom_confirm_equal_validator__WEBPACK_IMPORTED_MODULE_24__["ConfirmEqualValidator"],
            _entities_detran_detran_add_detran_add_component__WEBPACK_IMPORTED_MODULE_25__["DetranAddComponent"],
            _entities_detran_detran_contact_add_detran_contact_add_component__WEBPACK_IMPORTED_MODULE_26__["DetranContactAddComponent"],
            _entities_detran_detran_main_detran_main_component__WEBPACK_IMPORTED_MODULE_27__["DetranMainComponent"],
            _entities_creditor_creditor_main_creditor_main_component__WEBPACK_IMPORTED_MODULE_28__["CreditorMainComponent"],
            _entities_creditor_creditor_add_creditor_add_component__WEBPACK_IMPORTED_MODULE_30__["CreditorAddComponent"],
            _entities_creditor_creditor_detail_creditor_detail_component__WEBPACK_IMPORTED_MODULE_29__["CreditorDetailComponent"],
            _entities_creditor_creditor_contacts_creditor_contacts_component__WEBPACK_IMPORTED_MODULE_31__["CreditorContactsComponent"],
            _entities_creditor_creditor_contact_add_creditor_contact_add_component__WEBPACK_IMPORTED_MODULE_32__["CreditorContactAddComponent"],
            _entities_creditor_creditor_contact_detail_creditor_contact_detail_component__WEBPACK_IMPORTED_MODULE_33__["CreditorContactDetailComponent"],
            _entities_creditor_group_creditor_group_main_creditor_group_main_component__WEBPACK_IMPORTED_MODULE_34__["CreditorGroupMainComponent"],
            _entities_creditor_group_creditor_group_add_creditor_group_add_component__WEBPACK_IMPORTED_MODULE_36__["CreditorGroupAddComponent"],
            _entities_creditor_group_creditor_group_detail_creditor_group_detail_component__WEBPACK_IMPORTED_MODULE_35__["CreditorGroupDetailComponent"],
            _entities_creditor_group_creditor_group_contacts_creditor_group_contacts_component__WEBPACK_IMPORTED_MODULE_37__["CreditorGroupContactsComponent"],
            _entities_creditor_group_creditor_group_contact_add_creditor_group_contact_add_component__WEBPACK_IMPORTED_MODULE_38__["CreditorGroupContactAddComponent"],
            _entities_creditor_group_creditor_group_contact_detail_creditor_group_contact_detail_component__WEBPACK_IMPORTED_MODULE_39__["CreditorGroupContactDetailComponent"],
            _entities_detran_detran_contact_detail_detran_contact_detail_component__WEBPACK_IMPORTED_MODULE_40__["DetranContactDetailComponent"],
            _registers_groups_group_add_group_add_component__WEBPACK_IMPORTED_MODULE_41__["GroupAddComponent"],
            _registers_groups_group_main_group_main_component__WEBPACK_IMPORTED_MODULE_42__["GroupMainComponent"],
            _registers_user_user_add_user_add_component__WEBPACK_IMPORTED_MODULE_43__["UserAddComponent"],
            _registers_user_user_main_user_main_component__WEBPACK_IMPORTED_MODULE_44__["UserMainComponent"],
            _contract_contract_add_contract_add_component__WEBPACK_IMPORTED_MODULE_45__["ContractAddComponent"],
            _contract_contract_main_contract_main_component__WEBPACK_IMPORTED_MODULE_46__["ContractMainComponent"],
            _reports_financial_transaction_financial_transaction_component__WEBPACK_IMPORTED_MODULE_50__["FinancialTransactionComponent"],
            _reports_transaction_billing_transaction_billing_component__WEBPACK_IMPORTED_MODULE_51__["TransactionBillingComponent"],
            _reports_audit_history_audit_user_detail_audit_user_detail_component__WEBPACK_IMPORTED_MODULE_52__["AuditUserDetailComponent"],
            _reports_audit_history_audit_group_detail_audit_group_detail_component__WEBPACK_IMPORTED_MODULE_53__["AuditGroupDetailComponent"],
            _reports_audit_history_audit_contract_detail_audit_contract_detail_component__WEBPACK_IMPORTED_MODULE_54__["AuditContractDetailComponent"],
            _reports_audit_history_audit_detran_detail_audit_detran_detail_component__WEBPACK_IMPORTED_MODULE_55__["AuditDetranDetailComponent"],
            _reports_audit_history_audit_creditor_detail_audit_creditor_detail_component__WEBPACK_IMPORTED_MODULE_56__["AuditCreditorDetailComponent"],
            _pipes_filter_entity_name_pipe__WEBPACK_IMPORTED_MODULE_57__["FilterEntityNamePipe"],
            _pipes_filter_feature_name_pipe__WEBPACK_IMPORTED_MODULE_58__["FilterFeatureNamePipe"],
            _registers_groups_groups_detail_groups_detail_component__WEBPACK_IMPORTED_MODULE_59__["GroupsDetailComponent"],
            _pipes_filter_status_pipe__WEBPACK_IMPORTED_MODULE_60__["FilterStatusPipe"],
            _pipes_filter_description_pipe__WEBPACK_IMPORTED_MODULE_61__["FilterDescriptionPipe"],
            _registers_user_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_67__["UserDetailComponent"],
            _pipes_filter_user_pipe__WEBPACK_IMPORTED_MODULE_68__["FilterUserPipe"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            angular_user_idle__WEBPACK_IMPORTED_MODULE_7__["UserIdleModule"],
            ng2_cpf_cnpj__WEBPACK_IMPORTED_MODULE_47__["CpfCnpjModule"],
            ng2_currency_mask__WEBPACK_IMPORTED_MODULE_48__["CurrencyMaskModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_49__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_62__["FontAwesomeModule"],
        ],
        providers: [_system_access_system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"], _auth_guard__WEBPACK_IMPORTED_MODULE_12__["AuthGuard"], _reports_transaction_billing_excel_service__WEBPACK_IMPORTED_MODULE_65__["ExcelService"], _reports_transaction_billing_csv_service__WEBPACK_IMPORTED_MODULE_66__["CsvFileService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_13__["TokenInterceptorService"], multi: true, },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"], useValue: 'pt' }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _system_access_system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-access/system-access-services/auth.service */ "./src/app/system-access/system-access-services/auth.service.ts");




let AuthGuard = class AuthGuard {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
    }
    canActivate(route, state) {
        const currentUser = this._auth.loggedIn();
        if (currentUser) {
            console.log(route.component.toString().split(' ')[1].split(' ')[0]);
            return true;
        }
        else {
            this._router.navigate(['./login']);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _system_access_system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/contract/contract-add/contract-add.component.css":
/*!******************************************************************!*\
  !*** ./src/app/contract/contract-add/contract-add.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0L2NvbnRyYWN0LWFkZC9jb250cmFjdC1hZGQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/contract/contract-add/contract-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/contract/contract-add/contract-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContractAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractAddComponent", function() { return ContractAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contract_contract_services_contract_add_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contract/contract-services/contract-add.service */ "./src/app/contract/contract-services/contract-add.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let ContractAddComponent = class ContractAddComponent {
    constructor(_contractAddService, _router, _location) {
        this._contractAddService = _contractAddService;
        this._router = _router;
        this._location = _location;
        this.cpfcnpjActiveConsumer = 'cpf';
        this.cpfcnpjActive = 'cpf';
        //ContractData devem ter a ordem das tab da tela e a ordem que sao mostrada na tela
        //ContractData tem campos que nao vao a ser mostrado no resumen, por isso estao de ultimos //special
        this._contractLoad = false;
        this._summaryLoad = false;
        this._creditorsLoad = false;
        this._detransLoad = false;
        this._statesLoad = false;
        this._speciesLoad = false;
        this._yearsLoad = false;
        this._brandsLoad = false;
        this._modelsLoad = false;
        this._modelYearsLoad = false;
        this._alienTypesLoad = false;
        this._indexesLoad = false;
        this.contractData = {
            // Credor
            creditor: '',
            // Detran
            detran: '',
            // Veículo
            chassi: '',
            remarkedChassi: 'NÃO',
            plate: '',
            plateState: '',
            renavam: '',
            licensingState: '',
            specie: '',
            fabricationYear: '',
            brand: '',
            model: '',
            modelYear: '',
            color: '',
            // Devedor
            buyerName: '',
            buyerEmail: '',
            buyerValue: '',
            buyerDddPhone: '',
            buyerPhone: '',
            buyerDddMobile: '',
            buyerMobile: '',
            buyerAddress: '',
            buyerStreetnumber: '',
            buyerAddresscomplement: '',
            buyerDistrict: '',
            buyerCounty: '',
            buyerState: '',
            buyerZipCode: '',
            // Garantidor
            guarantor: '',
            guarantorValue: '',
            // Contrato
            contract: '',
            contractDate: '',
            alienType: '',
            restrictionNumber: '',
            totalDebitAmount: '',
            numberOfInstallments: '',
            installmentValue: '',
            iofAmount: '',
            contractRegistrationAmount: '',
            interestRatePerMonth: '',
            interestRatePerYear: '',
            interestRate: '',
            dailyInterestRate: '',
            index: '',
            paymentStartDate: '',
            paymentEndDate: '',
            releaseDate: '',
            releaseState: '',
            releaseCity: '',
            consortiumGroupNumber: '',
            consortiumQuotaNumber: '',
            //Special
            chassiConfirmation: '',
            buyerType: 'cpf',
            guarantorType: 'cpf',
            detranId: 0,
            creditorId: 0,
            buyerStateId: 0,
            plateStateId: 0,
            licensingStateId: 0,
            specieId: 0,
            alienTypeId: 0,
            indexId: 0,
            releaseStateId: 0,
        };
        this._errorMessage = '';
        this._createdMessage = '';
        this._arraySearch = [];
        this._detrans = [];
        this._creditors = [];
        this._buyerStates = [];
        this._plateStates = [];
        this._licensingStates = [];
        this._alienTypes = [];
        this._indexes = [];
        this._species = [];
        this._fabricationYears = [];
        this._modelYears = [];
        this._brands = [];
        this._models = [];
        this._releaseStates = [];
        this._credor = [];
        this._veiculo = [];
        this._devedor = [];
        this._garantidor = [];
        this._contrato = [];
        this.detransHasError = true;
        this.creditorsHasError = true;
        this.buyerStatesHasError = true;
        this.plateStatesHasError = true;
        this.licensingStatesHasError = true;
        this.alienTypesHasError = true;
        this.indexesHasError = true;
        this.speciesHasError = true;
        this.fabricationYearsHasError = true;
        this.modelYearsHasError = true;
        this.brandsHasError = true;
        this.modelsHasError = true;
        this.releaseStatesHasError = true;
        this._activeTab = "nav-credor";
        this._guarantorType = 'cpf';
        this._buyerType = 'cpf';
        this.dddHasError = true;
    }
    validateDetrans(value) {
        this.detransHasError = false;
        if (value === 'default') {
            this.detransHasError = true;
        }
        else {
            this.contractData.detranId = this.findId(this._detrans, value);
        }
    }
    validateCreditors(value) {
        this.creditorsHasError = false;
        if (value === 'default') {
            this.creditorsHasError = true;
        }
        else {
            this.contractData.creditorId = this.findId(this._creditors, value);
        }
    }
    validateBuyerStates(value) {
        this.buyerStatesHasError = false;
        if (value === 'default') {
            this.buyerStatesHasError = true;
        }
        else {
            this.contractData.buyerStateId = this.findId(this._buyerStates, value);
        }
    }
    validatePlateStates(value) {
        this.plateStatesHasError = false;
        if (value === 'default') {
            this.plateStatesHasError = true;
        }
        else {
            this.contractData.plateStateId = this.findId(this._plateStates, value);
        }
    }
    validateLicensingStates(value) {
        this.licensingStatesHasError = false;
        if (value === 'default') {
            this.licensingStatesHasError = true;
        }
        else {
            this.contractData.licensingStateId = this.findId(this._licensingStates, value);
        }
    }
    validateAlienTypes(value) {
        this.alienTypesHasError = false;
        if (value === 'default') {
            this.alienTypesHasError = true;
        }
        else {
            this.contractData.alienTypeId = this.findId(this._alienTypes, value);
        }
    }
    validateIndexes(value) {
        this.indexesHasError = false;
        if (value === 'default') {
            this.indexesHasError = true;
        }
        else {
            this.contractData.indexId = this.findId(this._indexes, value);
        }
    }
    validateReleaseStates(value) {
        this.releaseStatesHasError = false;
        if (value === 'default') {
            this.releaseStatesHasError = true;
        }
        else {
            this.contractData.releaseStateId = this.findId(this._releaseStates, value);
        }
    }
    validateSpecies(value) {
        this.speciesHasError = false;
        if (value === 'default') {
            this.speciesHasError = true;
        }
        else {
            this.contractData.specieId = this.findId(this._species, value);
        }
    }
    validateFabricationYears(value) {
        this.fabricationYearsHasError = false;
        if (value === 'default') {
            this.fabricationYearsHasError = true;
        }
    }
    validateBrands(e, value) {
        this.brandsHasError = false;
        if (value === 'default') {
            this.brandsHasError = true;
        }
        else {
            if (e.type == "change") {
                this._brandId = this.findId(this._brands, value);
                this.getModels(this._brandId);
            }
        }
    }
    validateModels(e, value) {
        this.modelsHasError = false;
        if (value === 'default') {
            this.modelsHasError = true;
        }
        else {
            if (e.type == "change") {
                this._modelId = this.findId(this._models, value);
                this.getModelYears(this._brandId, this._modelId);
            }
        }
    }
    validateModelYears(value) {
        this.modelYearsHasError = false;
        if (value === 'default') {
            this.modelYearsHasError = true;
        }
    }
    ngOnInit() {
        this._detransLoad = true;
        this._contractAddService.getDetrans()
            .subscribe(res => {
            console.log(res);
            this._detrans = res;
            this._detransLoad = false;
        }, error => {
            this._detransLoad = false;
            console.log(error);
            this._errorMessage = error.error;
        });
        this._creditorsLoad = true;
        this._contractAddService.getCreditors()
            .subscribe(res => {
            console.log(res);
            this._creditors = res;
            this._creditorsLoad = false;
        }, error => {
            this._creditorsLoad = false;
            console.log(error);
            this._errorMessage = error.error;
        });
        this._statesLoad = true;
        this._contractAddService.getStates()
            .subscribe(res => {
            console.log(res);
            this._buyerStates = res;
            this._plateStates = res;
            this._releaseStates = res;
            this._licensingStates = res;
            this._statesLoad = false;
        }, error => {
            this._statesLoad = false;
            console.log(error);
            this._errorMessage = error.error;
        });
        this._alienTypesLoad = true;
        this._contractAddService.getAlienTypes()
            .subscribe(res => {
            console.log(res);
            this._alienTypes = res;
            this._alienTypesLoad = false;
        }, error => {
            this._alienTypesLoad = false;
            console.log(error);
            this._errorMessage = error.error;
        });
        this._indexesLoad = true;
        this._contractAddService.getIndexes()
            .subscribe(res => {
            console.log(res);
            this._indexes = res;
            this._indexesLoad = false;
        }, error => {
            this._indexesLoad = false;
            console.log(error);
            this._errorMessage = error.error;
        });
        this._yearsLoad = true;
        this._contractAddService.getYears()
            .subscribe(res => {
            console.log(res);
            this._modelYears = res;
            this._fabricationYears = res;
            this._yearsLoad = false;
        }, error => {
            this._yearsLoad = false;
            console.log(error);
            this._errorMessage = error.error;
        });
        this._speciesLoad = true;
        this._contractAddService.getSpecies()
            .subscribe(res => {
            console.log(res);
            this._species = res;
            this._speciesLoad = false;
        }, error => {
            this._speciesLoad = false;
            console.log(error);
            this._errorMessage = error.error;
        });
        this._brandsLoad = true;
        this._contractAddService.getBrands()
            .subscribe(res => {
            console.log(res);
            this._brands = res;
            this._models = [];
            this._modelYears = [];
            this._brandsLoad = false;
        }, error => {
            this._brandsLoad = false;
            console.log(error);
            this._brands = [];
            this._models = [];
            this._modelYears = [];
            this._errorMessage = error.error;
        });
    }
    nextTab(tab) {
        this._activeTab = tab;
    }
    findId(array, value) {
        if (!value) {
            return -1;
        }
        let id = array.map(p => { return p.description; }).indexOf(value);
        return array[id].id;
    }
    getModels(brandId) {
        this._modelId = 0;
        this._modelYearId = 0;
        this.contractData.model = '';
        this.contractData.modelYear = '';
        this._modelsLoad = true;
        this._contractAddService.getModels(brandId)
            .subscribe(res => {
            console.log(res);
            this._models = res;
            this._modelYears = [];
            this._modelsLoad = false;
        }, error => {
            console.log(error);
            this._modelsLoad = false;
            this._models = [];
            this._modelYears = [];
            this._errorMessage = error.error;
        });
    }
    getModelYears(brandId, modelId) {
        this._modelYearId = 0;
        this.contractData.modelYear = '';
        this._modelYearsLoad = true;
        this._contractAddService.getModelYears(brandId, modelId)
            .subscribe(res => {
            console.log(res);
            this._modelYears = res;
            this._modelYearsLoad = false;
        }, error => {
            console.log(error);
            this._modelYearsLoad = false;
            this._modelYears = [];
            this._errorMessage = error.error;
        });
    }
    cpfCnpjSelect(origin, type) {
        if (origin == 'guarantor') {
            this._guarantorType = type;
        }
        if (origin == 'buyer') {
            this._buyerType = type;
        }
    }
    chassiSelect(value) {
        this.contractData.remarkedChassi = value;
    }
    createSummary() {
        let pos = 0;
        //Credor
        let _credorResumem = ["Credor: ", "Detran: "];
        this._credor = this.getSummary(_credorResumem, pos, '');
        pos = pos + _credorResumem.length;
        //Veiculo
        let _veiculoResumem = ["Chassi: ", "Chassi Remarcado: ", "Placa: ", "UF da placa: ",
            "Renavan: ", "UF Licenciamento: ", "Espécie: ", "Ano de Fabricação: ",
            "Marca: ", "Modelo: ", "Ano do modelo: ", "Cor: "];
        this._veiculo = this.getSummary(_veiculoResumem, pos, '');
        pos = pos + _veiculoResumem.length;
        //Devedor
        let _devedorResumem = ["Nome completo: ", "E-mail: ", "REPLACE", "Ddd Telefone: ",
            "Telefone: ", "Ddd Celular: ", "Celular: ", "Logradouro: ",
            "Número: ", "Complemento: ", "Bairro: ", "Município: ", "Estado: ", "Cep: "];
        this._devedor = this.getSummary(_devedorResumem, pos, this._buyerType);
        pos = pos + _devedorResumem.length;
        // Garantidor
        let _garantidorResumem = ["Nome do Garantidor: ", "REPLACE"];
        this._garantidor = this.getSummary(_garantidorResumem, pos, this._guarantorType);
        pos = pos + _garantidorResumem.length;
        // Contrato
        let _contratoResumem = ["Contrato: ", "Data do Contrato: ", "Tipo de Gravame: ", "Núm. da restrição: ",
            "Valor financiamento: ", "Parcelas: ", "Valor da Parcela: ", "Valor do IOF: ",
            "Valor do Registro de Contrato: ", "Taxa Juros ao mês: ", "Taxa Juros ao ano: ",
            "Taxa Juros de Multa: ", "Taxa de mora ao dia: ", "Indice: ", "Data primer pagamento: ",
            "Data ultimo pagamento: ", "Data da liberação: ", "UF da liberação: ", "Cidade da liberação: ",
            "Núm. grupo do consórcio: ", "Núm. cota do consórcio: "];
        this._contrato = this.getSummary(_contratoResumem, pos, '');
    }
    getSummary(summary, pos, newText) {
        let _values = Object.values(this.contractData);
        let i = 0;
        let newDescrition;
        let newValue;
        let array = [];
        for (; i < summary.length; i++) {
            newDescrition = (summary[i] == "REPLACE") ? newText.toUpperCase() : summary[i];
            newValue = (_values[pos] == null) ? '' : _values[pos];
            array.push({ "description": newDescrition, "value": newValue });
            pos = pos + 1;
        }
        return array;
    }
    backToContract() {
        this._location.back();
    }
    createContract() {
        this.contractData.guarantorType = this._guarantorType;
        this.contractData.buyerType = this._buyerType;
        //this._contractLoad = true
        this._contractAddService.createContract(this.contractData)
            .subscribe(res => {
            this._createdMessage = 'Contrato Adicionado';
            this._contractLoad = false;
            this._router.navigate(['/contratos']);
        }, error => {
            this._contractLoad = false;
            console.log(error);
            this._errorMessage = error.error;
        });
    }
};
ContractAddComponent.ctorParameters = () => [
    { type: _contract_contract_services_contract_add_service__WEBPACK_IMPORTED_MODULE_3__["ContractAddService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
ContractAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contract-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contract-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract/contract-add/contract-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contract-add.component.css */ "./src/app/contract/contract-add/contract-add.component.css")).default]
    })
], ContractAddComponent);



/***/ }),

/***/ "./src/app/contract/contract-main/contract-main.component.css":
/*!********************************************************************!*\
  !*** ./src/app/contract/contract-main/contract-main.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRyYWN0L2NvbnRyYWN0LW1haW4vY29udHJhY3QtbWFpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contract/contract-main/contract-main.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/contract/contract-main/contract-main.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContractMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractMainComponent", function() { return ContractMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contract_contract_services_contract_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contract/contract-services/contract-main.service */ "./src/app/contract/contract-services/contract-main.service.ts");




let ContractMainComponent = class ContractMainComponent {
    constructor(_contractMainService, _router) {
        this._contractMainService = _contractMainService;
        this._router = _router;
        this._contracts = [];
        this.searchText = '';
    }
    ngOnInit() {
        this._contractMainService.getContracts()
            .subscribe(res => this._contracts = res, err => console.log(err));
    }
    addContract() {
        this._router.navigate(['/registrar-contrato']);
    }
};
ContractMainComponent.ctorParameters = () => [
    { type: _contract_contract_services_contract_main_service__WEBPACK_IMPORTED_MODULE_3__["ContractMainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ContractMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contract-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contract-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contract/contract-main/contract-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contract-main.component.css */ "./src/app/contract/contract-main/contract-main.component.css")).default]
    })
], ContractMainComponent);



/***/ }),

/***/ "./src/app/contract/contract-services/contract-add.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/contract/contract-services/contract-add.service.ts ***!
  \********************************************************************/
/*! exports provided: ContractAddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractAddService", function() { return ContractAddService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ContractAddService = class ContractAddService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._detransUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/contract-register/get-detrans";
        this._creditorsUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/contract-register/get-creditors";
        this._statesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/common/states";
        this._alienTypesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/contract-register/get-alien-types";
        this._indexesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/contract-register/get-indexes";
        this._speciesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/contract-register/get-species";
        this._yearsUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/contract-register/get-years";
        this._brandsUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/contract-register/get-brands";
        this._modelsUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/contract-register/get-models/";
        this._modelYearsUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/contract-register/get-modelYears/";
        this._createContractUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/contract-register/create-contract";
    }
    getDetrans() {
        return this.http.get(this._detransUrl);
    }
    getCreditors() {
        return this.http.get(this._creditorsUrl);
    }
    getStates() {
        return this.http.get(this._statesUrl);
    }
    getAlienTypes() {
        return this.http.get(this._alienTypesUrl);
    }
    getIndexes() {
        return this.http.get(this._indexesUrl);
    }
    getSpecies() {
        return this.http.get(this._speciesUrl);
    }
    getYears() {
        return this.http.get(this._yearsUrl);
    }
    getBrands() {
        return this.http.get(this._brandsUrl);
    }
    getModels(id) {
        return this.http.get(this._modelsUrl + id);
    }
    getModelYears(modelId, brandId) {
        return this.http.get(this._modelYearsUrl + modelId + '\\' + brandId);
    }
    createContract(user) {
        return this.http.post(this._createContractUrl, user);
    }
};
ContractAddService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContractAddService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContractAddService);



/***/ }),

/***/ "./src/app/contract/contract-services/contract-main.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/contract/contract-services/contract-main.service.ts ***!
  \*********************************************************************/
/*! exports provided: ContractMainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractMainService", function() { return ContractMainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ContractMainService = class ContractMainService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._contractsUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/contract-register/contracts";
    }
    getContracts() {
        return this.http.get(this._contractsUrl);
    }
};
ContractMainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ContractMainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContractMainService);



/***/ }),

/***/ "./src/app/detran.service.ts":
/*!***********************************!*\
  !*** ./src/app/detran.service.ts ***!
  \***********************************/
/*! exports provided: DetranService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetranService", function() { return DetranService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DetranService = class DetranService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._statesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/detran/states-detran-add";
    }
    getStates() {
        return this.http.get(this._statesUrl);
    }
};
DetranService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DetranService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DetranService);



/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-add/creditor-group-add.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-add/creditor-group-add.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWRpdG9yLWdyb3VwL2NyZWRpdG9yLWdyb3VwLWFkZC9jcmVkaXRvci1ncm91cC1hZGQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-add/creditor-group-add.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-add/creditor-group-add.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CreditorGroupAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorGroupAddComponent", function() { return CreditorGroupAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _creditor_group_services_creditor_group_add_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../creditor-group-services/creditor-group-add.service */ "./src/app/entities/creditor-group/creditor-group-services/creditor-group-add.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let CreditorGroupAddComponent = class CreditorGroupAddComponent {
    constructor(_creditorGroupAddService, _router, _location) {
        this._creditorGroupAddService = _creditorGroupAddService;
        this._router = _router;
        this._location = _location;
        this.creditorGroupData = {
            businessname: '',
            fantasyname: '',
            cnpj: '',
            dddnodel: '',
            phone: '',
            email: '',
            address: '',
            streetnumber: '',
            addresscomplement: '',
            district: '',
            county: '',
            topic: '',
            zipcode: '',
            contract: '',
            startdate: '',
            enddate: '',
            status: true,
        };
        this._errorMessage = '';
        this._states = [];
        this.topicHasError = true;
        this.dddHasError = true;
        this.activeTab = "nav-home";
    }
    validateTopic(value) {
        if (value === 'default') {
            this.topicHasError = true;
        }
        else {
            this.topicHasError = false;
        }
    }
    ngOnInit() {
        this._creditorGroupAddService.getStates()
            .subscribe(res => {
            this._states = res;
        }, error => {
            console.log(error);
            this._errorMessage = error.error;
        });
    }
    nextTab(activeTab) {
        this.activeTab = activeTab;
    }
    createCreditorGroup() {
        this._creditorGroupAddService.createCreditorGroup(this.creditorGroupData)
            .subscribe(res => {
            this._router.navigate(['/gestora']);
        }, error => {
            console.log(error);
            this._errorMessage = error.error;
        });
    }
    backToCreditorGroup() {
        this._location.back();
    }
};
CreditorGroupAddComponent.ctorParameters = () => [
    { type: _creditor_group_services_creditor_group_add_service__WEBPACK_IMPORTED_MODULE_3__["CreditorGroupAddService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
CreditorGroupAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creditor-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creditor-group-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-add/creditor-group-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creditor-group-add.component.css */ "./src/app/entities/creditor-group/creditor-group-add/creditor-group-add.component.css")).default]
    })
], CreditorGroupAddComponent);



/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component.css ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWRpdG9yLWdyb3VwL2NyZWRpdG9yLWdyb3VwLWNvbnRhY3QtYWRkL2NyZWRpdG9yLWdyb3VwLWNvbnRhY3QtYWRkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CreditorGroupContactAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorGroupContactAddComponent", function() { return CreditorGroupContactAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _creditor_group_services_creditor_group_add_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../creditor-group-services/creditor-group-add-contact.service */ "./src/app/entities/creditor-group/creditor-group-services/creditor-group-add-contact.service.ts");





let CreditorGroupContactAddComponent = class CreditorGroupContactAddComponent {
    constructor(_location, _route, _creditorGroupAddContact) {
        this._location = _location;
        this._route = _route;
        this._creditorGroupAddContact = _creditorGroupAddContact;
        this.userData = {
            name: '',
            dddModel: '',
            phone: '',
            email: '',
            additionalInfo: '',
        };
        this._createdMessage = '';
        this._errorMessage = '';
    }
    ngOnInit() {
    }
    addCreditorGroupContact() {
        this._route.paramMap
            .subscribe(params => {
            this._creditorGroupAddContact.addCreditorGroupContact(params.get('id'), this.userData)
                .subscribe(res => {
                console.log(res);
                this._createdMessage = 'Contato ' + this.userData.name + ' adicionado com sucesso!';
                // Reset form to add another contact
                //this.userData = {name: '',dddModel: '',phone: '',email: '',additionalInfo: '',}               
            }, error => {
                console.log(error);
                this._errorMessage = error.error;
            });
        });
    }
    backToCreditorGroupContacts() {
        this._location.back();
    }
};
CreditorGroupContactAddComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _creditor_group_services_creditor_group_add_contact_service__WEBPACK_IMPORTED_MODULE_4__["CreditorGroupAddContactService"] }
];
CreditorGroupContactAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creditor-group-contact-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creditor-group-contact-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creditor-group-contact-add.component.css */ "./src/app/entities/creditor-group/creditor-group-contact-add/creditor-group-contact-add.component.css")).default]
    })
], CreditorGroupContactAddComponent);



/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component.css ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWRpdG9yLWdyb3VwL2NyZWRpdG9yLWdyb3VwLWNvbnRhY3QtZGV0YWlsL2NyZWRpdG9yLWdyb3VwLWNvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: CreditorGroupContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorGroupContactDetailComponent", function() { return CreditorGroupContactDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _creditor_group_services_creditor_group_contact_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../creditor-group-services/creditor-group-contact-detail.service */ "./src/app/entities/creditor-group/creditor-group-services/creditor-group-contact-detail.service.ts");





let CreditorGroupContactDetailComponent = class CreditorGroupContactDetailComponent {
    constructor(_location, _route, _creditorGroupContactDetail) {
        this._location = _location;
        this._route = _route;
        this._creditorGroupContactDetail = _creditorGroupContactDetail;
        this.userData = {
            name: '',
            dddmodel: '',
            phone: '',
            email: '',
            additionalinfo: '',
        };
        this._updatedMessage = '';
    }
    ngOnInit() {
        this._route.paramMap
            .subscribe(params => {
            this._creditorGroupContactDetail.getCreditorGroupContactById(params.get('id'))
                .subscribe(res => {
                console.log(res[0]);
                this.userData = res[0];
            }, err => {
                console.log(err);
            });
        });
    }
    updateCreditorGroupContactById() {
        this._route.paramMap
            .subscribe(params => {
            this._creditorGroupContactDetail.updateCreditorGroupContactById(params.get('id'), this.userData)
                .subscribe(res => {
                console.log(res);
                this._updatedMessage = 'Dados de contato alterados com sucesso';
            }, err => {
                console.log(err);
            });
        });
    }
    deleteCreditorGroupContactById() {
        this._route.paramMap
            .subscribe(params => {
            this._creditorGroupContactDetail.deleteCreditorGroupContactById(params.get('id'))
                .subscribe(res => {
                console.log(res);
                this.backToCreditorGroupContacts();
            }, err => {
                console.log(err);
            });
        });
    }
    backToCreditorGroupContacts() {
        this._location.back();
    }
};
CreditorGroupContactDetailComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _creditor_group_services_creditor_group_contact_detail_service__WEBPACK_IMPORTED_MODULE_4__["CreditorGroupContactDetailService"] }
];
CreditorGroupContactDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creditor-group-contact-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creditor-group-contact-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creditor-group-contact-detail.component.css */ "./src/app/entities/creditor-group/creditor-group-contact-detail/creditor-group-contact-detail.component.css")).default]
    })
], CreditorGroupContactDetailComponent);



/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component.css ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWRpdG9yLWdyb3VwL2NyZWRpdG9yLWdyb3VwLWNvbnRhY3RzL2NyZWRpdG9yLWdyb3VwLWNvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CreditorGroupContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorGroupContactsComponent", function() { return CreditorGroupContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _creditor_group_services_creditor_group_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../creditor-group-services/creditor-group-contacts.service */ "./src/app/entities/creditor-group/creditor-group-services/creditor-group-contacts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CreditorGroupContactsComponent = class CreditorGroupContactsComponent {
    constructor(_creditorGroupContactsService, _route, _router) {
        this._creditorGroupContactsService = _creditorGroupContactsService;
        this._route = _route;
        this._router = _router;
        this.creditorGroupContacts = [];
    }
    ngOnInit() {
        this._route.paramMap
            .subscribe(params => {
            this._creditorGroupContactsService.getCreditorGroupContacts(params.get('id'))
                .subscribe(res => this.creditorGroupContacts = res, err => console.log(err));
        });
    }
    addCreditorGroupContact() {
        this._route.paramMap
            .subscribe(params => {
            this._router.navigate(['/gestor-adicionar-contato/' + params.get('id')]);
        });
    }
};
CreditorGroupContactsComponent.ctorParameters = () => [
    { type: _creditor_group_services_creditor_group_contacts_service__WEBPACK_IMPORTED_MODULE_2__["CreditorGroupContactsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CreditorGroupContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creditor-group-contacts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creditor-group-contacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creditor-group-contacts.component.css */ "./src/app/entities/creditor-group/creditor-group-contacts/creditor-group-contacts.component.css")).default]
    })
], CreditorGroupContactsComponent);



/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-detail/creditor-group-detail.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-detail/creditor-group-detail.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWRpdG9yLWdyb3VwL2NyZWRpdG9yLWdyb3VwLWRldGFpbC9jcmVkaXRvci1ncm91cC1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-detail/creditor-group-detail.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-detail/creditor-group-detail.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: CreditorGroupDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorGroupDetailComponent", function() { return CreditorGroupDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _creditor_group_services_creditor_group_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../creditor-group-services/creditor-group-detail.service */ "./src/app/entities/creditor-group/creditor-group-services/creditor-group-detail.service.ts");
/* harmony import */ var _creditor_group_services_creditor_group_add_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../creditor-group-services/creditor-group-add.service */ "./src/app/entities/creditor-group/creditor-group-services/creditor-group-add.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let CreditorGroupDetailComponent = class CreditorGroupDetailComponent {
    constructor(route, _creditorGroupDetail, _creditorGroupAddService, _location) {
        this.route = route;
        this._creditorGroupDetail = _creditorGroupDetail;
        this._creditorGroupAddService = _creditorGroupAddService;
        this._location = _location;
        this.creditorGroupData = {
            businessname: '',
            fantasyname: '',
            cnpj: '',
            dddmodel: '',
            phone: '',
            email: '',
            address: '',
            streetnumber: '',
            addresscomplement: '',
            district: '',
            county: '',
            topic: '',
            zipcode: '',
            contract: '',
            startdate: '',
            enddate: '',
            status: true,
        };
        this.creditorGroupDataOld = {
            businessname: '',
            fantasyname: '',
            cnpj: '',
            dddmodel: '',
            phone: '',
            email: '',
            address: '',
            streetnumber: '',
            addresscomplement: '',
            district: '',
            county: '',
            topic: '',
            zipcode: '',
            contract: '',
            startdate: '',
            enddate: '',
            status: true,
        };
        this._registerUpdated = '';
        this._errorMessage = '';
        this._states = [];
        this.topicHasError = true;
        this.dddHasError = true;
        this.creditorGroupDataSender = {
            old: this.creditorGroupDataOld,
            new: this.creditorGroupData,
        };
    }
    validateTopic(value) {
        if (value === 'default') {
            this.topicHasError = true;
        }
        else {
            this.topicHasError = false;
        }
    }
    ngOnInit() {
        this._creditorGroupAddService.getStates()
            .subscribe(res => {
            this._states = res;
        }, error => {
            console.log(error);
            this._errorMessage = error.error;
        });
        this.route.paramMap
            .subscribe(params => {
            this._creditorGroupDetail.getCreditorGroup(params.get('id'))
                .subscribe(res => {
                this.creditorGroupData = res[0];
                this.creditorGroupDataOld = res[0];
            }, err => {
                console.log(err);
            });
        });
    }
    updateCreditorGroup() {
        this.route.paramMap
            .subscribe(params => {
            this._creditorGroupDetail.updateCreditorGroup(this.creditorGroupData, params.get('id'))
                .subscribe(res => {
                this._registerUpdated = 'Gestora atualizada com sucesso.';
                console.log(res);
            }, err => {
                console.log(err);
            });
        });
    }
    deleteCreditorGroup() {
        this.route.paramMap
            .subscribe(params => {
            this._creditorGroupDetail.deleteCreditorGroup(this.creditorGroupData, params.get('id'))
                .subscribe(res => {
                console.log(res);
                this.backToCreditorGroup();
            }, err => {
                console.log(err);
            });
        });
    }
    backToCreditorGroup() {
        this._location.back();
    }
};
CreditorGroupDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _creditor_group_services_creditor_group_detail_service__WEBPACK_IMPORTED_MODULE_3__["CreditorGroupDetailService"] },
    { type: _creditor_group_services_creditor_group_add_service__WEBPACK_IMPORTED_MODULE_4__["CreditorGroupAddService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }
];
CreditorGroupDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creditor-group-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creditor-group-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-detail/creditor-group-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creditor-group-detail.component.css */ "./src/app/entities/creditor-group/creditor-group-detail/creditor-group-detail.component.css")).default]
    })
], CreditorGroupDetailComponent);



/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-main/creditor-group-main.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-main/creditor-group-main.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWRpdG9yLWdyb3VwL2NyZWRpdG9yLWdyb3VwLW1haW4vY3JlZGl0b3ItZ3JvdXAtbWFpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-main/creditor-group-main.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-main/creditor-group-main.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CreditorGroupMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorGroupMainComponent", function() { return CreditorGroupMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _creditor_group_services_creditor_group_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../creditor-group-services/creditor-group-main.service */ "./src/app/entities/creditor-group/creditor-group-services/creditor-group-main.service.ts");




let CreditorGroupMainComponent = class CreditorGroupMainComponent {
    constructor(_creditorGroupMainService, _router) {
        this._creditorGroupMainService = _creditorGroupMainService;
        this._router = _router;
        this.entities = [];
    }
    ngOnInit() {
        this._creditorGroupMainService.getCreditorsGroup()
            .subscribe(res => this.entities = res, err => console.log(err));
    }
    addCreditorGroup() {
        this._router.navigate(['/gestor-adicionar']);
    }
};
CreditorGroupMainComponent.ctorParameters = () => [
    { type: _creditor_group_services_creditor_group_main_service__WEBPACK_IMPORTED_MODULE_3__["CreditorGroupMainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CreditorGroupMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creditor-group-',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creditor-group-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor-group/creditor-group-main/creditor-group-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creditor-group-main.component.css */ "./src/app/entities/creditor-group/creditor-group-main/creditor-group-main.component.css")).default]
    })
], CreditorGroupMainComponent);



/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-services/creditor-group-add-contact.service.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-services/creditor-group-add-contact.service.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CreditorGroupAddContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorGroupAddContactService", function() { return CreditorGroupAddContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CreditorGroupAddContactService = class CreditorGroupAddContactService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._addCreditorGroupContactUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor-group/add-creditor-group-contact/";
    }
    addCreditorGroupContact(id, user) {
        return this.http.post(this._addCreditorGroupContactUrl + id, user);
    }
};
CreditorGroupAddContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CreditorGroupAddContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CreditorGroupAddContactService);



/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-services/creditor-group-add.service.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-services/creditor-group-add.service.ts ***!
  \***********************************************************************************************/
/*! exports provided: CreditorGroupAddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorGroupAddService", function() { return CreditorGroupAddService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CreditorGroupAddService = class CreditorGroupAddService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._createCreditorGroupUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor-group/create-creditor-group";
        this._statesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/common/states";
    }
    getStates() {
        return this.http.get(this._statesUrl);
    }
    createCreditorGroup(user) {
        return this.http.post(this._createCreditorGroupUrl, user);
    }
};
CreditorGroupAddService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CreditorGroupAddService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CreditorGroupAddService);



/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-services/creditor-group-contact-detail.service.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-services/creditor-group-contact-detail.service.ts ***!
  \**********************************************************************************************************/
/*! exports provided: CreditorGroupContactDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorGroupContactDetailService", function() { return CreditorGroupContactDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CreditorGroupContactDetailService = class CreditorGroupContactDetailService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._creditorGroupContactByIdUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor-group/creditor-group-contacts/contact/";
        this._creditorGroupUpdateContactByIdUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor-group/creditor-group-contacts/update-contact/";
        this._creditorGroupDeleteContactByIdUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor-group/creditor-group-contacts/delete-contact/";
    }
    getCreditorGroupContactById(id) {
        return this.http.get(this._creditorGroupContactByIdUrl + id);
    }
    updateCreditorGroupContactById(id, user) {
        return this.http.put(this._creditorGroupUpdateContactByIdUrl + id, user);
    }
    deleteCreditorGroupContactById(id) {
        return this.http.delete(this._creditorGroupDeleteContactByIdUrl + id);
    }
};
CreditorGroupContactDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CreditorGroupContactDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CreditorGroupContactDetailService);



/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-services/creditor-group-contacts.service.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-services/creditor-group-contacts.service.ts ***!
  \****************************************************************************************************/
/*! exports provided: CreditorGroupContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorGroupContactsService", function() { return CreditorGroupContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CreditorGroupContactsService = class CreditorGroupContactsService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._creditorGroupContactsUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor-group/creditor-group-contacts/";
    }
    getCreditorGroupContacts(id) {
        return this.http.get(this._creditorGroupContactsUrl + id);
    }
};
CreditorGroupContactsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CreditorGroupContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CreditorGroupContactsService);



/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-services/creditor-group-detail.service.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-services/creditor-group-detail.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: CreditorGroupDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorGroupDetailService", function() { return CreditorGroupDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CreditorGroupDetailService = class CreditorGroupDetailService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._entitiyUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor-group/creditors-group/";
        this._entitiyUpdateUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor-group/update-creditor-group/";
        this._entitiyDeleteUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor-group/delete-creditor-group/";
    }
    getCreditorGroup(id) {
        return this.http.get(this._entitiyUrl + id);
    }
    updateCreditorGroup(user, id) {
        return this.http.put(this._entitiyUpdateUrl + id, user);
    }
    deleteCreditorGroup(user, id) {
        return this.http.delete(this._entitiyDeleteUrl + id, user);
    }
};
CreditorGroupDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CreditorGroupDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CreditorGroupDetailService);



/***/ }),

/***/ "./src/app/entities/creditor-group/creditor-group-services/creditor-group-main.service.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/entities/creditor-group/creditor-group-services/creditor-group-main.service.ts ***!
  \************************************************************************************************/
/*! exports provided: CreditorGroupMainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorGroupMainService", function() { return CreditorGroupMainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CreditorGroupMainService = class CreditorGroupMainService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._entitiesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor-group/creditors-group";
    }
    getCreditorsGroup() {
        return this.http.get(this._entitiesUrl);
    }
};
CreditorGroupMainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CreditorGroupMainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CreditorGroupMainService);



/***/ }),

/***/ "./src/app/entities/creditor/creditor-add/creditor-add.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-add/creditor-add.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWRpdG9yL2NyZWRpdG9yLWFkZC9jcmVkaXRvci1hZGQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/entities/creditor/creditor-add/creditor-add.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-add/creditor-add.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreditorAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorAddComponent", function() { return CreditorAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _creditor_services_creditor_add_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../creditor-services/creditor-add.service */ "./src/app/entities/creditor/creditor-services/creditor-add.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let CreditorAddComponent = class CreditorAddComponent {
    constructor(_creditorAddService, _router, _location) {
        this._creditorAddService = _creditorAddService;
        this._router = _router;
        this._location = _location;
        this.creditorData = {
            businessname: '',
            fantasyname: '',
            cnpj: '',
            dddnodel: '',
            phone: '',
            email: '',
            address: '',
            streetnumber: '',
            addresscomplement: '',
            district: '',
            county: '',
            topic: '',
            zipcode: '',
            contract: '',
            startdate: '',
            enddate: '',
            status: true,
            entities: []
        };
        this._errorMessage = '';
        this._states = [];
        this._detrans = [];
        this._creditorsgroup = [];
        this.topicHasError = true;
        this.dddHasError = true;
        this.entities = [];
        this.activeTab = "nav-home";
    }
    validateTopic(value) {
        if (value === 'default') {
            this.topicHasError = true;
        }
        else {
            this.topicHasError = false;
        }
    }
    ngOnInit() {
        this._creditorAddService.getStates()
            .subscribe(res => {
            this._states = res;
        }, error => {
            console.log(error);
            this._errorMessage = error.error;
        });
        this._creditorAddService.getDetrans()
            .subscribe(res => {
            console.log(res);
            this._detrans = res;
        }, error => {
            console.log(error);
            this._errorMessage = error.error;
        });
        this._creditorAddService.getCreditorsGroup()
            .subscribe(res => {
            console.log(res);
            this._creditorsgroup = res;
        }, error => {
            console.log(error);
            this._errorMessage = error.error;
        });
    }
    nextTab(activeTab) {
        this.activeTab = activeTab;
    }
    checkAllOptions() {
        if (this._detrans.every(val => val.checked == true))
            this._detrans.forEach(val => { val.checked = false; });
        else
            this._detrans.forEach(val => { val.checked = true; });
    }
    uncheckAllOptions() {
        this._creditorsgroup.forEach(val => { val.checked = false; });
    }
    checkDetransChange(e) {
        this._detrans.forEach(val => {
            if (e.target.id == val.id) {
                val.checked = e.target.checked;
            }
            ;
        });
    }
    checkCreditorsGroupChange(e) {
        this._creditorsgroup.forEach(val => {
            if (e.target.id == val.id) {
                val.checked = e.target.checked;
            }
            else {
                val.checked = !e.target.checked;
            }
            ;
        });
    }
    entitiesCheck() {
        this.entities = [];
        this._detrans.forEach(val => {
            if (val.checked) {
                this.entities.push(val.id);
            }
        });
        this._creditorsgroup.forEach(val => {
            if (val.checked) {
                this.entities.push(val.id);
            }
        });
        this.creditorData.entities = this.entities;
    }
    createCreditor() {
        this.entitiesCheck();
        this._creditorAddService.createCreditor(this.creditorData)
            .subscribe(res => {
            this._router.navigate(['/credora']);
        }, error => {
            console.log(error);
            this._errorMessage = error.error;
        });
    }
    backToCreditor() {
        this._location.back();
    }
};
CreditorAddComponent.ctorParameters = () => [
    { type: _creditor_services_creditor_add_service__WEBPACK_IMPORTED_MODULE_3__["CreditorAddService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
CreditorAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creditor-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creditor-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-add/creditor-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creditor-add.component.css */ "./src/app/entities/creditor/creditor-add/creditor-add.component.css")).default]
    })
], CreditorAddComponent);



/***/ }),

/***/ "./src/app/entities/creditor/creditor-contact-add/creditor-contact-add.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-contact-add/creditor-contact-add.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWRpdG9yL2NyZWRpdG9yLWNvbnRhY3QtYWRkL2NyZWRpdG9yLWNvbnRhY3QtYWRkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/entities/creditor/creditor-contact-add/creditor-contact-add.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-contact-add/creditor-contact-add.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CreditorContactAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorContactAddComponent", function() { return CreditorContactAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _creditor_services_creditor_add_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../creditor-services/creditor-add-contact.service */ "./src/app/entities/creditor/creditor-services/creditor-add-contact.service.ts");





let CreditorContactAddComponent = class CreditorContactAddComponent {
    constructor(_location, _route, _creditorAddContact) {
        this._location = _location;
        this._route = _route;
        this._creditorAddContact = _creditorAddContact;
        this.userData = {
            name: '',
            dddModel: '',
            phone: '',
            email: '',
            additionalInfo: '',
        };
        this._createdMessage = '';
        this._errorMessage = '';
    }
    ngOnInit() {
    }
    addCreditorContact() {
        this._route.paramMap
            .subscribe(params => {
            this._creditorAddContact.addCreditorContact(params.get('id'), this.userData)
                .subscribe(res => {
                console.log(res);
                this._createdMessage = 'Contato ' + this.userData.name + ' adicionado com sucesso!';
                // Reset form to add another contact
                //this.userData = {name: '',dddModel: '',phone: '',email: '',additionalInfo: '',}               
            }, error => {
                console.log(error);
                this._errorMessage = error.error;
            });
        });
    }
    backToCreditorContacts() {
        this._location.back();
    }
};
CreditorContactAddComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _creditor_services_creditor_add_contact_service__WEBPACK_IMPORTED_MODULE_4__["CreditorAddContactService"] }
];
CreditorContactAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creditor-contact-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creditor-contact-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-contact-add/creditor-contact-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creditor-contact-add.component.css */ "./src/app/entities/creditor/creditor-contact-add/creditor-contact-add.component.css")).default]
    })
], CreditorContactAddComponent);



/***/ }),

/***/ "./src/app/entities/creditor/creditor-contact-detail/creditor-contact-detail.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-contact-detail/creditor-contact-detail.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWRpdG9yL2NyZWRpdG9yLWNvbnRhY3QtZGV0YWlsL2NyZWRpdG9yLWNvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/entities/creditor/creditor-contact-detail/creditor-contact-detail.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-contact-detail/creditor-contact-detail.component.ts ***!
  \************************************************************************************************/
/*! exports provided: CreditorContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorContactDetailComponent", function() { return CreditorContactDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _creditor_services_creditor_contact_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../creditor-services/creditor-contact-detail.service */ "./src/app/entities/creditor/creditor-services/creditor-contact-detail.service.ts");





let CreditorContactDetailComponent = class CreditorContactDetailComponent {
    constructor(_location, _route, _creditorContactDetail) {
        this._location = _location;
        this._route = _route;
        this._creditorContactDetail = _creditorContactDetail;
        this.userData = {
            name: '',
            dddmodel: '',
            phone: '',
            email: '',
            additionalinfo: '',
        };
        this._updatedMessage = '';
    }
    ngOnInit() {
        this._route.paramMap
            .subscribe(params => {
            this._creditorContactDetail.getCreditorContactById(params.get('id'))
                .subscribe(res => {
                console.log(res[0]);
                this.userData = res[0];
            }, err => {
                console.log(err);
            });
        });
    }
    updateCreditorContactById() {
        this._route.paramMap
            .subscribe(params => {
            this._creditorContactDetail.updateCreditorContactById(params.get('id'), this.userData)
                .subscribe(res => {
                console.log(res);
                this._updatedMessage = 'Dados de contato alterados com sucesso';
            }, err => {
                console.log(err);
            });
        });
    }
    deleteCreditorContactById() {
        this._route.paramMap
            .subscribe(params => {
            this._creditorContactDetail.deleteCreditorContactById(params.get('id'))
                .subscribe(res => {
                console.log(res);
                this.backToCreditorContacts();
            }, err => {
                console.log(err);
            });
        });
    }
    backToCreditorContacts() {
        this._location.back();
    }
};
CreditorContactDetailComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _creditor_services_creditor_contact_detail_service__WEBPACK_IMPORTED_MODULE_4__["CreditorContactDetailService"] }
];
CreditorContactDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creditor-contact-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creditor-contact-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-contact-detail/creditor-contact-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creditor-contact-detail.component.css */ "./src/app/entities/creditor/creditor-contact-detail/creditor-contact-detail.component.css")).default]
    })
], CreditorContactDetailComponent);



/***/ }),

/***/ "./src/app/entities/creditor/creditor-contacts/creditor-contacts.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-contacts/creditor-contacts.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWRpdG9yL2NyZWRpdG9yLWNvbnRhY3RzL2NyZWRpdG9yLWNvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/entities/creditor/creditor-contacts/creditor-contacts.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-contacts/creditor-contacts.component.ts ***!
  \************************************************************************************/
/*! exports provided: CreditorContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorContactsComponent", function() { return CreditorContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _creditor_services_creditor_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../creditor-services/creditor-contacts.service */ "./src/app/entities/creditor/creditor-services/creditor-contacts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let CreditorContactsComponent = class CreditorContactsComponent {
    constructor(_creditorContactsService, _route, _router) {
        this._creditorContactsService = _creditorContactsService;
        this._route = _route;
        this._router = _router;
        this.creditorContacts = [];
    }
    ngOnInit() {
        this._route.paramMap
            .subscribe(params => {
            this._creditorContactsService.getCreditorContacts(params.get('id'))
                .subscribe(res => this.creditorContacts = res, err => console.log(err));
        });
    }
    addCreditorContact() {
        this._route.paramMap
            .subscribe(params => {
            this._router.navigate(['/credor-adicionar-contato/' + params.get('id')]);
        });
    }
};
CreditorContactsComponent.ctorParameters = () => [
    { type: _creditor_services_creditor_contacts_service__WEBPACK_IMPORTED_MODULE_2__["CreditorContactsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CreditorContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creditor-contacts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creditor-contacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-contacts/creditor-contacts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creditor-contacts.component.css */ "./src/app/entities/creditor/creditor-contacts/creditor-contacts.component.css")).default]
    })
], CreditorContactsComponent);



/***/ }),

/***/ "./src/app/entities/creditor/creditor-detail/creditor-detail.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-detail/creditor-detail.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWRpdG9yL2NyZWRpdG9yLWRldGFpbC9jcmVkaXRvci1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/entities/creditor/creditor-detail/creditor-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-detail/creditor-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: CreditorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorDetailComponent", function() { return CreditorDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _creditor_services_creditor_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../creditor-services/creditor-detail.service */ "./src/app/entities/creditor/creditor-services/creditor-detail.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let CreditorDetailComponent = class CreditorDetailComponent {
    constructor(route, _creditorDetail, _location) {
        this.route = route;
        this._creditorDetail = _creditorDetail;
        this._location = _location;
        this.creditorData = {
            businessname: '',
            fantasyname: '',
            cnpj: '',
            dddmodel: '',
            phone: '',
            email: '',
            address: '',
            streetnumber: '',
            addresscomplement: '',
            district: '',
            county: '',
            topic: '',
            zipcode: '',
            contract: '',
            startdate: '',
            enddate: '',
            status: true,
            entities: []
        };
        this.creditorDataOld = {
            businessname: '',
            fantasyname: '',
            cnpj: '',
            dddmodel: '',
            phone: '',
            email: '',
            address: '',
            streetnumber: '',
            addresscomplement: '',
            district: '',
            county: '',
            topic: '',
            zipcode: '',
            contract: '',
            startdate: '',
            enddate: '',
            status: true,
            entities: []
        };
        this._registerUpdated = '';
        this._errorMessage = '';
        this._states = [];
        this._detrans = [];
        this._creditorsgroup = [];
        this.topicHasError = true;
        this.dddHasError = true;
        this.entities = [];
        this.creditorDataSender = {
            old: this.creditorDataOld,
            new: this.creditorData,
        };
    }
    validateTopic(value) {
        if (value === 'default') {
            this.topicHasError = true;
        }
        else {
            this.topicHasError = false;
        }
    }
    ngOnInit() {
        this._creditorDetail.getStates()
            .subscribe(res => {
            this._states = res;
        }, error => {
            console.log(error);
            this._errorMessage = error.error;
        });
        this.route.paramMap
            .subscribe(params => {
            this._creditorDetail.getCreditor(params.get('id'))
                .subscribe(res => {
                this.creditorData = res[0];
                this.creditorDataOld = res[0];
            }, err => {
                console.log(err);
            });
        });
        this.route.paramMap
            .subscribe(params => {
            this._creditorDetail.getDetrans(params.get('id'))
                .subscribe(res => {
                console.log(res);
                this._detrans = res;
            }, error => {
                console.log(error);
                this._errorMessage = error.error;
            });
        });
        this.route.paramMap
            .subscribe(params => {
            this._creditorDetail.getCreditorsGroup(params.get('id'))
                .subscribe(res => {
                console.log(res);
                this._creditorsgroup = res;
            }, error => {
                console.log(error);
                this._errorMessage = error.error;
            });
        });
    }
    checkAllOptions() {
        if (this._detrans.every(val => val.checked == true))
            this._detrans.forEach(val => { val.checked = false; });
        else
            this._detrans.forEach(val => { val.checked = true; });
    }
    uncheckAllOptions() {
        this._creditorsgroup.forEach(val => { val.checked = false; });
    }
    checkDetransChange(e) {
        this._detrans.forEach(val => {
            if (e.target.id == val.id) {
                val.checked = e.target.checked;
            }
            ;
        });
    }
    checkCreditorsGroupChange(e) {
        this._creditorsgroup.forEach(val => {
            if (e.target.id == val.id) {
                val.checked = e.target.checked;
            }
            else {
                val.checked = !e.target.checked;
            }
            ;
        });
    }
    entitiesCheck() {
        this.entities = [];
        this._detrans.forEach(val => {
            if (val.checked) {
                this.entities.push(val.id);
            }
        });
        this._creditorsgroup.forEach(val => {
            if (val.checked) {
                this.entities.push(val.id);
            }
        });
        this.creditorData.entities = this.entities;
    }
    updateCreditor() {
        this.entitiesCheck();
        this.route.paramMap
            .subscribe(params => {
            this._creditorDetail.updateCreditor(this.creditorData, params.get('id'))
                .subscribe(res => {
                this._registerUpdated = 'Credora atualizada com sucesso.';
                console.log(res);
            }, err => {
                console.log(err);
            });
        });
    }
    deleteCreditor() {
        this.route.paramMap
            .subscribe(params => {
            this._creditorDetail.deleteCreditor(this.creditorData, params.get('id'))
                .subscribe(res => {
                console.log(res);
                this.backToCreditor();
            }, err => {
                console.log(err);
            });
        });
    }
    backToCreditor() {
        this._location.back();
    }
};
CreditorDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _creditor_services_creditor_detail_service__WEBPACK_IMPORTED_MODULE_3__["CreditorDetailService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
CreditorDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creditor-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creditor-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-detail/creditor-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creditor-detail.component.css */ "./src/app/entities/creditor/creditor-detail/creditor-detail.component.css")).default]
    })
], CreditorDetailComponent);



/***/ }),

/***/ "./src/app/entities/creditor/creditor-main/creditor-main.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-main/creditor-main.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2NyZWRpdG9yL2NyZWRpdG9yLW1haW4vY3JlZGl0b3ItbWFpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/entities/creditor/creditor-main/creditor-main.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-main/creditor-main.component.ts ***!
  \****************************************************************************/
/*! exports provided: CreditorMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorMainComponent", function() { return CreditorMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _creditor_services_creditor_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../creditor-services/creditor-main.service */ "./src/app/entities/creditor/creditor-services/creditor-main.service.ts");




let CreditorMainComponent = class CreditorMainComponent {
    constructor(_creditorMainService, _router) {
        this._creditorMainService = _creditorMainService;
        this._router = _router;
        this.entities = [];
        this.searchText = '';
        this.businessname = '';
    }
    ngOnInit() {
        this._creditorMainService.getCreditors()
            .subscribe(res => this.entities = res, err => console.log(err));
    }
    addCreditor() {
        this._router.navigate(['/credor-adicionar']);
    }
};
CreditorMainComponent.ctorParameters = () => [
    { type: _creditor_services_creditor_main_service__WEBPACK_IMPORTED_MODULE_3__["CreditorMainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CreditorMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-creditor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./creditor-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/creditor/creditor-main/creditor-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./creditor-main.component.css */ "./src/app/entities/creditor/creditor-main/creditor-main.component.css")).default]
    })
], CreditorMainComponent);



/***/ }),

/***/ "./src/app/entities/creditor/creditor-services/creditor-add-contact.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-services/creditor-add-contact.service.ts ***!
  \*************************************************************************************/
/*! exports provided: CreditorAddContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorAddContactService", function() { return CreditorAddContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CreditorAddContactService = class CreditorAddContactService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._addCreditorContactUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/add-creditor-contact/";
    }
    addCreditorContact(id, user) {
        return this.http.post(this._addCreditorContactUrl + id, user);
    }
};
CreditorAddContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CreditorAddContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CreditorAddContactService);



/***/ }),

/***/ "./src/app/entities/creditor/creditor-services/creditor-add.service.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-services/creditor-add.service.ts ***!
  \*****************************************************************************/
/*! exports provided: CreditorAddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorAddService", function() { return CreditorAddService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CreditorAddService = class CreditorAddService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._createCreditorUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/create-creditor";
        this._statesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/common/states";
        this._detransUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/get-detrans";
        this._creditorsGroupUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/get-creditors-group";
    }
    getStates() {
        return this.http.get(this._statesUrl);
    }
    getDetrans() {
        return this.http.get(this._detransUrl);
    }
    getCreditorsGroup() {
        return this.http.get(this._creditorsGroupUrl);
    }
    createCreditor(user) {
        return this.http.post(this._createCreditorUrl, user);
    }
};
CreditorAddService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CreditorAddService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CreditorAddService);



/***/ }),

/***/ "./src/app/entities/creditor/creditor-services/creditor-contact-detail.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-services/creditor-contact-detail.service.ts ***!
  \****************************************************************************************/
/*! exports provided: CreditorContactDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorContactDetailService", function() { return CreditorContactDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CreditorContactDetailService = class CreditorContactDetailService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._creditorContactByIdUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/creditor-contacts/contact/";
        this._creditorUpdateContactByIdUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/creditor-contacts/update-contact/";
        this._creditorDeleteContactByIdUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/creditor-contacts/delete-contact/";
    }
    getCreditorContactById(id) {
        return this.http.get(this._creditorContactByIdUrl + id);
    }
    updateCreditorContactById(id, user) {
        return this.http.put(this._creditorUpdateContactByIdUrl + id, user);
    }
    deleteCreditorContactById(id) {
        return this.http.delete(this._creditorDeleteContactByIdUrl + id);
    }
};
CreditorContactDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CreditorContactDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CreditorContactDetailService);



/***/ }),

/***/ "./src/app/entities/creditor/creditor-services/creditor-contacts.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-services/creditor-contacts.service.ts ***!
  \**********************************************************************************/
/*! exports provided: CreditorContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorContactsService", function() { return CreditorContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CreditorContactsService = class CreditorContactsService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._creditorContactsUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/creditor-contacts/";
    }
    getCreditorContacts(id) {
        return this.http.get(this._creditorContactsUrl + id);
    }
};
CreditorContactsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CreditorContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CreditorContactsService);



/***/ }),

/***/ "./src/app/entities/creditor/creditor-services/creditor-detail.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-services/creditor-detail.service.ts ***!
  \********************************************************************************/
/*! exports provided: CreditorDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorDetailService", function() { return CreditorDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CreditorDetailService = class CreditorDetailService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._statesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/common/states";
        this._entitiyUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/creditors/";
        this._entitiyUpdateUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/update-creditor/";
        this._entitiyDeleteUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/delete-creditor/";
        this._detransUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/get-detrans/";
        this._creditorsGroupUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/get-creditors-group/";
    }
    getStates() {
        return this.http.get(this._statesUrl);
    }
    getCreditor(id) {
        return this.http.get(this._entitiyUrl + id);
    }
    getDetrans(id) {
        return this.http.get(this._detransUrl + id);
    }
    getCreditorsGroup(id) {
        return this.http.get(this._creditorsGroupUrl + id);
    }
    updateCreditor(user, id) {
        return this.http.put(this._entitiyUpdateUrl + id, user);
    }
    deleteCreditor(user, id) {
        return this.http.delete(this._entitiyDeleteUrl + id, user);
    }
};
CreditorDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CreditorDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CreditorDetailService);



/***/ }),

/***/ "./src/app/entities/creditor/creditor-services/creditor-main.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/entities/creditor/creditor-services/creditor-main.service.ts ***!
  \******************************************************************************/
/*! exports provided: CreditorMainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditorMainService", function() { return CreditorMainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CreditorMainService = class CreditorMainService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._entitiesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/creditor/creditors";
    }
    getCreditors() {
        return this.http.get(this._entitiesUrl);
    }
};
CreditorMainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CreditorMainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CreditorMainService);



/***/ }),

/***/ "./src/app/entities/detran/detran-add/detran-add.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/entities/detran/detran-add/detran-add.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2RldHJhbi9kZXRyYW4tYWRkL2RldHJhbi1hZGQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/entities/detran/detran-add/detran-add.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/entities/detran/detran-add/detran-add.component.ts ***!
  \********************************************************************/
/*! exports provided: DetranAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetranAddComponent", function() { return DetranAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detran_services_detran_add_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detran-services/detran-add.service */ "./src/app/entities/detran/detran-services/detran-add.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let DetranAddComponent = class DetranAddComponent {
    constructor(_detranAddService, _router, _location) {
        this._detranAddService = _detranAddService;
        this._router = _router;
        this._location = _location;
        this.userData = {
            userName: '',
            cnpj: '',
            phone: '',
            email: '',
            topic: '',
            dddModel: ''
        };
        this._errorMessage = '';
        this._createdMessage = '';
        this._states = [];
        this.topicHasError = true;
        this.dddHasError = true;
    }
    validateTopic(value) {
        if (value === 'default') {
            this.topicHasError = true;
        }
        else {
            this.topicHasError = false;
        }
    }
    ngOnInit() {
        this._detranAddService.getStates()
            .subscribe(res => {
            console.log(res);
            this._states = res;
        }, error => {
            console.log(error);
            this._errorMessage = error.error;
        });
    }
    createDetran() {
        this._detranAddService.createDetran(this.userData)
            .subscribe(res => {
            console.log(res);
            this.ngOnInit();
            this._createdMessage = 'Detran ' + this.userData.userName + ' cadastrado com sucesso!';
            // Reset form to add another Detran
            //this.userData = {userName : '', cnpj : '', phone : '', email : '', topic : '', dddModel : '' } 
        }, error => {
            console.log(error);
            this._errorMessage = error.error;
        });
    }
    backToDetran() {
        this._location.back();
    }
};
DetranAddComponent.ctorParameters = () => [
    { type: _detran_services_detran_add_service__WEBPACK_IMPORTED_MODULE_3__["DetranAddService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
DetranAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detran-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detran-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-add/detran-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detran-add.component.css */ "./src/app/entities/detran/detran-add/detran-add.component.css")).default]
    })
], DetranAddComponent);



/***/ }),

/***/ "./src/app/entities/detran/detran-contact-add/detran-contact-add.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/entities/detran/detran-contact-add/detran-contact-add.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2RldHJhbi9kZXRyYW4tY29udGFjdC1hZGQvZGV0cmFuLWNvbnRhY3QtYWRkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/entities/detran/detran-contact-add/detran-contact-add.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/entities/detran/detran-contact-add/detran-contact-add.component.ts ***!
  \************************************************************************************/
/*! exports provided: DetranContactAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetranContactAddComponent", function() { return DetranContactAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detran_services_detran_add_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detran-services/detran-add-contact.service */ "./src/app/entities/detran/detran-services/detran-add-contact.service.ts");





let DetranContactAddComponent = class DetranContactAddComponent {
    constructor(_location, _route, _detranAddContact) {
        this._location = _location;
        this._route = _route;
        this._detranAddContact = _detranAddContact;
        this.userData = {
            name: '',
            dddModel: '',
            phone: '',
            email: '',
            additionalInfo: '',
        };
        this._createdMessage = '';
        this._errorMessage = '';
    }
    ngOnInit() {
    }
    addDetranContact() {
        this._route.paramMap
            .subscribe(params => {
            this._detranAddContact.addDetranContact(params.get('id'), this.userData)
                .subscribe(res => {
                console.log(res);
                this._createdMessage = 'Contato ' + this.userData.name + ' adicionado com sucesso!';
                // Reset form to add another contact
                //this.userData = {name: '',dddModel: '',phone: '',email: '',additionalInfo: '',}               
            }, error => {
                console.log(error);
                this._errorMessage = error.error;
            });
        });
    }
    backToDetranContacts() {
        this._location.back();
    }
};
DetranContactAddComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _detran_services_detran_add_contact_service__WEBPACK_IMPORTED_MODULE_4__["DetranAddContactService"] }
];
DetranContactAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detran-contact-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detran-contact-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-contact-add/detran-contact-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detran-contact-add.component.css */ "./src/app/entities/detran/detran-contact-add/detran-contact-add.component.css")).default]
    })
], DetranContactAddComponent);



/***/ }),

/***/ "./src/app/entities/detran/detran-contact-detail/detran-contact-detail.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/entities/detran/detran-contact-detail/detran-contact-detail.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2RldHJhbi9kZXRyYW4tY29udGFjdC1kZXRhaWwvZGV0cmFuLWNvbnRhY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/entities/detran/detran-contact-detail/detran-contact-detail.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/entities/detran/detran-contact-detail/detran-contact-detail.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DetranContactDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetranContactDetailComponent", function() { return DetranContactDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detran_services_detran_contact_detail_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detran-services/detran-contact-detail.service */ "./src/app/entities/detran/detran-services/detran-contact-detail.service.ts");





let DetranContactDetailComponent = class DetranContactDetailComponent {
    constructor(_location, _route, _detranContactDetail) {
        this._location = _location;
        this._route = _route;
        this._detranContactDetail = _detranContactDetail;
        this.userData = {
            name: '',
            dddmodel: '',
            phone: '',
            email: '',
            additionalinfo: '',
        };
        this._updatedMessage = '';
    }
    ngOnInit() {
        this._route.paramMap
            .subscribe(params => {
            this._detranContactDetail.getDetranContactById(params.get('id'))
                .subscribe(res => {
                console.log(res[0]);
                this.userData = res[0];
            }, err => {
                console.log(err);
            });
        });
    }
    updateDetranContactById() {
        this._route.paramMap
            .subscribe(params => {
            this._detranContactDetail.updateDetranContactById(params.get('id'), this.userData)
                .subscribe(res => {
                console.log(res);
                this._updatedMessage = 'Dados de contato alterados com sucesso';
            }, err => {
                console.log(err);
            });
        });
    }
    deleteDetranContactById() {
        this._route.paramMap
            .subscribe(params => {
            this._detranContactDetail.deleteDetranContactById(params.get('id'))
                .subscribe(res => {
                console.log(res);
                this.backToDetranContacts();
            }, err => {
                console.log(err);
            });
        });
    }
    backToDetranContacts() {
        this._location.back();
    }
};
DetranContactDetailComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _detran_services_detran_contact_detail_service__WEBPACK_IMPORTED_MODULE_4__["DetranContactDetailService"] }
];
DetranContactDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detran-contact-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detran-contact-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-contact-detail/detran-contact-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detran-contact-detail.component.css */ "./src/app/entities/detran/detran-contact-detail/detran-contact-detail.component.css")).default]
    })
], DetranContactDetailComponent);



/***/ }),

/***/ "./src/app/entities/detran/detran-contacts/detran-contacts.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/entities/detran/detran-contacts/detran-contacts.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2RldHJhbi9kZXRyYW4tY29udGFjdHMvZGV0cmFuLWNvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/entities/detran/detran-contacts/detran-contacts.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/entities/detran/detran-contacts/detran-contacts.component.ts ***!
  \******************************************************************************/
/*! exports provided: DetranContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetranContactsComponent", function() { return DetranContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _detran_services_detran_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../detran-services/detran-contacts.service */ "./src/app/entities/detran/detran-services/detran-contacts.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DetranContactsComponent = class DetranContactsComponent {
    constructor(_detranContactsService, _route, _router) {
        this._detranContactsService = _detranContactsService;
        this._route = _route;
        this._router = _router;
        this.detranContacts = [];
    }
    ngOnInit() {
        this._route.paramMap
            .subscribe(params => {
            this._detranContactsService.getDetranContacts(params.get('id'))
                .subscribe(res => this.detranContacts = res, err => console.log(err));
        });
    }
    addDetranContact() {
        this._route.paramMap
            .subscribe(params => {
            this._router.navigate(['/detran-adicionar-contato/' + params.get('id')]);
        });
    }
};
DetranContactsComponent.ctorParameters = () => [
    { type: _detran_services_detran_contacts_service__WEBPACK_IMPORTED_MODULE_2__["DetranContactsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DetranContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detran-contacts',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detran-contacts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-contacts/detran-contacts.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detran-contacts.component.css */ "./src/app/entities/detran/detran-contacts/detran-contacts.component.css")).default]
    })
], DetranContactsComponent);



/***/ }),

/***/ "./src/app/entities/detran/detran-detail/detran-detail.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/entities/detran/detran-detail/detran-detail.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2RldHJhbi9kZXRyYW4tZGV0YWlsL2RldHJhbi1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/entities/detran/detran-detail/detran-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/entities/detran/detran-detail/detran-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: DetranDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetranDetailComponent", function() { return DetranDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detran_services_detran_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detran-services/detran-detail.service */ "./src/app/entities/detran/detran-services/detran-detail.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let DetranDetailComponent = class DetranDetailComponent {
    constructor(route, _detranDetail, _location) {
        this.route = route;
        this._detranDetail = _detranDetail;
        this._location = _location;
        this.detranData = {
            name: '',
            cnpj: '',
            state: '',
            phone: '',
            email: '',
            dddModel: '',
        };
        this.detranDataOld = {
            name: '',
            cnpj: '',
            state: '',
            phone: '',
            email: '',
            dddModel: '',
        };
        this._registerUpdated = '';
        this.detranDataSender = {
            old: this.detranDataOld,
            new: this.detranData,
        };
    }
    ngOnInit() {
        this.route.paramMap
            .subscribe(params => {
            this._detranDetail.getDetran(params.get('id'))
                .subscribe(res => {
                this.detranData = res[0];
                this.detranDataOld = res[0];
            }, err => {
                console.log(err);
            });
        });
    }
    updateDetran() {
        this.route.paramMap
            .subscribe(params => {
            this._detranDetail.updateDetran(this.detranData, params.get('id'))
                .subscribe(res => {
                this._registerUpdated = 'Detran atualizado com sucesso.';
                console.log(res);
            }, err => {
                console.log(err);
            });
        });
    }
    deleteDetran() {
        this.route.paramMap
            .subscribe(params => {
            this._detranDetail.deleteDetran(this.detranData, params.get('id'))
                .subscribe(res => {
                console.log(res);
                this.backToDetran();
            }, err => {
                console.log(err);
            });
        });
    }
    backToDetran() {
        this._location.back();
    }
};
DetranDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _detran_services_detran_detail_service__WEBPACK_IMPORTED_MODULE_3__["DetranDetailService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
DetranDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detran-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detran-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-detail/detran-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detran-detail.component.css */ "./src/app/entities/detran/detran-detail/detran-detail.component.css")).default]
    })
], DetranDetailComponent);



/***/ }),

/***/ "./src/app/entities/detran/detran-main/detran-main.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/entities/detran/detran-main/detran-main.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL2RldHJhbi9kZXRyYW4tbWFpbi9kZXRyYW4tbWFpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/entities/detran/detran-main/detran-main.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/entities/detran/detran-main/detran-main.component.ts ***!
  \**********************************************************************/
/*! exports provided: DetranMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetranMainComponent", function() { return DetranMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detran_services_detran_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../detran-services/detran-main.service */ "./src/app/entities/detran/detran-services/detran-main.service.ts");
/* harmony import */ var _detran_services_detran_add_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../detran-services/detran-add.service */ "./src/app/entities/detran/detran-services/detran-add.service.ts");





let DetranMainComponent = class DetranMainComponent {
    constructor(_detranService, _router, _detranAddService) {
        this._detranService = _detranService;
        this._router = _router;
        this._detranAddService = _detranAddService;
        this.entities = [];
    }
    ngOnInit() {
        this._detranService.getDetrans()
            .subscribe(res => this.entities = res, err => console.log(err));
    }
    addDetran() {
        this._detranAddService.getStates()
            .subscribe(res => {
            if (res.length == 0) {
                console.log("Todos os Detrans já cadastrados");
            }
            else {
                this._router.navigate(['/detran-adicionar']);
            }
        }, err => console.log(err));
    }
};
DetranMainComponent.ctorParameters = () => [
    { type: _detran_services_detran_main_service__WEBPACK_IMPORTED_MODULE_3__["DetranMainService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _detran_services_detran_add_service__WEBPACK_IMPORTED_MODULE_4__["DetranAddService"] }
];
DetranMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detran',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detran-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/detran/detran-main/detran-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./detran-main.component.css */ "./src/app/entities/detran/detran-main/detran-main.component.css")).default]
    })
], DetranMainComponent);



/***/ }),

/***/ "./src/app/entities/detran/detran-services/detran-add-contact.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/entities/detran/detran-services/detran-add-contact.service.ts ***!
  \*******************************************************************************/
/*! exports provided: DetranAddContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetranAddContactService", function() { return DetranAddContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DetranAddContactService = class DetranAddContactService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._addDetranContactUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/detran/add-detran-contact/";
    }
    addDetranContact(id, user) {
        return this.http.post(this._addDetranContactUrl + id, user);
    }
};
DetranAddContactService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DetranAddContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DetranAddContactService);



/***/ }),

/***/ "./src/app/entities/detran/detran-services/detran-add.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/entities/detran/detran-services/detran-add.service.ts ***!
  \***********************************************************************/
/*! exports provided: DetranAddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetranAddService", function() { return DetranAddService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DetranAddService = class DetranAddService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._createDetranUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/detran/create-detran";
        this._statesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/detran/states-detran-add";
    }
    getStates() {
        return this.http.get(this._statesUrl);
    }
    createDetran(user) {
        return this.http.post(this._createDetranUrl, user);
    }
};
DetranAddService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DetranAddService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DetranAddService);



/***/ }),

/***/ "./src/app/entities/detran/detran-services/detran-contact-detail.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/entities/detran/detran-services/detran-contact-detail.service.ts ***!
  \**********************************************************************************/
/*! exports provided: DetranContactDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetranContactDetailService", function() { return DetranContactDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DetranContactDetailService = class DetranContactDetailService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._detranContactByIdUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/detran/detran-contacts/contact/";
        this._detranUpdateContactByIdUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/detran/detran-contacts/update-contact/";
        this._detranDeleteContactByIdUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/detran/detran-contacts/delete-contact/";
    }
    getDetranContactById(id) {
        return this.http.get(this._detranContactByIdUrl + id);
    }
    updateDetranContactById(id, user) {
        return this.http.put(this._detranUpdateContactByIdUrl + id, user);
    }
    deleteDetranContactById(id) {
        return this.http.delete(this._detranDeleteContactByIdUrl + id);
    }
};
DetranContactDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DetranContactDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DetranContactDetailService);



/***/ }),

/***/ "./src/app/entities/detran/detran-services/detran-contacts.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/entities/detran/detran-services/detran-contacts.service.ts ***!
  \****************************************************************************/
/*! exports provided: DetranContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetranContactsService", function() { return DetranContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DetranContactsService = class DetranContactsService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._detranContactsUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/detran/detran-contacts/";
    }
    getDetranContacts(id) {
        return this.http.get(this._detranContactsUrl + id);
    }
};
DetranContactsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DetranContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DetranContactsService);



/***/ }),

/***/ "./src/app/entities/detran/detran-services/detran-detail.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/entities/detran/detran-services/detran-detail.service.ts ***!
  \**************************************************************************/
/*! exports provided: DetranDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetranDetailService", function() { return DetranDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DetranDetailService = class DetranDetailService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._entitiyUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/detran/detrans/";
        this._entitiyUpdateUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/detran/update-detran/";
        this._entitiyDeleteUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/detran/delete-detran/";
    }
    getDetran(id) {
        return this.http.get(this._entitiyUrl + id);
    }
    updateDetran(user, id) {
        return this.http.put(this._entitiyUpdateUrl + id, user);
    }
    deleteDetran(user, id) {
        return this.http.delete(this._entitiyDeleteUrl + id, user);
    }
};
DetranDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DetranDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DetranDetailService);



/***/ }),

/***/ "./src/app/entities/detran/detran-services/detran-main.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/entities/detran/detran-services/detran-main.service.ts ***!
  \************************************************************************/
/*! exports provided: DetranMainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetranMainService", function() { return DetranMainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DetranMainService = class DetranMainService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._entitiesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/detran/detrans";
    }
    getDetrans() {
        return this.http.get(this._entitiesUrl);
    }
};
DetranMainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DetranMainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DetranMainService);



/***/ }),

/***/ "./src/app/entities/entities-services/entities.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/entities/entities-services/entities.service.ts ***!
  \****************************************************************/
/*! exports provided: EntitiesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesService", function() { return EntitiesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let EntitiesService = class EntitiesService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._entitiesTypesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/common/entities-types";
    }
    getEntitiesTypes() {
        return this.http.get(this._entitiesTypesUrl);
    }
};
EntitiesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EntitiesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EntitiesService);



/***/ }),

/***/ "./src/app/entities/registrar/registrar.component.css":
/*!************************************************************!*\
  !*** ./src/app/entities/registrar/registrar.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VudGl0aWVzL3JlZ2lzdHJhci9yZWdpc3RyYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/entities/registrar/registrar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/entities/registrar/registrar.component.ts ***!
  \***********************************************************/
/*! exports provided: RegistrarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarComponent", function() { return RegistrarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RegistrarComponent = class RegistrarComponent {
    constructor() { }
    ngOnInit() {
    }
};
RegistrarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registrar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registrar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/entities/registrar/registrar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registrar.component.css */ "./src/app/entities/registrar/registrar.component.css")).default]
    })
], RegistrarComponent);



/***/ }),

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbHAvaGVscC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelpComponent = class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
};
HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-help',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./help.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/help/help.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")).default]
    })
], HelpComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _entities_entities_services_entities_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/entities-services/entities.service */ "./src/app/entities/entities-services/entities.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _system_access_system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../system-access/system-access-services/auth.service */ "./src/app/system-access/system-access-services/auth.service.ts");





let HomeComponent = class HomeComponent {
    constructor(_entitiesService, _router, _authService) {
        this._entitiesService = _entitiesService;
        this._router = _router;
        this._authService = _authService;
        this.entityTypes = [];
    }
    ngOnInit() {
        this._entitiesService.getEntitiesTypes()
            .subscribe(res => this.entityTypes = res, err => console.log(err));
    }
};
HomeComponent.ctorParameters = () => [
    { type: _entities_entities_services_entities_service__WEBPACK_IMPORTED_MODULE_2__["EntitiesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _system_access_system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pipes/filter-description.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/pipes/filter-description.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterDescriptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDescriptionPipe", function() { return FilterDescriptionPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterDescriptionPipe = class FilterDescriptionPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            //console.log(it)
            return it.description.toLocaleLowerCase().includes(searchText);
        });
    }
};
FilterDescriptionPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterDescription'
    })
], FilterDescriptionPipe);



/***/ }),

/***/ "./src/app/pipes/filter-entity-name.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/pipes/filter-entity-name.pipe.ts ***!
  \**************************************************/
/*! exports provided: FilterEntityNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterEntityNamePipe", function() { return FilterEntityNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterEntityNamePipe = class FilterEntityNamePipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            //console.log(it)
            return it.entityname.toLocaleLowerCase().includes(searchText);
        });
    }
};
FilterEntityNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterEntityName'
    })
], FilterEntityNamePipe);



/***/ }),

/***/ "./src/app/pipes/filter-feature-name.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/pipes/filter-feature-name.pipe.ts ***!
  \***************************************************/
/*! exports provided: FilterFeatureNamePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterFeatureNamePipe", function() { return FilterFeatureNamePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterFeatureNamePipe = class FilterFeatureNamePipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            //console.log(it)
            return it.featurename.toLocaleLowerCase().includes(searchText);
        });
    }
};
FilterFeatureNamePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterFeatureName'
    })
], FilterFeatureNamePipe);



/***/ }),

/***/ "./src/app/pipes/filter-name.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/filter-name.pipe.ts ***!
  \*******************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterPipe = class FilterPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            //console.log(it)
            return it.name.toLocaleLowerCase().includes(searchText);
        });
    }
};
FilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filter'
    })
], FilterPipe);



/***/ }),

/***/ "./src/app/pipes/filter-status.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/filter-status.pipe.ts ***!
  \*********************************************/
/*! exports provided: FilterStatusPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterStatusPipe", function() { return FilterStatusPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterStatusPipe = class FilterStatusPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        if (searchText == 'todos') {
            return items;
        }
        else {
            return items.filter(it => {
                return (it.status.toLocaleLowerCase() == (searchText));
            });
        }
    }
};
FilterStatusPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterStatus'
    })
], FilterStatusPipe);



/***/ }),

/***/ "./src/app/pipes/filter-user.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/pipes/filter-user.pipe.ts ***!
  \*******************************************/
/*! exports provided: FilterUserPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterUserPipe", function() { return FilterUserPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FilterUserPipe = class FilterUserPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter(it => {
            return (it.name.toLocaleLowerCase().includes(searchText) ||
                it.cpf.toLocaleLowerCase().includes(searchText) ||
                it.email.toLocaleLowerCase().includes(searchText) ||
                it.lastname.toLocaleLowerCase().includes(searchText) ||
                it.username.toLocaleLowerCase().includes(searchText));
        });
    }
};
FilterUserPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'filterUser'
    })
], FilterUserPipe);



/***/ }),

/***/ "./src/app/registers/groups/group-add/group-add.component.css":
/*!********************************************************************!*\
  !*** ./src/app/registers/groups/group-add/group-add.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVycy9ncm91cHMvZ3JvdXAtYWRkL2dyb3VwLWFkZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/registers/groups/group-add/group-add.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/registers/groups/group-add/group-add.component.ts ***!
  \*******************************************************************/
/*! exports provided: GroupAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAddComponent", function() { return GroupAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _group_services_group_add_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../group-services/group-add.service */ "./src/app/registers/groups/group-services/group-add.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let GroupAddComponent = class GroupAddComponent {
    constructor(_groupAddService, _location) {
        this._groupAddService = _groupAddService;
        this._location = _location;
        this._detranErrorMessage = '';
        this._creditorErrorMessage = '';
        this._creditorGroupErrorMessage = '';
        this._adminErrorMessage = '';
        this._detranSaving = false;
        this._creditorSaving = false;
        this._creditorGroupSaving = false;
        this._adminSaving = false;
        this._detranData = {
            entitytype: 'DETRAN',
            planname: '',
            planstatus: true,
            entities: [],
            features: [],
        };
        this._creditorData = {
            entitytype: 'CREDORA',
            planname: '',
            planstatus: true,
            entities: [],
            features: [],
        };
        this._creditorGroupData = {
            entitytype: 'GESTORA',
            planname: '',
            planstatus: true,
            entities: [],
            features: [],
        };
        this._adminData = {
            entitytype: 'ADMIN',
            planname: '',
            planstatus: true,
            entities: [],
            features: [],
        };
    }
    ngOnInit() {
        this._groupAddService.getUserGroupFeatures()
            .subscribe(res => {
            //console.log(res) 
            res.forEach((data) => {
                if (data.entitytype == 'DETRAN') { // Type Detran
                    this._detranData.features.push(data);
                }
                else if (data.entitytype == 'CREDORA') { // Type Creditor
                    this._creditorData.features.push(data);
                }
                else if (data.entitytype == 'GESTORA') { // Type Creditor Group
                    this._creditorGroupData.features.push(data);
                }
                else if (data.entitytype == 'ADMIN') { // Type Admin
                    this._adminData.features.push(data);
                }
                else if (data.entitytype == 'REGISTRADORA') { // Type Registrar
                    //this._detranData.features.push(data)
                }
            });
        }, error => { console.log(error); });
        this._groupAddService.getUserGroupEntities()
            .subscribe(res => {
            console.log(res);
            res.forEach((data) => {
                if (data.entitytype == 'DETRAN') { // Type Detran
                    this._detranData.entities.push(data);
                    this._adminData.entities.push(data);
                }
                else if (data.entitytype == 'CREDORA') { // Type Creditor
                    this._creditorData.entities.push(data);
                    this._creditorGroupData.entities.push(data);
                    this._adminData.entities.push(data);
                }
                else if (data.entitytype == 'GESTORA') { // Type Creditor Group
                    this._creditorGroupData.entities.push(data);
                    this._adminData.entities.push(data);
                }
                else if (data.entitytype == 'REGISTRADORA') { // Type Registrar
                    //this._entitiesRegistrar.push(data)
                }
            });
        }, error => { console.log(error); });
    }
    detranFeaturesControl(event) {
        this._detranData.features.forEach(val => {
            if (("detran." + val.featurename) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._detranData.features);
    }
    creditorFeaturesControl(event) {
        this._creditorData.features.forEach(val => {
            if (("creditor." + val.featurename) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._creditorData.features);
    }
    creditorGroupFeaturesControl(event) {
        this._creditorGroupData.features.forEach(val => {
            if (("creditorGroup." + val.featurename) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._creditorGroupData.features);
    }
    adminFeaturesControl(event) {
        this._adminData.features.forEach(val => {
            if (("admin." + val.featurename) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._adminData.features);
    }
    detranEntitiesControl(event) {
        this._detranData.entities.forEach(val => {
            if (("detran." + val.entityname) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._detranData.entities);
    }
    creditorEntitiesControl(event) {
        this._creditorData.entities.forEach(val => {
            if (("creditor." + val.entityname) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._creditorData.entities);
    }
    creditorGroupEntitiesControl(event) {
        this._creditorGroupData.entities.forEach(val => {
            if (("creditorGroup." + val.entityname) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._creditorGroupData.entities);
    }
    adminEntitiesControl(event) {
        this._adminData.entities.forEach(val => {
            if (("admin." + val.entityname) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._adminData.entities);
    }
    createDetranGroup() {
        this._detranErrorMessage = 'Selecione pelo menos uma Entidade';
        this._detranData.entities.forEach(element => {
            if (element.checked == true) {
                this._detranErrorMessage = '';
            }
        });
        if (this._detranErrorMessage == 'Selecione pelo menos uma Entidade') {
            console.log(this._detranErrorMessage);
            return;
        }
        this._detranErrorMessage = 'Selecione pelo menos uma Funcionalidade';
        this._detranData.features.forEach(element => {
            if (element.checked == true) {
                this._detranErrorMessage = '';
            }
        });
        if (this._detranErrorMessage == 'Selecione pelo menos uma Funcionalidade') {
            console.log(this._detranErrorMessage);
            return;
        }
        console.log(this._detranData);
        this._detranSaving = true;
        this._groupAddService.createGroup(this._detranData)
            .subscribe(res => {
            this._detranSaving = false;
        }, error => {
            console.log(error);
            this._detranSaving = false;
        });
    }
    createCreditorGroup() {
        this._creditorErrorMessage = 'Selecione pelo menos uma Entidade';
        this._creditorData.entities.forEach(element => {
            if (element.checked == true) {
                this._creditorErrorMessage = '';
            }
        });
        if (this._creditorErrorMessage == 'Selecione pelo menos uma Entidade') {
            console.log(this._creditorErrorMessage);
            return;
        }
        this._creditorErrorMessage = 'Selecione pelo menos uma Funcionalidade';
        this._creditorData.features.forEach(element => {
            if (element.checked == true) {
                this._creditorErrorMessage = '';
            }
        });
        if (this._creditorErrorMessage == 'Selecione pelo menos uma Funcionalidade') {
            console.log(this._creditorErrorMessage);
            return;
        }
        console.log(this._creditorData);
        this._creditorSaving = true;
        this._groupAddService.createGroup(this._creditorData)
            .subscribe(res => {
            this._creditorSaving = false;
            //this._router.navigate(['/group-main'])
        }, error => console.log(error));
    }
    createCreditorGroupGroup() {
        this._creditorGroupErrorMessage = 'Selecione pelo menos uma Entidade';
        this._creditorGroupData.entities.forEach(element => {
            if (element.checked == true) {
                this._creditorGroupErrorMessage = '';
            }
        });
        if (this._creditorGroupErrorMessage == 'Selecione pelo menos uma Entidade') {
            console.log(this._creditorGroupErrorMessage);
            return;
        }
        this._creditorGroupErrorMessage = 'Selecione pelo menos uma Funcionalidade';
        this._creditorGroupData.features.forEach(element => {
            if (element.checked == true) {
                this._creditorGroupErrorMessage = '';
            }
        });
        if (this._creditorGroupErrorMessage == 'Selecione pelo menos uma Funcionalidade') {
            console.log(this._creditorGroupErrorMessage);
            return;
        }
        console.log(this._creditorGroupData);
        this._creditorGroupSaving = true;
        this._groupAddService.createGroup(this._creditorGroupData)
            .subscribe(res => {
            this._creditorGroupSaving = false;
            //this._router.navigate(['/group-main'])
        }, error => console.log(error));
    }
    createAdminGroup() {
        this._adminErrorMessage = 'Selecione pelo menos uma Entidade';
        this._adminData.entities.forEach(element => {
            if (element.checked == true) {
                this._adminErrorMessage = '';
            }
        });
        if (this._adminErrorMessage == 'Selecione pelo menos uma Entidade') {
            console.log(this._adminErrorMessage);
            return;
        }
        this._adminErrorMessage = 'Selecione pelo menos uma Funcionalidade';
        this._adminData.features.forEach(element => {
            if (element.checked == true) {
                this._adminErrorMessage = '';
            }
        });
        if (this._adminErrorMessage == 'Selecione pelo menos uma Funcionalidade') {
            console.log(this._adminErrorMessage);
            return;
        }
        this._adminSaving = true;
        console.log(this._adminData);
        this._groupAddService.createGroup(this._adminData)
            .subscribe(res => {
            this._adminSaving = false;
            //this._router.navigate(['/group-main'])
        }, error => console.log(error));
    }
    backToGroups() {
        this._location.back();
    }
};
GroupAddComponent.ctorParameters = () => [
    { type: _group_services_group_add_service__WEBPACK_IMPORTED_MODULE_2__["GroupAddService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
GroupAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-group-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registers/groups/group-add/group-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-add.component.css */ "./src/app/registers/groups/group-add/group-add.component.css")).default]
    })
], GroupAddComponent);



/***/ }),

/***/ "./src/app/registers/groups/group-main/group-main.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/registers/groups/group-main/group-main.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVycy9ncm91cHMvZ3JvdXAtbWFpbi9ncm91cC1tYWluLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/registers/groups/group-main/group-main.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/registers/groups/group-main/group-main.component.ts ***!
  \*********************************************************************/
/*! exports provided: GroupMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMainComponent", function() { return GroupMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _group_services_group_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../group-services/group-main.service */ "./src/app/registers/groups/group-services/group-main.service.ts");



let GroupMainComponent = class GroupMainComponent {
    constructor(_groupService) {
        this._groupService = _groupService;
        this._groupMain = [];
        this._status = 'Todos';
        this._userData = { id: '' };
    }
    ngOnInit() {
        this._groupService.getGroup()
            .subscribe(res => {
            console.log(res);
            this._groupMain = res;
        }, err => {
            console.log(err);
        });
    }
    disableGroup(id) {
        this._userData.id = id;
        this._groupService.disableGroup(this._userData)
            .subscribe(res => {
            console.log(res);
            this.ngOnInit();
        }, err => {
            console.log(err);
        });
    }
};
GroupMainComponent.ctorParameters = () => [
    { type: _group_services_group_main_service__WEBPACK_IMPORTED_MODULE_2__["GroupMainService"] }
];
GroupMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./group-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registers/groups/group-main/group-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./group-main.component.css */ "./src/app/registers/groups/group-main/group-main.component.css")).default]
    })
], GroupMainComponent);



/***/ }),

/***/ "./src/app/registers/groups/group-services/group-add.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/registers/groups/group-services/group-add.service.ts ***!
  \**********************************************************************/
/*! exports provided: GroupAddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupAddService", function() { return GroupAddService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GroupAddService = class GroupAddService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._createGroupUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-group-add";
        this._userFeaturesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-group-features";
        this._userEntitiesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-group-entities";
    }
    getUserGroupFeatures() {
        return this.http.get(this._userFeaturesUrl);
    }
    getUserGroupEntities() {
        return this.http.get(this._userEntitiesUrl);
    }
    createGroup(group) {
        return this.http.post(this._createGroupUrl, group);
    }
};
GroupAddService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GroupAddService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GroupAddService);



/***/ }),

/***/ "./src/app/registers/groups/group-services/group-detail.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/registers/groups/group-services/group-detail.service.ts ***!
  \*************************************************************************/
/*! exports provided: GroupDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupDetailService", function() { return GroupDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GroupDetailService = class GroupDetailService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._userFeaturesUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-group-features/";
        this._userEntitiessUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-group-entities/";
        this._userGroupUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-groups/";
        this._userGroupUpdateUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-groups-update/";
        this._userGroupDeleteUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-groups-delete";
    }
    getUserGroupFeaturesById(id) {
        return this.http.get(this._userFeaturesUrl + id);
    }
    getUserGroupEntitiesByid(id) {
        return this.http.get(this._userEntitiessUrl + id);
    }
    getUserGroupByid(id) {
        return this.http.get(this._userGroupUrl + id);
    }
    updateGroup(id, userData) {
        return this.http.put(this._userGroupUpdateUrl + id, userData);
    }
    deleteGroup(id) {
        return this.http.put(this._userGroupDeleteUrl, id);
    }
};
GroupDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GroupDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GroupDetailService);



/***/ }),

/***/ "./src/app/registers/groups/group-services/group-main.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/registers/groups/group-services/group-main.service.ts ***!
  \***********************************************************************/
/*! exports provided: GroupMainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMainService", function() { return GroupMainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let GroupMainService = class GroupMainService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._groupUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-groups";
        this._disableGroupUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-groups-disable";
    }
    getGroup() {
        return this.http.get(this._groupUrl);
    }
    disableGroup(userData) {
        return this.http.put(this._disableGroupUrl, userData);
    }
};
GroupMainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
GroupMainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], GroupMainService);



/***/ }),

/***/ "./src/app/registers/groups/groups-detail/groups-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/registers/groups/groups-detail/groups-detail.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVycy9ncm91cHMvZ3JvdXBzLWRldGFpbC9ncm91cHMtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/registers/groups/groups-detail/groups-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/registers/groups/groups-detail/groups-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: GroupsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsDetailComponent", function() { return GroupsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _group_services_group_detail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../group-services/group-detail.service */ "./src/app/registers/groups/group-services/group-detail.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let GroupsDetailComponent = class GroupsDetailComponent {
    constructor(_groupDetailService, _route, _location) {
        this._groupDetailService = _groupDetailService;
        this._route = _route;
        this._location = _location;
        this._userData = { id: '' };
        this._detranErrorMessage = '';
        this._creditorErrorMessage = '';
        this._creditorGroupErrorMessage = '';
        this._adminErrorMessage = '';
        this._detranSaving = false;
        this._creditorSaving = false;
        this._creditorGroupSaving = false;
        this._adminSaving = false;
        this._userGroupEntityType = '';
        this._detranData = {
            planname: '',
            planstatus: true,
            entities: [],
            features: [],
        };
        this._creditorData = {
            planname: '',
            planstatus: true,
            entities: [],
            features: [],
        };
        this._creditorGroupData = {
            planname: '',
            planstatus: true,
            entities: [],
            features: [],
        };
        this._adminData = {
            planname: '',
            planstatus: true,
            entities: [],
            features: [],
        };
    }
    ngOnInit() {
        this._route.paramMap
            .subscribe(params => {
            this._groupDetailService.getUserGroupByid(params.get('id'))
                .subscribe(res => {
                //console.log(res[0])
                res.forEach(data => {
                    if (data.entitytype == 'DETRAN') { // Type Detran
                        this._detranData.planname = data.planname;
                        this._detranData.planstatus = data.planstatus;
                        this._userGroupEntityType = 'DETRAN';
                    }
                    else if (data.entitytype == 'CREDORA') { // Type Creditor
                        this._creditorData.planname = data.planname;
                        this._creditorData.planstatus = data.planstatus;
                        this._userGroupEntityType = 'CREDORA';
                    }
                    else if (data.entitytype == 'GESTORA') { // Type Creditor Group
                        this._creditorGroupData.planname = data.planname;
                        this._creditorGroupData.planstatus = data.planstatus;
                        this._userGroupEntityType = 'GESTORA';
                    }
                    else if (data.entitytype == 'ADMIN') { // Type Admin
                        this._adminData.planname = data.planname;
                        this._adminData.planstatus = data.planstatus;
                        this._userGroupEntityType = 'ADMIN';
                        console.log("Cheguei");
                        console.log("plano: " + data.planname, "entidade status: " + data.planstatus, "entidade: " + this._userGroupEntityType);
                    }
                    else if (data.entitytype == 'REGISTRADORA') { // Type Registrar
                        //this._detranData.features.push(data)
                    }
                });
            }, error => { console.log(error); });
            this._groupDetailService.getUserGroupFeaturesById(params.get('id'))
                .subscribe(res => {
                console.log(res);
                res.forEach((data) => {
                    if (data.entitytype == 'DETRAN') { // Type Detran
                        this._detranData.features.push(data);
                    }
                    else if (data.entitytype == 'CREDORA') { // Type Creditor                
                        this._creditorData.features.push(data);
                    }
                    else if (data.entitytype == 'GESTORA') { // Type Creditor Group
                        this._creditorGroupData.features.push(data);
                    }
                    else if (data.entitytype == 'ADMIN') { // Type Admin
                        this._adminData.features.push(data);
                    }
                    else if (data.entitytype == 'REGISTRADORA') { // Type Registrar
                        //this._detranData.features.push(data)
                    }
                });
            }, error => { console.log(error); });
            this._groupDetailService.getUserGroupEntitiesByid(params.get('id'))
                .subscribe(res => {
                console.log(res);
                res.forEach((data) => {
                    if (data.entitytype == 'DETRAN') { // Type Detran
                        this._detranData.entities.push(data);
                        this._adminData.entities.push(data);
                    }
                    else if (data.entitytype == 'CREDORA') { // Type Creditor
                        this._creditorData.entities.push(data);
                        this._creditorGroupData.entities.push(data);
                        this._adminData.entities.push(data);
                    }
                    else if (data.entitytype == 'GESTORA') { // Type Creditor Group
                        this._creditorGroupData.entities.push(data);
                        this._adminData.entities.push(data);
                    }
                    else if (data.entitytype == 'REGISTRADORA') { // Type Registrar
                        //this._entitiesRegistrar.push(data)
                    }
                });
            }, error => { console.log(error); });
        });
    }
    detranFeaturesControl(event) {
        this._detranData.features.forEach(val => {
            if (("detran." + val.featurename) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._detranData.features);
    }
    creditorFeaturesControl(event) {
        this._creditorData.features.forEach(val => {
            if (("creditor." + val.featurename) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._creditorData.features);
    }
    creditorGroupFeaturesControl(event) {
        this._creditorGroupData.features.forEach(val => {
            if (("creditorGroup." + val.featurename) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._creditorGroupData.features);
    }
    adminFeaturesControl(event) {
        this._adminData.features.forEach(val => {
            if (("admin." + val.featurename) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._adminData.features);
    }
    detranEntitiesControl(event) {
        this._detranData.entities.forEach(val => {
            if (("detran." + val.entityname) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._detranData.entities);
    }
    creditorEntitiesControl(event) {
        this._creditorData.entities.forEach(val => {
            if (("creditor." + val.entityname) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._creditorData.entities);
    }
    creditorGroupEntitiesControl(event) {
        this._creditorGroupData.entities.forEach(val => {
            if (("creditorGroup." + val.entityname) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._creditorGroupData.entities);
    }
    adminEntitiesControl(event) {
        this._adminData.entities.forEach(val => {
            if (("admin." + val.entityname) === event.target.id) {
                val.checked = event.target.checked;
            }
        });
        console.log(this._adminData.entities);
    }
    updateDetranGroup() {
        this._detranErrorMessage = 'Selecione pelo menos uma Entidade';
        this._detranData.entities.forEach(element => {
            if (element.checked == true) {
                this._detranErrorMessage = '';
            }
        });
        if (this._detranErrorMessage == 'Selecione pelo menos uma Entidade') {
            console.log(this._detranErrorMessage);
            return;
        }
        this._detranErrorMessage = 'Selecione pelo menos uma Funcionalidade';
        this._detranData.features.forEach(element => {
            if (element.checked == true) {
                this._detranErrorMessage = '';
            }
        });
        if (this._detranErrorMessage == 'Selecione pelo menos uma Funcionalidade') {
            console.log(this._detranErrorMessage);
            return;
        }
        console.log(this._detranData);
        this._detranSaving = true;
        this._route.paramMap.subscribe(params => {
            this._groupDetailService.updateGroup(params.get('id'), this._detranData)
                .subscribe(res => {
                this._detranSaving = false;
            }, error => {
                console.log(error);
                this._detranSaving = false;
            });
        });
    }
    updateCreditorGroup() {
        this._creditorErrorMessage = 'Selecione pelo menos uma Entidade';
        this._creditorData.entities.forEach(element => {
            if (element.checked == true) {
                this._creditorErrorMessage = '';
            }
        });
        if (this._creditorErrorMessage == 'Selecione pelo menos uma Entidade') {
            console.log(this._creditorErrorMessage);
            return;
        }
        this._creditorErrorMessage = 'Selecione pelo menos uma Funcionalidade';
        this._creditorData.features.forEach(element => {
            if (element.checked == true) {
                this._creditorErrorMessage = '';
            }
        });
        if (this._creditorErrorMessage == 'Selecione pelo menos uma Funcionalidade') {
            console.log(this._creditorErrorMessage);
            return;
        }
        console.log(this._creditorData);
        this._route.paramMap.subscribe(params => {
            this._groupDetailService.updateGroup(params.get('id'), this._creditorData)
                .subscribe(res => {
                this._detranSaving = false;
            }, error => {
                console.log(error);
                this._detranSaving = false;
            });
        });
    }
    updateCreditorGroupGroup() {
        this._creditorGroupErrorMessage = 'Selecione pelo menos uma Entidade';
        this._creditorGroupData.entities.forEach(element => {
            if (element.checked == true) {
                this._creditorGroupErrorMessage = '';
            }
        });
        if (this._creditorGroupErrorMessage == 'Selecione pelo menos uma Entidade') {
            console.log(this._creditorGroupErrorMessage);
            return;
        }
        this._creditorGroupErrorMessage = 'Selecione pelo menos uma Funcionalidade';
        this._creditorGroupData.features.forEach(element => {
            if (element.checked == true) {
                this._creditorGroupErrorMessage = '';
            }
        });
        if (this._creditorGroupErrorMessage == 'Selecione pelo menos uma Funcionalidade') {
            console.log(this._creditorGroupErrorMessage);
            return;
        }
        console.log(this._creditorGroupData);
        this._route.paramMap.subscribe(params => {
            this._groupDetailService.updateGroup(params.get('id'), this._creditorGroupData)
                .subscribe(res => {
                this._detranSaving = false;
            }, error => {
                console.log(error);
                this._detranSaving = false;
            });
        });
    }
    updateAdminGroup() {
        this._adminErrorMessage = 'Selecione pelo menos uma Entidade';
        this._adminData.entities.forEach(element => {
            if (element.checked == true) {
                this._adminErrorMessage = '';
            }
        });
        if (this._adminErrorMessage == 'Selecione pelo menos uma Entidade') {
            console.log(this._adminErrorMessage);
            return;
        }
        this._adminErrorMessage = 'Selecione pelo menos uma Funcionalidade';
        this._adminData.features.forEach(element => {
            if (element.checked == true) {
                this._adminErrorMessage = '';
            }
        });
        if (this._adminErrorMessage == 'Selecione pelo menos uma Funcionalidade') {
            console.log(this._adminErrorMessage);
            return;
        }
        console.log(this._adminData);
        this._route.paramMap.subscribe(params => {
            this._groupDetailService.updateGroup(params.get('id'), this._adminData)
                .subscribe(res => {
                this._detranSaving = false;
            }, error => {
                console.log(error);
                this._detranSaving = false;
            });
        });
    }
    deleteGroup() {
        this._route.paramMap.subscribe(params => {
            this._userData.id = params.get('id');
            this._groupDetailService.deleteGroup(this._userData)
                .subscribe(res => {
                this._detranSaving = false;
            }, error => {
                console.log(error);
                this._detranSaving = false;
            });
        });
    }
    backToGroups() {
        this._location.back();
    }
};
GroupsDetailComponent.ctorParameters = () => [
    { type: _group_services_group_detail_service__WEBPACK_IMPORTED_MODULE_2__["GroupDetailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
GroupsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-groups-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./groups-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registers/groups/groups-detail/groups-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./groups-detail.component.css */ "./src/app/registers/groups/groups-detail/groups-detail.component.css")).default]
    })
], GroupsDetailComponent);



/***/ }),

/***/ "./src/app/registers/user/user-add/user-add.component.css":
/*!****************************************************************!*\
  !*** ./src/app/registers/user/user-add/user-add.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVycy91c2VyL3VzZXItYWRkL3VzZXItYWRkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/registers/user/user-add/user-add.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/registers/user/user-add/user-add.component.ts ***!
  \***************************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_services_user_add_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-services/user-add.service */ "./src/app/registers/user/user-services/user-add.service.ts");




let UserAddComponent = class UserAddComponent {
    constructor(_userAddService, _router) {
        this._userAddService = _userAddService;
        this._router = _router;
        this._registerUserData = {
            firstName: '',
            lastName: '',
            userName: '',
            dddModel: '',
            phone: '',
            cpf: '',
            status: true,
            email: '',
            groupsId: '',
        };
        this._resetCode = '';
        this._errorMessage = '';
        this._groupsData = [];
        this.topicHasError = true;
        this.dddHasError = true;
        this._activeTab = 'user-data';
    }
    ngOnInit() {
        this._userAddService.getUserGroups()
            .subscribe(res => {
            console.log(res);
            this._groupsData = res;
        }, error => {
            console.log(error);
            this._errorMessage = error.error;
        });
    }
    nextTab(tab) {
        this._activeTab = tab;
    }
    featuresControl(event) {
        this._registerUserData.groupsId = event.target.id;
    }
    createUser() {
        this._userAddService.createUser(this._registerUserData)
            .subscribe(res => {
            this._resetCode = res.resetCode;
            this.sendEmail(this._registerUserData.email);
            console.log(res);
        }, error => console.log(error));
    }
    backToUsers() {
    }
    sendEmail(emailTo) {
        var emailConfig = __webpack_require__(/*! ../../../../assets/configs/config-email-noreply.json */ "./src/assets/configs/config-email-noreply.json");
        let emailData = {
            host: emailConfig.host,
            port: emailConfig.port,
            secure: emailConfig.secure,
            requireTLS: emailConfig.requireTLS,
            userName: emailConfig.userName,
            emailFrom: emailConfig.emailFrom,
            password: emailConfig.password,
            emailTo: emailTo,
            subjectContent: "[NÃO RESPONDA] - RainTI novo Acesso",
            plainText: "Acesso o link a seguir: http://" + emailConfig.hostSrc + ":4200/novo-acesso, informe o seu nome de usuário: " + this._registerUserData.userName + " e o código a seguir: " + this._resetCode + " para criar seu acesso",
            html: ' <head> '
                + ' <title>Rating Reminder</title> '
                + ' <meta content="text/html; charset=utf-8" http-equiv="Content-Type"> '
                + ' <meta content="width=device-width" name="viewport"> '
                + ' <style type="text/css"> '
                + ' @font-face { '
                + ' font-family: &#x27; '
                + ' Postmates Std&#x27; '
                + ' ; '
                + ' font-weight: 600; '
                + ' font-style: normal; '
                + ' src: local(&#x27; Postmates Std Bold&#x27; ), url(https://s3-us-west-1.amazonaws.com/buyer-static.postmates.com/assets/email/postmates-std-bold.woff) format(&#x27; woff&#x27; ); '
                + ' } '
                + ' @font-face { '
                + ' font-family: &#x27; '
                + ' Postmates Std&#x27; '
                + ' ; '
                + ' font-weight: 500; '
                + ' font-style: normal; '
                + ' src: local(&#x27; Postmates Std Medium&#x27; ), url(https://s3-us-west-1.amazonaws.com/buyer-static.postmates.com/assets/email/postmates-std-medium.woff) format(&#x27; woff&#x27; ); '
                + ' } '
                + ' @font-face { '
                + ' font-family: &#x27; '
                + ' Postmates Std&#x27; '
                + '  ; '
                + ' font-weight: 400; '
                + ' font-style: normal; '
                + ' src: local(&#x27; Postmates Std Regular&#x27; ), url(https://s3-us-west-1.amazonaws.com/buyer-static.postmates.com/assets/email/postmates-std-regular.woff) format(&#x27; woff&#x27; ); '
                + ' } '
                + ' </style> '
                + ' <style media="screen and (max-width: 680px)"> '
                + ' @media screen and (max-width: 680px) { '
                + ' .page-center { '
                + ' padding-left: 0 !important; '
                + ' padding-right: 0 !important; '
                + '  } '
                + ' .footer-center { '
                + ' padding-left: 20px !important; '
                + ' padding-right: 20px !important; '
                + '  } '
                + ' } '
                + ' </style> '
                + ' </head> '
                + ' <body style="background-color: #f4f4f5;"> '
                + ' <table cellpadding="0" cellspacing="0" '
                + ' style="width: 100%; height: 100%; background-color: #f4f4f5; text-align: center;"> '
                + ' <tbody> '
                + ' <tr> '
                + ' <td style="text-align: center;"> '
                + ' <table align="center" cellpadding="0" cellspacing="0" id="body" '
                + ' style="background-color: #fff; width: 100%; max-width: 680px; height: 100%;"> '
                + ' <tbody> '
                + ' <tr> '
                + ' <td> '
                + ' <table align="center" cellpadding="0" cellspacing="0" class="page-center" '
                + ' style="text-align: left; padding-bottom: 88px; width: 100%; padding-left: 120px; padding-right: 120px;"> '
                + ' <tbody> '
                + ' <tr> '
                + ' <td style="padding-top: 24px;"> '
                + ' <img src="cid:logo" '
                + ' style="width: 56px;"> '
                + ' </td> '
                + ' </tr> '
                + ' <tr> '
                + ' <td colspan="2" '
                + ' style="padding-top: 72px; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #000000; font-family: \'Postmates Std\', \'Helvetica\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif; font-size: 48px; font-smoothing: always; font-style: normal; font-weight: 600; letter-spacing: -2.6px; line-height: 52px; mso-line-height-rule: exactly; text-decoration: none;"> '
                + ' Bem-vindo à RainTI, ' + this._registerUserData.firstName + ' ' + this._registerUserData.lastName + '</td> '
                + ' </tr> '
                + '  <tr> '
                + ' <td style="padding-top: 48px; padding-bottom: 48px;"> '
                + ' <table cellpadding="0" cellspacing="0" style="width: 100%"> '
                + ' <tbody> '
                + ' <tr> '
                + ' <td '
                + ' style="width: 100%; height: 1px; max-height: 1px; background-color: #d9dbe0; opacity: 0.81"> '
                + '  </td> '
                + ' </tr> '
                + '  </tbody> '
                + ' </table> '
                + ' </td> '
                + ' </tr> '
                + ' <tr> '
                + ' <td '
                + ' style="-ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #9095a2; font-family: \'Postmates Std\', \'Helvetica\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif; font-size: 16px; font-smoothing: always; font-style: normal; font-weight: 400; letter-spacing: -0.18px; line-height: 24px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 100%;"> '
                + ' Você está recebendo esse e-mail pois foi criada uma conta no SRC-e '
                + ' Sistema de Registro de Contrato eletrônico pela empresa RainTI. '
                + ' A seguir estão seus dados de acesso'
                + ' Usuário: ' + this._registerUserData.userName
                + ' Código de verificação: ' + this._resetCode
                + ' Com esses dados você poderá cadastrar sua senha e acessar ao sistema.'
                + ' </td> '
                + ' </tr> '
                + ' <tr> '
                + ' <td '
                + ' style="padding-top: 24px; -ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #9095a2; font-family: \'Postmates Std\', \'Helvetica\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif; font-size: 16px; font-smoothing: always; font-style: normal; font-weight: 400; letter-spacing: -0.18px; line-height: 24px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 100%;"> '
                + ' Clique no botão a seguir e cadastre uma nova senha '
                + ' </td> '
                + ' </tr> '
                + ' <tr> '
                + ' <td> '
                + ' <a data-click-track-id="37" href="http://' + emailConfig.hostSrc + ':4200/novo-acesso" '
                + ' style="margin-top: 36px; -ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #ffffff; font-family: \'Postmates Std\', \'Helvetica\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif; font-size: 12px; font-smoothing: always; font-style: normal; font-weight: 600; letter-spacing: 0.7px; line-height: 48px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 220px; background-color: #0090D5; border-radius: 5px; display: block; text-align: center; text-transform: uppercase" '
                + ' target="_blank"> '
                + ' Recuperar senha '
                + ' </a> '
                + ' </td> '
                + ' </tr> '
                + '  </tbody> '
                + '  </table> '
                + ' </td> '
                + '  </tr> '
                + ' </tbody> '
                + ' </table> '
                + ' </td> '
                + ' </tr> '
                + '         </tbody> '
                + '     </table> '
                + ' </body> '
        };
        console.log(emailData);
        this._userAddService.sendEmail(emailData)
            .subscribe(res => {
            console.log(res);
        }, error => console.log(error));
    }
};
UserAddComponent.ctorParameters = () => [
    { type: _user_services_user_add_service__WEBPACK_IMPORTED_MODULE_3__["UserAddService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UserAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registers/user/user-add/user-add.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-add.component.css */ "./src/app/registers/user/user-add/user-add.component.css")).default]
    })
], UserAddComponent);



/***/ }),

/***/ "./src/app/registers/user/user-detail/user-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/registers/user/user-detail/user-detail.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVycy91c2VyL3VzZXItZGV0YWlsL3VzZXItZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/registers/user/user-detail/user-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/registers/user/user-detail/user-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_services_user_detail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-services/user-detail.service */ "./src/app/registers/user/user-services/user-detail.service.ts");




let UserDetailComponent = class UserDetailComponent {
    constructor(_userDetailService, _route) {
        this._userDetailService = _userDetailService;
        this._route = _route;
        this.registerUserData = {
            userid: '',
            firstname: '',
            lastname: '',
            username: '',
            ddd: '',
            phone: '',
            cpf: '',
            status: true,
            email: '',
            groupsid: '',
        };
        this._errorMessage = '';
        this._groupsData = [];
        this.topicHasError = true;
        this.dddHasError = true;
        this._activeTab = 'user-data';
    }
    ngOnInit() {
        this._route.paramMap
            .subscribe(params => {
            this.registerUserData.userid = params.get('id');
        }, err => {
        });
        this._userDetailService.getUserDetail(this.registerUserData.userid)
            .subscribe(res => {
            this.registerUserData = res[0];
        }, err => {
            console.log(err);
        });
        this._userDetailService.getUserGroups(this.registerUserData.userid)
            .subscribe(res => {
            this._groupsData = res;
            this._groupsData.forEach(val => {
                if (val.id == this.registerUserData.groupsid) {
                    val.checked = true;
                }
            });
        }, error => {
            console.log(error);
            this._errorMessage = error.error;
        });
    }
    nextTab(tab) {
        this._activeTab = tab;
    }
    featuresControl(event) {
        this.registerUserData.groupsid = event.target.id;
    }
    updateUser() {
        this._userDetailService.updateUser(this.registerUserData.userid, this.registerUserData)
            .subscribe(res => {
            console.log(res);
        }, error => console.log(error));
    }
    backToUsers() {
    }
};
UserDetailComponent.ctorParameters = () => [
    { type: _user_services_user_detail_service__WEBPACK_IMPORTED_MODULE_3__["UserDetailService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
UserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registers/user/user-detail/user-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-detail.component.css */ "./src/app/registers/user/user-detail/user-detail.component.css")).default]
    })
], UserDetailComponent);



/***/ }),

/***/ "./src/app/registers/user/user-main/user-main.component.css":
/*!******************************************************************!*\
  !*** ./src/app/registers/user/user-main/user-main.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVycy91c2VyL3VzZXItbWFpbi91c2VyLW1haW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/registers/user/user-main/user-main.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/registers/user/user-main/user-main.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMainComponent", function() { return UserMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_services_user_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-services/user-main.service */ "./src/app/registers/user/user-services/user-main.service.ts");



let UserMainComponent = class UserMainComponent {
    constructor(_userService) {
        this._userService = _userService;
        this.user = [];
        this._status = 'Todos';
    }
    ngOnInit() {
        this._userService.getUser()
            .subscribe(res => {
            console.log(res);
            this.user = res;
        }, err => console.log(err));
    }
};
UserMainComponent.ctorParameters = () => [
    { type: _user_services_user_main_service__WEBPACK_IMPORTED_MODULE_2__["UserMainService"] }
];
UserMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-main',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registers/user/user-main/user-main.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-main.component.css */ "./src/app/registers/user/user-main/user-main.component.css")).default]
    })
], UserMainComponent);



/***/ }),

/***/ "./src/app/registers/user/user-services/user-add.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/registers/user/user-services/user-add.service.ts ***!
  \******************************************************************/
/*! exports provided: UserAddService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddService", function() { return UserAddService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserAddService = class UserAddService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._groupUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-groups-add";
        this._userUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-add";
        this._sendEmailUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/common/send-email";
    }
    getUserGroups() {
        return this.http.get(this._groupUrl);
    }
    createUser(userData) {
        return this.http.post(this._userUrl, userData);
    }
    sendEmail(user) {
        return this.http.post(this._sendEmailUrl, user);
    }
};
UserAddService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserAddService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserAddService);



/***/ }),

/***/ "./src/app/registers/user/user-services/user-detail.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/registers/user/user-services/user-detail.service.ts ***!
  \*********************************************************************/
/*! exports provided: UserDetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailService", function() { return UserDetailService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserDetailService = class UserDetailService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._groupUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-detail-groups/";
        this._userUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-detail/";
        this._userUpdateUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-update/";
    }
    getUserGroups(id) {
        return this.http.get(this._groupUrl + id);
    }
    getUserDetail(id) {
        return this.http.get(this._userUrl + id);
    }
    updateUser(id, userData) {
        return this.http.put(this._userUpdateUrl + id, userData);
    }
};
UserDetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserDetailService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserDetailService);



/***/ }),

/***/ "./src/app/registers/user/user-services/user-main.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/registers/user/user-services/user-main.service.ts ***!
  \*******************************************************************/
/*! exports provided: UserMainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMainService", function() { return UserMainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserMainService = class UserMainService {
    constructor(http) {
        this.http = http;
        this._appServerConfig = __webpack_require__(/*! ../../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._userUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/administration/user-main";
    }
    getUser() {
        return this.http.get(this._userUrl);
    }
};
UserMainService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserMainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserMainService);



/***/ }),

/***/ "./src/app/reports/audit-history/audit-contract-detail/audit-contract-detail.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/reports/audit-history/audit-contract-detail/audit-contract-detail.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvYXVkaXQtaGlzdG9yeS9hdWRpdC1jb250cmFjdC1kZXRhaWwvYXVkaXQtY29udHJhY3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/reports/audit-history/audit-contract-detail/audit-contract-detail.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/reports/audit-history/audit-contract-detail/audit-contract-detail.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AuditContractDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditContractDetailComponent", function() { return AuditContractDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuditContractDetailComponent = class AuditContractDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuditContractDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audit-contract-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audit-contract-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-contract-detail/audit-contract-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audit-contract-detail.component.css */ "./src/app/reports/audit-history/audit-contract-detail/audit-contract-detail.component.css")).default]
    })
], AuditContractDetailComponent);



/***/ }),

/***/ "./src/app/reports/audit-history/audit-creditor-detail/audit-creditor-detail.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/reports/audit-history/audit-creditor-detail/audit-creditor-detail.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvYXVkaXQtaGlzdG9yeS9hdWRpdC1jcmVkaXRvci1kZXRhaWwvYXVkaXQtY3JlZGl0b3ItZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/reports/audit-history/audit-creditor-detail/audit-creditor-detail.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/reports/audit-history/audit-creditor-detail/audit-creditor-detail.component.ts ***!
  \************************************************************************************************/
/*! exports provided: AuditCreditorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditCreditorDetailComponent", function() { return AuditCreditorDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuditCreditorDetailComponent = class AuditCreditorDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuditCreditorDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audit-creditor-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audit-creditor-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-creditor-detail/audit-creditor-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audit-creditor-detail.component.css */ "./src/app/reports/audit-history/audit-creditor-detail/audit-creditor-detail.component.css")).default]
    })
], AuditCreditorDetailComponent);



/***/ }),

/***/ "./src/app/reports/audit-history/audit-detran-detail/audit-detran-detail.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/reports/audit-history/audit-detran-detail/audit-detran-detail.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvYXVkaXQtaGlzdG9yeS9hdWRpdC1kZXRyYW4tZGV0YWlsL2F1ZGl0LWRldHJhbi1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/reports/audit-history/audit-detran-detail/audit-detran-detail.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/reports/audit-history/audit-detran-detail/audit-detran-detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AuditDetranDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditDetranDetailComponent", function() { return AuditDetranDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuditDetranDetailComponent = class AuditDetranDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuditDetranDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audit-detran-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audit-detran-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-detran-detail/audit-detran-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audit-detran-detail.component.css */ "./src/app/reports/audit-history/audit-detran-detail/audit-detran-detail.component.css")).default]
    })
], AuditDetranDetailComponent);



/***/ }),

/***/ "./src/app/reports/audit-history/audit-group-detail/audit-group-detail.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/reports/audit-history/audit-group-detail/audit-group-detail.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvYXVkaXQtaGlzdG9yeS9hdWRpdC1ncm91cC1kZXRhaWwvYXVkaXQtZ3JvdXAtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/reports/audit-history/audit-group-detail/audit-group-detail.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/reports/audit-history/audit-group-detail/audit-group-detail.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AuditGroupDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditGroupDetailComponent", function() { return AuditGroupDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuditGroupDetailComponent = class AuditGroupDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuditGroupDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audit-group-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audit-group-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-group-detail/audit-group-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audit-group-detail.component.css */ "./src/app/reports/audit-history/audit-group-detail/audit-group-detail.component.css")).default]
    })
], AuditGroupDetailComponent);



/***/ }),

/***/ "./src/app/reports/audit-history/audit-user-detail/audit-user-detail.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/reports/audit-history/audit-user-detail/audit-user-detail.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvYXVkaXQtaGlzdG9yeS9hdWRpdC11c2VyLWRldGFpbC9hdWRpdC11c2VyLWRldGFpbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/reports/audit-history/audit-user-detail/audit-user-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/reports/audit-history/audit-user-detail/audit-user-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: AuditUserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditUserDetailComponent", function() { return AuditUserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuditUserDetailComponent = class AuditUserDetailComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuditUserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audit-user-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audit-user-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/audit-history/audit-user-detail/audit-user-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audit-user-detail.component.css */ "./src/app/reports/audit-history/audit-user-detail/audit-user-detail.component.css")).default]
    })
], AuditUserDetailComponent);



/***/ }),

/***/ "./src/app/reports/financial-transaction/financial-transaction.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/reports/financial-transaction/financial-transaction.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvZmluYW5jaWFsLXRyYW5zYWN0aW9uL2ZpbmFuY2lhbC10cmFuc2FjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/reports/financial-transaction/financial-transaction.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/reports/financial-transaction/financial-transaction.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FinancialTransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinancialTransactionComponent", function() { return FinancialTransactionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FinancialTransactionComponent = class FinancialTransactionComponent {
    constructor() { }
    ngOnInit() {
    }
};
FinancialTransactionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-financial-transaction',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./financial-transaction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/financial-transaction/financial-transaction.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./financial-transaction.component.css */ "./src/app/reports/financial-transaction/financial-transaction.component.css")).default]
    })
], FinancialTransactionComponent);



/***/ }),

/***/ "./src/app/reports/transaction-billing/csv.service.ts":
/*!************************************************************!*\
  !*** ./src/app/reports/transaction-billing/csv.service.ts ***!
  \************************************************************/
/*! exports provided: CsvFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CsvFileService", function() { return CsvFileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var json2csv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! json2csv */ "./node_modules/json2csv/dist/json2csv.umd.js");
/* harmony import */ var json2csv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(json2csv__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);


 // convert json file to csv
 // save the file
let CsvFileService = class CsvFileService {
    constructor() {
        this.Json2csvParser = json2csv__WEBPACK_IMPORTED_MODULE_2__["Parser"];
    }
    CsvFile(data, filename) {
        let csvData = this.convertToCSV(data);
        let file = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"])(file, "data.csv");
    }
    convertToCSV(objArray, fields) {
        let json2csvParser = new this.Json2csvParser({ opts: fields });
        let csv = json2csvParser.parse(objArray);
        console.log(csv);
        return csv;
    }
};
CsvFileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], CsvFileService);



/***/ }),

/***/ "./src/app/reports/transaction-billing/excel.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/reports/transaction-billing/excel.service.ts ***!
  \**************************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




//Export para XLS
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let ExcelService = class ExcelService {
    constructor() {
    }
    exportAsExcelFile(json, excelFileName) {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        const workbook = { Sheets: { 'Bilhetagem_Transações_RainTI': worksheet }, SheetNames: ['Bilhetagem_Transações_RainTI'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
};
ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ExcelService);



/***/ }),

/***/ "./src/app/reports/transaction-billing/fixed-data-transaction-billing.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/reports/transaction-billing/fixed-data-transaction-billing.ts ***!
  \*******************************************************************************/
/*! exports provided: dataTransactionBilling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataTransactionBilling", function() { return dataTransactionBilling; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const dataTransactionBilling = [
    { Contrato: '784568', Gestora: 'ITAU', Credora: 'ITAU A', Chassi: '5MNGWKTUN1ZAF267', Detran: 'Acre', Taxa: 130, Data: '2020-02-28', Status: 'Novo contrato' },
    { Contrato: '784636', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '8ZNT2JEY0LF346944', Detran: 'Alagoas', Taxa: 159, Data: '2020-03-11', Status: 'Aditivo' },
    { Contrato: '784636', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '8ZNT2JEY0LF346944', Detran: 'Alagoas', Taxa: 159, Data: '2020-03-01', Status: 'Novo contrato' },
    { Contrato: '784570', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '2DJ8BFPB0FF8R9977', Detran: 'Amapá', Taxa: 179, Data: '2020-03-02', Status: 'Novo contrato' },
    { Contrato: '784625', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '56UH7A0G0A81C7532', Detran: 'Amapá', Taxa: 179, Data: '2020-03-03', Status: 'Novo contrato' },
    { Contrato: '784637', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '9DJ8BFPB0FF8R9980', Detran: 'Amapá', Taxa: 179, Data: '2020-03-04', Status: 'Novo contrato' },
    { Contrato: '784637', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '9DJ8BFPB0FF8R9980', Detran: 'Amapá', Taxa: 179, Data: '2020-03-14', Status: 'Aditivo' },
    { Contrato: '784626', Gestora: 'Santander', Credora: 'Santander B', Chassi: '6WAJDN0Z7LPMB7767', Detran: 'Amazonas', Taxa: 199, Data: '2020-03-06', Status: 'Novo contrato' },
    { Contrato: '784638', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '1ZNT2JEY0LF346943', Detran: 'Amazonas', Taxa: 199, Data: '2020-03-07', Status: 'Novo contrato' },
    { Contrato: '784638', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '1ZNT2JEY0LF346943', Detran: 'Amazonas', Taxa: 199, Data: '2020-03-10', Status: 'Aditivo' },
    { Contrato: '784627', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '9DJ8BFPB0FF8R9987', Detran: 'Bahia', Taxa: 230, Data: '2020-03-09', Status: 'Novo contrato' },
    { Contrato: '784639', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '9DJ8BFPB0FF8R9981', Detran: 'Bahia', Taxa: 230, Data: '2020-02-28', Status: 'Novo contrato' },
    { Contrato: '784655', Gestora: 'Santander', Credora: 'Santander B', Chassi: '56UH7A0G0A81C7531', Detran: 'Bahia', Taxa: 230, Data: '2020-02-29', Status: 'Novo contrato' },
    { Contrato: '784573', Gestora: 'Santander', Credora: 'Santander A', Chassi: '5MNGWKTUN1ZAF2683', Detran: 'Ceará', Taxa: 200, Data: '2020-03-01', Status: 'Novo contrato' },
    { Contrato: '784628', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '434KUZ9MBD3GY1330', Detran: 'Ceará', Taxa: 200, Data: '2020-03-02', Status: 'Novo contrato' },
    { Contrato: '784640', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '5MNGWKTUN1ZAF2682', Detran: 'Ceará', Taxa: 200, Data: '2020-03-03', Status: 'Novo contrato' },
    { Contrato: '784574', Gestora: 'ITAU', Credora: 'ITAU B', Chassi: '6WAJDN0Z7LPMB7765', Detran: 'DistritoFederal', Taxa: 239, Data: '2020-03-15', Status: 'Aditivo' },
    { Contrato: '784574', Gestora: 'ITAU', Credora: 'ITAU B', Chassi: '6WAJDN0Z7LPMB7765', Detran: 'DistritoFeAderal', Taxa: 239, Data: '2020-03-05', Status: 'Novo contrato' },
    { Contrato: '784595', Gestora: 'ITAU', Credora: 'ITAUD', Chassi: '335KUZ9MBD3GY1330', Detran: 'DistritoFederal', Taxa: 239, Data: '2020-03-06', Status: 'Novo contrato' },
    { Contrato: '784612', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '436KUZ9MBD3GY1330', Detran: 'DistritoFederal', Taxa: 239, Data: '2020-03-07', Status: 'Novo contrato' },
    { Contrato: '784629', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '2DJ8BFPB0FF8R9984', Detran: 'DistritoFederal', Taxa: 239, Data: '2020-03-08', Status: 'Novo contrato' },
    { Contrato: '784641', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '6WAJDN0Z7LPMB7762', Detran: 'DistritoFederal', Taxa: 239, Data: '2020-03-09', Status: 'Novo contrato' },
    { Contrato: '784664', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '1NEXLN3CW6WPL4151', Detran: 'DistritoFederal', Taxa: 239, Data: '2020-03-09', Status: 'Aditivo' },
    { Contrato: '784664', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '1NEXLN3CW6WPL4151', Detran: 'DistritoFederal', Taxa: 239, Data: '2020-02-29', Status: 'Novo contrato' },
    { Contrato: '784575', Gestora: 'ITAU', Credora: 'ITAU B', Chassi: '7Z66RUL7XADVN1630', Detran: 'EspíritoSanto ', Taxa: 233, Data: '2020-03-01', Status: 'Novo contrato' },
    { Contrato: '784596', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '1ZNT2JEY0LF346946', Detran: 'EspíritoSanto ', Taxa: 233, Data: '2020-03-02', Status: 'Novo contrato' },
    { Contrato: '784613', Gestora: 'ITAU', Credora: 'ITAU F', Chassi: '1ZNT2JEY0LF346948', Detran: 'EspíritoSanto ', Taxa: 233, Data: '2020-03-03', Status: 'Novo contrato' },
    { Contrato: '784630', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '56UH7A0G0A81C7533', Detran: 'EspíritoSanto ', Taxa: 233, Data: '2020-03-04', Status: 'Novo contrato' },
    { Contrato: '784642', Gestora: 'Santander', Credora: 'Santander B', Chassi: '335KUZ9MBD3GY1330', Detran: 'EspíritoSanto ', Taxa: 233, Data: '2020-03-05', Status: 'Novo contrato' },
    { Contrato: '784658', Gestora: 'ITAU', Credora: 'ITAU K', Chassi: '8ZNT2JEY0LF346940', Detran: 'EspíritoSanto ', Taxa: 233, Data: '2020-03-06', Status: 'Novo contrato' },
    { Contrato: '784665', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '433KUZ9MBD3GY1330', Detran: 'EspíritoSanto ', Taxa: 233, Data: '2020-03-07', Status: 'Novo contrato' },
    { Contrato: '784576', Gestora: 'ITAU', Credora: 'ITAU B', Chassi: '8ZNT2JEY0LF346943', Detran: 'Goiás', Taxa: 122, Data: '2020-03-08', Status: 'Novo contrato' },
    { Contrato: '784597', Gestora: 'Santander', Credora: 'Santander B', Chassi: '9DJ8BFPB0FF8R9984', Detran: 'Goiás', Taxa: 122, Data: '2020-03-09', Status: 'Novo contrato' },
    { Contrato: '784614', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '5MNGWKTUN1ZAF2684', Detran: 'Goiás', Taxa: 122, Data: '2020-03-10', Status: 'Novo contrato' },
    { Contrato: '784631', Gestora: 'ITAU', Credora: 'ITAU G', Chassi: '6WAJDN0Z7LPMB7768', Detran: 'Goiás', Taxa: 122, Data: '2020-03-11', Status: 'Novo contrato' },
    { Contrato: '784631', Gestora: 'ITAU', Credora: 'ITAU G', Chassi: '6WAJDN0Z7LPMB7768', Detran: 'Goiás', Taxa: 122, Data: '2020-03-21', Status: 'Aditivo' },
    { Contrato: '784659', Gestora: 'ITAU', Credora: 'ITAU K', Chassi: '4AKS0VNBTHDA11904', Detran: 'Goiás', Taxa: 122, Data: '2020-03-13', Status: 'Novo contrato' },
    { Contrato: '784666', Gestora: 'Santander', Credora: 'Santander B', Chassi: '2DJ8BFPB0FF8R9983', Detran: 'Goiás', Taxa: 122, Data: '2020-03-14', Status: 'Novo contrato' },
    { Contrato: '784577', Gestora: 'ITAU', Credora: 'ITAU B', Chassi: '4AKS0VNBTHDA11907', Detran: 'Maranhão', Taxa: 144, Data: '2020-03-15', Status: 'Novo contrato' },
    { Contrato: '784598', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica B', Chassi: '336KUZ9MBD3GY1330', Detran: 'Maranhão', Taxa: 144, Data: '2020-03-16', Status: 'Novo contrato' },
    { Contrato: '784615', Gestora: 'Santander', Credora: 'Santander B', Chassi: '6WAJDN0Z7LPMB7764', Detran: 'Maranhão', Taxa: 144, Data: '2020-03-17', Status: 'Novo contrato' },
    { Contrato: '784632', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '1ZNT2JEY0LF346942', Detran: 'Maranhão', Taxa: 144, Data: '2020-03-18', Status: 'Novo contrato' },
    { Contrato: '784644', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '435KUZ9MBD3GY1330', Detran: 'Maranhão', Taxa: 144, Data: '2020-03-19', Status: 'Novo contrato' },
    { Contrato: '784660', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '1NEXLN3CW6WPL4150', Detran: 'Maranhão', Taxa: 144, Data: '2020-03-20', Status: 'Novo contrato' },
    { Contrato: '784599', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '8ZNT2JEY0LF346945', Detran: 'MatoGrosso', Taxa: 188, Data: '2020-03-22', Status: 'Aditivo' },
    { Contrato: '784578', Gestora: 'ITAU', Credora: 'ITAU B', Chassi: '7Z66RUL7XADVN1633', Detran: 'MatoGrosso', Taxa: 188, Data: '2020-03-11', Status: 'Novo contrato' },
    { Contrato: '784599', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '8ZNT2JEY0LF346945', Detran: 'MatoGrosso', Taxa: 188, Data: '2020-03-12', Status: 'Novo contrato' },
    { Contrato: '784616', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '337KUZ9MBD3GY1330', Detran: 'MatoGrosso', Taxa: 188, Data: '2020-03-13', Status: 'Novo contrato' },
    { Contrato: '784633', Gestora: 'ITAU', Credora: 'ITAU G', Chassi: '9DJ8BFPB0FF8R9980', Detran: 'MatoGrosso', Taxa: 188, Data: '2020-03-14', Status: 'Novo contrato' },
    { Contrato: '784645', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '1ZNT2JEY0LF346947', Detran: 'MatoGrosso', Taxa: 188, Data: '2020-03-15', Status: 'Novo contrato' },
    { Contrato: '784661', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '6601U3634EWXA9635', Detran: 'MatoGrosso', Taxa: 188, Data: '2020-03-16', Status: 'Novo contrato' },
    { Contrato: '784579', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '8ZNT2JEY0LF346946', Detran: 'MatoGrossodoSul', Taxa: 188, Data: '2020-03-17', Status: 'Novo contrato' },
    { Contrato: '784579', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '8ZNT2JEY0LF346946', Detran: 'MatoGrossodoSul', Taxa: 188, Data: '2020-03-27', Status: 'Aditivo' },
    { Contrato: '784617', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '1ZNT2JEY0LF346948', Detran: 'MatoGrossodoSul', Taxa: 188, Data: '2020-03-19', Status: 'Novo contrato' },
    { Contrato: '784592', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '7Z66RUL7XADVN1629', Detran: 'SãoPaulo', Taxa: 239, Data: '2020-06-01', Status: 'Aditivo' },
    { Contrato: '784580', Gestora: 'Santander', Credora: 'Santander B', Chassi: '6661U3634EWXA9635', Detran: 'MinasGerais', Taxa: 188, Data: '2020-03-10', Status: 'Novo contrato' },
    { Contrato: '784601', Gestora: 'Bradesco', Credora: 'Bradesco A', Chassi: '1ZNT2JEY0LF346944', Detran: 'MinasGerais', Taxa: 188, Data: '2020-03-11', Status: 'Novo contrato' },
    { Contrato: '784618', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '7Z66RUL7XADVN1629', Detran: 'MinasGerais', Taxa: 188, Data: '2020-03-12', Status: 'Novo contrato' },
    { Contrato: '784635', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '335KUZ9MBD3GY1330', Detran: 'MinasGerais', Taxa: 188, Data: '2020-03-13', Status: 'Novo contrato' },
    { Contrato: '784602', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '9DJ8BFPB0FF8R9982', Detran: 'Pará ', Taxa: 237, Data: '2020-03-25', Status: 'Aditivo' },
    { Contrato: '784602', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '9DJ8BFPB0FF8R9982', Detran: 'Pará ', Taxa: 237, Data: '2020-03-15', Status: 'Novo contrato' },
    { Contrato: '784619', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '9DJ8BFPB0FF8R9985', Detran: 'Pará ', Taxa: 237, Data: '2020-03-16', Status: 'Novo contrato' },
    { Contrato: '784582', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '4AKS0VNBTHDA11910', Detran: 'Paraíba', Taxa: 211, Data: '2020-03-17', Status: 'Novo contrato' },
    { Contrato: '784603', Gestora: 'Bradesco', Credora: 'Bradesco A', Chassi: '1ZNT2JEY0LF346945', Detran: 'Paraíba', Taxa: 211, Data: '2020-03-18', Status: 'Novo contrato' },
    { Contrato: '784620', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '1ZNT2JEY0LF346949', Detran: 'Paraíba', Taxa: 211, Data: '2020-03-19', Status: 'Novo contrato' },
    { Contrato: '784646', Gestora: 'Santander', Credora: 'Santander B', Chassi: '5MNGWKTUN1ZAF2683', Detran: 'Paraíba', Taxa: 211, Data: '2020-03-20', Status: 'Novo contrato' },
    { Contrato: '784583', Gestora: 'Bradesco', Credora: 'Bradesco A', Chassi: '56UH7A0G0A81C7532', Detran: 'Paraná ', Taxa: 211, Data: '2020-04-03', Status: 'Novo contrato' },
    { Contrato: '784604', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '9DJ8BFPB0FF8R9983', Detran: 'Paraná ', Taxa: 211, Data: '2020-04-04', Status: 'Novo contrato' },
    { Contrato: '784621', Gestora: 'ITAU', Credora: 'ITAU F', Chassi: '5MNGWKTUN1ZAF2686', Detran: 'Paraná ', Taxa: 211, Data: '2020-04-05', Status: 'Novo contrato' },
    { Contrato: '784647', Gestora: 'Santander', Credora: 'Santander B', Chassi: '336KUZ9MBD3GY1330', Detran: 'Paraná ', Taxa: 211, Data: '2020-04-06', Status: 'Novo contrato' },
    { Contrato: '784584', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '56UH7A0G0A81C7533', Detran: 'Pernambuco', Taxa: 211, Data: '2020-04-07', Status: 'Novo contrato' },
    { Contrato: '784605', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '7Z66RUL7XADVN1630', Detran: 'Pernambuco', Taxa: 211, Data: '2020-04-08', Status: 'Novo contrato' },
    { Contrato: '784622', Gestora: 'ITAU', Credora: 'ITAU G', Chassi: '9DJ8BFPB0FF8R9986', Detran: 'Pernambuco', Taxa: 211, Data: '2020-04-09', Status: 'Novo contrato' },
    { Contrato: '784648', Gestora: 'Santander', Credora: 'Santander B', Chassi: '6WAJDN0Z7LPMB7763', Detran: 'Pernambuco', Taxa: 211, Data: '2020-04-10', Status: 'Novo contrato' },
    { Contrato: '784623', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '433KUZ9MBD3GY1330', Detran: 'Piauí', Taxa: 211, Data: '2020-04-23', Status: 'Aditivo' },
    { Contrato: '784606', Gestora: 'Santander', Credora: 'Santander B', Chassi: '8ZNT2JEY0LF346946', Detran: 'Piauí', Taxa: 211, Data: '2020-04-12', Status: 'Novo contrato' },
    { Contrato: '784623', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '433KUZ9MBD3GY1330', Detran: 'Piauí', Taxa: 211, Data: '2020-04-13', Status: 'Novo contrato' },
    { Contrato: '784649', Gestora: 'Santander', Credora: 'Santander B', Chassi: '337KUZ9MBD3GY1330', Detran: 'Piauí', Taxa: 211, Data: '2020-04-03', Status: 'Novo contrato' },
    { Contrato: '784586', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '434KUZ9MBD3GY1330', Detran: 'RiodeJaneiro', Taxa: 212, Data: '2020-04-04', Status: 'Novo contrato' },
    { Contrato: '784607', Gestora: 'Bradesco', Credora: 'Bradesco A', Chassi: '435KUZ9MBD3GY1330', Detran: 'RiodeJaneiro', Taxa: 212, Data: '2020-04-05', Status: 'Novo contrato' },
    { Contrato: '784624', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '2DJ8BFPB0FF8R9983', Detran: 'RiodeJaneiro', Taxa: 212, Data: '2020-04-06', Status: 'Novo contrato' },
    { Contrato: '784650', Gestora: 'ITAU', Credora: 'ITAU G', Chassi: '56UH7A0G0A81C7530', Detran: 'RiodeJaneiro', Taxa: 212, Data: '2020-04-07', Status: 'Novo contrato' },
    { Contrato: '784608', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '1ZNT2JEY0LF346947', Detran: 'RioGrandedoNorte', Taxa: 212, Data: '2020-04-19', Status: 'Aditivo' },
    { Contrato: '784608', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '1ZNT2JEY0LF346947', Detran: 'RioGrandedoNorte', Taxa: 212, Data: '2020-04-09', Status: 'Novo contrato' },
    { Contrato: '784651', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '6WAJDN0Z7LPMB7765', Detran: 'RioGrandedoNorte', Taxa: 212, Data: '2020-04-10', Status: 'Novo contrato' },
    { Contrato: '784588', Gestora: 'Bradesco', Credora: 'Bradesco A', Chassi: '6WAJDN0Z7LPMB7762', Detran: 'RioGrandedoSul', Taxa: 222, Data: '2020-04-11', Status: 'Novo contrato' },
    { Contrato: '784609', Gestora: 'Bradesco', Credora: 'Bradesco A', Chassi: '9DJ8BFPB0FF8R9984', Detran: 'RioGrandedoSul', Taxa: 222, Data: '2020-04-12', Status: 'Novo contrato' },
    { Contrato: '784652', Gestora: 'ITAU', Credora: 'ITAU G', Chassi: '9DJ8BFPB0FF8R9985', Detran: 'RioGrandedoSul', Taxa: 222, Data: '2020-04-13', Status: 'Novo contrato' },
    { Contrato: '784589', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '7Z66RUL7XADVN1628', Detran: 'Rondônia', Taxa: 167, Data: '2020-05-17', Status: 'Novo contrato' },
    { Contrato: '784610', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '7Z66RUL7XADVN1631', Detran: 'Rondônia', Taxa: 167, Data: '2020-05-18', Status: 'Novo contrato' },
    { Contrato: '784653', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '432KUZ9MBD3GY1330', Detran: 'Rondônia', Taxa: 167, Data: '2020-05-19', Status: 'Novo contrato' },
    { Contrato: '784662', Gestora: 'Bradesco', Credora: 'Bradesco B', Chassi: '8ZNT2JEY0LF346941', Detran: 'Rondônia', Taxa: 167, Data: '2020-05-20', Status: 'Novo contrato' },
    { Contrato: '784590', Gestora: 'Bradesco', Credora: 'Bradesco A', Chassi: '8ZNT2JEY0LF346944', Detran: 'Roraima ', Taxa: 186, Data: '2020-05-21', Status: 'Novo contrato' },
    { Contrato: '784590', Gestora: 'Bradesco', Credora: 'Bradesco A', Chassi: '8ZNT2JEY0LF346944', Detran: 'Roraima ', Taxa: 186, Data: '2020-05-23', Status: 'Aditivo' },
    { Contrato: '784654', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '2DJ8BFPB0FF8R9982', Detran: 'Roraima ', Taxa: 186, Data: '2020-05-23', Status: 'Novo contrato' },
    { Contrato: '784663', Gestora: 'ITAU', Credora: 'ITAU G', Chassi: '4AKS0VNBTHDA11905', Detran: 'Roraima ', Taxa: 186, Data: '2020-05-24', Status: 'Novo contrato' },
    { Contrato: '784591', Gestora: 'Caixa Econômica', Credora: 'Caixa Econômica A', Chassi: '56UH7A0G0A81C7530', Detran: 'SantaCatarina', Taxa: 146, Data: '2020-05-25', Status: 'Novo contrato' },
    { Contrato: '784592', Gestora: 'ITAU', Credora: 'ITAU C', Chassi: '7Z66RUL7XADVN1629', Detran: 'SãoPaulo', Taxa: 239, Data: '2020-05-24', Status: 'Novo contrato' },
    { Contrato: '784593', Gestora: 'Santander', Credora: 'Santander B', Chassi: '6WAJDN0Z7LPMB7763', Detran: 'Sergipe', Taxa: 234, Data: '2020-05-27', Status: 'Novo contrato' },
    { Contrato: '784594', Gestora: 'Santander', Credora: 'Santander B', Chassi: '2DJ8BFPB0FF8R9983', Detran: 'Tocantins', Taxa: 216, Data: '2020-05-28', Status: 'Novo contrato' }
];


/***/ }),

/***/ "./src/app/reports/transaction-billing/transaction-billing.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/reports/transaction-billing/transaction-billing.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydHMvdHJhbnNhY3Rpb24tYmlsbGluZy90cmFuc2FjdGlvbi1iaWxsaW5nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/reports/transaction-billing/transaction-billing.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/reports/transaction-billing/transaction-billing.component.ts ***!
  \******************************************************************************/
/*! exports provided: TransactionBillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionBillingComponent", function() { return TransactionBillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fixed_data_transaction_billing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixed-data-transaction-billing */ "./src/app/reports/transaction-billing/fixed-data-transaction-billing.ts");
/* harmony import */ var _excel_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./excel.service */ "./src/app/reports/transaction-billing/excel.service.ts");
/* harmony import */ var _csv_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./csv.service */ "./src/app/reports/transaction-billing/csv.service.ts");





let TransactionBillingComponent = class TransactionBillingComponent {
    constructor(excelService, csvFileService) {
        this.excelService = excelService;
        this.csvFileService = csvFileService;
        //array da tabela
        this.dataTransactionBilling = _fixed_data_transaction_billing__WEBPACK_IMPORTED_MODULE_2__["dataTransactionBilling"];
        this.filterTransactionBilling = [];
        this.filterdetran = [];
        //botões mostrar filtro
        this.filter = ['semFiltros'];
        // detranList: any[] = ['','Acre', 'Pernambuco', 'Bahia'];
        // gestoraList: string[] = ['ITAU', 'Santander', 'CaixaEconômica'];
        //paginação
        this.page = 1;
        this.pageSize = 5;
        this.groupData = this.organise(this.filterTransactionBilling);
    }
    ngOnInit() { }
    ;
    exportAsXLSX() {
        this.excelService.exportAsExcelFile(this.filterTransactionBilling, 'Bilhetagem_Transações_RainTI');
    }
    organise(arr) {
        var headers = [], objs = [], i, j;
        for (i = 0; i < arr.length; ++i) {
            j = headers.indexOf(arr[i].id);
            if (j === -1) {
                j = headers.length;
                headers[j] = arr[i].id;
                objs[j] = {};
                objs[j].id = arr[i].id;
                objs[j].data = [];
            }
            objs[j].data.push({
                case_worked: arr[i].case_worked,
                note: arr[i].note, id: arr[i].id
            });
        }
        return objs;
    }
    CsvFile() {
        return this.csvFileService.CsvFile(this.filterTransactionBilling);
    }
    markAsActive(filter) {
        this.filter = filter;
        this.detran = '';
        this.creditor = '';
        delete this.startDate;
        delete this.endDate;
    }
    getTotalCost() {
        return this.filterTransactionBilling.reduce((acc, val) => acc += val.Taxa, 0);
    }
    getArray() {
        if (this.filterTransactionBilling.length == 0 && this.detran === undefined && this.creditor === undefined) {
            this.filterTransactionBilling = _fixed_data_transaction_billing__WEBPACK_IMPORTED_MODULE_2__["dataTransactionBilling"];
            return this.filterTransactionBilling;
        }
        if (this.detran !== undefined && this.creditor === undefined && this.startDate === undefined && this.endDate === undefined) {
            this.filterTransactionBilling = _fixed_data_transaction_billing__WEBPACK_IMPORTED_MODULE_2__["dataTransactionBilling"].filter(v => v.Detran.toLocaleLowerCase().includes(this.detran.toLocaleLowerCase()));
        }
        if (this.detran !== undefined && this.creditor !== undefined && this.startDate === undefined && this.endDate === undefined) {
            this.filterdetran = _fixed_data_transaction_billing__WEBPACK_IMPORTED_MODULE_2__["dataTransactionBilling"].filter(v => v.Detran.toLocaleLowerCase().includes(this.detran.toLocaleLowerCase()));
            this.filterTransactionBilling = this.filterdetran;
        }
        if (this.detran !== undefined && this.creditor === undefined && this.startDate !== undefined && this.endDate !== undefined) {
            this.filterdetran = _fixed_data_transaction_billing__WEBPACK_IMPORTED_MODULE_2__["dataTransactionBilling"].filter(v => v.Detran.toLocaleLowerCase().includes(this.detran.toLocaleLowerCase()));
            this.filterTransactionBilling = this.filterdetran;
        }
        if (this.creditor !== undefined && this.detran === undefined && this.startDate === undefined && this.endDate === undefined) {
            this.filterTransactionBilling = _fixed_data_transaction_billing__WEBPACK_IMPORTED_MODULE_2__["dataTransactionBilling"].filter(d => d.Credora.toLocaleLowerCase().includes(this.creditor.toLocaleLowerCase()));
        }
        if (this.creditor !== undefined && this.detran === undefined && this.startDate !== undefined && this.endDate !== undefined) {
            this.filterTransactionBilling = this.filterdetran.filter(d => d.Credora.toLocaleLowerCase().includes(this.creditor.toLocaleLowerCase()));
        }
        if (this.creditor !== undefined && this.detran !== undefined && this.startDate === undefined && this.endDate === undefined) {
            this.filterTransactionBilling = this.filterdetran.filter(d => d.Credora.toLocaleLowerCase().includes(this.creditor.toLocaleLowerCase()));
        }
        if (this.startDate !== undefined && this.endDate !== undefined && this.detran === undefined && this.creditor === undefined) {
            this.dataTransactionBilling.Data = new Date().getTime();
            this.filterTransactionBilling = _fixed_data_transaction_billing__WEBPACK_IMPORTED_MODULE_2__["dataTransactionBilling"].filter((y) => y.Data >= this.startDate && y.Data <= this.endDate);
        }
        if (this.startDate !== undefined && this.endDate !== undefined && this.detran !== undefined && this.creditor === undefined) {
            this.dataTransactionBilling.Data = new Date().getTime();
            this.filterTransactionBilling = _fixed_data_transaction_billing__WEBPACK_IMPORTED_MODULE_2__["dataTransactionBilling"].filter((y) => y.Data >= this.startDate && y.Data <= this.endDate);
        }
        if (this.startDate !== undefined && this.endDate !== undefined && this.detran === undefined && this.creditor !== undefined) {
            this.dataTransactionBilling.Data = new Date().getTime();
            this.filterTransactionBilling = _fixed_data_transaction_billing__WEBPACK_IMPORTED_MODULE_2__["dataTransactionBilling"].filter((y) => y.Data >= this.startDate && y.Data <= this.endDate);
        }
        if (this.startDate !== undefined && this.endDate !== undefined && this.detran !== undefined && this.creditor !== undefined) {
            this.dataTransactionBilling.Data = new Date().getTime();
            this.filterTransactionBilling = _fixed_data_transaction_billing__WEBPACK_IMPORTED_MODULE_2__["dataTransactionBilling"].filter((y) => y.Data >= this.startDate && y.Data <= this.endDate);
            this.filterTransactionBilling = this.filterTransactionBilling.filter(d => d.Credora.toLocaleLowerCase().includes(this.creditor.toLocaleLowerCase()));
            this.filterTransactionBilling = this.filterTransactionBilling.filter(v => v.Detran.toLocaleLowerCase().includes(this.detran.toLocaleLowerCase()));
        }
        return this.filterTransactionBilling;
    }
};
TransactionBillingComponent.ctorParameters = () => [
    { type: _excel_service__WEBPACK_IMPORTED_MODULE_3__["ExcelService"] },
    { type: _csv_service__WEBPACK_IMPORTED_MODULE_4__["CsvFileService"] }
];
TransactionBillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction-billing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transaction-billing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reports/transaction-billing/transaction-billing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transaction-billing.component.css */ "./src/app/reports/transaction-billing/transaction-billing.component.css")).default]
    })
], TransactionBillingComponent);



/***/ }),

/***/ "./src/app/system-access/login/login.component.css":
/*!*********************************************************!*\
  !*** ./src/app/system-access/login/login.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS1hY2Nlc3MvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/system-access/login/login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/system-access/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../system-access-services/auth.service */ "./src/app/system-access/system-access-services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_user_idle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-user-idle */ "./node_modules/angular-user-idle/fesm2015/angular-user-idle.js");





let LoginComponent = class LoginComponent {
    constructor(_auth, _router, userIdle) {
        this._auth = _auth;
        this._router = _router;
        this.userIdle = userIdle;
        this.loginUserData = {
            userName: '',
            password: '',
        };
        this._errorMessage = '';
    }
    ngOnInit() {
        this.stop();
    }
    loginUser() {
        this.stop();
        // Setting configs of watching tims is setted in seconds
        this.userIdle.setConfigValues({ idle: 600 /* 1 hour*/, timeout: 1, ping: 120 });
        this.userIdle.startWatching();
        // Start watching when user idle is starting.
        this.userIdle.onTimerStart().subscribe(count => console.log(count));
        // Start watch when time is up.
        this.userIdle.onTimeout().subscribe(() => {
            sessionStorage.removeItem('token');
            this.stopWatching();
            this.stop();
            this.restart();
            this._router.navigate(['/login']);
        });
        this._auth.loginUser(this.loginUserData)
            .subscribe(res => {
            // console.log(res)
            sessionStorage.setItem('token', res.token);
            this._router.navigate(['/registrar-contrato']);
        }, error => {
            this._errorMessage = error.error;
            console.log(error);
        });
    }
    stop() {
        this.userIdle.stopTimer();
    }
    stopWatching() {
        this.userIdle.stopWatching();
    }
    startWatching() {
        this.userIdle.startWatching();
    }
    restart() {
        this.userIdle.resetTimer();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: angular_user_idle__WEBPACK_IMPORTED_MODULE_4__["UserIdleService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/system-access/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/system-access/password-recover-failed/password-recover-failed.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/system-access/password-recover-failed/password-recover-failed.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS1hY2Nlc3MvcGFzc3dvcmQtcmVjb3Zlci1mYWlsZWQvcGFzc3dvcmQtcmVjb3Zlci1mYWlsZWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/system-access/password-recover-failed/password-recover-failed.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/system-access/password-recover-failed/password-recover-failed.component.ts ***!
  \********************************************************************************************/
/*! exports provided: PasswordRecoverFailedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRecoverFailedComponent", function() { return PasswordRecoverFailedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PasswordRecoverFailedComponent = class PasswordRecoverFailedComponent {
    constructor() { }
    ngOnInit() {
    }
};
PasswordRecoverFailedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-recover-failed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-recover-failed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/password-recover-failed/password-recover-failed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-recover-failed.component.css */ "./src/app/system-access/password-recover-failed/password-recover-failed.component.css")).default]
    })
], PasswordRecoverFailedComponent);



/***/ }),

/***/ "./src/app/system-access/password-recover-success/password-recover-success.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/system-access/password-recover-success/password-recover-success.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS1hY2Nlc3MvcGFzc3dvcmQtcmVjb3Zlci1zdWNjZXNzL3Bhc3N3b3JkLXJlY292ZXItc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/system-access/password-recover-success/password-recover-success.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/system-access/password-recover-success/password-recover-success.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PasswordRecoverSuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRecoverSuccessComponent", function() { return PasswordRecoverSuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PasswordRecoverSuccessComponent = class PasswordRecoverSuccessComponent {
    constructor() { }
    ngOnInit() {
    }
};
PasswordRecoverSuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-recover-success',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-recover-success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/password-recover-success/password-recover-success.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-recover-success.component.css */ "./src/app/system-access/password-recover-success/password-recover-success.component.css")).default]
    })
], PasswordRecoverSuccessComponent);



/***/ }),

/***/ "./src/app/system-access/password-recover/password-recover.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/system-access/password-recover/password-recover.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS1hY2Nlc3MvcGFzc3dvcmQtcmVjb3Zlci9wYXNzd29yZC1yZWNvdmVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/system-access/password-recover/password-recover.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/system-access/password-recover/password-recover.component.ts ***!
  \******************************************************************************/
/*! exports provided: PasswordRecoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordRecoverComponent", function() { return PasswordRecoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../system-access-services/auth.service */ "./src/app/system-access/system-access-services/auth.service.ts");




let PasswordRecoverComponent = class PasswordRecoverComponent {
    constructor(_auth, _router) {
        this._auth = _auth;
        this._router = _router;
        this.recoverPasswordData = {
            cpf: ''
        };
        this.resetCode = {};
    }
    ngOnInit() {
    }
    recoverPassword() {
        this._auth.recoverPassword(this.recoverPasswordData)
            .subscribe(res => {
            this.resetCode = res.code;
            this.sendEmail(res.emailTo[0].email);
            console.log(res);
            this._router.navigate(['/recuperar-senha-reset/' + res.emailTo[0].id]);
        }, error => {
            console.log(error),
                this._router.navigate(['/recuperar-senha-falha']);
        });
    }
    sendEmail(emailTo) {
        var emailConfig = __webpack_require__(/*! ../../../assets/configs/config-email-noreply.json */ "./src/assets/configs/config-email-noreply.json");
        let emailData = {
            host: emailConfig.host,
            port: emailConfig.port,
            secure: emailConfig.secure,
            requireTLS: emailConfig.requireTLS,
            userName: emailConfig.userName,
            emailFrom: emailConfig.emailFrom,
            password: emailConfig.password,
            emailTo: emailTo,
            subjectContent: "[NÃO RESPONDA] - RainTI recuperar senha",
            plainText: "Para recuperar sua senha acesse: http://localhost:4200/recuperar-senha-reset, informe seu usário e o código a seguir: " + this.resetCode,
            html: ' <head> '
                + ' <title>Rating Reminder</title> '
                + ' <meta content="text/html; charset=utf-8" http-equiv="Content-Type"> '
                + ' <meta content="width=device-width" name="viewport"> '
                + ' <style type="text/css"> '
                + ' @font-face { '
                + ' font-family: &#x27; '
                + ' Postmates Std&#x27; '
                + ' ; '
                + ' font-weight: 600; '
                + ' font-style: normal; '
                + ' src: local(&#x27; Postmates Std Bold&#x27; ), url(https://s3-us-west-1.amazonaws.com/buyer-static.postmates.com/assets/email/postmates-std-bold.woff) format(&#x27; woff&#x27; ); '
                + ' } '
                + ' @font-face { '
                + ' font-family: &#x27; '
                + ' Postmates Std&#x27; '
                + ' ; '
                + ' font-weight: 500; '
                + ' font-style: normal; '
                + ' src: local(&#x27; Postmates Std Medium&#x27; ), url(https://s3-us-west-1.amazonaws.com/buyer-static.postmates.com/assets/email/postmates-std-medium.woff) format(&#x27; woff&#x27; ); '
                + ' } '
                + ' @font-face { '
                + ' font-family: &#x27; '
                + ' Postmates Std&#x27; '
                + '  ; '
                + ' font-weight: 400; '
                + ' font-style: normal; '
                + ' src: local(&#x27; Postmates Std Regular&#x27; ), url(https://s3-us-west-1.amazonaws.com/buyer-static.postmates.com/assets/email/postmates-std-regular.woff) format(&#x27; woff&#x27; ); '
                + ' } '
                + ' </style> '
                + ' <style media="screen and (max-width: 680px)"> '
                + ' @media screen and (max-width: 680px) { '
                + ' .page-center { '
                + ' padding-left: 0 !important; '
                + ' padding-right: 0 !important; '
                + '  } '
                + ' .footer-center { '
                + ' padding-left: 20px !important; '
                + ' padding-right: 20px !important; '
                + '  } '
                + ' } '
                + ' </style> '
                + ' </head> '
                + ' <body style="background-color: #f4f4f5;"> '
                + ' <table cellpadding="0" cellspacing="0" '
                + ' style="width: 100%; height: 100%; background-color: #f4f4f5; text-align: center;"> '
                + ' <tbody> '
                + ' <tr> '
                + ' <td style="text-align: center;"> '
                + ' <table align="center" cellpadding="0" cellspacing="0" id="body" '
                + ' style="background-color: #fff; width: 100%; max-width: 680px; height: 100%;"> '
                + ' <tbody> '
                + ' <tr> '
                + ' <td> '
                + ' <table align="center" cellpadding="0" cellspacing="0" class="page-center" '
                + ' style="text-align: left; padding-bottom: 88px; width: 100%; padding-left: 120px; padding-right: 120px;"> '
                + ' <tbody> '
                + ' <tr> '
                + ' <td style="padding-top: 24px;"> '
                + ' <img src="cid:logo" '
                + ' style="width: 56px;"> '
                + ' </td> '
                + ' </tr> '
                + ' <tr> '
                + ' <td colspan="2" '
                + ' style="padding-top: 72px; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #000000; font-family: \'Postmates Std\', \'Helvetica\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif; font-size: 48px; font-smoothing: always; font-style: normal; font-weight: 600; letter-spacing: -2.6px; line-height: 52px; mso-line-height-rule: exactly; text-decoration: none;"> '
                + ' Recupere sua senha</td> '
                + ' </tr> '
                + '  <tr> '
                + ' <td style="padding-top: 48px; padding-bottom: 48px;"> '
                + ' <table cellpadding="0" cellspacing="0" style="width: 100%"> '
                + ' <tbody> '
                + ' <tr> '
                + ' <td '
                + ' style="width: 100%; height: 1px; max-height: 1px; background-color: #d9dbe0; opacity: 0.81"> '
                + '  </td> '
                + ' </tr> '
                + '  </tbody> '
                + ' </table> '
                + ' </td> '
                + ' </tr> '
                + ' <tr> '
                + ' <td '
                + ' style="-ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #9095a2; font-family: \'Postmates Std\', \'Helvetica\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif; font-size: 16px; font-smoothing: always; font-style: normal; font-weight: 400; letter-spacing: -0.18px; line-height: 24px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 100%;"> '
                + ' Você está recebendo esse e-mail porque houve uma solicitação de recuperar '
                + ' senha em sua conta da RainTI no SRC-e. '
                + ' </td> '
                + ' </tr> '
                + ' <tr> '
                + ' <td '
                + ' style="padding-top: 24px; -ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #9095a2; font-family: \'Postmates Std\', \'Helvetica\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif; font-size: 16px; font-smoothing: always; font-style: normal; font-weight: 400; letter-spacing: -0.18px; line-height: 24px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 100%;"> '
                + ' Por favor toque no botão abaixo e cadastre uma nova senha. '
                + ' </td> '
                + ' </tr> '
                + ' <tr> '
                + ' <td> '
                + ' <a data-click-track-id="37" href="http://localhost:4200/recuperar-senha-reset" '
                + ' style="margin-top: 36px; -ms-text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; color: #ffffff; font-family: \'Postmates Std\', \'Helvetica\', -apple-system, BlinkMacSystemFont, \'Segoe UI\', \'Roboto\', \'Oxygen\', \'Ubuntu\', \'Cantarell\', \'Fira Sans\', \'Droid Sans\', \'Helvetica Neue\', sans-serif; font-size: 12px; font-smoothing: always; font-style: normal; font-weight: 600; letter-spacing: 0.7px; line-height: 48px; mso-line-height-rule: exactly; text-decoration: none; vertical-align: top; width: 220px; background-color: #0090D5; border-radius: 5px; display: block; text-align: center; text-transform: uppercase" '
                + ' target="_blank"> '
                + ' Recuperar senha '
                + ' </a> '
                + ' </td> '
                + ' </tr> '
                + '  </tbody> '
                + '  </table> '
                + ' </td> '
                + '  </tr> '
                + ' </tbody> '
                + ' </table> '
                + ' </td> '
                + ' </tr> '
                + '         </tbody> '
                + '     </table> '
                + ' </body> '
        };
        console.log(emailData);
        this._auth.sendEmail(emailData)
            .subscribe(res => {
            console.log(res);
        }, error => console.log(error));
    }
};
PasswordRecoverComponent.ctorParameters = () => [
    { type: _system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PasswordRecoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-recover',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-recover.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/password-recover/password-recover.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-recover.component.css */ "./src/app/system-access/password-recover/password-recover.component.css")).default]
    })
], PasswordRecoverComponent);



/***/ }),

/***/ "./src/app/system-access/password-reset/password-reset.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/system-access/password-reset/password-reset.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N5c3RlbS1hY2Nlc3MvcGFzc3dvcmQtcmVzZXQvcGFzc3dvcmQtcmVzZXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/system-access/password-reset/password-reset.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/system-access/password-reset/password-reset.component.ts ***!
  \**************************************************************************/
/*! exports provided: PasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordResetComponent", function() { return PasswordResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../system-access-services/auth.service */ "./src/app/system-access/system-access-services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let PasswordResetComponent = class PasswordResetComponent {
    constructor(_auth, _router, _location, _route) {
        this._auth = _auth;
        this._router = _router;
        this._location = _location;
        this._route = _route;
        //const word = (<any>jsonData).name;  
        this.resetUserData = {
            userId: '',
            resetCode: '',
            password: '',
            confirmedPassword: '',
            resetCode1: '',
            resetCode2: '',
            resetCode3: '',
            resetCode4: '',
            resetCode5: '',
            resetCode6: '',
        };
    }
    ngOnInit() {
        this._route.paramMap.subscribe(params => {
            this.resetUserData.userId = params.get('id');
        });
    }
    resetUser() {
        this.resetUserData.resetCode = this.resetUserData.resetCode1
            + this.resetUserData.resetCode2
            + this.resetUserData.resetCode3
            + this.resetUserData.resetCode4
            + this.resetUserData.resetCode5
            + this.resetUserData.resetCode6;
        console.log(this.resetUserData);
        this._auth.resetUser(this.resetUserData)
            .subscribe(res => {
            console.log(res);
            this._router.navigate(['/login']);
        }, error => console.log(error));
    }
    backToEmailSender() {
        this._location.back();
    }
};
PasswordResetComponent.ctorParameters = () => [
    { type: _system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PasswordResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-password-reset',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./password-reset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/system-access/password-reset/password-reset.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./password-reset.component.css */ "./src/app/system-access/password-reset/password-reset.component.css")).default]
    })
], PasswordResetComponent);



/***/ }),

/***/ "./src/app/system-access/system-access-services/auth.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/system-access/system-access-services/auth.service.ts ***!
  \**********************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AuthService = class AuthService {
    constructor(http, _router) {
        this.http = http;
        this._router = _router;
        this._appServerConfig = __webpack_require__(/*! ../../../assets/configs/config-app-server.json */ "./src/assets/configs/config-app-server.json");
        this._registerUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/register-user/register";
        this._loginUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/login/access";
        this._recoverPasswordUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/recover-password/recover";
        this._resetPasswordUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/reset-password/reset";
        this._sendEmailUrl = "http://" + this._appServerConfig.host + ":" + this._appServerConfig.port + "/api/common/send-email";
    }
    registerUser(user) {
        return this.http.post(this._registerUrl, user);
    }
    resetUser(user) {
        return this.http.post(this._resetPasswordUrl, user);
    }
    loginUser(user) {
        return this.http.post(this._loginUrl, user)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    errorHandler(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(error);
    }
    loggedIn() {
        return !!sessionStorage.getItem('token');
    }
    logoutUser() {
        sessionStorage.removeItem('token');
        this._router.navigate(['/login']);
    }
    getToken() {
        return sessionStorage.getItem('token');
    }
    recoverPassword(userData) {
        return this.http.post(this._recoverPasswordUrl, userData);
    }
    sendEmail(user) {
        return this.http.post(this._sendEmailUrl, user);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _system_access_system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-access/system-access-services/auth.service */ "./src/app/system-access/system-access-services/auth.service.ts");



let TokenInterceptorService = class TokenInterceptorService {
    constructor(injector) {
        this.injector = injector;
    }
    intercept(req, next) {
        let authService = this.injector.get(_system_access_system_access_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]);
        let tokenizedReq = req.clone({
            setHeaders: {
                Authorization: `Bearer ${authService.getToken()}`
            }
        });
        return next.handle(tokenizedReq);
    }
};
TokenInterceptorService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptorService);



/***/ }),

/***/ "./src/assets/configs/config-app-server.json":
/*!***************************************************!*\
  !*** ./src/assets/configs/config-app-server.json ***!
  \***************************************************/
/*! exports provided: host, port, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"host\":\"src-e.poc.rainti.com.br\",\"port\":\"3001\"}");

/***/ }),

/***/ "./src/assets/configs/config-email-noreply.json":
/*!******************************************************!*\
  !*** ./src/assets/configs/config-email-noreply.json ***!
  \******************************************************/
/*! exports provided: emailFrom, password, userName, host, port, secure, requireTLS, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"emailFrom\":\"no-reply@rainti.com.br\",\"password\":\"nr@dev@2020\",\"userName\":\"no-reply\",\"host\":\"smtp.office365.com\",\"port\":587,\"secure\":false,\"requireTLS\":true}");

/***/ }),

/***/ "./src/custom/confirm-equal-validator.ts":
/*!***********************************************!*\
  !*** ./src/custom/confirm-equal-validator.ts ***!
  \***********************************************/
/*! exports provided: ConfirmEqualValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmEqualValidator", function() { return ConfirmEqualValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var ConfirmEqualValidator_1;



let ConfirmEqualValidator = ConfirmEqualValidator_1 = class ConfirmEqualValidator {
    validate(control) {
        const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ConfirmEqualValidator.prototype, "appConfirmEqualValidator", void 0);
ConfirmEqualValidator = ConfirmEqualValidator_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"])({
        selector: '[appConfirmEqualValidator]',
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"],
                useExisting: ConfirmEqualValidator_1,
                multi: true
            }]
    })
], ConfirmEqualValidator);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\DEV\src-rainti\Web Server\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map