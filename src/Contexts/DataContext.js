import { createContext, useContext, useEffect, useReducer } from "react";
import { dataInitialState, dataReducer } from "../Reducers/DataReducer";
import { banners, cards, sections } from "../Data/Data";
export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, dataInitialState)

  useEffect(() => {
    dataDispatch({ type: "INITIALIZE_DATA", payload: { bannersData: banners, sectionsData: sections, cardsData: cards } })
  }, []);
  return (
    <DataContext.Provider value={{ dataState }}>{children}</DataContext.Provider>
  )
}

export const UseData = () => useContext(DataContext)