import NutritionMeter from "./components/NutritionMeter";
import { GlobalProvider } from "./context/GlobalState";


export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <GlobalProvider>
        <NutritionMeter />
      </GlobalProvider>
    </div>
  )
}