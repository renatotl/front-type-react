import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./assets/styles/theme";
import Router from "./router";


const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
     <BrowserRouter>
        <QueryClientProvider client={QueryClient}>
          <Router />
        </QueryClientProvider>
     </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;


// função
// const userGreeting(n: string): string =>{
// return `Olá, ${n}`
//}


// função
// function userGreeting(n: string): string {
// return `Olá, ${n}`
//}