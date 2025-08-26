import { StoreProvider } from './StoreProvider';

interface IProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return <StoreProvider>{children}</StoreProvider>;
};

export { Providers as StoreProvider };

export default Providers;
