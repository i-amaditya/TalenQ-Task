export const dataInitialState = {
  bannersData: [],
  sectionsData: [],
  cardsData: [],
}

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "INITIALIZE_DATA": return {
      ...state, bannersData: payload.bannersData, sectionsData: payload.sectionsData, cardsData: payload.cardsData
    }
    default: return state;
  }
}
