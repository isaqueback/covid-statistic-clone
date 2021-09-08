import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        titleKey: [
            'COUNTRY', 'TOTAL CASES', 'TOTAL DEATHS', 'FIRST DOSE', 'SECOND DOSE', 'TOTAL DOSES'
        ],
        update: '',
        countriesName: [],
        countriesAcronym: [],
        country: '',
        population: '',
        totalCases: '',
        todayCases: '',
        totalDeaths: '',
        todayDeaths: '',
        firstDose: '',
        firstDosePercentage: '',
        secondDose: '',
        secondDosePercentage: '',
        totalDoses: '',
        todayDoses: ''
    },
    getters: {
        
    }
})

export default store