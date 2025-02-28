import { QueryClient, QueryClientProvider } from "react-query";
import { LandingPage } from "./Components/Landing Page/LandingPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LandingPage />
    </QueryClientProvider>
  );
}

export default App;
