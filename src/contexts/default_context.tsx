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
  contentLoading: boolean;
  setContentLoading: React.Dispatch<React.SetStateAction<boolean>>;
  contentLoadingTitle: string;
  setContentLoadingTitle: React.Dispatch<React.SetStateAction<string>>;
};

const DefaultContext = createContext<DefaultContextType>({
  successDescription: '',
  setSuccessDescription: () => {},
  errorDescription: '',
  setErrorDescription: () => {},
  fetchLoading: false,
  setFetchLoading: () => {},
  contentLoading: false,
  setContentLoading: () => {},
  contentLoadingTitle: '',
  setContentLoadingTitle: () => {},
});

function DefaultProvider({ children }: DefaultContextProviderProps) {
  const [successDescription, setSuccessDescription] = useState<string>(''); // Success message to display in the alert
  const [errorDescription, setErrorDescription] = useState<string>(''); // Error message to display in the alert
  const [fetchLoading, setFetchLoading] = useState<boolean>(false);
  const [contentLoading, setContentLoading] = useState<boolean>(false);
  const [contentLoadingTitle, setContentLoadingTitle] = useState<string>('');

  return (
    <DefaultContext.Provider
      value={{
        successDescription,
        setSuccessDescription,
        errorDescription,
        setErrorDescription,
        fetchLoading,
        setFetchLoading,
        contentLoading,
        setContentLoading,
        contentLoadingTitle,
        setContentLoadingTitle,
      }}
    >
      {children}
    </DefaultContext.Provider>
  );
}

export { DefaultProvider, DefaultContext };
