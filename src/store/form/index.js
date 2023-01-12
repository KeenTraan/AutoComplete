const MultiStepForm = {
    state: {
        firstForm: [],
        secondForm: [],
        thirdForm: []
    },
    getters: {
        getFirstForm: (state) => state.firstForm,
        getSecondFrom: (state) => state.secondForm,
        getThirdForm: (state) => state.thirdForm
    }
}
export default MultiStepForm;