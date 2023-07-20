import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/provider';
import { extendTheme } from '@chakra-ui/theme-utils';

const theme = extendTheme({ styles: { global: () => ({ body: { bg: "#1f1f1f" } }) } });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);