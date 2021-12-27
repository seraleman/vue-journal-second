import state from './state'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'

const journalModule = {
	namespaced: true,
	actions, //Acciones que pueden ser aíncronas que pueden llamar una mutation
	getters, //Traer información del state
	mutations, //Son síncronas y modifican el state
	state, // Es reactivo
}

export default journalModule
