import React, { createContext, useState } from 'react';

type DefaultContextProviderProps = {
  children: React.ReactNode;
};

type DefaultContextType = {
  successDescription: string;
  setSuccessDescription: React.Dispatch<React.SetStateAction<string>>;
  errorDescription: string;
  setErrorDescription: React.Dispatch<React.SetStateAction<string>>;
  fetchLoading: boolean;
  setFetchLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const DefaultContext = createContext<DefaultContextType>({
  successDescription: '',
  setSuccessDescription: () => {},
  errorDescription: '',
  setErrorDescription: () => {},
  fetchLoading: false,
  setFetchLoading: () => {},
});

function DefaultProvider({ children }: DefaultContextProviderProps) {
  const [successDescription, setSuccessDescription] = useState<string>(''); // Success message to display in the alert
  const [errorDescription, setErrorDescription] = useState<string>(''); // Error message to display in the alert
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);

  return (
    <DefaultContext.Provider
      value={{
        successDescription,
        setSuccessDescription,
        errorDescription,
        setErrorDescription,
        fetchLoading,
        setFetchLoading,
      }}
    >
      {children}
    </DefaultContext.Provider>
  );
}

export { DefaultProvider, DefaultContext };
