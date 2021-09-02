import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        titleKey: [
            'COUNTRY', 'TOTAL CASES', 'TOTAL DEATHS', 'FIRST DOSE', 'SECOND DOSE', 'TOTAL DOSES'
        ],
        countries: [
            "Brazil", "United States", "Spanish", "Portugal"
        ],
        country: 'Brazil',
        population: '200000000',
        totalCases: '20776870',
        todayCases: '24589',
        totalDeaths: '580413',
        todayDeaths: '939',
        firstDose: '134521410',
        firstDosePercentage: '62.86',
        secondDose: '61416222',
        secondDosePercentage: '28.7',
        totalDoses: '191502128',
        todayDoses: '2441116'
    }
})

export default store