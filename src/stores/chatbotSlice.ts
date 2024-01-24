import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatbotState {
  page: number;
  document: string;
  searchText: string;
  documents: API.Documents[];
  messages: API.Message[];
  relevantDialogContent:
    | (API.RelevantWebpageMetadata | API.RelevantFileMetadata)[]
    | null;
}

const initialState: ChatbotState = {
  page: 1,
  document: '',
  searchText: '',
  documents: [],
  messages: [],
  relevantDialogContent: [],
};

export const ChatbotSlice = createSlice({
  name: 'chatbot',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setDocument: (state, action: PayloadAction<string>) => {
      state.document = action.payload;
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      state.searchText = action.payload;
    },
    setDocuments: (state, action: PayloadAction<API.Documents[]>) => {
      state.documents = action.payload;
    },
    setMessages: (state, action: PayloadAction<API.Message>) => {
      state.messages = [...state.messages, action.payload];
    },
    updateLastMessage: (state, action: PayloadAction<API.Message>) => {
      state.messages[state.messages.length - 1].message =
        state.messages[state.messages.length - 1].message + action.payload;
    },
    updateLastMessageMetadata: (
      state,
      action: PayloadAction<
        (API.RelevantWebpageMetadata | API.RelevantFileMetadata)[] | null
      >
    ) => {
      state.messages[state.messages.length - 1].metadata = action.payload;
    },
    removeLastMessage: (state) => {
      state.messages.pop();
    },
    setRelevantDialogContent: (
      state,
      action: PayloadAction<
        (API.RelevantWebpageMetadata | API.RelevantFileMetadata)[] | null
      >
    ) => {
      state.relevantDialogContent = action.payload;
    },
    onClickSearch: (
      state,
      action: PayloadAction<{
        pageNumber: number;
        pageTextHighlight: string;
      }>
    ) => {
      state.page = action.payload.pageNumber;
      state.searchText = action.payload.pageTextHighlight;
    },
  },
});

export const {
  setPage,
  setDocument,
  setSearchText,
  setDocuments,
  setMessages,
  updateLastMessage,
  updateLastMessageMetadata,
  setRelevantDialogContent,
  onClickSearch,
  removeLastMessage,
} = ChatbotSlice.actions;

export default ChatbotSlice.reducer;
