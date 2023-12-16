declare namespace API {
  type User = {
    id?: string;
    stytch_user_id?: string;
    email?: string;
    first_name?: string;
    middle_name?: string;
    last_name?: string;
    avatar?: string;
    role?: string;
  };

  type OpenAIChatUsingPostBody = {
    message: string;
  };

  type Documents = {
    file_name: string;
    download_link: string;
  };

  type RelevantMetadata = {
    download_link: string;
    pageNumber: number;
    pageContent: string;
  };

  type Message = {
    message: string;
    sender: 'ChatGPT' | 'user';
    metadata: (RelevantWebpageMetadata | RelevantFileMetadata)[] | null;
    contentEditable: boolean;
  };

  type RelevantWebpageMetadata = {
    document_type: 'webpage';
    title: string;
    page_content: string;
    source_url: string;
  };

  type RelevantFileMetadata = {
    document_type: 'file';
    title: string;
    download_link: string;
    page_content: string;
    page_number: number;
  };

  type SubscriptionCheckoutItem = {
    price_id: string;
    quantity: number;
  };

  type CheckoutSessionBody = {
    _id: string;
    session_id: string;
  };

  type UserSubscriptionSessionResponse = {
    _id: string;
    user_id: string;
    session_id: string;
  };

  type WebCrawlerBody = {
    websiteName: string;
    startUrls: string[];
    includeUrls: string[][];
    titleCSS: string;
    contentCSS: string;
    maxRequestsPerCrawl?: number;
    maxDepth: number;
  };
}
