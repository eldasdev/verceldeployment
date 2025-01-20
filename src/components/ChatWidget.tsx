import { useWeavy, WyChat } from "@weavy/uikit-react";

export function ChatWidget() {
  useWeavy({
    url: "https://a8029979fc5448909dee6f434623cccc.weavy.io",
    tokenFactory: async () => "USER_ACCESS_TOKEN"
  });
  
  const uid = "weavy-chat";
  return <WyChat uid={uid}/>;
}