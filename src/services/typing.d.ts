declare namespace API {
  type User = {
    id: string;
    stytch_user_id: string;
    email: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    role: string;
  };

  type OpenAIChatUsingPostBody = {
    message: string;
  };

  type Documents = {
    file_name: string;
    download_link: string;
  };

  type User = {
    id: string;
    stytch_user_id: string;
    email: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    role: string;
  };

  type RelevantMetadata = {
    download_link: string;
    pageNumber: number;
    pageContent: string;
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
}
